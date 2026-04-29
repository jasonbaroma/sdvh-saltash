"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location5-hero",
    src: "/images/millbrook-hero-country-road.jpg",
    alt: "White hire van driving through a green valley road near Tavistock in summer light",
  };

  return (
    <HomePage
      currentLocationLabel="Tavistock"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Launceston"
      heroDescription="Vehicle Hire Launceston for cross-county travel, local transport jobs, family plans, and business use. Cars, vans, minibuses, and trucks available across a flexible fleet."
      serviceAreasTitle="Serving Tavistock and nearby West Devon routes"
      serviceAreasDescription="Our Tavistock coverage includes the town itself and surrounding routes across West Devon, with practical vehicle hire for local travel, deliveries, moves and longer trips."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Vehicle hire that fits busy days around Tavistock"
      infoContentSectionIntro="In Launceston, vehicle hire often supports journeys that stretch beyond the town itself. Whether the need is commercial or personal, having the right vehicle can make a busy route feel much more manageable."
      infoContentBlock1Title="A practical base for wider travel"
      infoContentBlock1Body="Launceston works as a strong starting point for travel in more than one direction, so hires here often support longer-distance plans rather than simple local loops. That makes vehicle choice especially important."
      infoContentBlock2Title="Useful when one trip needs to count"
      infoContentBlock2Body="If you are handling stock, equipment, or a home move, extra carrying capacity can save a lot of time. We can help you choose a van or truck that suits both the load and the route."
      infoContentBlock3Title="Comfort matters on longer journeys"
      infoContentBlock3Body="For personal travel, larger cars and minibuses are often a good fit when comfort, luggage space, or passenger numbers matter. That can be especially helpful for planned weekends and family journeys."
      bottomCtaTitle="Need vehicle hire in Launceston?"
      bottomCtaDescription="We help Launceston customers book straightforward vehicle hire for removals, business trips, deliveries, and family travel across the wider area."
      secondaryCtaTitle="Plan your Tavistock booking"
      secondaryCtaDescription="If you already know the dates and vehicle type you need, we can help you arrange a suitable hire for Tavistock and nearby areas."
      faqs={[
        { question: "Is Launceston a good base for longer hires?", answer: "Yes, Launceston is well placed for hires that continue across Cornwall or into Devon, and many vehicles are available with mileage terms that suit longer routes." },
        { question: "What vehicle types are available in Launceston?", answer: "We offer a broad fleet, so you can enquire about cars, vans, minibuses, and trucks depending on the type of journey or work involved." },
        { question: "Can you deliver a hire vehicle in Launceston?", answer: "Delivery is often possible and can save time if you need the hire to start from home, from a workplace, or close to a planned loading point." },
        { question: "Do you provide one-way vehicle hire from Launceston?", answer: "Yes, one-way hire can be arranged on selected bookings. If you are finishing outside Launceston, ask us to check return options." },
        { question: "Is insurance included with Launceston hires?", answer: "Insurance is included on standard hires, and we will explain any vehicle-specific requirements before you confirm the booking." },
      ]}
    />
  );
}
