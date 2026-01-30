"use client"

import { APP_STATS } from "@/lib/site-config"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

const faqs = [
    {
        question: "ما هو تطبيق أُسطاوى؟",
        answer: "تطبيق أُسطاوى هو تطبيق تعليمي مجاني يساعدك على تعلم جميع إشارات المرور المصرية (التحذيرية، المانعة، الإلزامية، الإرشادية، والأرضية)، التدرب على أسئلة اختبار الكمبيوتر في إدارة المرور، معرفة إجراءات استخراج وتجديد رخصة القيادة، وتتبع تقدمك وتحديد نقاط الضعف لتحسينها."
    },
    {
        question: "هل التطبيق مجاني؟",
        answer: "نعم! تطبيق أُسطاوى مجاني بالكامل ولا يتطلب أي اشتراك أو دفع. جميع المحتويات والميزات متاحة مجاناً."
    },
    {
        question: "هل يحتاج التطبيق إلى اتصال بالإنترنت؟",
        answer: "لا! يعمل التطبيق بالكامل بدون إنترنت. جميع الإشارات والأسئلة والمحتوى محفوظة داخل التطبيق، لذا يمكنك التعلم في أي وقت وأي مكان."
    },
    {
        question: "هل الأسئلة هي نفسها الموجودة في اختبار المرور الفعلي؟",
        answer: "الأسئلة في التطبيق مستوحاة من المنهج الرسمي وتغطي نفس المفاهيم والإشارات الموجودة في الاختبار الفعلي. لكنها ليست بالضرورة نفس الأسئلة الحرفية. التطبيق يُعدك جيداً للاختبار عن طريق فهم جميع الإشارات ومعانيها والتدرب على أنماط الأسئلة المختلفة."
    },
    {
        question: "كم عدد الإشارات والأسئلة في التطبيق؟",
        answer: `يحتوي التطبيق على أكثر من ${APP_STATS.signsCount} إشارة مرورية متنوعة وأكثر من ${APP_STATS.questionsCount} سؤال تدريبي، وتغطي ${APP_STATS.signCategories} فئات من الإشارات.`
    },
    {
        question: "ما هو نظام المراجعة الذكية؟",
        answer: "يستخدم التطبيق نظام التكرار المتباعد (Spaced Repetition) الذي يتتبع إجاباتك ويحسب نسبة إتقانك، ثم يعرض عليك الأسئلة التي تخطئ فيها بشكل متكرر لضمان حفظها."
    },
    {
        question: "هل يمكنني حفظ الإشارات المهمة؟",
        answer: "نعم، يمكنك إضافة أي إشارة أو سؤال إلى قائمة المفضلة للرجوع إليها بسهولة."
    },
    {
        question: "هل يعمل التطبيق على iPhone؟",
        answer: "حالياً التطبيق متاح فقط لأجهزة Android. نعمل على إصدار نسخة iOS في القريب العاجل إن شاء الله."
    },
    {
        question: "كيف أحذف بياناتي من التطبيق؟",
        answer: "يمكنك حذف بياناتك من إعدادات الجهاز (مسح بيانات التطبيق) أو بإلغاء تثبيت التطبيق."
    }
]

export default function FAQClient() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    }

    return (
        <div className="container py-20 px-4 md:px-6">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="text-center mb-12 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    الأسئلة الشائعة
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    إجابات على أكثر الأسئلة شيوعاً حول التطبيق واختبار القيادة
                </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16">
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-medium text-right">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground leading-relaxed text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>

            <div className="bg-secondary/20 rounded-2xl p-8 text-center max-w-2xl mx-auto border border-border/50">
                <h3 className="text-2xl font-bold mb-4">لم تجد إجابة سؤالك؟</h3>
                <p className="text-muted-foreground mb-6">
                    تواصل معنا مباشرة عبر البريد الإلكتروني أو وسائل التواصل الاجتماعي وسنرد عليك في أقرب وقت.
                </p>
                <Button asChild size="lg" className="rounded-full shadow-lg">
                    <Link href="/contact">
                        <MessageCircle className="ml-2 w-5 h-5" />
                        تواصل معنا
                    </Link>
                </Button>
            </div>
        </div>
    )
}
