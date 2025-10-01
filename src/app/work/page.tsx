'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FileText, Calendar, Mail } from 'lucide-react';
import React from 'react';

// --- CSS for Shine Effect ---
const ShineEffectCSS = () => (
  <style jsx global>{`
    .shine-effect {
      position: relative;
      overflow: hidden;
    }
    .shine-effect::before {
      content: '';
      position: absolute;
      top: 0;
      left: -150%;
      width: 50%;
      height: 100%;
      background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.5), transparent);
      transform: skewX(-25deg);
      transition: left 0.75s ease-in-out;
    }
    .shine-effect:hover::before {
      left: 150%;
    }
  `}</style>
);

// --- Background Blob Component ---
const GradientBlob = ({ className }: { className: string }) => (
  <div className={`absolute blur-3xl rounded-full opacity-30 -z-10 animate-pulse ${className}`} />
);

// --- HERO SECTION with Updated Copy & Badges ---
function HeroSection() {
  const skills = ["Product Management", "Leadership", "Startup Building", "Storytelling", "Web3 & Blockchain"];
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-50 overflow-hidden">
      <GradientBlob className="top-[-10rem] left-[-20rem] w-[40rem] h-[40rem] bg-purple-300" />
      <GradientBlob className="bottom-[-15rem] right-[-15rem] w-[35rem] h-[35rem] bg-blue-300" />
      
      <div className="absolute inset-0">
        <Image src="/work hero image.jpeg" alt="Work Hero" fill className="object-cover opacity-20" priority />
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      </div>

      <div className="relative z-10 text-center px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}
        >
          From messy MVPs to scaled systems, I build products with clarity, creativity, and care.
        </motion.h1>
        <motion.p 
          className="mt-4 text-2xl sm:text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-indigo-600"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Simply put, I build like I give a damn.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {skills.map(skill => (
            <div key={skill} className="shine-effect px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-700 to-gray-900 rounded-full cursor-pointer">
              {skill}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// --- POLISHED PROFESSIONAL LINKS SECTION ---
const professionalLinks = [
  { title: 'Resume', href: 'https://www.toptal.com/resume/akshit-kumar', icon: FileText, gradient: 'from-sky-400 to-blue-500' },
  { title: 'Schedule a Meeting', href: 'https://calendar.app.google/SBbw8zx79xqz3G8o8', icon: Calendar, gradient: 'from-purple-400 to-indigo-500' },
  { title: 'Email Me', href: 'mailto:ak@akshitkumar.com', icon: Mail, gradient: 'from-orange-400 to-red-500' },
];

function ProfessionalLinksSection() {
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' } }) };

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <GradientBlob className="top-1/2 left-[-25rem] -translate-y-1/2 w-[50rem] h-[50rem] bg-blue-200/50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Professional Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalLinks.map((link, i) => (
            <motion.div key={link.title} custom={i} variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" className="block h-full group">
                <motion.div 
                  className="h-full p-8 bg-white/20 backdrop-blur-md rounded-xl shadow-md border border-gray-200/50 flex flex-col justify-center items-center text-center transition-all duration-300 group-hover:border-purple-400/50"
                  whileHover={{ y: -8, scale: 1.05, boxShadow: "0 20px 35px rgba(79, 70, 229, 0.1)" }}
                >
                  <div className={`relative p-4 rounded-full bg-gradient-to-br ${link.gradient} mb-5 shadow-inner`}>
                     <div className="shine-effect w-8 h-8">
                        <link.icon className="w-full h-full text-white" />
                     </div>
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{link.title}</span>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- UPDATED CURRENTLY WORKING ON SECTION ---
function CurrentlyWorkingOnSection() {
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };
  const tags = ["Web3", "Blockchain", "Content", "Strategy", "Product"];

  return (
    <section className="relative py-20 lg:py-24 bg-gray-50 overflow-hidden">
      <GradientBlob className="top-1/2 right-[-30rem] -translate-y-1/2 w-[60rem] h-[60rem] bg-pink-300/50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Currently Working On</h2>
        <motion.div className="max-w-3xl mx-auto" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.div
            className="p-8 bg-white/30 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200/50 bg-gradient-to-br from-white/30 to-white/10"
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 35px rgba(0,0,0,0.08)" }}
          >
            <div className="p-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 mb-6 shadow-inner">
                <Image src="/rcs logo.png" alt="Right Click Save Logo" width={1280} height={400} className="rounded-lg" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Right Click Save</h3>
            <p className="text-gray-600 mb-5 leading-relaxed">At Right Click Save, I help shape the future of digital culture. My work spans Web3 strategy, editorial storytelling, and product experiments at the intersection of art and blockchain. From thought pieces to community-driven projects, I build bridges between creators, collectors, and new technologies.</p>
            <div className="flex flex-wrap gap-3">
              {tags.map(tag => (
                <span key={tag} className="shine-effect px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// --- POLISHED SIDE PROJECTS SECTION ---
function SideProjectsSection() {
  const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } } };

  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden">
      <GradientBlob className="bottom-[-10rem] left-[-20rem] w-[50rem] h-[50rem] bg-orange-300/50" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Side Projects</h2>
        <motion.div className="max-w-2xl mx-auto" variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
          <motion.div 
            className="rounded-xl shadow-2xl overflow-hidden group relative border border-gray-200/50"
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-10" />
            <div className="absolute top-4 left-4 z-20">
              <span className="px-3 py-1 bg-yellow-400 text-black rounded-full text-xs font-bold uppercase tracking-wider">Coming Soon</span>
            </div>
            <Image src="/writeclique-teaser.png" alt="WriteClique Teaser" width={1024} height={576} className="w-full h-auto transition-transform duration-500 group-hover:scale-105" />
          </motion.div>
          <div className="text-center mt-8">
            <h3 className="text-2xl font-bold text-gray-900">WriteClique</h3>
            <p className="mt-2 text-gray-600 max-w-lg mx-auto">WriteClique is your AI writing partner — from first draft to flawless fiction. Launching soon.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function WorkPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <ShineEffectCSS />
      <HeroSection />
      <ProfessionalLinksSection />
      <CurrentlyWorkingOnSection />
      <SideProjectsSection />
    </main>
  );
}