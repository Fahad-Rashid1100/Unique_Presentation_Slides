"use client"

import type React from "react"
import { motion } from "framer-motion"

interface Point {
  id: string
  icon?: React.ElementType
  iconClass?: string
  title: string
  text: string
}

interface Consideration {
  id: string
  icon?: React.ElementType
  iconClass?: string
  text: string
}

interface KeyConsiderationsLayoutProps {
  content: {
    mainTitle: string
    points: Point[]
    considerationsTitle: string
    considerations: Consideration[]
  }
  currentStep: number
}

const mainContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function KeyConsiderationsLayout({ content, currentStep }: KeyConsiderationsLayoutProps) {
  // Step definitions:
  // 0: Main Title
  // 1: Points section (all points appear together, or could be staggered)
  // 2: Considerations Title
  // 3: Considerations list (all items appear together, or could be staggered)

  return (
    <motion.div
      className="w-full max-w-5xl p-6 md:p-8 text-slate-100"
      // No overall animation here, handled by children based on currentStep
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12"
        initial="hidden"
        animate={currentStep >= 0 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.mainTitle}
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-12"
        initial="hidden" // Use initial="hidden" and animate based on step
        animate={currentStep >= 1 ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {content.points.map((point) => {
          const Icon = point.icon
          return (
            <motion.div
              key={point.id}
              className="bg-slate-800/60 p-6 rounded-lg shadow-lg text-center flex flex-col items-center"
              variants={itemVariants} // Each point animates individually when parent is visible
            >
              {Icon && <Icon className={`w-10 h-10 mb-4 ${point.iconClass || "text-sky-400"}`} />}
              <h3 className="text-xl font-semibold text-slate-50 mb-2">{point.title}</h3>
              <p className="text-slate-300 text-md leading-relaxed">{point.text}</p>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-amber-400 mb-6 md:mb-8"
        initial="hidden"
        animate={currentStep >= 2 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.considerationsTitle}
      </motion.h2>
      <motion.div
        className="space-y-5 max-w-2xl mx-auto"
        initial="hidden"
        animate={currentStep >= 3 ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {content.considerations.map((con) => {
          const Icon = con.icon
          return (
            <motion.div
              key={con.id}
              className="flex items-center space-x-4 p-3 bg-slate-700/40 rounded-md"
              variants={itemVariants} // Each consideration animates individually
            >
              {Icon && <Icon className={`w-7 h-7 flex-shrink-0 ${con.iconClass || "text-amber-300"}`} />}
              <p className="text-lg text-slate-200">{con.text}</p>
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
