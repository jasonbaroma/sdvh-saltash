"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpeg",
    alt: "Open road near Bodmin crossing rolling farmland under a bright spring sky",
  };

  return (
    <HomePage
      currentLocationLabel="Bodmin"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Bodmin"
      heroDescription="Vehicle hire in Bodmin for Cornwall travel, removals, trade work and flexible day to day transport, backed by a broad fleet and practical booking support."
      serviceAreasTitle="Vehicle hire around Bodmin and nearby areas"
      serviceAreasDescription="We cover Bodmin and nearby Cornish routes, providing vehicle hire for households, local firms, visitors and drivers heading further across the region."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Useful hire planning for Bodmin travel"
      infoContentSectionIntro="Bodmin sits at one of Cornwall's most useful road hubs, making it a sensible place to hire a vehicle for local driving or longer mileage. With the A30 nearby and easy connections towards the A38, Wadebridge, St Austell and the north coast, it works well for business trips, home projects and onward travel across the county."
      infoContentBlock1Title="Fast links from the A38"
      infoContentBlock1Body="Ivybridge benefits from immediate access to the A38 Devon Expressway, which makes it especially convenient for hires heading toward Plymouth, Exeter or deeper into the South Hams. For time-sensitive journeys, that direct route is a major advantage."
      infoContentBlock2Title="A flexible base for mixed journey types"
      infoContentBlock2Body="The town is popular with commuters and outdoor visitors, so hire needs can vary from short local car use to larger vehicles for equipment, bikes or group travel. If you are heading onto Dartmoor or into smaller country roads, practical vehicle choice matters."
      infoContentBlock3Title="Plan ahead before leaving main routes"
      infoContentBlock3Body="For vans and trucks, it helps to plan loading and fuel stops before leaving the town side of the A38 corridor. Once you branch into rural South Hams roads, stopping points can become more limited and access can feel tighter with a bigger vehicle."
      bottomCtaTitle="Get Bodmin vehicle hire sorted"
      bottomCtaDescription="For vehicle hire in Bodmin, contact us with your dates and planned use and we will help you choose a suitable vehicle from the wider fleet."
      secondaryCtaTitle="Talk through your Bodmin hire"
      secondaryCtaDescription="If you are weighing up vehicle hire in Bodmin, we can help you narrow down the right type of vehicle for the route, load and length of hire."
      faqs={[
        { question: "Can I book vehicle hire in Bodmin for either personal or business use?", answer: "Yes, we regularly help customers arrange vehicle hire in Bodmin for personal and business use, including cars, vans, minibuses and larger commercial vehicles." },
        { question: "Is Bodmin a good base for one way hire across Cornwall and beyond?", answer: "In many cases, yes. Delivery and collection can make things easier if you are hiring from home, work or a nearby site." },
        { question: "What vehicle size is useful for moves or trade jobs around Bodmin?", answer: "Selected bookings can be arranged as one-way hires. This is often helpful for relocations, contract work and longer point-to-point journeys." },
        { question: "Do I need a special licence for larger vehicles?", answer: "Many vehicles can be driven on a standard licence, though some larger categories may require extra eligibility checks. We will confirm this before booking." },
        { question: "Can you help with longer vehicle hire periods in Bodmin?", answer: "Some hires can be approved for European travel if requested in advance. Let us know early so we can check the vehicle and travel requirements." },
      ]}
    />
  );
}
