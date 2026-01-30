import { Breadcrumbs } from "@/components/ui/breadcrumbs"

export const metadata = {
    title: "حذف البيانات",
    description: "كيفية حذف بياناتك من تطبيق أُسطاوى.",
};

export default function DeleteDataPage() {
    return (
        <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <Breadcrumbs items={[{ label: "الرئيسية", href: "/" }, { label: "حذف البيانات" }]} className="mb-8 justify-center md:justify-start" />
            <div className="text-center mb-12 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    حذف البيانات
                </h1>
                <p className="text-muted-foreground text-lg">
                    تحكم كامل في خصوصيتك وبياناتك.
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-right bg-background p-8 rounded-3xl border shadow-sm">

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">ما البيانات التي نُخزنها؟</h2>
                    <p className="text-muted-foreground mb-4">
                        تطبيق أُسطاوى يُخزن البيانات التالية <strong className="text-foreground">محلياً على جهازك فقط</strong>:
                    </p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li>تقدم التعلم ونتائج الاختبارات.</li>
                        <li>قائمة الأسئلة والإشارات المفضلة.</li>
                        <li>تفضيلات التطبيق (مثل الوضع الليلي).</li>
                    </ul>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded mt-4">
                        <p className="text-blue-800 dark:text-blue-300 text-sm">
                            <strong>ملاحظة هامة:</strong> نحن لا نُخزن أي بيانات على خوادم خارجية. جميع بياناتك ملك لك وموجودة على هاتفك فقط.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">طرق حذف البيانات</h2>

                    <div className="space-y-6">
                        <div className="bg-secondary/30 p-6 rounded-xl border border-secondary">
                            <h3 className="text-xl font-bold mb-3">1. من إعدادات الجهاز (مُوصى به)</h3>
                            <ol className="list-decimal pr-6 space-y-2 text-muted-foreground marker:text-primary">
                                <li>اذهب إلى <strong>الإعدادات</strong> في هاتفك.</li>
                                <li>اختر <strong>التطبيقات</strong> وابحث عن &quot;أُسطاوى&quot;.</li>
                                <li>اضغط على <strong>التخزين</strong> ثم اختر <strong>مسح البيانات</strong> (Clear Data).</li>
                            </ol>
                        </div>

                        <div className="bg-secondary/30 p-6 rounded-xl border border-secondary">
                            <h3 className="text-xl font-bold mb-3">2. إلغاء تثبيت التطبيق</h3>
                            <p className="text-muted-foreground">
                                بمجرد مسح التطبيق من هاتفك، يتم حذف جميع البيانات المرتبطة به نهائياً بشكل فوري وتلقائي.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="bg-red-50 dark:bg-red-900/20 border-r-4 border-red-500 p-4 rounded">
                        <h4 className="font-bold text-red-700 dark:text-red-400 mb-2">تحذير</h4>
                        <p className="text-sm text-red-800 dark:text-red-300">
                            عملية الحذف نهائية ولا يمكن التراجع عنها. لا يمكن استرجاع البيانات بعد حذفها لأنها غير مُخزنة لدينا.
                        </p>
                    </div>
                </section>

            </div>
        </div>
    )
}
