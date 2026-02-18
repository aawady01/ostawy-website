"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Share2, Download, Star, Users, CheckCircle } from "lucide-react"
import { PLAY_STORE_LINK, APP_STATS } from "@/lib/site-config"
import { trackDownload, trackEvent } from "@/lib/analytics"

const SHARE_TEXT = "تطبيق أُسطاوى - تعلم إشارات المرور واختبار القيادة في مصر"

function shareWhatsApp() {
  const url = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + PLAY_STORE_LINK)}`
  window.open(url, "_blank", "noopener,noreferrer")
  trackEvent("share_app", { platform: "whatsapp" })
}

function shareTwitter() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PLAY_STORE_LINK)}`
  window.open(url, "_blank", "noopener,noreferrer")
  trackEvent("share_app", { platform: "twitter" })
}

export function DownloadCTA() {
    return (
        <section id="download" className="py-24 bg-gradient-to-b from-background to-primary/5">
            <div className="container px-4 text-center space-y-10">
                {/* Header */}
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">
                        حمّل التطبيق الآن
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        ابدأ رحلتك نحو إتقان إشارات المرور واجتياز اختبار رخصة القيادة بنجاح.
                    </p>
                </div>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg">+{APP_STATS.questionsCount}</p>
                            <p className="text-xs text-muted-foreground">سؤال تدريبي</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Star className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg">+{APP_STATS.signsCount}</p>
                            <p className="text-xs text-muted-foreground">إشارة مرورية</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                            <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-lg">10,000+</p>
                            <p className="text-xs text-muted-foreground">مستخدم</p>
                        </div>
                    </div>
                </div>

                {/* Download Button - Enhanced */}
                <div className="flex flex-col items-center gap-4">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto min-w-[280px] h-16 px-10 text-lg rounded-2xl shadow-2xl hover:shadow-primary/25 hover:shadow-2xl transition-all hover:-translate-y-2 bg-gradient-to-r from-primary to-teal-600 hover:from-primary/90 hover:to-teal-500"
                        asChild
                    >
                        <Link 
                            href={PLAY_STORE_LINK} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            onClick={() => trackDownload("cta_section")}
                        >
                            <Download className="mr-3 w-6 h-6" />
                            <div className="text-right">
                                <p className="text-xs opacity-80">حمّل الآن مجاناً</p>
                                <p className="font-bold">من Google Play</p>
                            </div>
                        </Link>
                    </Button>
                    
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        متاح بدون إنترنت • بدون إعلانات
                    </p>
                </div>

                {/* Share Section */}
                <div className="flex items-center justify-center gap-3 pt-4">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        شارك التطبيق مع أصدقائك:
                    </span>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full text-[#25D366] border-[#25D366]/50 hover:bg-[#25D366]/10" 
                        onClick={shareWhatsApp} 
                        aria-label="مشاركة عبر واتساب"
                    >
                        واتساب
                    </Button>
                    <Button 
                        variant="outline" 
                        size="sm" 
                        className="rounded-full" 
                        onClick={shareTwitter} 
                        aria-label="مشاركة عبر تويتر"
                    >
                        تويتر
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-2">
                    * سيتوفر قريباً على App Store
                </p>
            </div>
        </section>
    )
}
