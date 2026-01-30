import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata = {
  title: "سجل التحديثات",
  description: "آخر التحديثات والإصدارات في تطبيق أُسطاوى.",
}

const changelog = [
  {
    version: "2026.1",
    date: "يناير 2026",
    items: [
      "تحديث بنك الأسئلة بأكثر من 500 سؤال نظري.",
      "تحسين واجهة الاختبارات التجريبية.",
      "إضافة نظام المراجعة الذكية (التكرار المتباعد).",
      "تحسين الأداء واستقرار التطبيق.",
    ],
  },
  {
    version: "2025.2",
    date: "ديسمبر 2025",
    items: [
      "إطلاق موسوعة الإشارات المرورية (أكثر من 250 إشارة).",
      "دعم الوضع الليلي.",
      "تحسين تجربة المستخدم على الشاشات الكبيرة.",
    ],
  },
  {
    version: "2025.1",
    date: "نوفمبر 2025",
    items: [
      "الإصدار الأول من تطبيق أُسطاوى.",
      "اختبارات تجريبية لإشارات المرور.",
      "قائمة المفضلة وتتبع التقدم.",
    ],
  },
]

export default function ChangelogPage() {
  return (
    <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "سجل التحديثات" }]} className="mb-8 justify-center md:justify-start" />
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
          سجل التحديثات
        </h1>
        <p className="text-muted-foreground text-lg">
          آخر التحديثات والإصدارات في تطبيق أُسطاوى.
        </p>
      </div>

      <div className="space-y-10 text-right">
        {changelog.map((release) => (
          <article
            key={release.version}
            className="bg-background border border-border rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-2xl font-bold text-primary">{release.version}</span>
              <span className="text-muted-foreground">— {release.date}</span>
            </div>
            <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
              {release.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  )
}
