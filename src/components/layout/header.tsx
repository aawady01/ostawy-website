"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { useActiveSection } from "@/hooks/use-active-section"
import { Button } from "@/components/ui/button"
// Start of Selection
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Moon, Phone, Sun } from "lucide-react"
import Image from "next/image"
import { useTheme } from "next-themes"
import { WHATSAPP_LINK, PLAY_STORE_LINK } from "@/lib/site-config"

const navItems = [
    { name: "الرئيسية", href: "/" },
    { name: "المميزات", href: "/#features" },
    { name: "عن التطبيق", href: "/#about" },
    { name: "الأسئلة الشائعة", href: "/faq" },
    { name: "تواصل معنا", href: "/contact" },
    { name: "معاينة التطبيق", href: "/app-preview" },
]

export function Header() {
    const scrolled = useScroll(50)
    const pathname = usePathname()
    const [isOpen, setIsOpen] = React.useState(false)
    const isHome = pathname === "/"
    const { resolvedTheme, setTheme } = useTheme()

    // Track active section for home page scrolling
    const { activeSection, setActiveSection } = useActiveSection(["features", "about", "download", "testimonials", "stats"])

    const handleNavClick = (href: string) => {
        setIsOpen(false)
        if (href.startsWith("/#")) {
            const id = href.replace("/#", "")
            setActiveSection(id)
        } else if (href === "/") {
            setActiveSection("")
        }
    }

    // Helper to determine if a link is active
    const isActive = (href: string) => {
        if (href === "/") return isHome && !activeSection
        if (href.startsWith("/#")) {
            const sectionId = href.replace("/#", "")
            return isHome && activeSection === sectionId
        }
        return pathname === href
    }

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                scrolled || !isHome
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm border-border/40"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-lg transition-transform group-hover:scale-105">
                        <Image
                            src="/images/icon.png"
                            alt="أُسطاوى"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-500 hidden sm:block">
                        أُسطاوى
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => handleNavClick(item.href)}
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                                isActive(item.href)
                                    ? "bg-primary/10 text-primary font-bold"
                                    : "text-foreground/80"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="hidden md:flex items-center gap-3">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        title={resolvedTheme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
                        aria-label={resolvedTheme === "dark" ? "تفعيل الوضع الفاتح" : "تفعيل الوضع الداكن"}
                    >
                        {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full text-green-600 hover:text-green-700 hover:bg-green-100/50 dark:hover:bg-green-900/20"
                        asChild
                    >
                        <Link href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" title="تواصل عبر واتساب" aria-label="تواصل عبر واتساب">
                            <Phone className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button
                        variant="default"
                        className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                        asChild
                    >
                        <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" aria-label="تحميل التطبيق من Google Play">
                            تحميل التطبيق
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden" aria-label="فتح القائمة">
                            <Menu className="w-6 h-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetTitle className="text-right mb-4 font-bold text-xl">القائمة الرئيسية</SheetTitle>
                        <div className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => handleNavClick(item.href)}
                                    className={cn(
                                        "text-lg font-medium px-4 py-3 rounded-lg transition-colors hover:bg-muted",
                                        isActive(item.href)
                                            ? "bg-primary/10 text-primary font-bold"
                                            : "text-foreground/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-6 flex gap-3">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full shrink-0"
                                    onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                    aria-label={resolvedTheme === "dark" ? "الوضع الفاتح" : "الوضع الداكن"}
                                >
                                    {resolvedTheme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                                </Button>
                                <Button className="flex-1 rounded-full" size="lg" asChild>
                                    <Link href={PLAY_STORE_LINK} target="_blank" rel="noopener noreferrer" aria-label="تحميل التطبيق من Google Play">
                                        تحميل التطبيق مجاناً
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    )
}
