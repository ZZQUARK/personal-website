'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const narrativeCards = [
  {
    id: 1,
    title: "① Master Your Craft",
    borderColor: "border-blue-500",
    content: [
      "Your profession - your bread and butter. The thing you do so well, the world pays you to keep doing it.",
      "For me, that's building digital products: designing user journeys, solving real-world problems, and managing chaos until it looks clean. This isn't just about money. It's about being dangerously good at something."
    ]
  },
  {
    id: 2,
    title: "② Feed Your Fire",
    borderColor: "border-purple-500",
    content: [
      "Your passion - not the motivational-poster kind, but the one that'd keep you alive even if you were stranded on an island.",
      "Mine? Writing that grips. Trail running that hurts in all the right ways. Scuba diving, rock climbing, sleeping under stars, chasing peaks and plot twists alike."
    ]
  },
  {
    id: 3,
    title: "③ Protect Your People",
    borderColor: "border-orange-500",
    content: [
      "Your tribe isn't your follower count or Slack community. It's the 4-5 people who'd show up for you - in failure, in silence, in success, in the mess.",
      "For me, it's family and a tiny handful of friends. I have a limited social battery, and I guard my time like a paranoid dragon with its gold."
    ]
  }
]

export default function AboutSection() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        
        {/* Title & Intro */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary mb-4">
            My North Star
          </h2>
          <p className="text-lg lg:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed">
            A personal guiding philosophy born from an unexpected conversation on a mountain trail.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          className="flex justify-center mb-12 lg:mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-sm">
            <div className="relative w-full aspect-square bg-white rounded-2xl shadow-lg overflow-hidden">
              <Image
                src="/Circle of life.jpg"
                alt="The Circle of Life - A visual breakdown of the three essential parts"
                fill
                className="object-contain p-4"
                priority
              />
            </div>
          </div>
        </motion.div>

        {/* Narrative Cards */}
        <motion.div
          className="space-y-6 lg:space-y-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {narrativeCards.map((card) => (
            <motion.div
              key={card.id}
              className={`bg-white rounded-2xl p-6 lg:p-8 shadow-sm border-l-4 ${card.borderColor} hover:shadow-md transition-shadow duration-300`}
              variants={cardVariants}
            >
              <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary mb-4">
                {card.title}
              </h3>
              <div className="space-y-4">
                {card.content.map((paragraph, index) => (
                  <p key={index} className="text-text-muted leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}

          {/* The Machine Card */}
          <motion.div
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-md border border-gray-100"
            variants={cardVariants}
          >
            <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary mb-4">
              The Machine That Moves You
            </h3>
            <p className="text-text-muted mb-4 font-medium">When you get it right:</p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-text-muted">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></span>
                Your profession funds your passion
              </li>
              <li className="flex items-center text-text-muted">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></span>
                Your passion fuels your drive
              </li>
              <li className="flex items-center text-text-muted">
                <span className="w-2 h-2 bg-orange-500 rounded-full mr-3 flex-shrink-0"></span>
                Your people keep you grounded
              </li>
            </ul>
            <p className="text-text-muted italic leading-relaxed">
              "It's not always balanced. Life doesn't run on formulas. But this framework - this circle - helps me keep the main thing the main thing."
            </p>
          </motion.div>
        </motion.div>

        {/* Section Ending */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-text-muted font-medium">
            Call it ikigai. Call it alignment. Or just call it what makes it all worth it.
          </p>
        </motion.div>

      </div>
    </section>
  )
}