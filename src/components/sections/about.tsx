"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Image from "next/image"

export function About() {
    return (
        <section id="about" className="py-20 bg-background overflow-hidden relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 -mr-40 -mt-40 w-80 h-80 rounded-full bg-primary/5 blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-80 h-80 rounded-full bg-teal-400/5 blur-3xl opacity-50" />

            <div className="container px-4 md:px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Content */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <div className="space-y-4">
                            <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5 px-4 py-1 text-sm">
                                عن التطبيق
                            </Badge>
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                رفيقك الذكي نحو <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-teal-400">
                                    قيادة آمنة ومحترفة
                                </span>
                            </h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                انطلق تطبيق &quot;أُسطاوى&quot; برؤية واضحة: جعل تعلم القيادة وفهم قواعد المرور تجربة ممتعة وسهلة ومتاحة للجميع مجاناً.
                            </p>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                نؤمن بأن الطريق الآمن يبدأ بسائق واعي. لذا قمنا بجمع وتطوير محتوى تعليمي شامل يغطي كل ما تحتاجه، من الإشارات وحتى اختبارات المرور، في تطبيق واحد سهل الاستخدام.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="flex items-center gap-3 bg-secondary/30 p-4 rounded-xl border border-secondary transition-colors hover:border-primary/20">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Star className="w-5 h-5 fill-current" />
                                </div>
                                <div>
                                    <h4 className="font-bold">جودة عالية</h4>
                                    <p className="text-sm text-muted-foreground">محتوى دقيق ومُراجع</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 bg-secondary/30 p-4 rounded-xl border border-secondary transition-colors hover:border-primary/20">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Users className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold">مجتمع متفاعل</h4>
                                    <p className="text-sm text-muted-foreground">آلاف المستخدمين السعداء</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-4 flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="rounded-full px-8 text-lg" asChild>
                                <Link href="/contact">
                                    تواصل معنا
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" className="rounded-full px-8 text-lg" asChild>
                                <Link href="#features">
                                    استكشف المميزات
                                </Link>
                            </Button>
                        </div>
                    </div>


                    {/* Image/Stats */}
                    <div className="order-1 lg:order-2 relative flex justify-center">
                        <div className="relative w-full max-w-[500px] aspect-square">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-teal-400/20 blur-[60px] rounded-full transform scale-90" />

                            {/* 3D Illustration */}
                            <div className="relative z-10 w-full h-full transform hover:scale-105 transition-transform duration-700 ease-in-out">
                                <Image
                                    src="/images/about-illustration.png"
                                    alt="تعليم قيادة آمن وذكي"
                                    fill
                                    className="object-contain drop-shadow-2xl"
                                    priority
                                />
                            </div>

                            {/* Floating cards */}
                            <div className="absolute -bottom-6 -left-6 z-20 p-6 glass-card rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl animate-float">
                                <Image
                                    src="/images/badge-icon.png" // Assuming a new image for the badge
                                    alt="الإصدار الأحدث"
                                    width={48} // Adjust size as needed
                                    height={48} // Adjust size as needed
                                    className="mb-2"
                                />
                                <div className="text-muted-foreground font-medium text-sm">الإصدار الأحدث</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
