import React from 'react';
import workData from '../../../data/work.json';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Work | Akshit Kumar',
  description: 'Product Management portfolio and case studies.',
};

export default function WorkPage() {
  const { hero, activeProject, ventures, selectedWorks, cta } = workData;

  return (
    <main className="min-h-screen bg-white text-black font-sans selection:bg-gray-100">
      <div className="max-w-2xl mx-auto px-6 py-20 lg:py-28 space-y-20">
        
        {/* 1. Hero */}
        <section className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight">
            {hero.headline}
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg">
            {hero.subhead}
          </p>
        </section>

        {/* 2. Active Project */}
        <section>
          <div className="group relative border border-gray-200 rounded-xl p-6 sm:p-8 hover:border-gray-300 transition-colors">
            <div className="absolute top-6 right-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                {activeProject.status}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold">{activeProject.title}</h2>
                <p className="text-sm font-medium text-gray-500 mt-1">{activeProject.role}</p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                {activeProject.description}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Ventures */}
        <section>
           <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Ventures</h3>
          {ventures.map((venture, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 sm:p-8 border border-transparent">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold">{venture.title}</h3>
                <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs font-semibold rounded-md uppercase">
                  {venture.status}
                </span>
              </div>
              <p className="text-gray-900 font-medium italic mb-2">{venture.tagline}</p>
              <p className="text-gray-600 text-sm leading-relaxed">{venture.description}</p>
            </div>
          ))}
        </section>

        {/* 4. Selected Works */}
        <section>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">Selected Works</h3>
          <div className="space-y-8">
            {selectedWorks.map((work, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-2 sm:gap-4 sm:items-baseline border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                <div className="sm:w-1/3 shrink-0">
                  <h4 className="font-bold text-lg">{work.company}</h4>
                  <p className="text-sm text-gray-400 italic mt-0.5">{work.tagline}</p>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed sm:w-2/3">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Footer / CTA */}
        <section className="pt-8 mt-12 border-t border-gray-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link 
              href={cta.freeCallUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-50 transition-colors"
            >
              Intro Chat (Free)
            </Link>
            <Link 
              href={cta.paidCallUrl}
              target="_blank"
              className="flex items-center justify-center gap-2 px-6 py-4 rounded-lg bg-gray-900 text-white font-bold hover:bg-gray-800 transition-colors"
            >
              Strategy Audit ($100)
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <p className="text-center text-xs text-gray-400 mt-4">
            {cta.cryptoLabel}
          </p>
        </section>

      </div>
    </main>
  );
}