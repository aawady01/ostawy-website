"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Breadcrumbs } from "@/components/ui/breadcrumbs"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useCallback, useEffect } from "react"
import { X, ChevronRight, ChevronLeft, ZoomIn } from "lucide-react"
import { Button } from "@/components/ui/button"

// Data mapping based on app-preview.html content
const screens = [
    {
        category: "Home",
        title: "الشاشة الرئيسية",
        description: "الواجهة الرئيسية لتطبيق أُسطاوى، بوابتك لتعلم إشارات المرور المصرية. تحتوي على 6 أقسام رئيسية وعلامات متنوعة.",
        image: "Screenshot_20260118_115422.jpg",
        tags: ["6 أقسام", "+250 إشارة"],
        badgeColor: "bg-teal-600"
    },
    {
        category: "Signs",
        title: "قائمة علامات المنع",
        description: "استعرض قائمة شاملة من علامات المنع في قانون المرور المصري مثل ممنوع الوقوف وممنوع الدوران.",
        image: "Screenshot_20260118_115500.jpg",
        tags: ["قانون المرور", "علامات المنع"],
        badgeColor: "bg-red-600"
    },
    {
        category: "Signs",
        title: "تفاصيل الإشارة",
        description: "شرح تفصيلي لكل إشارة مرور، بما في ذلك المعنى والغرامة وإرشادات السلامة.",
        image: "Screenshot_20260118_115523.jpg",
        tags: ["شرح تفصيلي", "غرامات"],
        badgeColor: "bg-red-500"
    },
    {
        category: "Signs",
        title: "علامات الإرشاد",
        description: "دليلك الكامل لعلامات الإرشاد مثل المستشفيات ومحطات الوقود.",
        image: "Screenshot_20260118_115603.jpg",
        tags: ["إرشادية", "خدمات"],
        badgeColor: "bg-blue-600"
    },
    {
        category: "Signs",
        title: "علامات الإلزام",
        description: "تعلم علامات الإلزام الزرقاء التي يجب اتباعها إجبارياً.",
        image: "Screenshot_20260118_115712.jpg",
        tags: ["إلزامية", "إجباري"],
        badgeColor: "bg-blue-700"
    },
    {
        category: "Quiz",
        title: "إعداد الاختبار",
        description: "خصص اختبارك باختيار عدد الأسئلة (10، 20، 30) ونوع الاختبار.",
        image: "Screenshot_20260118_115745.jpg",
        tags: ["تخصيص", "محاكاة"],
        badgeColor: "bg-purple-600"
    },
    {
        category: "Quiz",
        title: "اختبار التحذير",
        description: "تدرب على علامات التحذير بنظام أسئلة اختيار من متعدد.",
        image: "Screenshot_20260118_120127.jpg",
        tags: ["تحذيرية", "MCQ"],
        badgeColor: "bg-purple-500"
    },
    {
        category: "Quiz",
        title: "اختبار المنع",
        description: "تحدي نفسك في علامات المنع وحاول الحصول على الدرجة النهائية.",
        image: "Screenshot_20260118_120400.jpg",
        tags: ["تحدي", "درجات"],
        badgeColor: "bg-red-700"
    },
    {
        category: "Results",
        title: "النتائج والتقييم",
        description: "احصل على نتيجتك فوراً مع تحليل للأداء ونسبة النجاح.",
        image: "Screenshot_20260118_120206.jpg",
        tags: ["تحليل", "نتائج فورية"],
        badgeColor: "bg-green-600"
    },
    {
        category: "Results",
        title: "مراجعة الأخطاء",
        description: "راجع أخطاءك واعرف الإجابة الصحيحة لضمان عدم تكرارها.",
        image: "Screenshot_20260118_120238.jpg",
        tags: ["تصحيح", "تعلم"],
        badgeColor: "bg-orange-500"
    },
    {
        category: "Theory",
        title: "بنك الأسئلة",
        description: "مكتبة شاملة لأكثر من 500 سؤال نظري من اختبار المرور.",
        image: "Screenshot_20260118_120637.jpg",
        tags: ["نظري", "+500 سؤال"],
        badgeColor: "bg-emerald-600"
    },
    {
        category: "Theory",
        title: "تفاصيل السؤال",
        description: "شرح وافٍ لكل سؤال مع صور توضيحية لفهم القواعد.",
        image: "Screenshot_20260118_120800.jpg",
        tags: ["شرح", "صور"],
        badgeColor: "bg-emerald-500"
    },
    {
        category: "Exam",
        title: "الامتحان الشامل",
        description: "محاكاة كاملة لاختبار القيادة النظري تشمل الإشارات والأسئلة النظرية.",
        image: "Screenshot_20260118_120855.jpg",
        tags: ["محاكاة", "شامل"],
        badgeColor: "bg-indigo-600"
    }
]

