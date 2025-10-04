'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AdventuresGrid from '@/components/AdventuresGrid';
import AdventuresMap from '@/components/AdventuresMap';

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
            // The map itself is wrapped in a container for consistent padding
            <div className="py-20 lg:py-24 bg-gray-800">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AdventuresMap adventures={adventures} />
                </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}