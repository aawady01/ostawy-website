import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 px-4">
            <h2 className="text-9xl font-extrabold text-primary/20">404</h2>
            <h1 className="text-3xl font-bold">الصفحة غير موجودة</h1>
            <p className="text-muted-foreground text-lg max-w-md">
                عذراً، الصفحة التي تحاول الوصول إليها قد تكون حُذفت أو تم تغيير رابطها.
            </p>
            <Button asChild size="lg">
                <Link href="/">
                    العودة للرئيسية
                </Link>
            </Button>
        </div>
    )
}