export default function AppPreviewClient() {
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

    const openLightbox = (index: number) => setSelectedImageIndex(index)
    const closeLightbox = () => setSelectedImageIndex(null)

    const showNext = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation()
        setSelectedImageIndex((prev) => (prev !== null ? (prev + 1) % screens.length : null))
    }, [])

    const showPrev = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation()
        setSelectedImageIndex((prev) => (prev !== null ? (prev - 1 + screens.length) % screens.length : null))
    }, [])

    // Handle keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return
            if (e.key === "Escape") closeLightbox()
            if (e.key === "ArrowRight") showPrev() // RTL: Right is previous visually
            if (e.key === "ArrowLeft") showNext()  // RTL: Left is next visually
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [selectedImageIndex, showNext, showPrev])

    return (
        <div className="container py-20 px-4 md:px-6">
            <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "معاينة التطبيق" }]} className="mb-8 justify-center md:justify-start" />
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    معاينة التطبيق
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    جولة بصرية في شاشات تطبيق أُسطاوى. استعرض الواجهات، الاختبارات، والمحتوى التعليمي قبل التحميل.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {screens.map((screen, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full overflow-hidden border-border/50 hover:shadow-xl transition-all duration-300 group bg-card/50 backdrop-blur-sm">
                            <CardHeader className="text-center pb-2">
                                <div className="flex justify-center mb-4">
                                    <Badge className={`${screen.badgeColor} hover:${screen.badgeColor} text-white px-3 py-1 text-sm`}>
                                        {screen.title}
                                    </Badge>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-6">

                                {/* Phone Mockup Container */}
                                <div
                                    className="relative mx-auto w-[220px] aspect-[9/19] rounded-[2.5rem] border-[8px] border-gray-900 shadow-2xl overflow-hidden bg-black cursor-pointer group-hover:scale-[1.02] transition-transform"
                                    onClick={() => openLightbox(index)}
                                >
                                    {/* Dynamic Island */}
                                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-full z-20"></div>

                                    {/* Overlay Icon */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 z-30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                                        <ZoomIn className="text-white w-10 h-10 drop-shadow-md" />
                                    </div>

                                    <div className="relative w-full h-full">
                                        <Image
                                            src={`/appScreenShot/${screen.image}`}
                                            alt={screen.title}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        />
                                    </div>

                                    {/* Reflection overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none z-10 rounded-[2rem]"></div>
                                </div>

                                <div className="text-center space-y-3">
                                    <p className="text-muted-foreground text-sm leading-relaxed min-h-[60px]">
                                        {screen.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 justify-center">
                                        {screen.tags.map((tag, i) => (
                                            <span key={i} className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Lightbox Overlay */}
            <AnimatePresence>
                {selectedImageIndex !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
                        onClick={closeLightbox}
                    >
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute top-4 right-4 text-white/70 hover:text-white hover:bg-white/10"
                            onClick={closeLightbox}
                        >
                            <X className="w-8 h-8" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 hidden md:flex"
                            onClick={showNext}
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </Button>

                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white hover:bg-white/10 hidden md:flex"
                            onClick={showPrev}
                        >
                            <ChevronRight className="w-10 h-10" />
                        </Button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-sm aspect-[9/19] max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={`/appScreenShot/${screens[selectedImageIndex].image}`}
                                alt={screens[selectedImageIndex].title}
                                fill
                                className="object-contain rounded-xl shadow-2xl"
                                sizes="100vw"
                                quality={100}
                            />
                        </motion.div>

                        <div className="absolute bottom-8 left-0 right-0 text-center text-white pointer-events-none">
                            <h3 className="text-xl font-bold mb-1">{screens[selectedImageIndex].title}</h3>
                            <p className="text-white/60 text-sm">{selectedImageIndex + 1} / {screens.length}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
