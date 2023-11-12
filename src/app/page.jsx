import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { ExtraFeatures } from "@/components/ExtraFeatures"
// import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"
import {Clients} from "@/components/Clients"
export const metadata = {
  title: "Recharger — Tailwind CSS Landing page Template",
  description: "A beautifully crafted landing page template for your next SaaS.",
}

export default function Home() {
  return (
    <>
      <Header />
      
      <Hero />
      <Clients/>
      <PrimaryFeatures />
      <SecondaryFeatures />
      <ExtraFeatures />
      {/* <Testimonials /> */}

    
      <Footer />
    </>
  )
}
