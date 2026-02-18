import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  )
}

function CardSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

function HeroSkeleton() {
  return (
    <div className="min-h-[95vh] flex items-center justify-center pt-20 px-4">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48 rounded-full" />
            <Skeleton className="h-14 w-full" />
            <Skeleton className="h-14 w-3/4" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-2/3" />
            <div className="flex gap-4">
              <Skeleton className="h-14 w-40 rounded-full" />
              <Skeleton className="h-14 w-32 rounded-full" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="w-[300px] h-[600px] rounded-[3.5rem]" />
          </div>
        </div>
      </div>
    </div>
  )
}

function SectionSkeleton() {
  return (
    <section className="py-24">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <Skeleton className="h-12 w-64 mx-auto rounded-lg" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </section>
  )
}

function FeatureCardSkeleton() {
  return (
    <div className="rounded-xl border bg-card p-6 space-y-4 h-full">
      <Skeleton className="h-12 w-12 rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  )
}

function TestimonialSkeleton() {
  return (
    <div className="rounded-lg border bg-card p-6 space-y-4">
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-5 w-5 rounded" />
        ))}
      </div>
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-2/3" />
      <div className="flex items-center gap-4 pt-4">
        <Skeleton className="h-10 w-10 rounded-full" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  )
}

function AppPreviewSkeleton() {
  return (
    <div className="container py-20 px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 space-y-4">
            <Skeleton className="h-8 w-24 mx-auto rounded-full" />
            <Skeleton className="h-[400px] w-[220px] mx-auto rounded-[2.5rem]" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3 mx-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}

function FAQSkeleton() {
  return (
    <div className="container py-20 px-4">
      <div className="text-center mb-12 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="rounded-lg border bg-card p-4 space-y-3">
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ContactSkeleton() {
  return (
    <div className="container py-20 px-4">
      <div className="text-center mb-16 space-y-4">
        <Skeleton className="h-12 w-64 mx-auto" />
        <Skeleton className="h-6 w-96 mx-auto" />
      </div>
      <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="grid grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="rounded-lg border bg-card p-6 space-y-3">
              <Skeleton className="h-12 w-12 rounded-full mx-auto" />
              <Skeleton className="h-5 w-20 mx-auto" />
              <Skeleton className="h-4 w-24 mx-auto" />
            </div>
          ))}
        </div>
        <div className="rounded-lg border bg-card p-6 space-y-4">
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-24 w-full" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
    </div>
  )
}

function PageSkeleton() {
  return (
    <div className="min-h-screen">
      <Skeleton className="h-16 w-full" />
      <HeroSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <SectionSkeleton />
      <Skeleton className="h-64 w-full" />
    </div>
  )
}

export {
  Skeleton,
  CardSkeleton,
  HeroSkeleton,
  SectionSkeleton,
  FeatureCardSkeleton,
  TestimonialSkeleton,
  AppPreviewSkeleton,
  FAQSkeleton,
  ContactSkeleton,
  PageSkeleton,
}
