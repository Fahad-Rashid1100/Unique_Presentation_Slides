"use client"

import { motion } from "framer-motion"
import type { IconListItem } from "@/app/slide-data"

interface Section {
  id: string
  title: string
  subtitle?: string
  items: IconListItem[]
}

interface DefinitionListLayoutProps {
  content: {
    mainTitle: string
    mainSubtitle?: string
    sections: Section[]
  }
  currentStep: number
}

const titleVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const sectionItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const listItemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
}

export default function DefinitionListLayout({ content, currentStep }: DefinitionListLayoutProps) {
  // Define step indices for clarity
  const mainTitleStep = 0
  const mainSubtitleStep = content.mainSubtitle ? 1 : 0 // If no subtitle, this step is skipped or combined
  const sectionBaseStep = content.mainSubtitle ? 2 : 1

  return (
    <motion.div
      className="w-full max-w-5xl p-4 sm:p-6 md:p-8 text-slate-100"
      // No overall container stagger here, handled by individual elements based on currentStep
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-center mb-3 w-full break-words"
        initial="hidden"
        animate={currentStep >= mainTitleStep ? "visible" : "hidden"}
        variants={titleVariants}
      >
        {content.mainTitle}
      </motion.h1>

      {content.mainSubtitle && (
        <motion.p
          className="text-xl md:text-2xl text-slate-300 text-center mb-10 md:mb-12 w-full break-words"
          initial="hidden"
          animate={currentStep >= mainSubtitleStep ? "visible" : "hidden"}
          variants={titleVariants}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.mainSubtitle}
        </motion.p>
      )}

      <div className="grid md:grid-cols-2 gap-8 md:gap-10 mt-8">
        {content.sections.map((section, sectionIndex) => {
          const currentSectionStep = sectionBaseStep + sectionIndex
          return (
            <motion.div
              key={section.id}
              initial="hidden"
              animate={currentStep >= currentSectionStep ? "visible" : "hidden"}
              variants={sectionItemVariants} // This animates the whole section block
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-sky-400 mb-4 w-full break-words">
                {section.title}
              </h2>
              {section.subtitle && <p className="text-lg text-slate-300 mb-5 w-full break-words">{section.subtitle}</p>}
              <motion.div
                className="space-y-5"
                // Stagger children if the section itself is visible
                variants={{
                  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
                  hidden: {},
                }}
                initial="hidden"
                animate={currentStep >= currentSectionStep ? "visible" : "hidden"}
              >
                {section.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.div
                      key={item.id}
                      className="flex items-start space-x-3 md:space-x-4"
                      variants={listItemVariants} // Individual list item animation
                    >
                      {Icon && (
                        <Icon
                          className={`w-7 h-7 md:w-8 md:h-8 mt-1 flex-shrink-0 ${item.iconClass || "text-emerald-400"}`}
                        />
                      )}
                      <div className="flex-grow min-w-0">
                        <h3 className="text-xl font-medium text-slate-50 w-full break-words">{item.title}</h3>
                        <p className="text-slate-300 text-md leading-relaxed w-full break-words">{item.text}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
