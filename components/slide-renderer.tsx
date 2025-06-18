"use client"
import { forwardRef } from "react"
import { type SlideConfig, type Fragment, IconMap } from "@/app/slides-data-scripted"
import { cn } from "@/lib/utils"

const SlideRenderer = forwardRef<HTMLDivElement, { slide: SlideConfig; visibleFragmentIds: string[] }>(
  ({ slide, visibleFragmentIds }, ref) => {
    // `ref` is not directly used here anymore due to `key` on parent, but kept for pattern
    const renderFragment = (fragment: Fragment) => {
      if (!visibleFragmentIds.includes(fragment.id)) return null

      const Icon = fragment.icon || IconMap.Lightbulb
      const baseClasses = "w-full mb-5 md:mb-8" // Increased default margin

      const textAlignmentClass =
        fragment.layout === "center" ? "text-center" : fragment.layout === "right" ? "text-right" : "text-left"

      // Increased default font sizes
      const fontSizeClass = fragment.fontSize || "text-xl md:text-2xl"
      const fontWeightClass = fragment.fontWeight || "font-normal"

      // Each fragment is now its own div with the ID for GSAP targeting
      return (
        <div id={fragment.id} className={cn(baseClasses, textAlignmentClass)}>
          {(() => {
            switch (fragment.type) {
              case "main-title":
                return (
                  <h1
                    className={cn(
                      fontSizeClass, // Uses default or fragment-specific
                      fontWeightClass,
                      fragment.accentColor || "text-slate-50",
                      "leading-tight drop-shadow-lg",
                    )}
                  >
                    {fragment.content}
                  </h1>
                )
              case "sub-title":
                return (
                  <h2
                    className={cn(
                      fontSizeClass,
                      fontWeightClass,
                      fragment.accentColor || "text-slate-200", // Lighter for subtitle
                      "drop-shadow-md mt-1 md:mt-2", // Spacing from main title
                    )}
                  >
                    {fragment.content}
                  </h2>
                )
              case "presenter-names":
              case "date":
                return (
                  <p className={cn(fontSizeClass, fontWeightClass, fragment.accentColor || "text-slate-300")}>
                    {fragment.content}
                  </p>
                )
              case "slide-title":
                return (
                  <h2
                    className={cn(
                      "text-3xl md:text-4xl lg:text-5xl font-bold mb-10 md:mb-14", // Larger and more margin
                      fragment.accentColor || "text-sky-300", // Brighter accent
                    )}
                  >
                    {fragment.content}
                  </h2>
                )
              case "paragraph":
                return (
                  <p
                    className={cn(
                      fontSizeClass,
                      fontWeightClass,
                      fragment.accentColor || "text-slate-100", // Brighter paragraph text
                      "max-w-3xl leading-relaxed",
                      textAlignmentClass === "text-center" ? "mx-auto" : "",
                    )}
                  >
                    {fragment.content}
                  </p>
                )
              case "bullet-point":
                return (
                  <div
                    className={cn(
                      "flex items-start max-w-3xl gap-3 md:gap-4", // Added gap
                      textAlignmentClass === "text-center"
                        ? "mx-auto"
                        : textAlignmentClass === "text-right"
                          ? "ml-auto flex-row-reverse" // For right aligned bullets
                          : "mr-auto",
                    )}
                  >
                    {fragment.icon && (
                      <Icon
                        className={cn(
                          "w-6 h-6 md:w-8 md:h-8 mt-1 flex-shrink-0", // Slightly larger icon
                          fragment.iconClass || fragment.accentColor || "text-sky-400",
                        )}
                      />
                    )}
                    <div className={textAlignmentClass === "text-left" ? "" : "flex-grow"}>
                      <p className={cn(fontSizeClass, fontWeightClass, fragment.accentColor || "text-slate-50")}>
                        {fragment.content}
                      </p>
                      {fragment.subContent && (
                        <p
                          className={cn(
                            "text-base md:text-lg", // Larger subcontent
                            fragment.accentColor ? `${fragment.accentColor} opacity-80` : "text-slate-300",
                            "mt-1.5", // Increased spacing
                          )}
                        >
                          {fragment.subContent}
                        </p>
                      )}
                    </div>
                  </div>
                )
              case "highlight-text":
                return (
                  <div
                    className={cn(
                      "max-w-3xl p-4 md:p-6 rounded-xl my-3 md:my-4", // More padding, rounded
                      fragment.accentColor ? `${fragment.accentColor} bg-opacity-15` : "bg-slate-800/70", // More subtle bg
                      textAlignmentClass === "text-center" ? "mx-auto" : "",
                    )}
                  >
                    <p className={cn(fontSizeClass, fontWeightClass, fragment.accentColor || "text-sky-300")}>
                      {fragment.content}
                    </p>
                  </div>
                )
              case "icon-heading":
                return (
                  <div
                    className={cn(
                      "flex items-center gap-3 md:gap-4 max-w-3xl",
                      textAlignmentClass === "text-center"
                        ? "mx-auto justify-center"
                        : textAlignmentClass === "text-right"
                          ? "ml-auto justify-end flex-row-reverse"
                          : "mr-auto justify-start",
                    )}
                  >
                    {fragment.icon && (
                      <Icon
                        className={cn(
                          "w-8 h-8 md:w-10 lg:w-12 lg:h-12 flex-shrink-0", // Larger icon
                          fragment.iconClass || fragment.accentColor || "text-sky-400",
                        )}
                      />
                    )}
                    <h3
                      className={cn(
                        fontSizeClass || "text-2xl md:text-3xl", // Ensure heading size
                        fontWeightClass || "font-semibold",
                        fragment.accentColor || "text-slate-100",
                      )}
                    >
                      {fragment.content}
                    </h3>
                  </div>
                )
              case "definition-card":
                return (
                  <div
                    className={cn(
                      "bg-slate-800/80 p-5 md:p-8 rounded-xl shadow-xl backdrop-blur-md max-w-lg", // Larger padding, more blur
                      textAlignmentClass === "text-center" ? "mx-auto" : "mx-auto md:mx-0", // Default to centered on small, allow left/right on md+
                    )}
                  >
                    {fragment.icon && (
                      <Icon
                        className={cn(
                          "w-8 h-8 md:w-10 md:h-10 mb-3 md:mb-4",
                          fragment.iconClass || fragment.accentColor || "text-sky-400",
                          textAlignmentClass === "text-center" ? "mx-auto" : "",
                        )}
                      />
                    )}
                    <h4
                      className={cn(
                        "text-xl md:text-2xl lg:text-3xl font-semibold mb-2 md:mb-3", // Larger heading
                        fragment.accentColor || "text-slate-50",
                      )}
                    >
                      {fragment.content}
                    </h4>
                    {fragment.subContent && (
                      <p
                        className={cn(
                          "text-lg md:text-xl", // Larger subcontent
                          fragment.accentColor ? `${fragment.accentColor} opacity-80` : "text-slate-200",
                        )}
                      >
                        {fragment.subContent}
                      </p>
                    )}
                  </div>
                )
              case "quote":
                return (
                  <blockquote
                    className={cn(
                      "max-w-3xl p-5 border-l-4 my-4 md:my-6", // More padding, margin
                      fragment.accentColor ? `border-${fragment.accentColor.split("-")[1]}-500` : "border-sky-500",
                      "italic",
                      textAlignmentClass === "text-center" ? "mx-auto" : "",
                    )}
                  >
                    <p
                      className={cn(
                        fontSizeClass || "text-2xl md:text-3xl", // Larger quote
                        fontWeightClass,
                        fragment.accentColor || "text-slate-100",
                      )}
                    >
                      "{fragment.content}"
                    </p>
                  </blockquote>
                )
              case "spacer":
                return <div className="h-8 md:h-12"></div> // Increased spacer
              default:
                return <p className={cn(textAlignmentClass, "text-red-500")}>Unsupported fragment: {fragment.type}</p>
            }
          })()}
        </div>
      )
    }

    // The main container for all fragments of a slide.
    // The `ref` from `page.tsx` is now on the parent of this component, which has the `key`.
    // This component itself doesn't need the ref directly for GSAP targeting of its children.
    return <>{slide.fragments.map(renderFragment)}</>
  },
)

SlideRenderer.displayName = "SlideRenderer"
export default SlideRenderer
