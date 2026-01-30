"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Play } from "lucide-react"
import { PLAY_STORE_LINK } from "@/lib/site-config"

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
                        <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer">
                            <Play className="mr-2 w-5 h-5 fill-current" />
                            متوفر على Google Play
                        </Link>
                    </Button>
                </div>

                <p className="text-sm text-muted-foreground pt-4">
                    * سيتوفر قريباً على App Store
                </p>
            </div>
        </section>
    )
}
