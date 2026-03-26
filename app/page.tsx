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
      <Navbar />
      <main>
        <div className="relative overflow-hidden">
          <DottedSurface />
          <Hero />
          <LogoBar />
        </div>
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
