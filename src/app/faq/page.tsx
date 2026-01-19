
import FAQClient from "@/components/pages/faq-client"

export const metadata = {
    title: "الأسئلة الشائعة",
    description: "إجابات على الأسئلة الشائعة حول تطبيق أُسطاوى واختبارات المرور.",
};

export default function FAQPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [{
                            "@type": "ListItem",
                            "position": 1,
                            "name": "الرئيسية",
                            "item": "https://ostawy.com"
                        }, {
                            "@type": "ListItem",
                            "position": 2,
                            "name": "الأسئلة الشائعة",
                            "item": "https://ostawy.com/faq"
                        }]
                    })
                }}
            />
            <FAQClient />
        </>
    )
}
