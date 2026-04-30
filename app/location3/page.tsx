"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpeg",
    alt: "South Cornwall road near Looe descending through green hills toward the sea",
  };

  return (
    <HomePage
      currentLocationLabel="Looe"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Looe"
      heroDescription="Vehicle hire in Looe for coastal breaks, local moves, deliveries and day to day travel, with access to cars, vans, minibuses and trucks across the wider area."
      serviceAreasTitle="Covering Looe and surrounding routes"
      serviceAreasDescription="We support vehicle hire in Looe and nearby coastal and inland areas, helping customers with holiday travel, moving jobs, business use and planned onward journeys."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Looe journeys"
      infoContentSectionIntro="Looe journeys often need a bit more planning than inland travel, especially in peak season and around the harbour. Hiring the right vehicle can make family trips, holiday changeovers, trade visits and local collections much easier, particularly if you are travelling via the A387 and linking back to wider Cornwall routes."
      infoContentBlock1Title="Know your main route options"
      infoContentBlock1Body="Callington drivers often rely on the A388 for routes toward Saltash and Launceston, with the A390 also important for travel across south east Cornwall. If you are hiring for deliveries or site work, those corridors shape most practical journey planning from town."
      infoContentBlock2Title="Choose carefully for rural access"
      infoContentBlock2Body="Because Callington serves a wide rural catchment, van hire is often useful for farms, trades and property work in surrounding villages. Some lanes narrow quickly outside the town centre, so it helps to match the vehicle to the roads you will actually be using."
      infoContentBlock3Title="Set off prepared"
      infoContentBlock3Body="For longer trips, drivers often stop for fuel and supplies before leaving town rather than waiting until they are deeper into the countryside. That approach is particularly sensible with minibuses, loaded vans or trucks heading onto less built-up routes."
      bottomCtaTitle="Book your Looe hire"
      bottomCtaDescription="Speak to us about vehicle hire in Looe and we will help line up the right car, van, minibus or truck for your dates and journey."
      secondaryCtaTitle="Need help with a Looe booking?"
      secondaryCtaDescription="If you are comparing options for Looe, get in touch and we will help you choose a suitable vehicle and hire setup."
      faqs={[
        { question: "Can I arrange vehicle hire in Looe without travelling far to collect it?", answer: "Yes, we can arrange vehicle hire for customers in Looe, with practical options for local collection or delivery depending on the booking and vehicle type." },
        { question: "What kind of vehicle hire works best for narrow roads around Looe?", answer: "Delivery and collection can often be arranged, which is useful if you are based in town or on surrounding rural routes and want to save time." },
        { question: "Are there licence checks for bigger vehicles?", answer: "That depends on the vehicle category. We can advise on licence requirements for larger vans, minibuses and trucks before you commit to the booking." },
        { question: "Can I return the vehicle somewhere else?", answer: "Yes, selected rentals can be set up as one-way hires. Let us know your intended drop-off point and we will check availability." },
        { question: "Do you offer longer hires for stays, second homes or work in Looe?", answer: "Some vehicles are available for European travel by prior arrangement. It is best to ask early so the right vehicle and paperwork can be prepared." },
      ]}
    />
  );
}
