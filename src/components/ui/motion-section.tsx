"use client"

import { motion, useInView } from "framer-motion"
import { useRef, ReactNode } from "react"

interface MotionSectionProps {
    children: ReactNode
    className?: string
    delay?: number
    direction?: "up" | "down" | "left" | "right" | "none"
    duration?: number
    id?: string
}

export function MotionSection({
    children,
    className = "",
    delay = 0,
    direction = "up",
    duration = 0.5,
    id,
}: MotionSectionProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const variants = {
        hidden: {
            opacity: 0,
            y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
            x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                duration,
                delay,
                ease: "easeOut" as const,
            },
        },
    }

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={variants}
            className={className}
            id={id}
        >
            {children}
        </motion.div>
    )
}
