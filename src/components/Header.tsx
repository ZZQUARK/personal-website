'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, Instagram, Mail, Menu, X } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Writing', href: '/writing' },
  { name: 'Adventures', href: '/adventures' },
];

const SocialLinks = () => (
  <div className="flex items-center space-x-4">
    <motion.a whileHover={{ scale: 1.1 }} href="https://twitter.com/zigzagquark" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
      <Twitter size={20} />
    </motion.a>
    <motion.a whileHover={{ scale: 1.1 }} href="https://instagram.com/zigzagquark" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600 transition-colors">
      <Instagram size={20} />
    </motion.a>
    <motion.a whileHover={{ scale: 1.1 }} href="mailto:ak@akshitkumar.com" className="text-gray-600 hover:text-indigo-600 transition-colors">
      <Mail size={20} />
    </motion.a>
  </div>
);

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Close mobile menu on resize
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 h-24"
    >
      <div className="max-w-7xl mx-auto px-6 h-full">
        <div className="relative flex items-center justify-between h-full bg-white/30 backdrop-blur-md rounded-xl shadow-sm border border-white/20 px-6">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image src="/Logo.png" alt="Signature Logo" width={100} height={40} style={{ height: 'auto' }} />
            </Link>
          </div>

          {/* Center: Navigation (Absolutely Centered on Desktop) */}
          <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-baseline space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-indigo-600 transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right: Social Icons & Mobile Menu Button */}
          <div className="flex items-center">
            <div className="hidden md:block">
              <SocialLinks />
            </div>
            <div className="flex md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-indigo-600"
                aria-controls="mobile-menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden mt-2 mx-6 rounded-lg shadow-lg bg-white/80 backdrop-blur-md ring-1 ring-black ring-opacity-5 overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-semibold text-gray-700 hover:text-white hover:bg-indigo-600"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="flex items-center justify-center px-5">
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
