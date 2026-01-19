"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useScroll } from "@/hooks/use-scroll"
import { Button } from "@/components/ui/button"
// Start of Selection
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"
import Image from "next/image"

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
                            className={cn(
                                "px-4 py-2 rounded-full text-sm font-medium transition-colors hover:bg-primary/10 hover:text-primary",
                                pathname === item.href
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
                        className="rounded-full text-green-600 hover:text-green-700 hover:bg-green-100/50"
                        asChild
                    >
                        <Link href="https://chat.whatsapp.com/ExsampleGroupLink" target="_blank" rel="noopener noreferrer" title="انضم لجروب الواتساب">
                            <Phone className="w-5 h-5" />
                        </Link>
                    </Button>
                    <Button
                        variant="default"
                        className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all hover:-translate-y-0.5"
                        asChild
                    >
                        <Link href="https://play.google.com/store/apps/details?id=com.awady.ostawy" target="_blank" rel="noopener noreferrer">
                            تحميل التطبيق
                        </Link>
                    </Button>
                </div>

                {/* Mobile Menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="w-6 h-6" />
                            <span className="sr-only">فتح القائمة</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetTitle className="text-right mb-4 font-bold text-xl">القائمة الرئيسية</SheetTitle>
                        <div className="flex flex-col gap-4 mt-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-lg font-medium px-4 py-3 rounded-lg transition-colors hover:bg-muted",
                                        pathname === item.href
                                            ? "bg-primary/10 text-primary font-bold"
                                            : "text-foreground/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="mt-8 px-4">
                                <Button className="w-full rounded-full" size="lg" asChild>
                                    <Link href="https://play.google.com/store/apps/details?id=com.awady.ostawy" target="_blank" rel="noopener noreferrer">
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
