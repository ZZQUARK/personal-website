'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const editorsPicks = [
  {
    id: 1,
    title: "The Circle of Life",
    summary: "A framework for balancing profession, passion, and people - learned from an unexpected conversation on a mountain trail.",
    tag: "Philosophy",
    tagColor: "bg-blue-100 text-blue-800",
    thumbnail: "/Circle of life.jpg",
    href: "/writing/circle-of-life"
  },
  {
    id: 2,
    title: "Building Products That Actually Matter",
    summary: "Why most digital products fail users and how to design experiences that solve real problems, not create new ones.",
    tag: "Product",
    tagColor: "bg-purple-100 text-purple-800",
    thumbnail: "/work home screen.png",
    href: "/writing/products-that-matter"
  },
  {
    id: 3,
    title: "The Art of Saying No",
    summary: "Protecting your time and energy in a world that demands everything from everyone, all the time.",
    tag: "Life",
    tagColor: "bg-orange-100 text-orange-800",
    thumbnail: "/writing home screen.png",
    href: "/writing/art-of-saying-no"
  },
  {
    id: 4,
    title: "Trail Running Philosophy",
    summary: "What mountain trails teach us about persistence, presence, and finding clarity in chaos.",
    tag: "Adventure",
    tagColor: "bg-green-100 text-green-800",
    thumbnail: "/hiking home screen.png",
    href: "/writing/trail-running-philosophy"
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function PopularContentSection() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            Freshly Baked
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Straight from the brain oven. Ideas, stories, and semi-structured chaos.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {editorsPicks.slice(0, 3).map((article) => (
            <motion.div
              key={article.id}
              variants={cardVariants}
              className="group"
            >
              <Link href={article.href} className="block">
                <motion.div
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-gray-200"
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02,
                    transition: { duration: 0.2, ease: "easeOut" }
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Thumbnail Image */}
                  <div className="relative h-40 lg:h-48 overflow-hidden">
                    <Image
                      src={article.thumbnail}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {/* Tag Overlay */}
                    <div className="absolute top-3 left-3">
                      <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full backdrop-blur-sm ${article.tagColor}`}>
                        {article.tag}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="font-serif text-lg lg:text-xl font-bold text-primary mb-3 leading-tight group-hover:text-accent-orange transition-colors duration-300">
                      {article.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-text-muted text-sm lg:text-base leading-relaxed mb-4 line-clamp-3">
                      {article.summary}
                    </p>

                    {/* Read More Arrow */}
                    <div className="flex items-center text-text-muted group-hover:text-accent-orange transition-colors duration-300">
                      <span className="text-sm font-medium">Read more</span>
                      <motion.svg 
                        className="ml-2 h-4 w-4" 
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

        {/* View All Button */}
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
            <span>Explore All Writing</span>
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