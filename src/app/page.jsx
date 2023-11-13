import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { PrimaryFeatures } from "@/components/PrimaryFeatures"
import { SecondaryFeatures } from "@/components/SecondaryFeatures"
import { ExtraFeatures } from "@/components/ExtraFeatures"
// import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"
import {Clients} from "@/components/Clients"
export const metadata = {
  title: "Martino Media — Take your ads to the next level",
  description: "tbd meta description",
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
