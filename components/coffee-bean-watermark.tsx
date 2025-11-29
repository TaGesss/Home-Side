// components/coffee-bean-watermark.tsx

interface CoffeeBeanWatermarkProps {
  className?: string;
  size?: number;  // optional prop to adjust size
}

export default function CoffeeBeanWatermark({
  className = "",
  size = 32,      // default to 32px
}: CoffeeBeanWatermarkProps) {
  return (
    <svg
      width={size}
      height={size}
      className={`absolute pointer-events-none opacity-20 text-brown-600 ${className}`}
      viewBox="0 0 64 64"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Bean body */}
      <ellipse
        cx="32"
        cy="32"
        rx="18"
        ry="30"
        transform="rotate(-20 32 32)"
      />
      {/* Center crease */}
      <path
        d="M32,6 C24,18 28,46 32,58"
        fill="none"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}
