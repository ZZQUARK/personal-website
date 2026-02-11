'use client';

import React from 'react';
import workData from '../../../data/work.json';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WorkPage() {
  const { hero, whatIDo, activeProject, ventures, selectedWorks, howIOperate, cta } = workData;

  // Reusable component for the bullet list
  const BulletList = ({ items }: { items: string[] }) => (
    <ul className="space-y-3">
      {items.map((item, idx) => (
        <li key={idx} className="relative pl-5 text-neutral-600 text-sm leading-relaxed font-sans">
          <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-neutral-300 rounded-sm"></span>
          {item}
        </li>
      ))}
    </ul>
  );

  // Reusable component for the tech stack with subtle colors
  const TechStack = ({ items }: { items: string[] }) => {
    const colorClasses = [
      "bg-blue-50 text-blue-700 border-blue-100",
      "bg-purple-50 text-purple-700 border-purple-100",
      "bg-emerald-50 text-emerald-700 border-emerald-100",
      "bg-amber-50 text-amber-700 border-amber-100",
      "bg-pink-50 text-pink-700 border-pink-100",
      "bg-indigo-50 text-indigo-700 border-indigo-100",
    ];

    return (
      <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-neutral-100/50">
        {items.map((tech, idx) => {
          const colorClass = colorClasses[idx % colorClasses.length];
          return (
            <span key={idx} className={`px-2 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider rounded border ${colorClass}`}>
              {tech}
            </span>
          );
        })}
      </div>
    );
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] // Ease out cubic
      }
    }
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      <div className="max-w-3xl mx-auto px-6 py-24 lg:py-32 space-y-24">
        
        {/* 1. Hero Section */}
        <motion.section 
          className="space-y-8 pt-4"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="space-y-4">
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-7xl font-serif font-bold tracking-tighter text-neutral-900 leading-[0.9]"
            >
              {hero.headline}
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl text-neutral-500 leading-relaxed max-w-2xl font-light tracking-tight font-sans"
            >
              From messy MVPs to scaled systems — I turn ambiguity into <span className="font-medium text-neutral-900">shipped product.</span>
            </motion.p>
          </div>
          
          {/* DNA Pills */}
          <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
            {hero.dna.map((item, index) => (
              <span key={index} className="inline-flex items-center px-3 py-1.5 rounded-md bg-neutral-100 text-neutral-600 text-xs font-sans font-medium">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* 2. WHAT I DO Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
          <div className="border-t border-neutral-100 mb-8 w-12"></div>
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4 font-sans">
            {whatIDo.label}
          </h3>
          <p className="text-lg text-neutral-800 leading-relaxed whitespace-pre-line font-medium border-l-2 border-neutral-900/10 pl-6 font-sans">
            {whatIDo.content}
          </p>
        </motion.section>

        {/* 3. Active Project - High Prominence Card */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
           <div className="border-t border-neutral-100 mb-8 w-12"></div>
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 font-sans">
             Current Focus
          </h3>
          <div className="bg-white/80 backdrop-blur-sm border border-neutral-200/60 rounded-2xl p-8 sm:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden group">
            {activeProject.status && (
              <div className="absolute top-0 right-0 p-6 sm:p-8">
                 <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-green-50 text-green-700/80 uppercase tracking-wide border border-green-100">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {activeProject.status}
                </span>
              </div>
            )}

            <div className="relative z-10 space-y-6 mt-2">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 tracking-tight">
                  {activeProject.title}
                </h2>
                <p className="text-lg text-neutral-500 font-medium mt-1 font-sans text-sm uppercase tracking-wide">{activeProject.role}</p>
              </div>
              
              <BulletList items={activeProject.bullets} />
              <TechStack items={activeProject.stack} />
            </div>
          </div>
        </motion.section>

        {/* 4. Ventures - Builder/Beta Style */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
           <div className="border-t border-neutral-100 mb-8 w-12"></div>
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-6 font-sans">
            Ventures
          </h3>
          {ventures.map((venture, index) => (
            <div key={index} className="border border-dashed border-neutral-300 rounded-2xl p-8 sm:p-10 hover:border-neutral-400 hover:bg-neutral-50/30 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-neutral-900 tracking-tight font-serif">{venture.title}</h3>
                <div className="flex gap-2 flex-wrap">
                  {venture.badges && venture.badges.map((badge: string, bIdx: number) => (
                    <span key={bIdx} className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-bold rounded-full uppercase tracking-wider font-sans whitespace-nowrap">
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
              <p className="text-neutral-500 font-medium italic mb-6 text-base font-serif">{venture.tagline}</p>
              
              <BulletList items={venture.bullets} />
              <TechStack items={venture.stack} />
            </div>
          ))}
        </motion.section>

        {/* 5. Selected Works - Grid of Cards */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
           <div className="border-t border-neutral-100 mb-8 w-12"></div>
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-8 font-sans">Selected Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {selectedWorks.map((work, index) => (
              <div 
                key={index} 
                className="group bg-white border border-neutral-200 rounded-xl p-8 hover:shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-neutral-300 hover:-translate-y-[2px] transition-all duration-300 ease-out h-full flex flex-col"
              >
                <div className="mb-6">
                  <h4 className="text-xl font-bold text-neutral-900 group-hover:text-black tracking-tight font-serif">{work.company}</h4>
                  <p className="text-xs text-neutral-400 font-medium mt-1 font-sans uppercase tracking-wide">{work.tagline}</p>
                </div>
                
                <div className="flex-grow">
                  <BulletList items={work.bullets} />
                </div>
                
                <TechStack items={work.stack} />
              </div>
            ))}
          </div>
        </motion.section>

        {/* 6. HOW I OPERATE Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
        >
           <div className="border-t border-neutral-100 mb-8 w-12"></div>
          <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-8 font-sans">
            {howIOperate.label}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {howIOperate.items.map((item, idx) => (
               <div key={idx} className="flex items-start gap-3 p-4 border border-neutral-100 rounded-lg bg-neutral-50/30">
                  <div className="mt-2 w-1 h-1 bg-neutral-400 rounded-full flex-shrink-0" />
                  <span className="text-neutral-700 font-medium text-sm leading-relaxed font-sans">{item}</span>
               </div>
             ))}
          </div>
        </motion.section>

        {/* 7. Footer / CTA - High Contrast */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={itemVariants}
          className="pt-24 mt-12 border-t border-neutral-100 space-y-12"
        >
          <h2 className="text-4xl sm:text-5xl font-serif font-bold text-neutral-900 text-center max-w-2xl mx-auto leading-[0.9] tracking-tight">
            {cta.text}
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            <Link 
              href={cta.freeCallUrl}
              target="_blank"
              className="order-2 sm:order-1 flex items-center justify-center gap-2 px-6 py-5 rounded-lg border border-neutral-200 text-neutral-600 font-bold hover:bg-neutral-50 hover:text-neutral-900 hover:border-neutral-300 transition-all duration-200 w-full whitespace-nowrap h-[68px]"
            >
              Intro Chat
            </Link>
            
            <div className="flex flex-col gap-3 w-full order-1 sm:order-2">
               <Link 
                href={cta.paidCallUrl}
                target="_blank"
                className="flex items-center justify-center gap-2 px-6 py-5 rounded-lg bg-neutral-900 text-white font-bold text-lg hover:bg-black hover:shadow-xl transition-all duration-200 group w-full whitespace-nowrap h-[68px]"
              >
                Strategy Audit ($100)
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
              <p className="text-center text-[11px] uppercase tracking-widest font-semibold text-neutral-400 font-sans">
                {cta.primarySubtext}
              </p>
            </div>
          </div>
        </motion.section>

      </div>
    </main>
  );
}