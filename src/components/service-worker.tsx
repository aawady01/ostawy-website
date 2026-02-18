"use client"

import { useEffect } from "react"

export function ServiceWorkerRegistration() {
  useEffect(() => {
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return
    }

    const registerServiceWorker = async () => {
      try {
        const registration = await navigator.serviceWorker.register("/sw.js", {
          scope: "/",
        })

        console.log("ServiceWorker registered:", registration.scope)

        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener("statechange", () => {
              if (newWorker.state === "installed" && navigator.serviceWorker.controller) {
                console.log("New content available, please refresh.")
              }
            })
          }
        })
      } catch (error) {
        console.error("ServiceWorker registration failed:", error)
      }
    }

    registerServiceWorker()
  }, [])

  return null
}
