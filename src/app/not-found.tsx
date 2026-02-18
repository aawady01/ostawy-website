import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PLAY_STORE_LINK } from "@/lib/site-config"

export const metadata = {
    title: "الصفحة غير موجودة | أُسطاوى",
    description: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background text-center px-4">
            <h1 className="text-9xl font-extrabold text-primary/20 select-none" aria-hidden>404</h1>
            <h2 className="text-3xl md:text-5xl font-bold -mt-10 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                عذراً، الطريق مسدود!
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-8">
<<<<<<< Updated upstream
                يبدو أنك ضللت الطريق. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
                لا تقلق، يمكنك العودة للرئيسية أو تحميل التطبيق.
=======
                لا تقلق! يمكنك العودة للرئيسية أو تحميل التطبيق الآن.
>>>>>>> Stashed changes
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/">
<<<<<<< Updated upstream
                        العودة للرئيسية
                    </Link>
                </Button>
                <Button asChild variant="default" size="lg" className="rounded-full px-8">
                    <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer">
                        تحميل التطبيق
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/faq">الأسئلة الشائعة</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/contact">
                        الإبلاغ عن مشكلة
                    </Link>
=======
                        الصفحة الرئيسية
                    </Link>
                </Button>
                <Link 
                    href={PLAY_STORE_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 py-2"
                >
                    تحميل التطبيق
                </Link>
                <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                    <Link href="/faq">الأسئلة الشائعة</Link>
>>>>>>> Stashed changes
                </Button>
            </div>
        </div>
    )
}
