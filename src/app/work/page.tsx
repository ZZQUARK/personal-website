'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Hero Section Component
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f9f9f9] relative overflow-hidden">
      {/* Background hero image */}
      <div className="absolute inset-0">
        <Image
          src="/work hero image.jpeg"
          alt="Work Hero"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#f9f9f9]/70 to-[#f9f9f9]/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1 
          className="font-serif text-4xl sm:text-5xl lg:text-7xl font-bold text-primary mb-6 lg:mb-8 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Pixels, problems, and putting out fires.{' '}
          <span className="text-accent-orange">I build like I give a damn.</span>
        </motion.h1>
        
        <motion.p 
          className="text-lg sm:text-xl lg:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed font-medium"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          For almost 10 years - from scrappy MVPs to scaled systems - I've solved problems with wireframes, coffee, and controlled chaos.
        </motion.p>
      </div>
    </section>
  )
}

// CTA Cards Section Component
function CTACardsSection() {
  const ctaCards = [
    {
      id: 1,
      icon: '📄',
      title: 'Resume',
      subtitle: 'Download a PDF of my resume',
      buttonText: 'Download →',
      action: 'download',
      href: '/resume.pdf'
    },
    {
      id: 2,
      icon: '🧠',
      title: 'Past Projects',
      subtitle: '10+ years of work, condensed into sharp case studies',
      buttonText: 'Explore →',
      action: 'scroll',
      href: '#past-projects'
    },
    {
      id: 3,
      icon: '🚧',
      title: 'Currently Doing',
      subtitle: 'Projects I\'m building right now - deep work in progress',
      buttonText: 'Check it out →',
      action: 'scroll',
      href: '#current-projects'
    }
  ]

  const handleCardClick = (card: any) => {
    if (card.action === 'scroll') {
      const element = document.querySelector(card.href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else if (card.action === 'download') {
      window.open(card.href, '_blank')
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {ctaCards.map((card) => (
            <motion.div
              key={card.id}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 cursor-pointer group"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleCardClick(card)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {card.icon}
              </motion.div>
              
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary mb-3">
                {card.title}
              </h3>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                {card.subtitle}
              </p>
              
              <motion.button 
                className="inline-flex items-center text-accent-orange font-medium group-hover:text-accent-orange group-hover:underline transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                {card.buttonText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Past Projects Section Component
function PastProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Fintech Platform Redesign",
      summary: "Led complete UX overhaul of trading platform, increasing user engagement by 300% and reducing support tickets by 60%.",
      tags: ["UX", "PM", "Fintech"],
      cta: "Read Case Study →"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      summary: "Built 0-to-1 mobile shopping experience for 2M+ users, achieving 4.8 app store rating and $50M+ GMV.",
      tags: ["Product", "Mobile", "E-commerce"],
      cta: "Read Case Study →"
    },
    {
      id: 3,
      title: "B2B SaaS Dashboard",
      summary: "Designed data-heavy analytics platform used by Fortune 500 companies, improving decision-making speed by 80%.",
      tags: ["SaaS", "Analytics", "B2B"],
      cta: "Read Case Study →"
    }
  ]

  return (
    <section id="past-projects" className="py-16 lg:py-24 bg-[#f9f9f9]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            Case Studies: The Greatest Hits
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Some of my most meaningful builds and messiest wins.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8 lg:space-y-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.2 }}
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-accent-orange/10 to-pink-500/10 rounded-2xl p-8 h-64 flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </div>
              
              <div className="lg:w-1/2 text-center lg:text-left">
                <h3 className="font-serif text-2xl lg:text-3xl font-bold text-primary mb-4">
                  {project.title}
                </h3>
                
                <p className="text-text-muted mb-6 leading-relaxed text-lg">
                  {project.summary}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <motion.button 
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {project.cta}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Currently Doing Section Component
function CurrentProjectsSection() {
  const currentProjects = [
    {
      id: 1,
      name: "Journaling App",
      summary: "Building a mindful journaling experience that adapts to your writing style and helps surface insights from your thoughts.",
      status: "In Design",
      statusColor: "bg-blue-100 text-blue-800"
    },
    {
      id: 2,
      name: "Quibbi",
      summary: "A micro-learning platform that breaks complex topics into bite-sized, interactive lessons you can complete in under 5 minutes.",
      status: "Prototype",
      statusColor: "bg-purple-100 text-purple-800"
    },
    {
      id: 3,
      name: "Local Discovery Tool",
      summary: "Helping people find hidden gems in their neighborhood through AI-powered recommendations and community insights.",
      status: "Testing",
      statusColor: "bg-green-100 text-green-800"
    }
  ]

  return (
    <section id="current-projects" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="text-2xl">🚧</span>
            <span className="px-3 py-1 bg-accent-orange/10 text-accent-orange rounded-full text-sm font-medium">
              Work In Progress
            </span>
          </div>
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            Currently Shipping
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Active projects, experiments, and work in progress.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {currentProjects.map((project) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              viewport={{ once: true }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-serif text-xl font-bold text-primary">
                  {project.name}
                </h3>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-text-muted mb-6 leading-relaxed">
                {project.summary}
              </p>
              
              <motion.button 
                className="text-accent-orange font-medium group-hover:underline transition-all duration-300"
                whileHover={{ x: 4 }}
              >
                See More →
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

// Hit Me Up CTA Section Component
function HitMeUpSection() {
  return (
    <section className="py-16 lg:py-20 bg-[#1a1a1a]">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Got a product idea, UI chaos, or startup spiral?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 mb-8">
            Let's untangle it together.
          </p>
          
          <motion.a
            href="mailto:akshit@example.com"
            className="inline-flex items-center gap-2 bg-accent-orange text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-orange-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Image src="/gmail.png" alt="Email" width={20} height={20} className="h-5 w-5" />
            Drop me a line
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

// Blog Carousel Section Component
function BlogCarouselSection() {
  const blogPosts = [
    {
      id: 1,
      title: "The Product Manager's Guide to Technical Debt",
      excerpt: "Why technical debt is a product decision, not just an engineering problem.",
      tags: ["Product", "Tech"],
      thumbnail: "/blog-1.jpg"
    },
    {
      id: 2,
      title: "Designing for Mobile-First in 2024",
      excerpt: "Mobile isn't just smaller screens - it's a fundamentally different user context.",
      tags: ["UI/UX", "Tech"],
      thumbnail: "/blog-2.jpg"
    },
    {
      id: 3,
      title: "Why Most Startups Fail at User Research",
      excerpt: "The difference between asking users what they want and understanding what they need.",
      tags: ["Product", "UI/UX"],
      thumbnail: "/blog-3.jpg"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-[#f9f9f9]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            Blog Picks: Product, Tech & UX
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
            Thoughts on what we build, why it breaks, and how we fix it.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: "0 15px 30px rgba(0,0,0,0.1)"
              }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 bg-gradient-to-br from-accent-orange/20 to-pink-500/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl">📝</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-primary mb-3 group-hover:text-accent-orange transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-text-muted mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <motion.div 
                  className="flex items-center text-accent-orange font-medium group-hover:underline"
                  whileHover={{ x: 4 }}
                >
                  → Read More
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Read More CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Link 
            href="/writing?filter=tech,product,ui-ux" 
            className="btn-primary inline-flex items-center group"
          >
            <span>Read More</span>
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

// Main Work Page Component
export default function WorkPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <CTACardsSection />
      <PastProjectsSection />
      <CurrentProjectsSection />
      <HitMeUpSection />
      <BlogCarouselSection />
      <Footer />
    </main>
  )
}