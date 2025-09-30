'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const thoughtsInKnots = [
  {
    id: 1,
    title: "The Solitude Paradox",
    summary: "Why being alone doesn't mean being lonely, and how modern life has confused the two. A reflection on the power of chosen solitude in a hyperconnected world.",
    tag: "Essay",
    tagColor: "bg-purple-100 text-purple-800",
    href: "/writing/solitude-paradox"
  },
  {
    id: 2,
    title: "Time as Currency",
    summary: "If time is our most precious resource, why do we spend it so carelessly? An exploration of attention, presence, and the economics of modern living.",
    tag: "Personal",
    tagColor: "bg-blue-100 text-blue-800",
    href: "/writing/time-as-currency"
  },
  {
    id: 3,
    title: "The Art of Unlearning",
    summary: "Sometimes growth means letting go of what you thought you knew. On the courage to question your assumptions and rebuild from the ground up.",
    tag: "Essay",
    tagColor: "bg-orange-100 text-orange-800",
    href: "/writing/art-of-unlearning"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

export default function NewsletterSection() {
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            Thoughts in Knots
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Essays and opinions I've wrestled with - about life, solitude, time, and how to keep all your circles in balance.
          </p>
        </motion.div>

        {/* Content Cards */}
        <motion.div
          className="space-y-6 lg:space-y-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {thoughtsInKnots.map((essay) => (
            <motion.div
              key={essay.id}
              variants={cardVariants}
              className="group"
            >
              <Link href={essay.href} className="block">
                <motion.div
                  className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-100 cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                  whileHover={{ 
                    scale: 1.03,
                    y: -4,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    
                    {/* Content */}
                    <div className="flex-1 lg:pr-8">
                      {/* Tag */}
                      <div className="mb-3">
                        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${essay.tagColor}`}>
                          {essay.tag}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary mb-3 leading-tight group-hover:text-accent-orange transition-colors duration-300">
                        {essay.title}
                      </h3>

                      {/* Summary */}
                      <p className="text-text-muted leading-relaxed mb-4 lg:mb-0">
                        {essay.summary}
                      </p>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center text-text-muted group-hover:text-accent-orange transition-colors duration-300 lg:mt-0 mt-4">
                      <span className="text-sm font-medium whitespace-nowrap">Read Essay</span>
                      <motion.svg 
                        className="ml-2 h-4 w-4 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </div>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Essays Link */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/writing" 
            className="btn-primary inline-flex items-center group"
          >
            <span>Read All Essays</span>
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
          </Link>
        </motion.div>

      </div>
    </section>
  )
}