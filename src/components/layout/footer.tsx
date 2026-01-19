import Link from "next/link"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-muted/30 border-t border-border mt-auto">
            <div className="container mx-auto px-4 py-12 md:py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 text-center md:text-right">

                    {/* Brand Column */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-2 mb-2">
                            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-sm">
                                <Image
                                    src="/images/icon.png"
                                    alt="أُسطاوى"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-500">
                                أُسطاوى
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed max-w-sm">
                            رفيقك الذكي لتعلم القيادة وإشارات المرور في مصر.
                            نقدم لك تجربة تعليمية شاملة وممتعة لضمان نجاحك في اختبار القيادة.
                        </p>
                        <div className="flex items-center gap-4 mt-2">
                            <Link href="https://www.facebook.com/ahmed.mohamed.alsayed.554426/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 shadow-sm border border-border">
                                <Facebook className="w-5 h-5" />
                            </Link>
                            <Link href="https://www.linkedin.com/in/aawady01/" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 shadow-sm border border-border">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="https://wa.me/+201550035776" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-background hover:bg-primary/10 hover:text-primary transition-colors hover:-translate-y-1 transform duration-300 shadow-sm border border-border">
                                <Phone className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-foreground">روابط سريعة</h3>
                        <ul className="flex flex-col gap-3">
                            <li>
                                <Link href="/#features" className="text-muted-foreground hover:text-primary transition-colors">
                                    مميزات التطبيق
                                </Link>
                            </li>
                            <li>
                                <Link href="/app-preview" className="text-muted-foreground hover:text-primary transition-colors">
                                    معاينة التطبيق
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                                    الأسئلة الشائعة
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                                    سياسة الخصوصية
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                                    شروط الاستخدام
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-lg text-foreground">تواصل معنا</h3>
                        <ul className="flex flex-col gap-4">
                            <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground group">
                                <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <Mail className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">aawady01@gmail.com</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground group">
                                <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <Phone className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm" dir="ltr">+20 155 003 5776</span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-3 text-muted-foreground group">
                                <div className="p-2 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors">
                                    <MapPin className="w-4 h-4 text-primary" />
                                </div>
                                <span className="text-sm">القاهرة، مصر</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center text-muted-foreground text-sm flex flex-col md:flex-row justify-between items-center gap-4">
                    <p>© {currentYear} تطبيق أُسطاوى. جميع الحقوق محفوظة.</p>
                    <p className="text-xs">
                        تم التطوير بواسطة <span className="font-bold text-primary">تطبيق أُسطاوى</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}
