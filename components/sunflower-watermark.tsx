interface SunflowerWatermarkProps {
  className?: string
}

export default function SunflowerWatermark({ className = "" }: SunflowerWatermarkProps) {
  return (
    <svg className={`${className}`} viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* Sunflower petals */}
      <g transform="translate(16,16)">
        {/* Outer petals */}
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(0)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(30)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(60)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(90)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(120)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(150)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(180)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(210)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(240)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(270)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(300)" />
        <ellipse cx="0" cy="-12" rx="2" ry="6" fill="currentColor" transform="rotate(330)" />

        {/* Center */}
        <circle cx="0" cy="0" r="4" fill="#8B4513" />
      </g>
    </svg>
  )
}
