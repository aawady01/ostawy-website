import { GA_MEASUREMENT_ID } from "./site-config"

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function initGA() {
  if (!GA_MEASUREMENT_ID) return

  if (typeof window === "undefined") return
  
  if (window.gtag) return

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title: document.title,
    page_location: window.location.href
  })
}

export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined" || !GA_MEASUREMENT_ID || !window.gtag) return
  window.gtag("event", eventName, params)
}

export function trackPageView(pagePath: string) {
  trackEvent("page_view", { 
    page_path: pagePath,
    page_title: document.title
  })
}

export function trackDownload(source: string) {
  trackEvent("app_download", { 
    source,
    app_name: "Ostawy",
    platform: "Android"
  })
}

export function trackWhatsApp(source: string) {
  trackEvent("whatsapp_click", { 
    source,
    phone: "+201550035776"
  })
}

export function trackContactSubmit(success: boolean) {
  trackEvent("contact_form_submit", { 
    success: success ? "true" : "false"
  })
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("cta_click", {
    cta_name: ctaName,
    location
  })
}

export function trackScrollDepth(depth: number) {
  trackEvent("scroll_depth", {
    depth: depth.toString(),
    page_path: typeof window !== "undefined" ? window.location.pathname : ""
  })
}

export function trackAppPreviewView(screenName: string) {
  trackEvent("app_preview_view", {
    screen_name: screenName
  })
}

export function trackFAQView(question: string) {
  trackEvent("faq_view", {
    question: question
  })
}

export function trackTimeOnPage(seconds: number) {
  trackEvent("time_on_page", {
    seconds: seconds,
    page_path: typeof window !== "undefined" ? window.location.pathname : ""
  })
}

export function trackExternalLink(url: string, text: string) {
  trackEvent("external_link_click", {
    url,
    link_text: text
  })
}
