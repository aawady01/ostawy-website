"use client"

import { useState, useEffect, useRef } from "react"

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("")
    const isClicked = useRef(false)
    const timeoutId = useRef<NodeJS.Timeout | null>(null)

    // Method to manually set active section (e.g. on click) and lock observer temporarily
    const setSection = (id: string) => {
        setActiveSection(id)
        isClicked.current = true

        if (timeoutId.current) clearTimeout(timeoutId.current)

        timeoutId.current = setTimeout(() => {
            isClicked.current = false
        }, 1000) // Lock for 1 second during scroll animation
    }

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isClicked.current) return

                // Find the entry that is most visible
                const visibleSection = entries.find((entry) => entry.isIntersecting)

                if (visibleSection) {
                    setActiveSection(visibleSection.target.id)
                }
            },
            {
                rootMargin: "-40% 0px -60% 0px", // Strict middle-of-screen threshold
                threshold: 0,
            }
        )

        sectionIds.forEach((id) => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [sectionIds])

    return { activeSection, setActiveSection: setSection }
}
