"use client"

import clsx from "clsx"
import {
  ChatBubbleLeftRightIcon,


  DocumentTextIcon,

} from "@heroicons/react/24/outline"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { ScrollReveal } from "./ScrollReveal"
import { SpotlightCard } from "./SpotlightCard"

function FeatureCard({ children, className }) {
  return <SpotlightCard className={clsx("p-8", className)}>{children}</SpotlightCard>
}

function FeatureCardThumbnail({ children }) {
  return <div className="flex items-center justify-center gap-4 py-6">{children}</div>
}

function FeatureCardBody({ children }) {
  return <div className="mt-4">{children}</div>
}

function FeatureCardTitle({ children }) {
  return <div className="text-lg text-white">{children}</div>
}

function FeatureCardDescription({ children }) {
  return <p className="mt-4 text-sm font-light leading-relaxed text-white/75">{children}</p>
}

function DocumentsFeature({ className }) {
  const dots = new Array(9)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-white/10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
</svg>

        </div>

        <div className="w-[6.5rem] overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:6s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <ChatBubbleLeftRightIcon className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Customized Creativity</FeatureCardTitle>
        <FeatureCardDescription>
        Developing personalized content that captivates and connects with audiences
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ResponsesFeature({ className }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-white/10 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
</svg>

          
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          <ChatBubbleLeftRightIcon className="relative h-8 w-8 fill-cyan-400/10 stroke-[1] text-cyan-400" />
        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
          <DocumentTextIcon className="relative h-8 w-8 fill-teal-400/10 stroke-[1] text-teal-400" />
        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Targeted Promotion</FeatureCardTitle>
        <FeatureCardDescription>
        Utilizing optimized platforms to elevate reach and engagement
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

function ReferencesFeature({ className }) {
  const dots = new Array(3)

  return (
    <FeatureCard className={className}>
      <FeatureCardThumbnail>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-white/10  text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

        </div>
        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-white/10  text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
          
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-green-400/10 text-green-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
</svg>

        </div>

        <div className="w-9 overflow-hidden">
          <div className="flex w-max animate-marquee justify-end [animation-direction:reverse] [animation-duration:2s]">
            {[...dots, ...dots].map((dot, index) => (
              <div key={index} className="px-1">
                <div className="h-1 w-1 shrink-0 rounded-full bg-white/40"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 shadow">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="relative h-8 w-8 fill-violet-400/10  text-violet-400">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

        </div>
      </FeatureCardThumbnail>

      <FeatureCardBody>
        <FeatureCardTitle>Result-driven Refinement</FeatureCardTitle>
        <FeatureCardDescription>
        Analyzing data to refine strategies and amplify success.
        </FeatureCardDescription>
      </FeatureCardBody>
    </FeatureCard>
  )
}

export function PrimaryFeatures() {
  return (
    <div id="overview" className="scroll-mt-8 py-8 lg:py-16">
      <ScrollReveal once={true} trigger="middle" className="[--duration:500ms]">
        {(isActive) => (
          <SectionWrapper>
            <SectionHeading>
              <SectionBadge>Our Process</SectionBadge>

              <SectionTitle>
              Where Innovation 
                <SectionTitleFade>
                  {' '} Meets
                  <br />
                Conversion
                </SectionTitleFade>
              </SectionTitle>

              <SectionDescription>
              Discover our unique process that transforms creative concepts into measurable results
                <br className="hidden lg:block" />
                {/* Just ask and retrieve the information you need, all in a simple chat. */}
              </SectionDescription>
            </SectionHeading>

            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
              <DocumentsFeature
                className={clsx(
                  " transition-all delay-150 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ResponsesFeature
                className={clsx(
                  " transition-all delay-300 duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
              <ReferencesFeature
                className={clsx(
                  " transition-all delay-[450ms] duration-[--duration]",
                  !isActive ? "translate-y-8 opacity-0" : "",
                )}
              />
            </div>
          </SectionWrapper>
        )}
      </ScrollReveal>
    </div>
  )
}
