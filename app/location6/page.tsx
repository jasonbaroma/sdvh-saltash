"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/locations/callington-country-road.jpg",
    alt: "White rental van on a farmland route near Callington with hedgerows and patchwork fields",
  };

  return (
    <HomePage
      currentLocationLabel="Callington"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Callington"
      heroDescription="Need Vehicle Hire in Callington? We arrange cars, vans, minibuses and trucks for everyday travel, moving jobs, business use and longer journeys across Cornwall and beyond."
      serviceAreasTitle="Covering Callington and nearby routes"
      serviceAreasDescription="We support Callington and the surrounding area with flexible vehicle hire for local residents, businesses and customers heading across southeast Cornwall and into Devon."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Practical vehicle hire for Callington journeys"
      infoContentSectionIntro="Hiring in Callington often comes down to convenience. Some customers need a reliable car for a few days, others need a van for moving items, a minibus for group travel or a truck for heavier work. With good access to nearby towns and onward routes, flexible vehicle hire makes sense here."
      infoContentBlock1Title="Useful for local and cross-border travel"
      infoContentBlock1Body="Callington is well placed for journeys toward Saltash, Launceston and Plymouth, so hiring a vehicle can make short-term travel much easier. A car works well for routine trips, while a van or larger vehicle can suit property moves, site work or scheduled deliveries."
      infoContentBlock2Title="A simpler way to start the hire"
      infoContentBlock2Body="For customers in Callington, delivery and collection can be a practical option when the day is already full. Instead of fitting collection around other plans, you can have the vehicle brought closer to where the journey starts and returned just as efficiently."
      infoContentBlock3Title="Choose the vehicle around the job"
      infoContentBlock3Body="Because Callington sits near key routes between Cornwall and Devon, the right vehicle depends on what the trip involves. Small cars suit day-to-day driving, while vans, minibuses and trucks are better for loads, teams, equipment or larger family travel."
      bottomCtaTitle="Book vehicle hire in Callington"
      bottomCtaDescription="From local errands to longer journeys across Cornwall and Devon, we can help arrange the right hire vehicle for Callington customers."
      secondaryCtaTitle="Discuss your Callington trip"
      secondaryCtaDescription="Tell us what you need to carry, how many people are travelling and where the route starts, and we will help you find a suitable option."
      faqs={[
        { question: "Can you deliver a hire vehicle to Callington?", answer: "Yes, delivery and collection can often be arranged in and around Callington, which is useful if you are short on time or want the vehicle brought to your home or workplace." },
        { question: "Is one-way hire available from Callington?", answer: "Yes, one-way hire may be available depending on the vehicle and route. It is best to ask about your collection and return points when you book." },
        { question: "Can I take a Callington hire vehicle abroad?", answer: "In many cases, yes. European travel options depend on the vehicle and destination, so this should be confirmed before the hire starts." },
        { question: "What kinds of vehicles can I hire in Callington?", answer: "We cover a broad range including cars, vans, minibuses and trucks, so whether you need something for a house move, business job or family journey, there are practical options." },
        { question: "What do I need when collecting my vehicle?", answer: "Bring your driving licence, your booking details and anything else requested at confirmation. Requirements can vary slightly by vehicle type." },
      ]}
    />
  );
}
