import * as React from "react"

export default function SeedWatermark(props: React.SVGProps<SVGSVGElement>) {
  const { className = "", ...rest } = props
  return (
    <svg className={className} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...rest}>
      {/* Seed shape */}
      <g transform="translate(16,16)">
        {/* Main seed body */}
        <path d="M0,-14 C5,-14 8,-7 8,0 C8,7 5,14 0,14 C-5,14 -8,7 -8,0 C-8,-7 -5,-14 0,-14 Z" fill="currentColor" />

        {/* Seed detail lines */}
        <path d="M0,-10 C0,-3 0,3 0,10" stroke="#00000033" strokeWidth="0.8" fill="none" />
        <path d="M-3,-8 C-1,0 -1,8 -3,8" stroke="#00000033" strokeWidth="0.6" fill="none" />
        <path d="M3,-8 C1,0 1,8 3,8" stroke="#00000033" strokeWidth="0.6" fill="none" />
      </g>
    </svg>
  )
}
