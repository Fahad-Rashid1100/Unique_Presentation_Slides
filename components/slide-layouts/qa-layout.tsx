"use client"

import type React from "react"

import { motion } from "framer-motion"
import { IconMap } from "@/app/slide-data" // Ensure IconMap is imported

interface Presenter {
  name: string
  id: string
}

interface QaLayoutProps {
  content: {
    title: string
    icons: React.ElementType[]
    presenters: Presenter[]
    paperTitle: string
    date: string
  }
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

const iconContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const iconVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 10 } },
}

export default function QaLayout({ content }: QaLayoutProps) {
  return (
    <motion.div
      className="w-full max-w-4xl text-center flex flex-col items-center justify-center p-8 space-y-8 md:space-y-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="flex space-x-4 md:space-x-6 mb-4" variants={iconContainerVariants}>
        {content.icons.map((IconComponent, index) => (
          <motion.div key={index} variants={iconVariants}>
            <IconComponent className="w-10 h-10 md:w-12 md:h-12 text-slate-400 hover:text-sky-400 transition-colors" />
          </motion.div>
        ))}
      </motion.div>

      <motion.h1 className="text-5xl md:text-6xl font-bold text-slate-100" variants={itemVariants}>
        {content.title}
      </motion.h1>

      <motion.div className="space-y-3" variants={itemVariants}>
        <p className="text-xl text-slate-300">Presented by:</p>
        {content.presenters.map((presenter) => (
          <div key={presenter.name} className="flex items-center justify-center space-x-2">
            <IconMap.User className="w-6 h-6 text-slate-400" />
            <p className="text-2xl md:text-3xl text-slate-200">{presenter.name}</p>
            <p className="text-lg text-slate-500">({presenter.id})</p>
          </div>
        ))}
      </motion.div>

      <motion.div className="pt-6 border-t border-slate-700 w-full max-w-2xl" variants={itemVariants}>
        <p className="text-md text-slate-400 italic">Research Paper:</p>
        <p className="text-lg text-slate-300 mt-1">"{content.paperTitle}"</p>
        <p className="text-md text-slate-500 mt-2">{content.date}</p>
      </motion.div>
    </motion.div>
  )
}
