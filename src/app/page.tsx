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
      
      {/* SECTION 1: THE IMAGE (Full Width, Cinematic) */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="w-full h-[85vh] relative"
      >
        <Image 
          src="/Hero Image.JPG" 
          alt="Akshit and James"
          fill
          className="object-cover object-top"
          priority
        />
      </motion.div>

      {/* SECTION 2: THE LETTER (Intimate, Centered) */}
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-24 flex flex-col items-start text-left">
        
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="w-full flex flex-col items-start gap-12"
        >
          {/* HEADER */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h1 className="text-6xl sm:text-7xl font-serif font-bold tracking-tight text-neutral-900 leading-[0.9]">
              Hi, I'm Akshit.
            </h1>
            <p className="text-2xl sm:text-3xl text-neutral-600 font-light leading-snug">
              I build systems, write thrillers, and run far.
            </p>
          </motion.div>

          {/* THE MANIFESTO */}
          <motion.div variants={itemVariants} className="max-w-xl text-lg sm:text-xl leading-relaxed text-neutral-800 font-serif">
            <p>
              I thrive in the mess. By day, I <Highlighter>build rigorous digital systems</Highlighter> to create order out of chaos. By night, I <Highlighter>write thriller novels</Highlighter> to celebrate it. Somewhere in between, I <Highlighter>run ultra-marathons</Highlighter> to feel it.
            </p>
          </motion.div>

          {/* NAVIGATION */}
          <motion.nav variants={itemVariants} className="flex flex-col gap-5 text-xl sm:text-2xl font-serif items-start w-full">
            <Link href="/work" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300 flex items-center gap-2 group">
              Explore my Product Work <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">↗</span>
            </Link>
            <Link href="/writing" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300 flex items-center gap-2 group">
              Read my Thriller & Essays <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">↗</span>
            </Link>
            <Link href="/adventures" className="hover:underline underline-offset-4 decoration-neutral-300 hover:decoration-neutral-900 transition-all duration-300 flex items-center gap-2 group">
              View my Adventures <span className="text-neutral-400 group-hover:text-neutral-900 transition-colors">↗</span>
            </Link>
          </motion.nav>

          {/* BEEHIIV INTEGRATION */}
          <motion.div variants={itemVariants} className="w-full mt-16 pt-12 border-t border-neutral-200 mb-20">
             <h3 className="text-2xl font-serif font-bold mb-4">Thoughts in Knots</h3>
             <p className="text-neutral-600 mb-6 text-lg">A weekly letter on entropy, fiction, and suffering.</p>
             <iframe 
               src="https://subscribe-forms.beehiiv.com/8b824b9a-ba5f-426e-a4a2-f68b7d1af86c" 
               data-test-id="beehiiv-embed" 
               height="450" 
               frameBorder="0" 
               scrolling="no" 
               style={{ width: '100%', borderRadius: '0px', backgroundColor: 'transparent', margin: '0', height: '450px' }}
             ></iframe>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}