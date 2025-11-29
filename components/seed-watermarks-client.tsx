"use client"
import { useEffect, useState } from "react"
import SeedWatermark from "./seed-watermark"

export default function SeedWatermarksClient() {
  const [positions, setPositions] = useState<Array<{ top: string; left: string; size: number; opacity: number; color: string; rotation: number }>>([])

  useEffect(() => {
    const watermarkColors = [
      "text-primary-light",
      "text-primary",
      "text-orange-400",
      "text-orange-500",
    ]

    const seedPositions = Array.from({ length: 50 }, () => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 16 + Math.random() * 20,
      opacity: 0.08 + Math.random() * 0.07,
      color: watermarkColors[Math.floor(Math.random() * watermarkColors.length)],
      rotation: Math.random() * 360,
    }))

    setPositions(seedPositions)
  }, [])

  return (
    <>
      {positions.map((pos, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: pos.top,
            left: pos.left,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            opacity: pos.opacity,
            transform: `rotate(${pos.rotation}deg)`,
          }}
        >
          <SeedWatermark className={`w-full h-full ${pos.color}`} />
        </div>
      ))}
    </>
  )
}
