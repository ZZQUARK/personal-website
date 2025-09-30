'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const worlds = [
  {
    id: 'workbench',
    title: 'Work',
    description: 'Where pixels meet purpose. I craft digital experiences that solve real problems and delight users.',
    ctaText: 'View Projects →',
    ctaLink: '/work',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'writing',
    title: 'Writing',
    description: 'Stories come alive here. From thriller novels to compelling content, words are my weapon.',
    ctaText: 'Explore Writing →',
    ctaLink: '/writing',
    gradient: 'from-purple-500 to-pink-600',
  },
  {
    id: 'adventures',
    title: 'Adventures',
    description: 'Mountains, trails, and endless horizons. Where adventure fuels creativity and stories are born.',
    ctaText: 'See Adventures →',
    ctaLink: '/adventures',
    gradient: 'from-orange-500 to-red-600',
  },
]

function DigitalWorkbenchVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/Work Home Screen.png"
          alt="Digital Workbench"
          fill
          className="object-cover rounded-2xl"
        />
        
        {/* Floating UI elements overlay on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {/* Floating design elements */}
          <motion.div
            className="absolute top-4 left-4 w-8 h-6 bg-blue-500/80 rounded backdrop-blur-sm"
            animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-6 right-6 w-6 h-6 bg-purple-500/80 rounded-full backdrop-blur-sm"
            animate={{ y: [0, -6, 0], x: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-6 left-8 w-12 h-2 bg-orange-500/80 rounded backdrop-blur-sm"
            animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </motion.div>

        {/* Cursor simulation */}
        <motion.div 
          className="absolute w-3 h-3 opacity-0 group-hover:opacity-100"
          animate={{ 
            x: [20, 60, 100, 140], 
            y: [30, 50, 80, 120] 
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut",
            repeatDelay: 1 
          }}
        >
          <div className="w-0 h-0 border-l-2 border-b-2 border-white transform rotate-45 drop-shadow-lg"></div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function WritingDeskVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/writing home screen.png"
          alt="Writing Desk"
          fill
          className="object-cover rounded-2xl"
        />
        
        {/* Typewriter effect overlay on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {/* Floating text elements */}
          <motion.div
            className="absolute top-4 left-4 text-xs font-mono text-gray-800 bg-white/80 backdrop-blur-sm px-2 py-1 rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            Chapter 1...
          </motion.div>
          
          <motion.div
            className="absolute top-8 right-6 text-xs font-mono text-gray-800 bg-white/80 backdrop-blur-sm px-2 py-1 rounded"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: [0, 1, 1, 0], y: [10, 0, 0, -10] }}
            transition={{ duration: 3, repeat: Infinity, delay: 1.5 }}
          >
            "The shadows..."
          </motion.div>

          {/* Typewriter cursor */}
          <motion.div 
            className="absolute bottom-8 left-8 w-0.5 h-4 bg-blue-600"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          />

          {/* Page flip effect */}
          <motion.div
            className="absolute bottom-4 right-4 w-8 h-10 bg-white/90 rounded shadow-lg"
            animate={{ 
              rotateY: [0, -15, 0],
              x: [0, 2, 0] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute top-1 left-1 w-6 h-0.5 bg-gray-400"></div>
            <div className="absolute top-2 left-1 w-5 h-0.5 bg-gray-400"></div>
            <div className="absolute top-3 left-1 w-4 h-0.5 bg-gray-400"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

function AdventureVisual() {
  return (
    <div className="relative w-full h-40 overflow-hidden rounded-2xl bg-gradient-to-br from-green-50 to-blue-50">
      <motion.div
        className="relative w-full h-full"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image
          src="/hiking home screen.png"
          alt="Adventure Scene"
          fill
          className="object-cover rounded-2xl"
        />
        
        {/* Nature animation overlay on hover */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {/* Floating elements representing movement */}
          <motion.div
            className="absolute top-6 left-6 w-2 h-2 bg-green-400/80 rounded-full"
            animate={{ 
              y: [0, -15, 0], 
              x: [0, 8, 16],
              opacity: [0.8, 0.4, 0.8] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <motion.div
            className="absolute top-4 right-8 w-1 h-1 bg-blue-400/80 rounded-full"
            animate={{ 
              y: [0, -12, 0], 
              x: [0, -6, -12],
              opacity: [0.6, 0.9, 0.6] 
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />

          {/* Wind particles */}
          <motion.div 
            className="absolute top-8 right-4 w-0.5 h-8 bg-white/40 rounded-full"
            animate={{ 
              x: [0, -20, -40], 
              opacity: [0, 0.6, 0],
              scaleY: [1, 1.2, 1]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
          />

          {/* Trail marker pulse */}
          <motion.div
            className="absolute bottom-8 left-8 w-3 h-3 bg-orange-500/80 rounded-full"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.8, 1, 0.8] 
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Map unfurling effect */}
          <motion.div
            className="absolute bottom-4 right-6 w-8 h-6 bg-amber-100/90 rounded shadow-lg overflow-hidden"
            initial={{ scaleX: 0.3 }}
            animate={{ 
              scaleX: [0.3, 1, 0.3],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute top-1 left-1 w-2 h-0.5 bg-green-600"></div>
            <div className="absolute top-2 left-2 w-1 h-0.5 bg-blue-600"></div>
            <div className="absolute bottom-1 right-1 w-1 h-1 bg-red-600 rounded-full"></div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default function ServicesSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-primary mb-4">
            Step Into My World
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Three corners of my life — where I build, write, and roam.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {worlds.map((world, index) => (
            <motion.div
              key={world.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link 
                href={world.ctaLink}
                className="block"
              >
                <motion.div
                  className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 overflow-hidden cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Visual Environment */}
                  <div className="mb-6">
                    {world.id === 'workbench' && <DigitalWorkbenchVisual />}
                    {world.id === 'writing' && <WritingDeskVisual />}
                    {world.id === 'adventures' && <AdventureVisual />}
                  </div>

                  <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors duration-300">
                    {world.title}
                  </h3>
                  
                  <p className="text-text-muted leading-relaxed mb-6 text-sm">
                    {world.description}
                  </p>

                  {/* CTA */}
                  <div className="inline-flex items-center text-sm font-medium text-gray-700 group-hover:text-accent-orange transition-colors duration-300">
                    {world.ctaText}
                    <motion.svg 
                      className="ml-2 h-4 w-4" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </motion.svg>
                  </div>

                  {/* Ambient overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-orange/5 to-accent-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}