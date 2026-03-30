"use client"

import { motion, type HTMLMotionProps } from "framer-motion"

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode
  delay?: number
}

export function ScrollReveal({ children, delay = 0, className, ...props }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  )
}
