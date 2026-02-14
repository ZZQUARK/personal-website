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
      <div className="max-w-[680px] mx-auto px-6 py-24 sm:py-32 flex flex-col items-start text-left">
        
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full flex flex-col items-start gap-12"
        >
          {/* HERO */}
          <motion.div variants={itemVariants} className="w-full flex flex-col items-start gap-8">
            <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden shadow-sm">
              <Image 
                src="/Hero Image.JPG" 
                alt="Akshit and James"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-4">
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
          <motion.nav variants={itemVariants} className="flex flex-col gap-4 text-xl sm:text-2xl font-serif items-start w-full">
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

          {/* NEWSLETTER (Beehiiv Embed) */}
          <motion.div variants={itemVariants} className="w-full pt-12 border-t border-neutral-200">
            <h3 className="text-lg font-serif font-bold mb-4">Thoughts in Knots</h3>
            <p className="text-neutral-600 mb-6 text-lg font-light">
              A weekly letter on entropy, fiction, and suffering.
            </p>
            <div className="w-full overflow-hidden">
              <iframe 
                src="https://subscribe-forms.beehiiv.com/8b824b9a-ba5f-426e-a4a2-f68b7d1af86c" 
                data-test-id="beehiiv-embed" 
                height="339" 
                frameBorder="0" 
                scrolling="no" 
                style={{ width: '100%', borderRadius: '0px', backgroundColor: 'transparent', margin: '0' }}
              ></iframe>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}