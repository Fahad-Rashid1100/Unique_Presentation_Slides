"use client"
import { useRef, useMemo, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import * as THREE from "three"
import { gsap } from "gsap"

interface ParticleBackgroundProps {
  accentColor?: string // e.g. "sky-500"
  slideId: number
}

function Particles({ accentColor, slideId }: ParticleBackgroundProps) {
  const ref = useRef<THREE.Points>(null!)
  const materialRef = useRef<THREE.ShaderMaterial>(null!)

  const particles = useMemo(() => {
    const count = 7000 // Increased particle count
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 12 // Wider spread
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 12
      scales[i] = Math.random() * 0.5 + 0.5 // Vary particle size slightly
    }
    return { positions, scales }
  }, [])

  useEffect(() => {
    if (materialRef.current && accentColor) {
      // Construct the CSS variable name from the accentColor prop
      const cssVarName = `--color-${accentColor.split("-")[0]}-${accentColor.split("-")[1]}` // e.g. --color-sky-500
      const colorHex = getComputedStyle(document.documentElement).getPropertyValue(cssVarName).trim()

      if (colorHex) {
        const targetColor = new THREE.Color(colorHex)
        gsap.to(materialRef.current.color, {
          r: targetColor.r,
          g: targetColor.g,
          b: targetColor.b,
          duration: 1.5,
          ease: "power3.out",
        })
      } else {
        // Fallback if CSS variable not found (should not happen if globals.css is correct)
        gsap.to(materialRef.current.color, { r: 1, g: 1, b: 1, duration: 1.5, ease: "power3.out" })
      }
    }
  }, [accentColor])

  useEffect(() => {
    gsap.to(ref.current.rotation, {
      y: (slideId * Math.PI) / 7, // More distinct rotation per slide
      x: (slideId * Math.PI) / 14,
      z: (slideId * Math.PI) / 20,
      duration: 2.5, // Slower, more majestic rotation
      ease: "power3.inOut",
    })
    // Pulse effect on slide change
    gsap.fromTo(materialRef.current, { opacity: 0.7 }, { opacity: 1, duration: 1, ease: "power1.inOut" })
  }, [slideId])

  useFrame((state, delta) => {
    ref.current.rotation.y += delta / 25 // Slower continuous rotation
    ref.current.rotation.x += delta / 30
  })

  return (
    <Points ref={ref} positions={particles.positions} stride={3} frustumCulled={false}>
      {/* @ts-ignore types might be slightly off for PointMaterial props */}
      <PointMaterial
        ref={materialRef}
        transparent
        vertexColors={false} // if not using per-vertex colors
        color={accentColor || "#ffffff"} // Initial color
        size={0.012} // Slightly smaller base size
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  )
}

export default function PresentationCanvas({ accentColor, slideId }: ParticleBackgroundProps) {
  return (
    <Canvas camera={{ position: [0, 0, 2.5], fov: 60 }} className="absolute inset-0 z-0">
      <ambientLight intensity={0.6} />
      <Particles accentColor={accentColor} slideId={slideId} />
    </Canvas>
  )
}
