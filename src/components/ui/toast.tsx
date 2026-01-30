"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type ToastType = "success" | "error" | "info"

export interface ToastProps {
  message: string
  type?: ToastType
  visible: boolean
  onClose: () => void
  className?: string
}

const typeStyles: Record<ToastType, string> = {
  success: "bg-green-600 text-white dark:bg-green-700",
  error: "bg-destructive text-destructive-foreground",
  info: "bg-primary text-primary-foreground",
}

export function Toast({ message, type = "success", visible, onClose, className }: ToastProps) {
  React.useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 4500)
    return () => clearTimeout(t)
  }, [visible, onClose])

  if (!visible) return null

  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        "fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-xl px-6 py-4 shadow-lg transition-all duration-300 md:bottom-8",
        typeStyles[type],
        className
      )}
    >
      <p className="text-center font-medium">{message}</p>
    </div>
  )
}
