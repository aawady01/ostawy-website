"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { motion } from "framer-motion"
import { BookOpen, CheckCircle2, Shield, Trophy } from "lucide-react"

const features = [
    {
        title: "بنك أسئلة شامل",
        description: "أكثر من 500 سؤال محدث يغطي كافة جوانب اختبار القيادة النظري في مصر.",
        icon: BookOpen,
        className: "md:col-span-2",
        delay: 0.1
    },
    {
        title: "اختبارات تجريبية",
        description: "حاكي بيئة الاختبار الحقيقي مع مؤقت ونتيجة فورية لتقييم مستواك.",
        icon: Trophy,
        className: "md:col-span-1 bg-gradient-to-br from-primary to-teal-600 text-primary-foreground",
        delay: 0.2
    },
    {
        title: "موسوعة الإشارات",
        description: "شرح مفصل لكافة علامات المرور (تحذيرية، إلزامية، إرشادية) بالصور.",
        icon: Shield,
        className: "md:col-span-1",
        delay: 0.3
    },
    {
        title: "تتبع التقدم",
        description: "راقب تطور مستواك وإحصائيات إجاباتك لتعرف نقاط ضعفك وتقويها.",
        icon: CheckCircle2,
        className: "md:col-span-2",
        delay: 0.4
    },
]

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
}

export function Features() {
    return (
        <section id="features" className="py-24 bg-gradient-to-b from-secondary/40 via-background to-secondary/20 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

            <div className="container px-4 md:px-6 relative z-10">
                <MotionSection className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                        لماذا تختار أُسطاوى؟
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
                        صمم خصيصاً ليجعلك سائقاً محترفاً وعارفاً بقواعد المرور، وليس فقط لاجتياز الاختبار.
                    </p>
                </MotionSection>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]"
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            variants={item}
                            className={`${feature.className || ""}`}
                        >
                            <Card className={`group h-full hover:shadow-xl transition-all duration-300 border-border/50 hover:-translate-y-2 hover:border-primary/30 overflow-hidden relative ${feature.className?.includes("bg-gradient") ? "border-none" : "bg-card/50 backdrop-blur-sm"}`}>

                                {/* Hover Glow Effect */}
                                {!feature.className?.includes("bg-gradient") && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                )}

                                <CardHeader>
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${feature.className?.includes("bg-gradient") ? "bg-white/20 text-white" : "bg-primary/10 text-primary"}`}>
                                        <feature.icon className="w-6 h-6" />
                                    </div>
                                    <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className={`text-lg leading-relaxed ${feature.className?.includes("bg-gradient") ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
