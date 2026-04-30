"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Tidy Cornish lane near Torpoint opening toward the coast in gentle mixed light",
  };

  return (
    <HomePage
      currentLocationLabel="Torpoint"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire in Torpoint"
      heroDescription="Vehicle Hire Torpoint with flexible access to cars, vans, minibuses and trucks for ferry-linked travel, local jobs, home moves and wider journeys across Cornwall and Plymouth."
      serviceAreasTitle="Serving Torpoint and nearby areas"
      serviceAreasDescription="We support bookings in Torpoint and the surrounding south east Cornwall area, including routes that connect with Plymouth, the ferry crossing and nearby coastal communities."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Driving and hire tips for Torpoint"
      infoContentSectionIntro="Torpoint hires tend to revolve around everyday practicality. Some customers need a van for local moving jobs, others need a car for easier travel into Plymouth, and some need a minibus or larger vehicle for coastal trips and group journeys around the Rame Peninsula."
      infoContentBlock1Title="Plan around the ferry crossing"
      infoContentBlock1Body="Torpoint travel often starts with the Torpoint Ferry, so timing matters. If you are heading into Plymouth with a hired vehicle, allow extra time at busy commuter periods and keep the A374 in mind as your main route once you leave the waterfront."
      infoContentBlock2Title="Top up before longer runs"
      infoContentBlock2Body="For fuel, drivers in and around Torpoint often top up before longer runs toward Plymouth or west Cornwall. That is worth doing early if you are hiring a van or minibus, especially before weekend traffic builds around the ferry and nearby roads."
      infoContentBlock3Title="Think ahead for peninsula roads"
      infoContentBlock3Body="Torpoint is a practical base for access to Maker Heights, Whitsand Bay and the Rame Peninsula, but some roads beyond the town narrow quickly. If you are moving equipment or travelling with a full load, choosing the right vehicle size makes those onward routes much easier."
      bottomCtaTitle="Arrange vehicle hire in Torpoint"
      bottomCtaDescription="If you need a vehicle in Torpoint for work, moving or personal travel, we can help arrange the right hire with straightforward booking support."
      secondaryCtaTitle="Talk through your Torpoint hire"
      secondaryCtaDescription="Need help choosing between a car, van, minibus or truck for Torpoint travel? Get in touch and we will talk through the options clearly."
      faqs={[
        { question: "What can I hire for use in Torpoint?", answer: "Yes. We offer vehicle hire for Torpoint with options across cars, vans, minibuses and trucks, depending on your journey and licence requirements." },
        { question: "Can a hire vehicle be delivered in Torpoint?", answer: "Delivery and collection may be available, which can be especially useful around ferry crossings and residential areas where collecting elsewhere is less convenient." },
        { question: "Do you offer one-way rentals from Torpoint?", answer: "Yes, on selected bookings. One-way hire can suit relocations, work routes or longer journeys that finish outside the Torpoint area." },
        { question: "Can I hire a larger van or minibus on a normal licence?", answer: "A standard licence is enough for many vehicles, but larger minibuses and some trucks may need extra checks. We will confirm the right option before booking." },
        { question: "Is European travel available from a Torpoint booking?", answer: "Some vehicles can be used for European travel if arranged in advance. Ask before booking so we can check availability and the required documents." },
      ]}
    />
  );
}
