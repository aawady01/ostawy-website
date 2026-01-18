'use client' // Error components must be Client Components

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error)
    }, [error])

    return (
        <div className="flex flex-col items-center justify-center min-h-[70vh] text-center space-y-6 px-4">
            <h2 className="text-3xl font-bold text-red-500">حدث خطأ ما!</h2>
            <p className="text-muted-foreground max-w-md">
                واجهنا مشكلة غير متوقعة. يرجى المحاولة مرة أخرى لاحقاً.
            </p>
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                إعادة المحاولة
            </Button>
        </div>
    )
}
