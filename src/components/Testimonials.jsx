import Image from "next/image"

import {
  SectionWrapper,
  SectionBadge,
  SectionHeadingHighlighted,
  SectionTitle,
  SectionTitleFade,

} from "./Section"
import { SpotlightCard } from "./SpotlightCard"

const testimonials = [
  {
    name: "Stevie Wonder",
    title: "Lead pussy, Not Blind",
    image:
      "https://media.licdn.com/dms/image/D5603AQHkUqN0BPLaqQ/profile-displayphoto-shrink_800_800/0/1679691279863?e=1701907200&v=beta&t=RuCITvN0lprbd2YV-9A4HDtbFHgS3KfDRzg46FIn9C0",
    body: "I love crack cocaine. Spencer was a great plug",
  },
  {
    name: "Joseph Oliver",
    title: "Lead Beast, Amazon",
    image:
      "https://media.licdn.com/dms/image/D5603AQHkUqN0BPLaqQ/profile-displayphoto-shrink_800_800/0/1679691279863?e=1701907200&v=beta&t=RuCITvN0lprbd2YV-9A4HDtbFHgS3KfDRzg46FIn9C0",
    body: "Spencer made me cum. I think im in love with him now?",
  },
  {
    name: "Carti",
    title: "Legal Advisor, Stanford",
    image:
      "https://media.licdn.com/dms/image/D5603AQHkUqN0BPLaqQ/profile-displayphoto-shrink_800_800/0/1679691279863?e=1701907200&v=beta&t=RuCITvN0lprbd2YV-9A4HDtbFHgS3KfDRzg46FIn9C0",
    body: "Near perfect expereience. sadly, spencer abducted my children and sold them on craigslist",
  },
  {
    name: "Dirtysoap",
    title: "Researcher, Hustlers University",
    image:
      "https://media.licdn.com/dms/image/D5603AQHkUqN0BPLaqQ/profile-displayphoto-shrink_800_800/0/1679691279863?e=1701907200&v=beta&t=RuCITvN0lprbd2YV-9A4HDtbFHgS3KfDRzg46FIn9C0",
    body: "Lazybird lowkey ass at fortnite, not even gonna cap.",
  },
]

export function Testimonials() {
  return (
    <div className="overflow-hidden py-8 lg:py-16">
      <SectionWrapper>
        <SectionHeadingHighlighted>
          <SectionBadge>What others say</SectionBadge>

          <SectionTitle>
            Trusted by the experts,
            <br />
            <SectionTitleFade>used by the leaders</SectionTitleFade>
          </SectionTitle>

        
        </SectionHeadingHighlighted>

        <div className="mt-8 [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)] lg:mt-32">
          <div className="flex w-max animate-marquee items-stretch [--duration:50s] hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="px-2.5">
                <SpotlightCard className="relative h-full w-[28rem] p-8">
                  <div className="pb-8 font-light text-white/75">{testimonial.body}</div>

                  <div className="mt-auto flex items-center gap-4">
                    <Image
                      alt={testimonial.name}
                      src={testimonial.image}
                      width="40"
                      height="40"
                      className="h-10 w-10 rounded-full"
                    />

                    <div className="flex flex-col">
                      <div className="text-white">{testimonial.name}</div>

                      <div className="text-sm text-white/50">{testimonial.title}</div>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  )
}
