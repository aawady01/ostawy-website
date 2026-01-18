import { Header, Footer } from "@/components/layout"
import { Hero, Features, Stats, DownloadCTA, About } from "@/components/sections"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <About />
        <Stats />
        <DownloadCTA />
      </main>
      <Footer />
    </div>
  )
}

