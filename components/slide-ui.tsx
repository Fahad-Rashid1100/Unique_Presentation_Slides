"use client"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, CornerDownRight } from "lucide-react"

interface SlideUIProps {
  currentSlide: number
  totalSlides: number
  currentFragment: number
  totalFragments: number
  onNavigate: (direction: number) => void
  onNextFragment: () => void
  isTransitioning: boolean
  presenterNotes?: string
  presenterInfo?: string
}

const ProgressBar = ({
  current,
  total,
  accentClass = "bg-sky-500",
}: {
  current: number
  total: number
  accentClass?: string
}) => {
  const progressPercentage = total > 0 ? ((current + 1) / total) * 100 : 0
  return (
    <div className="h-1.5 bg-slate-700/50 rounded-full overflow-hidden backdrop-blur-sm">
      <motion.div
        className={`h-full ${accentClass}`}
        initial={{ width: 0 }}
        animate={{ width: `${progressPercentage}%` }}
        transition={{ duration: 0.3, ease: "linear" }}
      />
    </div>
  )
}

export default function SlideUI({
  currentSlide,
  totalSlides,
  currentFragment,
  totalFragments,
  onNavigate,
  onNextFragment,
  isTransitioning,
  presenterNotes,
  presenterInfo,
}: SlideUIProps) {
  return (
    <>
      {/* Navigation Buttons */}
      <button
        onClick={() => onNavigate(-1)}
        disabled={currentSlide === 0 || isTransitioning}
        className="fixed left-3 md:left-5 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-slate-800/60 hover:bg-slate-700/80 rounded-full disabled:opacity-30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={() => onNavigate(1)}
        disabled={currentSlide === totalSlides - 1 || isTransitioning}
        className="fixed right-3 md:right-5 top-1/2 -translate-y-1/2 z-50 p-2 md:p-3 bg-slate-800/60 hover:bg-slate-700/80 rounded-full disabled:opacity-30 transition-all duration-300 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Next Fragment Button (alternative to spacebar/down arrow) */}
      {currentFragment < totalFragments - 1 && (
        <button
          onClick={onNextFragment}
          disabled={isTransitioning}
          className="fixed right-3 md:right-5 bottom-16 z-50 p-2 md:p-3 bg-sky-600/80 hover:bg-sky-500/90 rounded-full disabled:opacity-50 transition-all duration-300 backdrop-blur-sm animate-pulse"
          aria-label="Next step"
        >
          <CornerDownRight size={20} />
        </button>
      )}

      {/* Progress Indicators */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-11/12 md:w-1/2 max-w-md px-2">
        <div className="text-xs text-slate-400 mb-1 text-center">
          Slide {currentSlide + 1} / {totalSlides}
          {totalFragments > 0 && ` (Step ${currentFragment + 1} / ${totalFragments})`}
        </div>
        <ProgressBar current={currentSlide} total={totalSlides} accentClass="bg-sky-500" />
        {totalFragments > 0 && (
          <div className="mt-1">
            <ProgressBar current={currentFragment} total={totalFragments} accentClass="bg-emerald-500" />
          </div>
        )}
      </div>

      {/* Presenter Notes (for development) */}
      {presenterNotes && (
        <div className="fixed bottom-16 left-3 md:left-5 p-2 md:p-3 bg-slate-800/80 text-xs text-slate-300 rounded max-w-[200px] md:max-w-xs z-50 backdrop-blur-sm">
          <strong>{presenterInfo}:</strong> {presenterNotes}
        </div>
      )}
    </>
  )
}
