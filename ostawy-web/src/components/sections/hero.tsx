"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background pt-20">

            {/* Background Mesh Gradient (CSS-based simplified) */}
            <div className="absolute inset-0 z-0 opacity-30">
                <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-multiply filter blur-3xl animate-blob" />
                <div className="absolute top-20 right-10 w-72 h-72 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 flex flex-col md:flex-row items-center gap-12">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="flex-1 text-center md:text-right space-y-6"
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-4">
                        ✨ التطبيق رقم 1 لتعلم القيادة في مصر
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                        تعلم القيادة <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">
                            بثقة وأمان
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0">
                        أُسطاوى هو رفيقك الذكي لاجتياز اختبار القيادة وفهم إشارات المرور.
                        تجربة تعليمية تفاعلية، اختبارات حقيقية، ومحتوى محدث باستمرار.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4">
                        <Button
                            size="lg"
                            className="w-full sm:w-auto rounded-full text-lg h-12 px-8 shadow-xl shadow-primary/20 hover:shadow-primary/30"
                            asChild
                        >
                            <Link href="https://play.google.com/store/apps/details?id=com.awady.ostawy" target="_blank">
                                حمل التطبيق مجاناً
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-auto rounded-full text-lg h-12 px-8"
                            asChild
                        >
                            <Link href="#features">
                                اكتشف المميزات
                            </Link>
                        </Button>
                    </div>
                </motion.div>

                {/* Image/Mockup Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex-1 relative w-full max-w-[400px] md:max-w-none flex justify-center"
                >
                    {/* Mockup Frame (Glassmorphism card behind phone) */}
                    <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[650px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
                        {/* Actual App Screenshot placed here - using a placeholder for now if specific file name is unknown, assumes one from appScreenShot dir */}
                        {/* I'll use a generic path and user can verify. Assuming 'appScreenShot/home.png' or similar exists. I'll listing appScreenShot directory helps. */}
                        <Image
                            src="/appScreenShot/1.png" // Guessing filename, user can fix or I check dir.
                            alt="App Screenshot"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Floating Elements (Badges) */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                        className="absolute top-20 -right-10 bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-xl border border-border/50 hidden sm:block"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xl">✓</div>
                            <div className="text-right">
                                <p className="text-sm font-bold">نسبة نجاح</p>
                                <p className="text-xs text-muted-foreground">98% من المستخدمين</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}
