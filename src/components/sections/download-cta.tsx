"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play, Share2 } from "lucide-react"
import { PLAY_STORE_LINK } from "@/lib/site-config"
import { trackDownload } from "@/lib/analytics"

const SHARE_TEXT = "تطبيق أُسطاوى - تعلم إشارات المرور واختبار القيادة في مصر"

function shareWhatsApp() {
  const url = `https://wa.me/?text=${encodeURIComponent(SHARE_TEXT + " " + PLAY_STORE_LINK)}`
  window.open(url, "_blank", "noopener,noreferrer")
}

function shareTwitter() {
  const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SHARE_TEXT)}&url=${encodeURIComponent(PLAY_STORE_LINK)}`
  window.open(url, "_blank", "noopener,noreferrer")
}

export function DownloadCTA() {
    return (
        <section id="download" className="py-20 bg-background">
            <div className="container px-4 text-center space-y-8">
                <div className="space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold">حمّل التطبيق الآن</h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        ابدأ رحلتك نحو إتقان إشارات المرور واجتياز اختبار رخصة القيادة بنجاح.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button
                        size="lg"
                        className="w-full sm:w-auto h-14 px-8 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
                        asChild
                    >
                        <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" onClick={() => trackDownload("cta_section")}>
                            <Play className="mr-2 w-5 h-5 fill-current" />
                            متوفر على Google Play
                        </Link>
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-3 pt-2">
                    <span className="text-sm text-muted-foreground flex items-center gap-2">
                        <Share2 className="w-4 h-4" />
                        شارك التطبيق:
                    </span>
                    <Button variant="outline" size="sm" className="rounded-full text-[#25D366] border-[#25D366]/50 hover:bg-[#25D366]/10" onClick={shareWhatsApp} aria-label="مشاركة عبر واتساب">
                        واتساب
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-full" onClick={shareTwitter} aria-label="مشاركة عبر تويتر">
                        تويتر
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                    * سيتوفر قريباً على App Store
                </p>
            </div>
        </section>
    )
}
