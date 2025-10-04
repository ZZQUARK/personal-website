'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { motion, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Papa from 'papaparse';
import { Run, Dumbbell, Mountain, Flame } from 'lucide-react';

// The actual Google Sheet URL you provided
const SHEET_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTnzz-DiESYKVzyGfCJSXHdxyrG043S2EYrYg9Y94jR__rt044biQvxKAsxVJPqx8WPN7m99EVUG0i/pub?output=csv";

// --- TYPE DEFINITION ---
type Activity = {
    date: string;
    run_km: number;
    lift: boolean;
    climb: boolean;
    notes: string;
};

// --- HELPER COMPONENTS ---
function AnimatedCounter({ value }: { value: number }) {
    const spring = useSpring(0, { mass: 0.8, stiffness: 75, damping: 15 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}

const StatCard = ({ icon: Icon, label, value }: { icon: React.ElementType, label: string, value: number }) => (
    <motion.div 
        className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <Icon className="w-8 h-8 mx-auto text-indigo-400 mb-4" />
        <p className="text-4xl font-bold"><AnimatedCounter value={value} /></p>
        <p className="text-gray-400 mt-1">{label}</p>
    </motion.div>
);

// --- VISUALIZATION COMPONENTS ---

function PulseOfDays({ activities }: { activities: Activity[] }) {
    const recentActivities = useMemo(() => activities.slice(-60).reverse(), [activities]);
    const [hoveredActivity, setHoveredActivity] = useState<Activity | null>(null);

    const getColor = (activity: Activity) => {
        const colors = [];
        if (activity.run_km > 0) colors.push('#66a6ff'); // Blue
        if (activity.lift) colors.push('#ffaf66'); // Orange
        if (activity.climb) colors.push('#66ff8c'); // Green
        if (colors.length > 1) return `conic-gradient(from 180deg at 50% 50%, ${colors.join(', ')}`;
        return colors[0] || '#4a5568'; // Gray for no activity
    };

    return (
        <section className="py-16 bg-gray-800/50">
            <h2 className="text-2xl font-bold text-center mb-8">Pulse of Days</h2>
            <div className="w-full overflow-x-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 pb-4">
                <div className="flex flex-row-reverse gap-3 px-6 w-max">
                    {recentActivities.map((activity, i) => (
                        <motion.div 
                            key={i} 
                            className="relative"
                            onMouseEnter={() => setHoveredActivity(activity)}
                            onMouseLeave={() => setHoveredActivity(null)}
                        >
                            <motion.div
                                className="w-8 h-8 rounded-full border-2 border-white/20 shadow-lg"
                                style={{ background: getColor(activity) }}
                                animate={{ scale: [1, 1.05, 1] }}
                                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                            />
                            {hoveredActivity === activity && (
                                <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 bg-gray-900 text-white p-3 rounded-lg shadow-2xl text-xs z-10">
                                    <p className="font-bold">{new Date(activity.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                                    <div className="mt-2 flex flex-col gap-1">
                                        {activity.run_km > 0 && <p>🏃 Run: {activity.run_km} km</p>}
                                        {activity.lift && <p>🏋️ Lift</p>}
                                        {activity.climb && <p>🧗 Climb</p>}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function ConsistencyWall({ activities }: { activities: Activity[] }) {
    const today = new Date();
    const year = today.getFullYear();
    const daysInYear = Array.from({ length: 365 }, (_, i) => {
        const date = new Date(year, 0, i + 1);
        return date.toISOString().split('T')[0];
    });

    const activityMap = useMemo(() => {
        const map = new Map<string, number>();
        activities.forEach(a => {
            const activityCount = (a.run_km > 0 ? 1 : 0) + (a.lift ? 1 : 0) + (a.climb ? 1 : 0);
            map.set(a.date, activityCount);
        });
        return map;
    }, [activities]);

    const firstDayOfYear = new Date(year, 0, 1).getDay(); // 0 = Sunday, 1 = Monday, etc.

    const getColor = (count: number) => {
        if (count >= 3) return 'bg-green-500';
        if (count === 2) return 'bg-green-400';
        if (count === 1) return 'bg-green-300';
        return 'bg-gray-700/50';
    };

    return (
        <section className="py-20 bg-gray-900">
            <h2 className="text-2xl font-bold text-center mb-8">Wall of Consistency</h2>
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-53 grid-rows-7 gap-1.5">
                    {Array.from({ length: firstDayOfYear }).map((_, i) => <div key={`pad-${i}`} />)}
                    {daysInYear.map(day => {
                        const activityCount = activityMap.get(day) || 0;
                        return (
                            <div key={day} className={`w-4 h-4 rounded-sm ${getColor(activityCount)}`} title={`${day}: ${activityCount} activities`}></div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

// --- MAIN CLIENT COMPONENT ---
export default function TurnUpClient() {
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(SHEET_URL);
                const text = await response.text();
                Papa.parse(text, {
                    header: true,
                    skipEmptyLines: true,
                    transform: (value, header) => {
                        if (header === 'run_km') return Number(value) || 0;
                        if (header === 'lift' || header === 'climb') return String(value).toLowerCase() === 'true';
                        return value;
                    },
                    complete: (result) => {
                        setActivities(result.data as Activity[]);
                        setLoading(false);
                    }
                });
            } catch (error) {
                console.error("Failed to fetch or parse sheet data:", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const stats = useMemo(() => {
        if (!activities.length) return { totalRunDays: 0, totalDistance: 0, liftDays: 0, climbDays: 0, turnUpDays: 0 };
        
        const activityDates = new Set<string>();
        let totalRunDays = 0, totalDistance = 0, liftDays = 0, climbDays = 0;

        activities.forEach(a => {
            if (a.run_km > 0 || a.lift || a.climb) activityDates.add(a.date);
            if (a.run_km > 0) totalRunDays++;
            totalDistance += a.run_km;
            if (a.lift) liftDays++;
            if (a.climb) climbDays++;
        });

        return { totalRunDays, totalDistance: Math.round(totalDistance), liftDays, climbDays, turnUpDays: activityDates.size };
    }, [activities]);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center"><p>Loading data from Google Sheet...</p></div>;
    }

    return (
        <div>
            <section className="relative text-center py-24 sm:py-32 lg:py-40 bg-gray-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/30 to-gray-900"></div>
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-serif">#TurnUpEveryDay</h1>
                    <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">Not a log. A living proof of showing up.</p>
                </motion.div>
            </section>

            <PulseOfDays activities={activities} />

            <section className="py-20 bg-gray-900">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <StatCard icon={Run} label="Total Run Days" value={stats.totalRunDays} />
                    <StatCard icon={Dumbbell} label="Lift Days" value={stats.liftDays} />
                    <StatCard icon={Mountain} label="Climb Days" value={stats.climbDays} />
                    <StatCard icon={Flame} label="Total 'Turn Up' Days" value={stats.turnUpDays} />
                </div>
                 <div className="text-center mt-12">
                    <p className="text-5xl font-bold"><AnimatedCounter value={stats.totalDistance} /> km</p>
                    <p className="text-gray-400 mt-2">Total Distance Run</p>
                </div>
            </section>

            <ConsistencyWall activities={activities} />

            <footer className="text-center py-16 text-gray-500 bg-gray-900">
                <p>For the mountains. For the miles. For myself.</p>
            </footer>
        </div>
    );
}