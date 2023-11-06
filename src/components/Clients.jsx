"use client"

import { useEffect } from "react"
import Image from "next/image"
import Particles from "./particles"

import Client01 from "@/images/client-01.svg"
import Client02 from "@/images/client-02.svg"
import Client03 from "@/images/client-03.svg"
import Client04 from "@/images/client-04.svg"
import Client05 from "@/images/client-05.svg"
import Client06 from "@/images/client-06.svg"
import Client07 from "@/images/client-07.svg"
import Client08 from "@/images/client-08.svg"
import Client09 from "@/images/client-09.svg"
import Client10 from "@/images/client-10.png"

// Import Swiper
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper.min.css'
Swiper.use([Autoplay])

export function Clients() {
  useEffect(() => {
    const carousel = new Swiper(".clients-carousel", {
      slidesPerView: "auto",
      spaceBetween: 64,
      centeredSlides: true,
      loop: true,
      speed: 5000,
      noSwiping: true,
      noSwipingClass: "swiper-slide",
      autoplay: {
        delay: 0,
        disableOnInteraction: true
      }
    })
  }, [])

  return (
    <section>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* Particles animation */}
        <div className="absolute inset-0 max-w-6xl mx-auto px-4 sm:px-6">
          <Particles className="absolute inset-0 -z-10" quantity={5} />
        </div>

        <div className="py-12 md:py-16">
          <div className="overflow-hidden">
            {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
            {/* * Custom styles in src/css/additional-styles/theme.scss */}
            <div className="clients-carousel swiper-container relative before:absolute before:inset-0 before:w-32 before:z-10 before:pointer-events-none before:bg-gradient-to-r before:from-zinc-90 after:absolute after:inset-0 after:left-auto after:w-32 after:z-10 after:pointer-events-none after:bg-gradient-to-l after:from-zinc-950">
              <div className="swiper-wrapper !ease-linear select-none items-center">
                {/* Carousel items */}
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client01}
                    className="mt-0.5"
                    alt="Client 01"
                    width={190}
                    height={51}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client02}
                    alt="Client 02"
                    width={100}
                    height={25}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-1"
                    src={Client03}
                    alt="Client 03"
                    width={150}
                    height={33}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client04}
                    alt="Client 04"
                    width={85}
                    height={36}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client05}
                    alt="Client 05"
                    width={86}
                    height={18}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client06}
                    alt="Client 06"
                    width={78}
                    height={34}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    src={Client07}
                    alt="Client 07"
                    width={83}
                    height={23}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  
                  <Image
                    src={Client10}
                    alt="Client 08"
                    width={110}
                    height={26}
                  />
                </div>
                <div className="swiper-slide !w-auto">
                  <Image
                    className="mt-2"
                    src={Client09}
                    alt="Client 09"
                    width={92}
                    height={28}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
