"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Particles from "./particles"
import Highlighter, { HighlighterItem } from "./highlighter"

import CarouselImg01 from "../app/images/carousel-icon-01.svg"
import CarouselImg02 from "../app/images/carousel-icon-02.svg"
import CarouselImg03 from "../app/images/carousel-icon-03.svg"
import CarouselImg04 from "../app/images/carousel-icon-04.svg"
import CarouselImg05 from "../app/images/carousel-icon-05.svg"
import CarouselImg06 from "../app/images/carousel-icon-06.svg"


import { SectionBadge, SectionHeadingHighlighted, SectionTitleSmall } from "./Section"
// Import Swiper
import Swiper, { Navigation } from "swiper"
import 'swiper/swiper.min.css'
Swiper.use([Navigation])

export function ExtraFeatures() {
  const [swiperInitialized, setSwiperInitialized] = useState(false)

  useEffect(() => {
   new Swiper(".testimonials-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1
        },
        640: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 3
        }
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev"
      }
    })
    setSwiperInitialized(true)
  }, [])

  return (
   <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">
       
          <SectionHeadingHighlighted>
            <SectionBadge>Specialties</SectionBadge>

            <SectionTitleSmall>
              What I Offer
            </SectionTitleSmall>
          </SectionHeadingHighlighted>


          <div className="relative pt-5 before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-zinc-950 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-zinc-950 after:to-20%">
            <div className="testimonials-carousel swiper-container group">
              <Highlighter
                className="swiper-wrapper w-fit"
                refresh={swiperInitialized}
              >
                {/* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg01}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Instagram Network
                        </div>
                        <div className="text-slate-400 mb-3">
                        Harness the power of Instagram as your marketing agency&apos;s dynamic platform for targeted brand growth.
                                                </div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg02}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                         Instagram & Facebook Ads
                        </div>
                        <div className="text-slate-400 mb-3">
                        Elevate your brand&apos;s reach and impact through expert Instagram and Facebook paid marketing strategies.</div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg03}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Google Ads & Press Pieces
                        </div>
                        <div className="text-slate-400 mb-3">
                        Crafting comprehensive campaigns, we amplify your presence through Google Ads, and impactful Press Articles.

</div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg04}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Google SEO
                        </div>
                        <div className="text-slate-400 mb-3">
                        Unlocking your brand&apos;s potential, we optimize with Google SEO expertise, ensuring top-tier visibility.
                        </div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg05}
                        width={56}
                        height={56}
                        alt="Icon 05"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          Email Marketing
                        </div>
                        <div className="text-slate-400 mb-3">
                        Driving conversions and engagement, our agency pioneers growth through tested email marketing strategies.
                                                </div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-zinc-950 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true"
                    >
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-slate-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg06}
                        width={56}
                        height={56}
                        alt="Icon 05"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">
                          YouTube
                        </div>
                        <div className="text-slate-400 mb-3">
                        Transform viewers into customers by leveraging YouTube&apos;s power for impactful marketing success.
                                                                        </div>
                      </div>

                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
            
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-slate-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-slate-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
          
      </div>
      
            
</>  
)
}
