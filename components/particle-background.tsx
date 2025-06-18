"use client"
import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { gsap } from "gsap"

interface ParticleBackgroundProps {
  accentColor?: string // e.g. "sky-500" from Tailwind, maps to CSS var
  slideId: string // To trigger subtle changes or re-renders if needed
}

function Particles({ accentColor, slideId }: ParticleBackgroundProps) {
  const pointsRef = useRef<THREE.Points>(null!)
   const materialRef = useRef<any>(null!) // Using 'any' for PointMaterial ref due to potential type issues
   const [hasMounted, setHasMounted] = useState(false) // <-- Add mounted state

   // This effect runs once on the client, after the component is safely in the DOM
   useEffect(() => {
     setHasMounted(true)
   }, [])

  const particles = useMemo(() => {
    const count = 5000
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      // Spread particles across a wider area, further back
      positions[i * 3] = (Math.random() - 0.5) * 15 // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 15 // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 15 // z (give more depth)
    }
    return { positions }
  }, [])

  useEffect(() => {
    if (materialRef.current) {
      let targetColor = new THREE.Color("#ffffff") // Default to bright white

      if (accentColor) {
        const cssVarName = `--color-${accentColor.split("-")[0]}-${accentColor.split("-")[1]}`
        const colorHex = getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim()
        if (colorHex) {
          targetColor = new THREE.Color(colorHex)
        }
      }

      gsap.to(materialRef.current.color, {
        r: targetColor.r,
        g: targetColor.g,
        b: targetColor.b,
        duration: 1.5, // Smooth color transition
        ease: "power2.inOut",
      })
    }
  }, [accentColor, hasMounted]) // <-- Add hasMounted to dependency array

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02 // Slow continuous rotation
    }
  })

  return (
    <Points ref={pointsRef} positions={particles.positions} stride={3} frustumCulled={false}>
      <PointMaterial
        ref={materialRef}
        transparent
        color="#ffffff" // Start with a bright white color for debugging
        size={0.025} // Increased particle size
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.7}
      />
    </Points>
  )
}

export default function ParticleBackgroundCanvas({ accentColor, slideId }: ParticleBackgroundProps) {
  return (
    <div className="absolute inset-0 z-[-1]">
      {" "}
      {/* Ensure it's behind content */}
      <Canvas camera={{ position: [0, 0, 6], fov: 75 }}>
        {" "}
        {/* Pulled camera back slightly */}
        <ambientLight intensity={0.8} />
        <Particles accentColor={accentColor} slideId={slideId} />
      </Canvas>
    </div>
  )
}
