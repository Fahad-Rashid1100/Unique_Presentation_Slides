"use client"

import type React from "react"
import { motion } from "framer-motion"
import type { SkillIntegrationStep } from "@/app/slide-data"
import { IconMap } from "@/app/slide-data" // IconMap is imported from slide-data

interface Skill {
  id: string
  icon?: React.ElementType
  iconClass?: string
  title: string
  text: string
  highlight: string
}

interface SkillsHighlightLayoutProps {
  content: {
    mainTitle: string
    skills: Skill[]
    integrationTitle: string
    integrationSteps: SkillIntegrationStep[]
  }
  currentStep: number
}

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const integrationItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function SkillsHighlightLayout({ content, currentStep }: SkillsHighlightLayoutProps) {
  // Step definitions:
  // 0: Main Title
  // 1: Skills section (cards appear, possibly staggered)
  // 2: Integration Title
  // 3: Integration Steps (appear, possibly staggered)

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
        className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
        initial="hidden"
        animate={currentStep >= 1 ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {content.skills.map((skill) => {
          const Icon = skill.icon
          return (
            <motion.div
              key={skill.id}
              className="bg-slate-800/70 p-6 rounded-xl shadow-xl backdrop-blur-sm flex flex-col"
              variants={itemVariants} // Each skill card animates
            >
              <div className="flex items-center mb-4">
                {Icon && <Icon className={`w-9 h-9 mr-4 ${skill.iconClass || "text-sky-400"}`} />}
                <h3 className="text-2xl font-semibold text-slate-50">{skill.title}</h3>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-4 flex-grow">{skill.text}</p>
              <div
                className={`p-3 rounded-md bg-opacity-20 ${skill.iconClass ? skill.iconClass.replace("text-", "bg-").replace("-400", "-500/20") : "bg-sky-500/20"}`}
              >
                <p className={`text-md font-medium ${skill.iconClass || "text-sky-300"}`}>{skill.highlight}</p>
              </div>
            </motion.div>
          )
        })}
      </motion.div>

      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-center text-purple-400 mb-6 md:mb-8"
        initial="hidden"
        animate={currentStep >= 2 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.integrationTitle}
      </motion.h2>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-4 md:gap-6 bg-slate-800/50 p-6 rounded-lg"
        initial="hidden"
        animate={currentStep >= 3 ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {content.integrationSteps.map((step) => {
          const Icon = step.icon
          const ConnectorIcon =
            step.connector === "+" ? IconMap.Plus : step.connector === "→" ? IconMap.ArrowRight : null

          return (
            <motion.div key={step.id} className="flex items-center" variants={integrationItemVariants}>
              <div className="flex flex-col items-center text-center p-3 bg-slate-700/60 rounded-md">
                <Icon className="w-10 h-10 mb-2 text-slate-300" />
                <span className="text-md text-slate-200">{step.text}</span>
              </div>
              {ConnectorIcon && (
                <span className="text-3xl font-light text-purple-400 mx-3 md:mx-4">
                  <ConnectorIcon className={step.connector === "+" ? "w-6 h-6" : "w-8 h-8"} />
                </span>
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}
// The local IconMap.Plus definition is removed from here.
