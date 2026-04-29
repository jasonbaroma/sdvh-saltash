"use client";

import { HomePage } from "@/components/home-page";

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpg",
    alt: "White rental van on a tree-lined country road outside Saltash in bright daylight",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire Saltash"
      heroDescription="Vehicle Hire Saltash for cars, vans, minibuses, and trucks. Ideal for local moves, business travel, deliveries, and longer UK journeys with flexible rental options."
      serviceAreasTitle="Vehicle hire across Saltash and nearby towns"
      serviceAreasDescription="Based around Saltash, we serve nearby towns across southeast Cornwall and routes into Plymouth and the wider South West with flexible self-drive vehicle hire."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Making vehicle hire work well in and around Saltash"
      infoContentSectionIntro="Saltash sits in a useful position for commuters, trades, home moves, and family travel, with quick links across the Tamar and easy access into both Cornwall and Devon. That makes vehicle hire a practical option for far more than just occasional trips."
      infoContentBlock1Title="Useful for cross-river travel"
      infoContentBlock1Body="Saltash works well as a practical base for crossing into Plymouth, heading deeper into Cornwall, or planning collections and drop-offs around the Tamar. Hiring the right vehicle can make those mixed local and regional journeys simpler."
      infoContentBlock2Title="Easier collections and returns"
      infoContentBlock2Body="If you are moving furniture, collecting materials, or organising business transport, delivery and collection can save time. That is especially helpful when parking, scheduling, or loading space is limited at the start or end of the hire."
      infoContentBlock3Title="Match the vehicle to the journey"
      infoContentBlock3Body="From compact cars for day-to-day travel to vans, minibuses, and trucks for bigger tasks, Saltash customers often need flexibility rather than a one-size-fits-all rental. Choosing the vehicle around the route and load usually makes the day run more smoothly."
      bottomCtaTitle="Book the right vehicle for Saltash"
      bottomCtaDescription="Tell us what you need to move, carry, or plan for, and we will help you find a suitable vehicle for the trip."
      secondaryCtaTitle="Talk through your hire options"
      secondaryCtaDescription="Let us know what you need to move, who is travelling and how long you need the vehicle for, and we will help point you in the right direction."
      faqs={[
        { question: "What types of vehicles can I hire?", answer: "We hire out cars, vans, minibuses, and trucks, so whether you need a small runabout or a larger working vehicle, we can help match the hire to the job." },
        { question: "Can you deliver the vehicle to me?", answer: "Yes, delivery and collection can often be arranged, depending on the vehicle, your address, and the timing of the booking." },
        { question: "Do you offer one-way vehicle hire?", answer: "Yes, one-way hire is available on selected bookings. Let us know your collection and return points and we will check the options." },
        { question: "Is unlimited mileage available?", answer: "Many rentals are available with unlimited mileage, but it can vary by vehicle and hire type, so we will confirm this when you book." },
        { question: "Can I take a hire vehicle abroad?", answer: "Some vehicles can be taken into Europe by prior arrangement. Contact us before booking so we can confirm suitability and paperwork requirements." },
      ]}
    />
  );
}
