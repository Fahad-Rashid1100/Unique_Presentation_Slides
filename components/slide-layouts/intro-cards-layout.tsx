"use client"

import { motion } from "framer-motion"
import type { CardItem, PillStatItem } from "@/app/slide-data" // Ensure PillStatItem is imported
import { cn } from "@/lib/utils"

interface IntroCardsLayoutProps {
  content: {
    title: string
    cards: CardItem[]
    statsTitle?: string // Made optional
    stats?: PillStatItem[] // Made optional
  }
  currentStep: number
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export default function IntroCardsLayout({ content, currentStep }: IntroCardsLayoutProps) {
  const titleStep = 0
  const cardsBaseStep = 1
  const numCards = content.cards.length
  const statsTitleStep = cardsBaseStep + numCards
  const statsItemsStep = statsTitleStep + (content.statsTitle ? 1 : 0)

  return (
    <motion.div className="w-full max-w-5xl flex flex-col items-center p-4 sm:p-6 md:p-8 space-y-8 md:space-y-10">
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-center text-slate-100 mb-4 md:mb-6 w-full break-words"
        initial="hidden"
        animate={currentStep >= titleStep ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.title}
      </motion.h2>

      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
        initial="hidden"
        animate={currentStep >= cardsBaseStep ? "visible" : "hidden"}
        variants={containerVariants}
      >
        {content.cards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.id}
              className="bg-slate-800/70 p-5 md:p-6 rounded-xl shadow-xl backdrop-blur-sm flex flex-col items-start text-left overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={currentStep >= cardsBaseStep + index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {Icon && <Icon className={`w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4 ${card.iconClass || "text-sky-400"}`} />}
              <h3 className="text-xl md:text-2xl font-semibold text-slate-50 mb-2 w-full break-words">{card.title}</h3>
              <p className="text-slate-300 text-md md:text-lg leading-relaxed w-full break-words">{card.text}</p>
            </motion.div>
          )
        })}
      </motion.div>

      {content.statsTitle && (
        <motion.h3
          className="text-2xl md:text-3xl font-semibold text-center text-slate-200 mt-6 md:mt-8 w-full break-words"
          initial="hidden"
          animate={currentStep >= statsTitleStep ? "visible" : "hidden"}
          variants={itemVariants}
        >
          {content.statsTitle}
        </motion.h3>
      )}

      {content.stats && content.stats.length > 0 && (
        <motion.div
          className={cn(
            "w-full",
            content.stats.some((stat) => stat.isRemark)
              ? "max-w-2xl mx-auto"
              : "grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 max-w-3xl",
          )}
          initial="hidden"
          animate={currentStep >= statsItemsStep ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {content.stats.map((stat, index) => {
            const Icon = stat.icon
            if (stat.isRemark) {
              return (
                <motion.div
                  key={stat.id}
                  className="mt-4 md:mt-6 p-4 md:p-6 bg-slate-700/50 rounded-lg shadow-lg text-center flex items-center justify-center gap-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={currentStep >= statsItemsStep + index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {Icon && <Icon className={`w-7 h-7 md:w-8 md:h-8 ${stat.iconClass || "text-green-400"}`} />}
                  <p className="text-xl md:text-2xl text-slate-100 font-medium">{stat.label}</p>
                  {stat.value && <span className="text-xl md:text-2xl text-slate-100 font-medium">{stat.value}</span>}
                </motion.div>
              )
            }
            // Original pill stat rendering
            return (
              <motion.div
                key={stat.id}
                className={`p-3 md:p-4 rounded-lg shadow-lg flex flex-col items-center text-center ${stat.bgColor || "bg-slate-700/50"}`}
                initial={{ opacity: 0, y: 20 }}
                animate={currentStep >= statsItemsStep + index ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
              >
                {Icon && (
                  <Icon className={`w-7 h-7 md:w-8 md:h-8 mb-1 md:mb-2 ${stat.iconClass || "text-slate-300"}`} />
                )}
                <span className="text-md md:text-lg text-slate-300 w-full break-words">{stat.label}</span>
                {stat.value && <span className="text-2xl md:text-3xl font-bold text-slate-50 mt-1">{stat.value}</span>}
              </motion.div>
            )
          })}
        </motion.div>
      )}
    </motion.div>
  )
}
