import {
  SectionWrapperRounded,
  SectionBadge,
  SectionHeading,
  SectionTitle,
  SectionTitleFade,
  SectionDescription,
} from "./Section"
import { BaseSpotlightCard } from "./SpotlightCard"

function FeatureCard({ children }) {
  return (
    <div className="lg:rounded-3xl lg:border lg:border-white/10 lg:bg-white/2.5 lg:p-2">
      <BaseSpotlightCard
        size="640"
        from="rgba(255,255,255,0.10)"
        className="overflow-hidden rounded-2xl border border-white/10 bg-white/2.5 shadow-md shadow-zinc-950/50">
        {children}
      </BaseSpotlightCard>
    </div>
  )
}

function SuggestionsFeature() {
  const suggestions = [
    "Reach New Customers",
    "Credibility",
    "Relatibility",
    "Builds Community & Customer Loyalty",
  ]

  return (
    <FeatureCard>
      <div className="p-6 lg:p-8">
        <div className="text-lg text-white">Why your business should be on social media</div>

        <p className="mt-4 font-light leading-relaxed text-white/75">
       By consistently posting content, interacting with your customers, and providing the highest quality version of your offer, you&apos;ll naturally reach more potential customers.
        </p>
      </div>

      <div className="mt-2 pl-6 md:pl-8">
        <div className="flex w-full flex-col items-start gap-3 rounded-tl-xl border-white/10 bg-white/5 p-3">
          {suggestions.map((suggestion, index) => (
            <div key={index} className="rounded-lg bg-white/10 px-3 py-2 text-xs font-light tracking-wide text-white">
              {suggestion}
            </div>
          ))}
        </div>
      </div>
    </FeatureCard>
  )
}

function AnalysisFeature() {
  const metrics = [
    {
      title: "Average Earn per $1.",
      progress: 75,
      value: "$6.50",
    },
    {
      title: "Our Clients",
      progress: 100,
      value: "90+",
    },
    {
      title: "Cost per customer",
      progress: 30,
      value: "$2.15",
    },
    {
      title: "Sexiness",
      progress: 100,
      value: "100%",
    },
  ]

  return (
    <FeatureCard>
      <div className="px-6 md:px-8">
        <div className="flex w-full flex-col items-start gap-2 rounded-b-xl border-white/10 bg-white/5 p-3 lg:gap-3">
          {metrics.map((metric, index) => (
            <div key={index} className="w-full p-1 lg:p-2">
              <div className="flex w-full items-center justify-between gap-3 lg:grid lg:grid-cols-5">
                <div className="text-xs font-light text-white/75 lg:col-span-2">{metric.title}</div>
                
                <div className="col-span-2 hidden items-center lg:flex">
                  <div className="w-full rounded-full bg-white/25">
                    <div style={{ width: `${metric.progress}%` }} className="h-2 rounded-full bg-white/75"></div>
                  </div>
                </div>

                <div className="text-right text-xs font-light text-white lg:col-span-1">{metric.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-2 p-6 md:p-8">
        <div className="text-lg text-white">Detailed analysis</div>

        <p className="mt-4 font-light leading-relaxed text-white/75">
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </p>
      </div>
    </FeatureCard>
  )
}

export function SecondaryFeatures() {
  return (
    <SectionWrapperRounded>
      <SectionHeading>
        <SectionBadge>Features</SectionBadge>

        <SectionTitle>
          Love talking to machines?
          <br />
          <SectionTitleFade>We&apos;ve got you covered</SectionTitleFade>
        </SectionTitle>

        <SectionDescription>
          Get insightful suggestions based on content you provide.
          <br className="hidden lg:block" />
          Extract and calculate key metrics from your reports instantly.
        </SectionDescription>
      </SectionHeading>

      <div className="mt-8 grid gap-4 lg:mt-16 lg:grid-cols-2 lg:gap-8">
        <SuggestionsFeature />

        <AnalysisFeature />
       
      </div>
    </SectionWrapperRounded>
  )
}
