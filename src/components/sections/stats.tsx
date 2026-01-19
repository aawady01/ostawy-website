"use client"

import { motion, useInView, useSpring, useTransform } from "framer-motion"
import { useEffect, useRef } from "react"

const stats = [
    { value: 500, prefix: "+", label: "سؤال تدريبي" },
    { value: 250, prefix: "+", label: "إشارة مرورية" },
    { value: 6, label: "أنواع إشارات" },
    { value: 100, suffix: "%", label: "مجاني" },
]

function Counter({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null)
    const inView = useInView(ref, { once: true, margin: "-100px" })
    const spring = useSpring(0, { bounce: 0, duration: 2500 }) // Duration in ms
    const display = useTransform(spring, (current) => prefix + Math.round(current).toLocaleString() + suffix)

    useEffect(() => {
        if (inView) {
            spring.set(value)
        }
    }, [inView, value, spring])

    return <motion.span ref={ref}>{display}</motion.span>
}

export function Stats() {
    return (
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container px-4 text-center relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="space-y-2">
                            <div className="text-4xl md:text-6xl font-extrabold tracking-tight">
                                <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                            </div>
                            <p className="text-primary-foreground/80 font-medium text-lg">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
