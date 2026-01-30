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
                يبدو أنك ضللت الطريق. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
                لا تقلق، يمكنك العودة للرئيسية أو تحميل التطبيق.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" className="rounded-full px-8">
                    <Link href="/">
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
                </Button>
            </div>
        </div>
    )
}
