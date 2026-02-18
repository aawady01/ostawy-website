import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PLAY_STORE_LINK } from "@/lib/site-config"
import { trackDownload } from "@/lib/analytics"
import { Download, Home, HelpCircle, MessageCircle } from "lucide-react"

export const metadata = {
    title: "الصفحة غير موجودة | أُسطاوى",
    description: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
}

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] bg-background text-center px-4">
            <h1 className="text-9xl font-extrabold text-primary/20 select-none" aria-hidden>404</h1>
            <h2 className="text-3xl md:text-5xl font-bold -mt-10 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                عذراً، هذه الصفحة غير موجودة
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mb-4">
                لا تقلق! يمكنك تحميل التطبيق الآن والبدء في تعلم إشارات المرور.
            </p>
            
            {/* App Download CTA */}
            <div className="bg-gradient-to-r from-primary/10 to-teal-500/10 rounded-3xl p-6 mb-8 max-w-md">
                <div className="flex items-center justify-center gap-2 mb-3">
                    <Download className="w-5 h-5 text-primary" />
                    <span className="font-bold text-lg">حمّل التطبيق الآن</span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                    أكثر من 500 سؤال تدريبي • 250 إشارة مرورية • مجاني تماماً
                </p>
                <Button 
                    asChild 
                    size="lg" 
                    className="w-full rounded-xl h-12 text-base shadow-lg hover:shadow-xl transition-all"
                >
                    <Link 
                        href={PLAY_STORE_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => trackDownload("404_page")}
                    >
                        <Download className="mr-2 w-5 h-5" />
                        تحميل من Google Play
                    </Link>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                    متوفر الآن على Google Play
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
                <Button asChild size="lg" className="rounded-full px-6">
                    <Link href="/">
                        <Home className="mr-2 w-4 h-4" />
                        الصفحة الرئيسية
                    </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full px-6">
                    <Link href="/faq">
                        <HelpCircle className="mr-2 w-4 h-4" />
                        الأسئلة الشائعة
                    </Link>
                </Button>
                <Button asChild variant="ghost" size="lg" className="rounded-full px-6">
                    <Link href="/contact">
                        <MessageCircle className="mr-2 w-4 h-4" />
                        تواصل معنا
                    </Link>
                </Button>
            </div>
        </div>
    )
}
