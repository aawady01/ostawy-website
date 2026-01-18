"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Car, CheckCircle2, Trophy, Shield, Zap } from "lucide-react"

const features = [
    {
        title: "بنك أسئلة شامل",
        description: "أكثر من 500 سؤال محدث يغطي كافة جوانب اختبار القيادة النظري في مصر.",
        icon: BookOpen,
        className: "md:col-span-2",
    },
    {
        title: "اختبارات تجريبية",
        description: "حاكي بيئة الاختبار الحقيقي مع مؤقت ونتيجة فورية لتقييم مستواك.",
        icon: Trophy,
        className: "md:col-span-1 bg-primary text-primary-foreground",
    },
    {
        title: "موسوعة الإشارات",
        description: "شرح مفصل لكافة علامات المرور (تحذيرية، إلزامية، إرشادية) بالصور.",
        icon: Shield,
        className: "md:col-span-1",
    },
    {
        title: "تتبع التقدم",
        description: "راقب تطور مستواك وإحصائيات إجاباتك لتعرف نقاط ضعفك وتقويها.",
        icon: CheckCircle2,
        className: "md:col-span-2",
    },
    // {
    //   title: "وضع بدون إنترنت",
    //   description: "تعلم في أي وقت وأي مكان دون الحاجة لاتصال بالإنترنت.",
    //   icon: Zap,
    //   className: "md:col-span-3",
    // },
]

export function Features() {
    return (
        <section id="features" className="py-20 bg-secondary/30">
            <div className="container px-4 md:px-6">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                        لماذا تختار أُسطاوى؟
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        صمم خصيصاً ليجعلك سائقاً محترفاً وعارفاً بقواعد المرور، وليس فقط لاجتياز الاختبار.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {features.map((feature, index) => (
                        <Card
                            key={index}
                            className={`group hover:shadow-lg transition-all duration-300 border-border/50 hover:-translate-y-1 ${feature.className || ""}`}
                        >
                            <CardHeader>
                                <feature.icon className={`w-10 h-10 mb-2 ${feature.className?.includes("bg-primary") ? "text-white" : "text-primary"}`} />
                                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className={`${feature.className?.includes("bg-primary") ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                                    {feature.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
