import { GA_MEASUREMENT_ID } from "@/lib/site-config"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || !window.gtag) return
  window.gtag("event", eventName, params)
}

export function trackDownload(source: string) {
  trackEvent("app_download", { source })
}

export function trackWhatsApp(source: string) {
  trackEvent("whatsapp_click", { source })
}

export function trackContactSubmit(success: boolean) {
  trackEvent("contact_form_submit", { success: success ? "true" : "false" })
}
