'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.2
      } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const Highlighter = ({ children }: { children: React.ReactNode }) => (
    <span className="relative inline-block px-1">
      <span className="absolute inset-0 bg-yellow-400/80 -skew-y-1 -z-10 rounded-sm" />
      <span className="relative z-10">{children}</span>
    </span>
  );

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-yellow-400 selection:text-black">
      <div className="max-w-[680px] mx-auto px-6 py-24 sm:py-32 flex flex-col items-center text-center">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full flex flex-col items-center gap-16"
        >
          {/* HERO */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <div className="relative w-32 h-32 rounded-full overflow-hidden shadow-sm">
              <Image 
                src="/Circle of life.jpg" 
                alt="Akshit and James"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight text-neutral-900">
                Hi, I'm Akshit.
              </h1>
              <p className="text-xl sm:text-2xl text-neutral-600 font-light">
                I build systems, write thrillers, and run far.
              </p>
            </div>
          </motion.div>

          {/* THE MANIFESTO */}
          <motion.div variants={itemVariants} className="max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-800 font-serif">
            <p>
              I thrive in the mess. By day, I <Highlighter>build rigorous digital systems</Highlighter> to create order out of chaos. By night, I <Highlighter>write thriller novels</Highlighter> to celebrate it. Somewhere in between, I <Highlighter>run ultra-marathons</Highlighter> to feel it.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.nav variants={itemVariants} className="flex flex-col gap-6 text-xl sm:text-2xl font-serif">
            <Link href="/work" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300">
              Explore my Product Work ↗
            </Link>
            <Link href="/writing" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300">
              Read my Thriller & Essays ↗
            </Link>
            <Link href="/adventures" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300">
              View my Adventures ↗
            </Link>
          </motion.nav>

          {/* NEWSLETTER */}
          <motion.div variants={itemVariants} className="w-full max-w-md pt-12 border-t border-neutral-200">
            <h3 className="text-lg font-serif font-bold mb-2">Thoughts in Knots</h3>
            <p className="text-neutral-600 mb-6">
              A weekly letter on entropy, fiction, and suffering.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 bg-transparent border-b border-neutral-300 py-2 focus:outline-none focus:border-neutral-900 transition-colors placeholder:text-neutral-400"
              />
              <button 
                type="submit"
                className="px-6 py-2 bg-neutral-900 text-white font-medium text-sm hover:bg-black transition-colors rounded-sm"
              >
                Subscribe
              </button>
            </form>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}