"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location6-hero",
    src: "/images/callington-country-road.jpeg",
    alt: "Quiet rural road near Callington running through green farmland in summer light",
  };

  return (
    <HomePage
      currentLocationLabel="Callington"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Callington"
      heroDescription="Vehicle hire in Callington for local business, rural properties, house moves and everyday transport, with cars, vans, minibuses and trucks available across the wider area."
      serviceAreasTitle="Serving Callington and the surrounding area"
      serviceAreasDescription="We support Callington and nearby east Cornwall villages with flexible vehicle hire for domestic, trade and business use, with wider coverage across the region when needed."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Practical vehicle hire advice for Callington journeys"
      infoContentSectionIntro="Vehicle hire in Callington often comes down to convenience. The town sits between useful east Cornwall routes and the Devon border, so it suits customers needing a car for onward travel, a van for property jobs, a minibus for group outings or a truck for heavier local work."
      infoContentBlock1Title="Using the main roads around town"
      infoContentBlock1Body="Callington works well for hires that need flexible road access. The A388 links you north toward Launceston and south toward Saltash, while the A390 gives a straightforward route east to Tavistock and west toward Liskeard and Truro. That makes it a practical pickup point for business runs, home moves and longer cross-county trips."
      infoContentBlock2Title="Fuel and practical stop planning"
      infoContentBlock2Body="For day-to-day stops, you will usually find the most useful services around the town centre and on routes leading out toward the A388 and A390. If you are heading farther afield, larger fuel and supermarket stops in Saltash, Tavistock and Liskeard can be useful before returning a van, minibus or truck."
      infoContentBlock3Title="Good for rural jobs and local days out"
      infoContentBlock3Body="Callington is a sensible base for reaching villages across the Tamar Valley, local industrial sites and rural properties where a larger vehicle is more useful than a private car. It also suits leisure travel toward Kit Hill, Cotehele and wider Cornwall, especially when you need extra seats or more carrying space."
      bottomCtaTitle="Plan your Callington hire"
      bottomCtaDescription="If you need vehicle hire in Callington, let us know the job, route and dates and we will help arrange a suitable vehicle."
      secondaryCtaTitle="Arrange your Callington booking"
      secondaryCtaDescription="If you already know your dates and vehicle type, we can help arrange a straightforward hire for Callington and surrounding areas."
      faqs={[
        { question: "Do you offer vehicle hire in Yelverton?", answer: "Yes. We provide vehicle hire options for Yelverton including cars, vans, minibuses and trucks, depending on the type of journey you are planning." },
        { question: "Can a hire vehicle be delivered to Yelverton?", answer: "Delivery and collection may be available, which can be useful if you are based in Yelverton or nearby villages and want to avoid extra travel before your booking starts." },
        { question: "Is one-way rental possible from Yelverton?", answer: "Selected bookings can be arranged as one-way hires. If your route finishes outside the area, ask us and we will check the available options." },
        { question: "What licence do I need for a larger vehicle?", answer: "Many vehicles are suitable for standard licence holders, but larger categories can have additional requirements. We will explain what applies before confirming the hire." },
        { question: "Can I arrange European travel with a Yelverton hire?", answer: "Some vehicles may be taken to Europe if this is agreed in advance. We can confirm suitability and paperwork once we know your travel plans." },
      ]}
    />
  );
}
