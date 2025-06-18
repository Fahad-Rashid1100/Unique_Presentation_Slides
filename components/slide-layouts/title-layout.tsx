"use client"

import { motion } from "framer-motion"

interface TitleLayoutProps {
  content: {
    mainTitle: string
    subTitle: string
    presenters: string
    date: string
  }
  currentStep: number
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

export default function TitleLayout({ content, currentStep }: TitleLayoutProps) {
  return (
    <motion.div
      className="w-full max-w-4xl text-center flex flex-col items-center justify-center p-6 md:p-8" // Ensure padding is adequate
      initial="hidden"
      animate="visible"
    >
      <motion.h1
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-50 leading-tight drop-shadow-xl mb-4 w-full break-words" // Added w-full and break-words
        initial="hidden"
        animate={currentStep >= 0 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.mainTitle}
      </motion.h1>
      <motion.h2
        className="text-3xl md:text-4xl font-semibold text-sky-400 drop-shadow-lg mb-10 w-full break-words" // Added w-full and break-words
        initial="hidden"
        animate={currentStep >= 1 ? "visible" : "hidden"}
        variants={itemVariants}
      >
        {content.subTitle}
      </motion.h2>
      <motion.div
        initial="hidden"
        animate={currentStep >= 2 ? "visible" : "hidden"}
        variants={itemVariants}
        className="space-y-2"
      >
        <p className="text-2xl md:text-3xl text-slate-200 break-words">{content.presenters}</p>
        <motion.p
          className="text-xl md:text-2xl text-slate-400 break-words"
          initial="hidden" // Add initial and variants if it's a separate motion component
          animate={currentStep >= 3 ? "visible" : "hidden"}
          variants={itemVariants} // Ensure variants are defined or use inline animation
        >
          {content.date}
        </motion.p>
      </motion.div>
    </motion.div>
  )
}
