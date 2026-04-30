"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpeg",
    alt: "Curving valley road near Liskeard with hedged fields in warm early autumn light",
  };

  return (
    <HomePage
      currentLocationLabel="Liskeard"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Liskeard"
      heroDescription="Vehicle Hire Liskeard for drivers needing dependable cars, vans, minibuses and trucks for town journeys, business use, rural routes and travel across Cornwall."
      serviceAreasTitle="Vehicle hire around Liskeard"
      serviceAreasDescription="Our coverage extends across Liskeard and nearby parts of south east Cornwall, supporting personal and business hires with practical access to the main road network."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="How vehicle hire works well in and around Liskeard"
      infoContentSectionIntro="Liskeard is one of those towns where vehicle hire fits both everyday needs and longer regional travel. It is useful for local residents, nearby villages, trade customers and visitors who need more flexibility than rail links or bus routes can offer."
      infoContentBlock1Title="A38 access makes planning simpler"
      infoContentBlock1Body="Liskeard sits just off the A38, which makes it a strong pickup point for drivers heading east toward Saltash and Plymouth or west into Cornwall. If you are hiring for work, deliveries or a move, that direct trunk-road access can save a lot of time."
      infoContentBlock2Title="Good place to sort fuel and supplies"
      infoContentBlock2Body="For local stops, the Morrisons and retail areas around Plymouth Road are useful for fuel and supplies before setting off. That is especially handy if you are collecting a van for a property move or a truck for site work in the surrounding villages."
      infoContentBlock3Title="Well placed for moorland and coast"
      infoContentBlock3Body="Liskeard is often used as a starting point for Bodmin Moor, Siblyback Lake and south coast destinations such as Looe. If your route mixes town roads with rural stretches, choosing the right vehicle size and load space makes the journey more manageable."
      bottomCtaTitle="Start your Liskeard booking"
      bottomCtaDescription="Planning a trip, move or delivery from Liskeard? We can help arrange a suitable vehicle with flexible rental terms and clear support from the start."
      secondaryCtaTitle="Get advice on your Liskeard rental"
      secondaryCtaDescription="If you are unsure what size vehicle suits your Liskeard journey, we can help you compare options and keep the booking process straightforward."
      faqs={[
        { question: "Which vehicles are available for hire in Liskeard?", answer: "We offer a wide range of vehicle hire for Liskeard, including cars for daily travel, vans for moving jobs, minibuses for groups and trucks for heavier commercial use." },
        { question: "Can you deliver a hire vehicle to Liskeard?", answer: "Yes, delivery and collection can often be arranged. This is useful if you want to avoid extra travel before starting your booking." },
        { question: "Is one-way hire possible from Liskeard?", answer: "One-way rental is available on certain bookings. If your route ends in another part of the UK, ask us and we can check what is possible." },
        { question: "Is insurance included with Liskeard vehicle hire?", answer: "Many hires include insurance as part of the booking structure. The exact cover and requirements depend on the vehicle and driver details." },
        { question: "Can I take a Liskeard hire vehicle to Europe?", answer: "Some vehicles can be approved for European travel if arranged before collection. We will confirm availability and any extra documentation needed." },
      ]}
    />
  );
}
