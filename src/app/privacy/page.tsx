export const metadata = {
    title: "سياسة الخصوصية",
    description: "سياسة الخصوصية وحماية البيانات في تطبيق أُسطاوى.",
};

export default function PrivacyPage() {
    return (
        <div className="container py-20 px-4 md:px-6 max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
                {/* Breadcrumb Schema */}
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
                                "name": "سياسة الخصوصية",
                                "item": "https://ostawy.com/privacy"
                            }]
                        })
                    }}
                />

                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    سياسة الخصوصية
                </h1>
                <p className="text-muted-foreground text-lg">
                    آخر تحديث: يناير 2026
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-right bg-background p-8 rounded-3xl border shadow-sm">

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        مرحباً بك في تطبيق أُسطاوى. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية جمع بياناتك واستخدامها وحمايتها عند استخدام تطبيقنا. باستخدام التطبيق، فإنك توافق على الممارسات الموضحة في هذه السياسة.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">2. البيانات التي نجمعها</h2>

                    <h3 className="text-xl font-semibold mb-2">2.1 البيانات المُخزنة محلياً</h3>
                    <p className="text-muted-foreground mb-4">يقوم التطبيق بتخزين البيانات التالية <strong className="text-foreground">محلياً على جهازك فقط</strong>:</p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li><strong>تقدم الاختبارات:</strong> نتائجك في الاختبارات ونسبة إتقانك للأسئلة.</li>
                        <li><strong>قائمة المفضلة:</strong> الإشارات والأسئلة التي أضفتها للمفضلة.</li>
                        <li><strong>إعدادات التطبيق:</strong> تفضيلاتك مثل الوضع الليلي والأصوات.</li>
                        <li><strong>إحصائياتك:</strong> عدد الأسئلة التي أجبت عليها ومستوى تقدمك.</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">2.2 البيانات التي لا نجمعها</h3>
                    <p className="text-muted-foreground mb-4">نحن لا نجمع أياً من البيانات التالية:</p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li>الاسم أو البريد الإلكتروني أو معلومات الاتصال.</li>
                        <li>الموقع الجغرافي.</li>
                        <li>معلومات الدفع أو البيانات المالية.</li>
                        <li>جهات الاتصال أو الرسائل.</li>
                        <li>الصور أو الملفات الشخصية.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">3. كيفية استخدام البيانات</h2>
                    <p className="text-muted-foreground mb-2">نستخدم البيانات المُخزنة محلياً للأغراض التالية:</p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li>تتبع تقدمك في التعلم وتحسين تجربتك.</li>
                        <li>عرض الأسئلة التي تحتاج لمراجعة (نظام التكرار المتباعد).</li>
                        <li>حفظ تفضيلاتك وإعداداتك.</li>
                        <li>عرض إحصائيات أدائك.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">4. مشاركة البيانات</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        <strong>نحن لا نشارك أي بيانات مع أطراف ثالثة.</strong> جميع بياناتك تبقى محلياً على جهازك ولا يتم إرسالها إلى أي خوادم خارجية.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">5. حذف البيانات</h2>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                        لديك الحق الكامل في حذف بياناتك في أي وقت عن طريق:
                    </p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li>مسح بيانات التطبيق من إعدادات جهازك.</li>
                        <li>إلغاء تثبيت التطبيق.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">6. تواصل معنا</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، يمكنك التواصل معنا عبر البريد الإلكتروني: <a href="mailto:aawady01@gmail.com" className="text-primary hover:underline">aawady01@gmail.com</a>
                    </p>
                </section>

            </div>
        </div>
    )
}
