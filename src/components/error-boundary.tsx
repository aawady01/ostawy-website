"use client"

import { Component, ReactNode } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }

      return (
        <div className="min-h-[50vh] flex items-center justify-center p-8">
          <div className="text-center space-y-4 max-w-md">
            <div className="text-6xl">😕</div>
            <h2 className="text-2xl font-bold text-foreground">
              عذراً، حدث خطأ ما
            </h2>
            <p className="text-muted-foreground">
              نعمل على إصلاح هذه المشكلة. يرجى المحاولة مرة أخرى أو العودة للصفحة الرئيسية.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Button onClick={this.handleReset}>
                إعادة المحاولة
              </Button>
              <Button variant="outline" asChild>
                <Link href="/">
                  الصفحة الرئيسية
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export { ErrorBoundary }

export function GlobalErrorFallback({ 
  error, 
  reset 
}: { 
  error: Error & { digest?: string }
  reset: () => void 
}) {
  return (
    <div className="min-h-[50vh] flex items-center justify-center p-8">
      <div className="text-center space-y-4 max-w-md">
        <div className="text-6xl">😕</div>
        <h2 className="text-2xl font-bold text-foreground">
          حدث خطأ!
        </h2>
        <p className="text-muted-foreground">
          {error.message || "عذراً، حدث خطأ غير متوقع"}
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Button onClick={reset}>
            إعادة المحاولة
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              الصفحة الرئيسية
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
