"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { ChevronUp } from "lucide-react"
import { useScroll } from "@/hooks/use-scroll"

const SCROLL_THRESHOLD = 400

export function ScrollToTop() {
    const scrolled = useScroll(SCROLL_THRESHOLD)
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => setMounted(true), [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    if (!mounted || !scrolled) return null

    return (
        <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 left-6 z-40 h-12 w-12 rounded-full shadow-lg md:bottom-8 md:left-8 md:h-14 md:w-14 border-border bg-background/90 backdrop-blur-sm hover:bg-primary/10 hover:text-primary hover:border-primary/30 transition-all"
            onClick={scrollToTop}
            aria-label="العودة للأعلى"
            title="العودة للأعلى"
        >
            <ChevronUp className="h-6 w-6 md:h-7 md:w-7" />
        </Button>
    )
}
