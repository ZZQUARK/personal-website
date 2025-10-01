'''use client'''

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Work', href: '/work' },
  { name: 'Writing', href: '/writing' },
  { name: 'Adventures', href: '/adventures' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out
        ${scrolled 
          ? 'w-[95%] max-w-5xl bg-white/70 backdrop-blur-xl shadow-2xl shadow-black/10' 
          : 'w-[90%] max-w-6xl bg-white/10 backdrop-blur-md shadow-xl shadow-black/5'
        }
        rounded-2xl border border-white/20
      `}
    >
      <nav className={`
        mx-auto flex items-center justify-between transition-all duration-500
        ${scrolled ? 'px-6 py-3' : 'px-8 py-4'}
      `} aria-label="Global">
        
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 group">
            <Image 
              src="/Logo.png" 
              alt="Akshit Kumar" 
              width={120} 
              height={40} 
              className={`
                transition-all duration-300 group-hover:scale-105
                ${scrolled ? 'h-6 w-auto' : 'h-8 w-auto'}
              `} 
            />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="glass-nav-item"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="nav-link group relative px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-all duration-300"
            >
              {item.name}
              <span className="nav-link-underline"></span>
            </Link>
          ))}
        </div>

        {/* CTA + Social Icons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-6">
          
          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a 
              href="https://twitter.com/yourusername" 
              className="social-icon-minimal"
              aria-label="Twitter"
            >
              <svg className="h-5 w-5" fill="#1DA1F2" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            
            <a 
              href="mailto:your-email@gmail.com" 
              className="social-icon-minimal"
              aria-label="Gmail"
            >
              <Image src="/gmail.png" alt="Gmail" width={20} height={20} className="h-5 w-5" />
            </a>
            
            <a 
              href="https://instagram.com/yourusername" 
              className="social-icon-minimal"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <defs>
                  <linearGradient id="instagram-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f58529"/>
                    <stop offset="20%" stopColor="#dd2a7b"/>
                    <stop offset="60%" stopColor="#8134af"/>
                    <stop offset="100%" stopColor="#515bd4"/>
                  </linearGradient>
                </defs>
                <path fill="url(#instagram-gradient)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>

        </div>
      </nav>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto sm:max-w-sm">
            <div className="glass-mobile-menu">
              <div className="flex items-center justify-between p-6">
                <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                  <Image src="/Logo.png" alt="Akshit Kumar" width={120} height={40} className="h-8 w-auto" />
                </Link>
                <button
                  type="button"
                  className="glass-nav-item"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              
              <div className="mt-6 flow-root px-6">
                <div className="-my-6 divide-y divide-white/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="mobile-nav-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  
                  <div className="py-6">
                    <div className="flex justify-center gap-6">
                      <a href="https://twitter.com/yourusername" className="social-icon-mobile" aria-label="Twitter">
                        <svg className="h-6 w-6" fill="#1DA1F2" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </a>
                      <a href="mailto:your-email@gmail.com" className="social-icon-mobile" aria-label="Gmail">
                        <Image src="/gmail.png" alt="Gmail" width={24} height={24} className="h-6 w-6" />
                      </a>
                      <a href="https://instagram.com/yourusername" className="social-icon-mobile" aria-label="Instagram">
                        <svg className="h-6 w-6" viewBox="0 0 24 24">
                          <defs>
                            <linearGradient id="instagram-gradient-mobile" x1="0%" y1="0%" x2="100%" y2="100%">
                              <stop offset="0%" stopColor="#f58529"/>
                              <stop offset="20%" stopColor="#dd2a7b"/>
                              <stop offset="60%" stopColor="#8134af"/>
                              <stop offset="100%" stopColor="#515bd4"/>
                            </linearGradient>
                          </defs>
                          <path fill="url(#instagram-gradient-mobile)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  )
}
