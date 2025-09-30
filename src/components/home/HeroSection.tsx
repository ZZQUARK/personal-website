'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

const floatingEmojis = [
  { emoji: '🏔️', delay: 0, x: '10%', y: '20%' },
  { emoji: '🌊', delay: 1, x: '85%', y: '15%' },
  { emoji: '🧗', delay: 2, x: '15%', y: '75%' },
  { emoji: '📚', delay: 3, x: '80%', y: '70%' },
  { emoji: '🏃', delay: 4, x: '90%', y: '45%' },
  { emoji: '💻', delay: 5, x: '70%', y: '25%' },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-background to-blue-50 pt-20">
      {/* Floating Emojis */}
      {floatingEmojis.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl lg:text-6xl opacity-70 select-none pointer-events-none hidden lg:block"
          style={{ left: item.x, top: item.y }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="font-serif text-3xl lg:text-5xl xl:text-6xl font-bold text-primary leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hey friends 👋<br />I'm Akshit
            </motion.h1>
            
            <motion.h2 
              className="font-serif text-lg lg:text-2xl xl:text-3xl font-bold leading-tight mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-accent-orange to-pink-500 bg-clip-text text-transparent">
                Thriller writer by night. Product builder by day. Adventurer always.
              </span>
            </motion.h2>
            
            {/* Newsletter Subscription */}
            <motion.div
              className="max-w-xl bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">📝</div>
                <h3 className="text-xl font-bold text-gray-900">
                  Subscribe to <span className="italic">Thoughts in Knots</span>
                </h3>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                Each week, I share actionable productivity tips, practical life advice, and highlights from my favourite books, directly to your inbox.
              </p>
              
              <div className="flex items-center gap-2 mb-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
                </div>
                <div className="flex text-yellow-400">
                  <span>★★★★★</span>
                </div>
              </div>
              
              <p className="text-xs text-gray-500 mb-4">Join a growing community of more than 10,000+ friendly readers.</p>
              
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium rounded-xl hover:from-blue-600 hover:to-blue-700 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3">
                By submitting this form, you'll be signed up to my free newsletter, which sometimes includes mentions of my books, apps and courses. You can opt-out at any time with no hard feelings 😊
              </p>
            </motion.div>
            
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            className="relative order-first lg:order-last"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-lg lg:max-w-2xl">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-indigo to-accent-orange rounded-3xl blur-3xl opacity-20 animate-pulse transform scale-110"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] rounded-3xl overflow-hidden border-4 border-white shadow-2xl" style={{zIndex: 10}}>
                <Image
                  src="/Hero Image.JPG"
                  alt="Akshit Kumar"
                  fill
                  className="object-cover brightness-110 contrast-105"
                  priority
                />
              </div>
            </div>
            
            {/* Floating emojis positioned around the image - outside overflow container */}
            <div className="absolute -top-12 -left-12 text-3xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite'}}>📚</div>
            <div className="absolute -top-8 -right-16 text-2xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite 1s'}}>🏔️</div>
            <div className="absolute top-1/4 -left-16 text-2xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite 2s'}}>🧗</div>
            <div className="absolute top-3/4 -right-12 text-2xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite 3s'}}>🏃</div>
            <div className="absolute -bottom-12 -left-8 text-3xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite 4s'}}>🐕</div>
            <div className="absolute -bottom-8 -right-20 text-2xl opacity-90 floating-emoji-glow" style={{zIndex: 20, animation: 'floatSmooth 6s ease-in-out infinite 5s'}}>🌊</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}