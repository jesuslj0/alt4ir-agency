import { DottedSurface } from "@/components/ui/dotted-surface"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Hero from "@/components/sections/Hero"
import LogoBar from "@/components/sections/LogoBar"
import Stats from "@/components/sections/Stats"
import Features from "@/components/sections/Features"
import HowItWorks from "@/components/sections/HowItWorks"
import Pricing from "@/components/sections/Pricing"
import Testimonials from "@/components/sections/Testimonials"
import FAQ from "@/components/sections/FAQ"
import CTABanner from "@/components/sections/CTABanner"

export default function Home() {
  return (
    <>
      <DottedSurface />
      <Navbar />
      <main>
        <Hero />
        {/* Transition divider */}
        <div className="relative h-px">
          <div className="absolute inset-x-0 -top-8 h-16 bg-gradient-to-b from-transparent via-violet-500/10 to-transparent" />
          <div className="absolute inset-x-1/4 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
        </div>
        <LogoBar />
        <Stats />
        <Features />
        <HowItWorks />
        <Pricing />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
