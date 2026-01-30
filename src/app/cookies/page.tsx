import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata = {
  title: "سياسة ملفات تعريف الارتباط",
  description: "كيفية استخدام تطبيق أُسطاوى وموقعه لملفات تعريف الارتباط (الكوكيز).",
}

export default function CookiesPage() {
  return (
    <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
      <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "سياسة الكوكيز" }]} className="mb-8 justify-center md:justify-start" />
      <div className="text-center mb-12 space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
          سياسة ملفات تعريف الارتباط
        </h1>
        <p className="text-muted-foreground text-lg">
          آخر تحديث: يناير 2026
        </p>
      </div>

      <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-right bg-background p-8 rounded-3xl border shadow-sm">
        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة</h2>
          <p className="text-muted-foreground leading-relaxed">
            قد يستخدم موقع أُسطاوى أو تطبيقنا أدوات تحليلات (مثل Google Analytics) لتحسين تجربة المستخدم وفهم كيفية استخدام الموقع. توضح هذه الصفحة كيفية استخدامنا لملفات تعريف الارتباط (الكوكيز) وما يمكنك فعله حيالها.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">2. ما نستخدمه</h2>
          <p className="text-muted-foreground mb-2">في حال تفعيل التحليلات (اختياري):</p>
          <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
            <li><strong>تحليلات الزيارات:</strong> لمعرفة عدد الزوار ومصادر الزيارات دون تحديد هوية شخصية.</li>
            <li><strong>ملفات مؤقتة:</strong> قد تُخزَّن كوكيز ضرورية لتشغيل الموقع أو تفضيلاتك (مثل الوضع الفاتح/الداكن).</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">3. تفضيلاتك</h2>
          <p className="text-muted-foreground leading-relaxed">
            يمكنك ضبط إعدادات المتصفح لرفض أو حذف ملفات تعريف الارتباط. قد يؤثر ذلك على بعض ميزات الموقع (مثل تذكر الوضع الليلي).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-primary mb-4">4. تواصل معنا</h2>
          <p className="text-muted-foreground leading-relaxed">
            لأي استفسار حول الخصوصية أو الكوكيز: <a href="mailto:aawady01@gmail.com" className="text-primary hover:underline">aawady01@gmail.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}
