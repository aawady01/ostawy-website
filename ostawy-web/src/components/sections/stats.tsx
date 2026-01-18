"use client"

import { motion } from "framer-motion"

const stats = [
    { value: "+250", label: "سؤال تدريبي" },
    { value: "+100", label: "إشارة مرورية" },
    { value: "6", label: "أنواع إشارات" },
    { value: "100%", label: "مجاني" },
]

export function Stats() {
    return (
        <section className="py-16 bg-primary text-primary-foreground">
            <div className="container px-4 text-center">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="space-y-2"
                        >
                            <h3 className="text-4xl md:text-5xl font-extrabold">{stat.value}</h3>
                            <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
