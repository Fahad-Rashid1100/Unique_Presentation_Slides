"use client"
import React, { useState, useRef, useCallback, useEffect, Suspense, useMemo } from "react"
import { gsap } from "gsap"
import { slides, type SlideDefinition } from "./slide-data"
import { ChevronLeft, ChevronRight } from "lucide-react"
// Remove or comment out this line:
// import ParticleBackgroundCanvas from "@/components/particle-background"

// Add this instead:
const DynamicParticleBackground = dynamic(
  () => import("@/components/particle-background"),
  { 
    ssr: false, // This is the crucial part
    // Optional: add a fallback while the component loads on the client
    loading: () => <div className="absolute inset-0 z-0" />
  }
)
import dynamic from "next/dynamic"

const TitleLayout = dynamic(() => import("@/components/slide-layouts/title-layout"))
const IntroCardsLayout = dynamic(() => import("@/components/slide-layouts/intro-cards-layout"))
const DefinitionListLayout = dynamic(() => import("@/components/slide-layouts/definition-list-layout"))
const KeyConsiderationsLayout = dynamic(() => import("@/components/slide-layouts/key-considerations-layout"))
const SkillsHighlightLayout = dynamic(() => import("@/components/slide-layouts/skills-highlight-layout"))
const QaLayout = dynamic(() => import("@/components/slide-layouts/qa-layout"))

const layoutMap: Record<string, React.ComponentType<any>> = {
  TitleLayout,
  IntroCardsLayout,
  DefinitionListLayout,
  KeyConsiderationsLayout,
  SkillsHighlightLayout,
  QaLayout,
}

export default function PresentationPage() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  const [isSlideTransitioning, setIsSlideTransitioning] = useState(false) // More specific state name
  const slideContainerRef = useRef<HTMLDivElement>(null)
  const [currentStep, setCurrentStep] = useState(0)

  const currentSlideData: SlideDefinition = slides[currentSlideIndex]
  const CurrentLayout = layoutMap[currentSlideData.layout]
  const totalStepsForCurrentSlide = currentSlideData.steps || 1 // Default to 1 step if not defined

  const particleAccentColor = useMemo(() => {
    const query = currentSlideData.backgroundQuery.toLowerCase()
    if (query.includes("sky") || query.includes("blue")) return "sky-500"
    if (query.includes("purple")) return "purple-500"
    if (query.includes("emerald") || query.includes("green")) return "emerald-500"
    if (query.includes("amber") || query.includes("orange")) return "amber-500"
    if (query.includes("rose") || query.includes("red")) return "rose-500"
    return "slate-500"
  }, [currentSlideData.backgroundQuery])

  const changeSlide = useCallback(
    (direction: number) => {
      if (isSlideTransitioning) return

      const newSlideIndex = currentSlideIndex + direction
      if (newSlideIndex < 0 || newSlideIndex >= slides.length) return

      setIsSlideTransitioning(true)
      setCurrentStep(0) // Reset step for the new slide *before* animation starts

      gsap.to(slideContainerRef.current, {
        opacity: 0,
        y: direction > 0 ? -40 : 40, // Slightly increased y offset for transition
        duration: 0.35, // Slightly faster transition
        ease: "power2.in",
        onComplete: () => {
          setCurrentSlideIndex(newSlideIndex)
          // The useEffect for currentSlideIndex will handle the fade-in animation
          // setIsSlideTransitioning(false) will be set there
        },
      })
    },
    [currentSlideIndex, isSlideTransitioning],
  )

  const nextStep = useCallback(() => {
    // Do not advance step or slide if a slide transition is happening
    if (isSlideTransitioning) return

    if (currentStep < totalStepsForCurrentSlide - 1) {
      setCurrentStep((prev) => prev + 1)
    } else {
      changeSlide(1) // This will set isSlideTransitioning
    }
  }, [currentStep, totalStepsForCurrentSlide, changeSlide, isSlideTransitioning])

  // Effect for slide appearance animation
  useEffect(() => {
    if (slideContainerRef.current) {
      // Ensure currentStep is reset for the new slide content to animate from its initial state
      // This is now handled in changeSlide before setCurrentSlideIndex
      gsap.fromTo(
        slideContainerRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4, // Slightly faster appearance
          ease: "power2.out",
          delay: 0.05, // Minimal delay
          onComplete: () => {
            setIsSlideTransitioning(false) // Transition is complete
          },
        },
      )
    }
  }, [currentSlideIndex]) // Only re-run when slide index changes

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        if (!isSlideTransitioning) changeSlide(1) // Only allow if not already transitioning
      } else if (event.key === "ArrowLeft") {
        if (!isSlideTransitioning) changeSlide(-1) // Only allow if not already transitioning
      } else if (event.key === " " || event.key === "ArrowDown") {
        event.preventDefault()
        nextStep() // nextStep has its own isSlideTransitioning check
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [changeSlide, nextStep, isSlideTransitioning]) // Add isSlideTransitioning to dependencies

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-slate-950 text-slate-100 flex items-center justify-center p-4 md:p-8 z-0">
      <DynamicParticleBackground accentColor={particleAccentColor} slideId={currentSlideData.id} />
      <div
        key={currentSlideData.id} // Key ensures component re-mounts or updates fully on slide change
        ref={slideContainerRef}
        className="w-full h-full flex flex-col items-center justify-center z-10"
      >
        <Suspense fallback={<div className="text-slate-300 text-xl">Loading slide...</div>}>
          {CurrentLayout ? (
            <CurrentLayout content={currentSlideData.content} currentStep={currentStep} />
          ) : (
            <div>Layout {currentSlideData.layout} not found.</div>
          )}
        </Suspense>
      </div>
      <button
        onClick={() => changeSlide(-1)}
        disabled={currentSlideIndex === 0 || isSlideTransitioning}
        className="fixed left-4 md:left-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-full disabled:opacity-30 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        onClick={() => changeSlide(1)}
        disabled={currentSlideIndex === slides.length - 1 || isSlideTransitioning}
        className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 p-3 bg-slate-700/50 hover:bg-slate-600/70 rounded-full disabled:opacity-30 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>
    </main>
  )
}
