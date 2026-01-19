"use client"

import { Button } from "@/components/ui/button"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

export function Hero() {
    const targetRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"],
    })

    const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const opacityBackground = useTransform(scrollYProgress, [0, 1], [1, 0.5])

    return (
        <section ref={targetRef} className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">

            {/* Dynamic Background with Parallax */}
            <motion.div
                style={{ y: yBackground, opacity: opacityBackground }}
                className="absolute inset-0 z-0"
            >
                <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-background" />
                <div className="absolute top-20 left-[10%] w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-40 right-[10%] w-96 h-96 bg-teal-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-[30%] w-96 h-96 bg-yellow-300/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ opacity: 0.1 }} />
            </motion.div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex-1 text-center md:text-right space-y-8"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium backdrop-blur-sm"
                    >
                        <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
                        ✨ التطبيق رقم 1 لتعلم القيادة في مصر
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                        تعلم القيادة <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-teal-500 to-teal-400 animate-gradient-x">
                            بثقة وأمان
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                        أُسطاوى هو رفيقك الذكي لاجتياز اختبار القيادة وفهم إشارات المرور.
                        تجربة تعليمية تفاعلية، اختبارات حقيقية، ومحتوى محدث باستمرار.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 pt-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto rounded-full text-lg h-14 px-10 shadow-xl shadow-primary/25 hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                            asChild
                        >
                            <Link href="https://play.google.com/store/apps/details?id=com.awady.ostawy" target="_blank" rel="noopener noreferrer">
                                حمل التطبيق مجاناً
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto rounded-full text-lg h-14 px-8 border-primary/20 hover:bg-primary/5 hover:text-primary transition-all duration-300"
                            asChild
                        >
                            <Link href="#features">
                                اكتشف المميزات
                            </Link>
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="w-14 h-14 rounded-full text-green-600 hover:text-green-700 hover:bg-green-100/50 border border-border/50 shadow-sm hidden sm:inline-flex"
                            asChild
                        >
                            <Link href="https://chat.whatsapp.com/ExsampleGroupLink" target="_blank" rel="noopener noreferrer" title="انضم لجروب الواتساب">
                                <span className="sr-only">واتساب</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            </Link>
                        </Button>
                    </div>

                    {/* Small Trust Proof */}
                    <div className="pt-6 flex items-center justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                        <div className="flex -space-x-3 space-x-reverse">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-gray-200 overflow-hidden">
                                    {/* Placeholder avatars - in real app use real images */}
                                    {/* <Image src={...} /> */}
                                </div>
                            ))}
                        </div>
                        <p>انضم لأكثر من <span className="font-bold text-foreground">10,000+</span> متعلم</p>
                    </div>
                </motion.div>

                {/* Image/Mockup Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 1, delay: 0.2, type: "spring" }}
                    className="flex-1 relative w-full max-w-[450px] md:max-w-none flex justify-center perspective-1000"
                >
                    <motion.div
                        animate={{ y: [0, -15, 0] }}
                        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                        className="relative z-20"
                    >
                        {/* Mockup Frame (Glassmorphism card behind phone) */}
                        <div className="relative w-[300px] h-[600px] sm:w-[340px] sm:h-[680px] bg-black rounded-[3.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden ring-1 ring-white/10">
                            {/* Reflection */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-white/10 to-transparent z-10 pointer-events-none" />

                            <Image
                                src="/appScreenShot/Screenshot_20260118_115422.jpg"
                                alt="واجهة تطبيق أُسطاوى - اختبار القيادة وإشارات المرور"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Floating Elements (Badges) with Glassmorphism */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                        className="absolute top-32 -right-4 sm:-right-12 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 pr-6 rounded-2xl shadow-xl border border-white/20 dark:border-white/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-green-100/80 flex items-center justify-center text-green-600 text-2xl shadow-sm">✓</div>
                            <div className="text-right">
                                <p className="text-sm font-bold text-foreground">اجتياز الاختبار</p>
                                <p className="text-xs text-muted-foreground font-medium">من المحاولة الأولى</p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-40 -left-4 sm:-left-12 z-30 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md p-4 pl-6 rounded-2xl shadow-xl border border-white/20 dark:border-white/10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="text-right">
                                <p className="text-sm font-bold text-foreground">بنك أسئلة</p>
                                <p className="text-xs text-muted-foreground font-medium">محدث 2024</p>
                            </div>
                            <div className="w-12 h-12 rounded-full bg-amber-100/80 flex items-center justify-center text-amber-600 text-2xl shadow-sm">📚</div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

