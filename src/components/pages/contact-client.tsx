"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Mail, Phone, Facebook, Linkedin, User } from "lucide-react"
import Link from "next/link"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "الاسم يجب أن يكون حرفين على الأقل",
    }),
    email: z.string().email({
        message: "بريد إلكتروني غير صالح",
    }),
    message: z.string().min(10, {
        message: "الرسالة يجب أن تكون 10 أحرف على الأقل",
    }),
})

export default function ContactClient() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        // In a real app, send to API. For now, just log or show alert.
        console.log(values)
        alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.")
        form.reset()
    }

    return (
        <div className="container py-20 px-4 md:px-6">
            <div className="text-center mb-16 space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-teal-400">
                    تواصل معنا
                </h1>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    نسعد بتلقي استفساراتكم واقتراحاتكم لتحسين تجربة التطبيق.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

                {/* Contact Info Side */}
                <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">واتساب</h3>
                                    <p className="text-sm text-muted-foreground mt-1" dir="ltr">01550035776</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild className="text-green-600 hover:text-green-700 hover:bg-green-50">
                                    <Link href="https://wa.me/+201550035776" target="_blank" rel="noopener noreferrer">مراسلة</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">البريد الإلكتروني</h3>
                                    <p className="text-sm text-muted-foreground mt-1">aawady01@gmail.com</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                                    <a href="mailto:aawady01@gmail.com">ارسل بريد</a>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                    <Facebook className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">فيسبوك</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Ahmed Alsayed</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50">
                                    <Link href="https://www.facebook.com/ahmed.mohamed.alsayed.554426/" target="_blank" rel="noopener noreferrer">زيارة</Link>
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="flex flex-col items-center justify-center p-6 text-center space-y-3">
                                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold">لينكد إن</h3>
                                    <p className="text-sm text-muted-foreground mt-1">Ahmed Alsayed</p>
                                </div>
                                <Button variant="ghost" size="sm" asChild className="text-cyan-600 hover:text-cyan-700 hover:bg-cyan-50">
                                    <Link href="https://www.linkedin.com/in/aawady01/" target="_blank" rel="noopener noreferrer">تواصل</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="bg-secondary/30 rounded-2xl p-8 text-center space-y-4">
                        <div className="w-20 h-20 rounded-full bg-primary mx-auto flex items-center justify-center">
                            <User className="w-10 h-10 text-primary-foreground" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">أحمد العوضي</h3>
                            <p className="text-primary font-medium">مطور التطبيق</p>
                            <p className="text-muted-foreground leading-relaxed text-sm">
                                &quot;ملاحظاتكم هي دافعنا للتطوير المستمر. أسعى دائماً لتقديم أفضل تجربة تعليمية في مصر.&quot;
                            </p>
                        </div>
                    </div>
                </div>

                {/* Contact Form Side */}
                <Card className="shadow-lg border-primary/10">
                    <CardHeader>
                        <CardTitle className="text-2xl">أرسل رسالة مباشرة</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                <FormField
                                    control={form.control}
                                    name="name"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>الاسم</FormLabel>
                                            <FormControl>
                                                <Input placeholder="اسمك الكريم" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>البريد الإلكتروني</FormLabel>
                                            <FormControl>
                                                <Input placeholder="name@example.com" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="message"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>الرسالة</FormLabel>
                                            <FormControl>
                                                <Textarea
                                                    placeholder="اكتب استفسارك أو اقتراحك هنا..."
                                                    className="min-h-[150px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button type="submit" size="lg" className="w-full text-lg">
                                    إرسال الرسالة
                                </Button>
                            </form>
                        </Form>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
