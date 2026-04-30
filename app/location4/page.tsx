"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "Country road near Ivybridge bordered by farmland and trees under late afternoon light",
  };

  return (
    <HomePage
      currentLocationLabel="Ivybridge"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Ivybridge"
      heroDescription="Vehicle hire in Ivybridge for Dartmoor access, home moves, trade work and everyday travel, with flexible options across cars, vans, minibuses and trucks."
      serviceAreasTitle="Serving Ivybridge and the surrounding area"
      serviceAreasDescription="We provide vehicle hire for Ivybridge and nearby parts of South Devon, supporting residential, commercial and leisure travel across the area."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Getting the most from vehicle hire in Ivybridge"
      infoContentSectionIntro="Ivybridge is well placed for both local errands and longer runs, with quick access to the A38 and straightforward links towards Plymouth, South Hams and Dartmoor. That makes it a practical place to hire a vehicle whether you are moving equipment, organising group travel or covering temporary transport needs."
      infoContentBlock1Title="Useful links via the A386"
      infoContentBlock1Body="Tavistock sits on the A386, making it a practical base for travel toward Plymouth and north toward Okehampton. If you are hiring for business use or a longer leisure trip, that direct road link helps keep collection and onward travel straightforward."
      infoContentBlock2Title="Prepare properly for Dartmoor driving"
      infoContentBlock2Body="The town is a common starting point for Dartmoor journeys, but moorland roads can be narrower, more exposed and slower than drivers expect. If you are carrying equipment or travelling as a group, vehicle size and visibility matter more than they do on a standard town route."
      infoContentBlock3Title="Think about town-centre access"
      infoContentBlock3Body="Tavistock town centre has a busy layout around market areas and local shopping streets, so larger vans are often easier to manage when loading is planned outside peak times. For longer runs, many drivers sort fuel and supplies before leaving town."
      bottomCtaTitle="Arrange your Ivybridge vehicle hire"
      bottomCtaDescription="Tell us what you need in Ivybridge and we will help match the job with a suitable hire vehicle and practical booking arrangement."
      secondaryCtaTitle="Compare hire options in Ivybridge"
      secondaryCtaDescription="From compact cars to larger vans and trucks, we can talk through the best option for your Ivybridge journey or workload."
      faqs={[
        { question: "Can I book different vehicle types in Tavistock?", answer: "Yes. We can arrange vehicle hire in Tavistock across cars, vans, minibuses and trucks for both personal and business use." },
        { question: "Do you provide one-way rentals from Tavistock?", answer: "Yes, subject to the vehicle and route. One-way hire can be useful if your trip or job finishes away from Tavistock." },
        { question: "Is delivery available in the Tavistock area?", answer: "Delivery and collection may be available, which can be helpful if you are based in town, on an estate or in nearby villages around the moor." },
        { question: "Does Tavistock vehicle hire include insurance?", answer: "Insurance is commonly included within the rental setup, although the exact terms vary by vehicle and driver. We will explain what applies to your booking." },
        { question: "Can I take a hire vehicle abroad from Tavistock?", answer: "Some vehicles can travel into Europe when agreed in advance. Ask early so we can confirm the suitable options and any document requirements." },
      ]}
    />
  );
}
