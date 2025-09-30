'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Footer() {
  return (
    <motion.footer 
      className="bg-gray-900 border-t border-white/10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          
          {/* Left: Name */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-bold text-white mb-2">
              Akshit K.
            </h3>
            <p className="text-xs text-gray-400">
              © 2025 Akshit K. All rights reserved.
            </p>
          </motion.div>

          {/* Right: Social Links */}
          <motion.div 
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h4 className="text-sm font-medium text-gray-300 mb-3">
              Let's Connect
            </h4>
            <p className="text-xs text-gray-400 mb-4 max-w-xs mx-auto lg:mx-0">
              Always happy to connect - feel free to drop a message
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-end gap-4">
              
              {/* Email */}
              <motion.a
                href="mailto:your-email@gmail.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-red-500 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 20px rgba(239, 68, 68, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
              >
                <Image src="/gmail.png" alt="Email" width={20} height={20} className="h-5 w-5" />
              </motion.a>

              {/* Twitter */}
              <motion.a
                href="https://twitter.com/yourusername"
                className="p-2 rounded-full bg-gray-800 hover:bg-blue-500 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 20px rgba(59, 130, 246, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Twitter"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com/yourusername"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 20px rgba(168, 85, 247, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Instagram"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>

              {/* Substack */}
              <motion.a
                href="https://yourusername.substack.com"
                className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 text-gray-400 hover:text-white transition-all duration-300"
                whileHover={{ 
                  scale: 1.1,
                  y: -2,
                  boxShadow: "0 4px 20px rgba(249, 115, 22, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                aria-label="Substack"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}