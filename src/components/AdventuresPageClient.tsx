'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence, useSpring, useTransform } from 'framer-motion';
import AdventuresGrid from '@/components/AdventuresGrid';
import AdventuresMap from '@/components/AdventuresMap';

// Helper component for animating numbers
function AnimatedCounter({ value }: { value: number }) {
    const spring = useSpring(0, { mass: 0.8, stiffness: 100, damping: 20 });
    const display = useTransform(spring, (current) => Math.round(current).toLocaleString());

    useEffect(() => {
        spring.set(value);
    }, [spring, value]);

    return <motion.span>{display}</motion.span>;
}

function TurnUpTeaserSection() {
  const startDate = new Date('2025-10-05');
  const today = new Date();
  const daysSinceStart = Math.max(0, Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)));
  const streakPercentage = (daysSinceStart / 365) * 100;

  const Stat = ({ title, value, icon, subline, colorClass }: { title: string, value: number, icon: string, subline: string, colorClass: string }) => (
    <motion.div 
      className="flex flex-col items-center justify-center space-y-1"
      whileHover={{ y: -4 }}
    >
      <p className={`text-4xl font-bold ${colorClass}`}>{icon} <AnimatedCounter value={value} /></p>
      <p className="text-sm text-gray-600">{title}</p>
      <p className="text-xs text-gray-400">{subline}</p>
    </motion.div>
  );

  return (
    <motion.section 
      className="my-24 mx-auto max-w-4xl rounded-2xl bg-gradient-to-b from-white/40 to-white/5 backdrop-blur-lg shadow-lg p-8 sm:p-12 text-center border border-white/20 relative hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <h3 className="text-4xl font-serif font-bold mb-2 text-gray-800">#TurnUpEveryDay</h3>
      <p className="text-sm text-gray-500 font-mono mb-6">
        <span className="font-semibold text-gray-700 tracking-wide">Day {daysSinceStart}</span> • Public tracking began Oct 5, 2025
      </p>
      
      <div className="flex flex-wrap justify-center gap-12 mb-8">
        <Stat title="Runs Logged" value={0} icon="🏃" subline="Weekly Mileage: 0 km" colorClass="text-indigo-500" />
        <Stat title="Lifts Logged" value={0} icon="🏋️" subline="Current Focus: Functional Strength & Mobility" colorClass="text-orange-500" />
        <Stat title="Climbs Logged" value={0} icon="🧗" subline="Currently climbing: 6B+ sport, 6A boulder" colorClass="text-emerald-500" />
      </div>

      <div className="space-y-2 mt-4">
        <p className="italic text-gray-600 font-medium">
          "Powered by plants. Because my health will never come from another’s suffering."
        </p>

      </div>

      <div className="w-full bg-gray-200/20 rounded-full h-1.5 mt-8 max-w-md mx-auto">
          <motion.div 
              className="bg-gradient-to-r from-yellow-400 to-orange-500 h-1.5 rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${streakPercentage}%` }}
              transition={{ duration: 2, ease: 'easeOut' }}
              viewport={{ once: true }}
          />
      </div>
    </motion.section>
  );
}

export default function AdventuresPageClient({ adventures }: { adventures: any[] }) {
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');

  return (
    <div>
      {/* --- HERO SECTION --- */}
      <section className="relative py-24 sm:py-32 text-center overflow-hidden bg-gray-100">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 via-transparent to-purple-100 opacity-50"></div>
        <motion.div 
          className="relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight font-serif">
            The World I Ran, Climbed & Wandered.
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            A journal of sweat, summit, and solitude.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setViewMode("grid")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${viewMode === "grid" ? "bg-indigo-600 text-white shadow-lg" : "bg-white/50 text-gray-700 hover:bg-white"}`}
            >
              📖 Story View
            </button>
            <button
              onClick={() => setViewMode("map")}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${viewMode === "map" ? "bg-indigo-600 text-white shadow-lg" : "bg-white/50 text-gray-700 hover:bg-white"}`}
            >
              🌍 Map View
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- VIEW RENDER --- */}
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {viewMode === 'grid' ? (
            <AdventuresGrid adventures={adventures} />
          ) : (
            <div className="py-20 lg:py-24 bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AdventuresMap adventures={adventures} />
                </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* --- NEW TEASER SECTION --- */}
      <TurnUpTeaserSection />
    </div>
  );
}
