"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[]) {
    const [activeSection, setActiveSection] = useState<string>("")

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        sectionIds.forEach((id) => {
            const element = document.getElementById(id)
            if (element) {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                setActiveSection(id)
                            }
                        })
                    },
                    {
                        rootMargin: "-20% 0px -50% 0px", // Trigger when section is near middle/top
                        threshold: 0.1,
                    }
                )
                observer.observe(element)
                observers.push(observer)
            }
        })

        return () => {
            observers.forEach((observer) => observer.disconnect())
        }
    }, [sectionIds])

    return activeSection
}
