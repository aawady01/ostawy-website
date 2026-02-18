import { Hero, Features, Stats, DownloadCTA, About, Testimonials } from "@/components/sections"
import { generateCompleteSchema } from "@/lib/schema"

export default function Home() {
  const jsonLd = generateCompleteSchema()

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <Features />
      <About />
      <Stats />
      <Testimonials />
      <DownloadCTA />
    </>
  )
}

