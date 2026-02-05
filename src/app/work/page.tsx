import React from 'react';
import workData from '../../../data/work.json';
import Link from 'next/link';
import { ArrowUpRight, Sparkles, Hammer, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Work | Akshit Kumar',
  description: 'Product Management portfolio and case studies.',
};

export default function WorkPage() {
  const { hero, activeProject, ventures, selectedWorks, cta } = workData;

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32 space-y-24">
        
        {/* 1. Hero Section */}
        <section className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl sm:text-7xl font-serif font-bold tracking-tighter text-neutral-900 leading-[0.9]">
            {hero.headline}
          </h1>
          <p className="text-xl sm:text-2xl text-neutral-500 leading-relaxed max-w-2xl font-light">
            {hero.subhead}
          </p>
        </section>

        {/* 2. Active Project - High Prominence Card */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 flex items-center gap-2">
             <Sparkles className="w-3 h-3" />
             Current Focus
          </h3>
          <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 sm:p-8">
               <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 uppercase tracking-wide">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"/>
                {activeProject.status}
              </span>
            </div>

            <div className="relative z-10 space-y-6 mt-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-neutral-900 tracking-tight group-hover:text-black transition-colors">
                  {activeProject.title}
                </h2>
                <p className="text-lg text-neutral-500 font-medium mt-2">{activeProject.role}</p>
              </div>
              <p className="text-lg text-neutral-700 leading-relaxed max-w-xl">
                {activeProject.description}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Ventures - Builder/Beta Style */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Hammer className="w-3 h-3" />
            Ventures
          </h3>
          {ventures.map((venture, index) => (
            <div key={index} className="border-2 border-dashed border-neutral-300 rounded-2xl p-8 sm:p-10 hover:border-neutral-400 hover:bg-neutral-50/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-neutral-900">{venture.title}</h3>
                <span className="self-start sm:self-auto px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-full uppercase tracking-wider">
                  {venture.status}
                </span>
              </div>
              <p className="text-neutral-500 font-medium italic mb-4 text-lg">{venture.tagline}</p>
              <p className="text-neutral-700 leading-relaxed">{venture.description}</p>
            </div>
          ))}
        </section>

        {/* 4. Selected Works - Grid of Cards */}
        <section className="animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-8">Selected Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedWorks.map((work, index) => (
              <div 
                key={index} 
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-neutral-300 hover:-translate-y-1 transition-all duration-300 ease-out h-full flex flex-col"
              >
                <div className="mb-3">
                  <h4 className="text-lg font-bold text-neutral-900 group-hover:text-black">{work.company}</h4>
                  <p className="text-sm text-neutral-400 italic font-medium mt-0.5">{work.tagline}</p>
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {work.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Footer / CTA - High Contrast */}
        <section className="pt-12 mt-12 border-t border-neutral-100 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href={cta.freeCallUrl}
              target="_blank"
              className="flex-1 flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-neutral-200 text-neutral-900 font-bold hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200"
            >
              Intro Chat (Free)
            </Link>
            <Link 
              href={cta.paidCallUrl}
              target="_blank"
              className="flex-[2] flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-neutral-900 text-white font-bold hover:bg-black hover:shadow-xl transition-all duration-200 group"
            >
              Strategy Audit ($100)
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
          <p className="text-center text-xs font-medium text-neutral-400 mt-6 tracking-wide">
            {cta.cryptoLabel}
          </p>
        </section>

      </div>
    </main>
  );
}