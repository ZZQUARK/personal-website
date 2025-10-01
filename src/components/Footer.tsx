'''use client'''

import { motion } from 'framer-motion'
import { Twitter, Instagram, Mail, Newspaper } from 'lucide-react'

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
                <a href="mailto:your-email@gmail.com" className="text-gray-400 hover:text-white transition-colors"><Mail size={20} /></a>
                <a href="https://twitter.com/yourusername" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="https://instagram.com/yourusername" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
                <a href="https://yourusername.substack.com" className="text-gray-400 hover:text-white transition-colors"><Newspaper size={20} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}
