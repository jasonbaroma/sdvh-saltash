"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location2-hero",
    src: "/images/liskeard-hero-country-road.jpg",
    alt: "White rental van on a gently rising country road near Liskeard with fields and hills",
  };

  return (
    <HomePage
      currentLocationLabel="Liskeard"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Liskeard"
      heroDescription="Vehicle Hire Liskeard for work, moving days, family travel, and rural journeys across Cornwall. A flexible fleet with cars, vans, minibuses, and trucks available."
      serviceAreasTitle="Covering Liskeard and surrounding areas"
      serviceAreasDescription="Our vehicle hire coverage includes Liskeard and nearby communities, supporting local travel, business use, property moves, and longer-distance journeys."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="How vehicle hire fits everyday travel in Liskeard"
      infoContentSectionIntro="In Liskeard, vehicle hire is often about flexibility. One day it may be a practical van for moving goods, the next a family car or minibus for a journey that needs more space and less compromise."
      infoContentBlock1Title="Useful for town and rural travel"
      infoContentBlock1Body="Liskeard is a practical base for reaching surrounding villages, farms, business premises, and wider Cornwall routes. Hiring a suitable vehicle can make those mixed urban and rural journeys far easier to manage."
      infoContentBlock2Title="Choose for the job, not just the size"
      infoContentBlock2Body="For removals, equipment runs, or stock movement, having the right van or truck matters more than simply choosing the biggest vehicle. We can help you select something workable for access, loading, and distance."
      infoContentBlock3Title="A good base for longer drives"
      infoContentBlock3Body="Liskeard also suits longer onward travel toward the coast, Plymouth, or deeper into Cornwall. Many customers book cars or minibuses when they need extra seats, comfort, or reliability for a planned trip."
      bottomCtaTitle="Arrange your Liskeard vehicle hire"
      bottomCtaDescription="From practical van hire to comfortable cars and larger group or work vehicles, we can help Saltash Road and town-centre customers book the right option in Liskeard."
      secondaryCtaTitle="Talk through your Liskeard plans"
      secondaryCtaDescription="If you are unsure which vehicle suits your route, load, or passenger numbers, we can help you narrow it down for your Liskeard booking."
      faqs={[
        { question: "Is Liskeard vehicle hire suitable for moving house?", answer: "Yes, we regularly help with van hire for home moves, furniture collection, and trade transport, as well as cars, minibuses, and trucks." },
        { question: "Can a hire vehicle be delivered in Liskeard?", answer: "Delivery can often be arranged, which is useful if you want the vehicle brought to your home, workplace, or another convenient address in the area." },
        { question: "Do you offer one-way hire from Liskeard?", answer: "One-way hire is available on selected rentals. If your journey starts in Liskeard and ends elsewhere, ask us to check the return options." },
        { question: "Can local businesses hire vehicles in Liskeard?", answer: "Many vehicles are available for business use, including vans for deliveries and trucks for heavier site or trade work. We can help with short-term and longer hires." },
        { question: "Can I take a Liskeard hire vehicle to Europe?", answer: "Some vehicles can travel into Europe by agreement in advance. Speak to us before booking so we can confirm the suitable vehicle and required documents." },
      ]}
    />
  );
}
