"use client"
import { motion } from "framer-motion"
import Image from "next/image"

export default function LoadingPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo */}
        <Image
          src="/logo.png"
          alt="Logo"
          width={120}
          height={120}
          className="animate-pulse"
        />

        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />

        {/* Loading Text */}
        <p className="text-green-800 text-sm font-medium tracking-wide">Loading, please wait...</p>
      </motion.div>
    </div>
  )
}
