export const metadata = {
    title: "شروط الاستخدام",
    description: "الشروط والأحكام التي تحكم استخدام تطبيق أُسطاوى.",
};

export default function TermsPage() {
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
                                "name": "شروط الاستخدام",
                                "item": "https://ostawy.com/terms"
                            }]
                        })
                    }}
                />

                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    شروط الاستخدام
                </h1>
                <p className="text-muted-foreground text-lg">
                    آخر تحديث: يناير 2026
                </p>
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none space-y-8 text-right bg-background p-8 rounded-3xl border shadow-sm">

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">1. مقدمة والقبول</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        مرحباً بك في تطبيق <strong>أُسطاوى</strong>. باستخدامك للتطبيق، فإنك توافق على الالتزام بهذه الشروط والأحكام. إذا كنت لا توافق على هذه الشروط، يرجى عدم استخدام التطبيق.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">2. وصف الخدمة</h2>
                    <p className="text-muted-foreground mb-4">تطبيق أُسطاوى هو تطبيق تعليمي يهدف إلى:</p>
                    <ul className="list-disc pr-6 space-y-2 text-muted-foreground">
                        <li>تعليم إشارات المرور المصرية ومعانيها.</li>
                        <li>توفير اختبارات تدريبية لمحاكاة اختبار الكمبيوتر.</li>
                        <li>مساعدة المستخدمين على الاستعداد لاختبار رخصة القيادة.</li>
                    </ul>
                </section>

                <section>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-4 border-yellow-500 p-4 rounded mb-6">
                        <h4 className="font-bold text-yellow-700 dark:text-yellow-400 mb-2">إخلاء مسؤولية هام</h4>
                        <p className="text-sm text-yellow-800 dark:text-yellow-300">
                            المحتوى المقدم في التطبيق هو لأغراض تعليمية وتدريبية فقط. لا يُعتبر بديلاً عن الاختبارات الرسمية في إدارات المرور، ولا يضمن اجتياز الاختبار الفعلي.
                        </p>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">3. حقوق الملكية الفكرية</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        جميع المحتويات (التصميم، النصوص، الأسئلة) هي ملكية خاصة لمطور التطبيق ومحمية بموجب حقوق الملكية الفكرية. لا يُسمح بنسخ أو توزيع المحتوى دون إذن.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">4. حدود المسؤولية</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        لن يكون مطور التطبيق مسؤولاً عن أي خسائر أو أضرار ناتجة عن استخدام التطبيق، بما في ذلك عدم اجتياز اختبار القيادة أو فقدان البيانات المحلية.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-primary mb-4">5. التواصل</h2>
                    <p className="text-muted-foreground leading-relaxed">
                        لأي استفسارات حول هذه الشروط، يمكنك التواصل معنا عبر البريد الإلكتروني: <a href="mailto:aawady01@gmail.com" className="text-primary hover:underline">aawady01@gmail.com</a>
                    </p>
                </section>

            </div>
        </div>
    )
}
