"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MotionSection } from "@/components/ui/motion-section"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

const testimonials = [
    {
        name: "أحمد محمد",
        role: "طالب جامعي",
        content: "التطبيق ممتاز جداً وساعدني أنجح في اختبار القيادة من أول مرة. الأسئلة كانت مطابقة للاختبار الحقيقي.",
        rating: 5,
    },
    {
        name: "سارة علي",
        role: "موظفة",
        content: "تصميم التطبيق رائع وسهل الاستخدام. شرح الإشارات واضح جداً ومفيد حتى بعد الحصول على الرخصة.",
        rating: 5,
    },
    {
        name: "محمود حسن",
        role: "سائق جديد",
        content: "كنت خايف جداً من الاختبار النظري، بس بعد ما جربت الاختبارات التجريبية في أسطاوى، دخلت الامتحان وأنا واثق 100%.",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="py-24 bg-background">
            <div className="container px-4 md:px-6">
                <MotionSection className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-foreground">
                        ماذا يقول مستخدمونا؟
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        انضم لآلاف السائقين الذين وثقوا في أسطاوى لرحلة تعلم القيادة.
                    </p>
                </MotionSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <MotionSection
                            key={index}
                            delay={index * 0.1}
                            className="h-full"
                        >
                            <Card className="h-full bg-secondary/20 hover:bg-secondary/40 transition-colors border-border/50">
                                <CardHeader className="pb-2">
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"}`} />
                                        ))}
                                    </div>
                                    <p className="text-lg leading-relaxed text-foreground/90 italic">
                                        "{testimonial.content}"
                                    </p>
                                </CardHeader>
                                <CardContent className="pt-4 flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                        {testimonial.name[0]}
                                    </div>
                                    <div>
                                        <p className="font-bold text-foreground">{testimonial.name}</p>
                                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </MotionSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
