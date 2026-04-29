"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location4-hero",
    src: "/images/looe-hero-country-road.jpeg",
    alt: "Grey rental van on a scenic country lane near Yelverton with open moorland views",
  };

  return (
    <HomePage
      currentLocationLabel="Yelverton"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Tavistock"
      heroDescription="Vehicle Hire Tavistock for town journeys, moorland routes, moving jobs, and organised group travel. Cars, vans, minibuses, and trucks available to suit different needs."
      serviceAreasTitle="Serving Tavistock and west Devon routes"
      serviceAreasDescription="Our service covers Tavistock and nearby parts of west Devon, with flexible rental options for personal travel, business use, and more demanding transport jobs."
      infoContentSectionKicker="Useful hire guidance"
      infoContentSectionTitle="Vehicle hire that suits how Tavistock journeys actually work"
      infoContentSectionIntro="Tavistock customers often need a hire vehicle that can handle varied travel patterns, from nearby errands to longer drives across Devon and Cornwall. The most useful bookings are usually the ones planned around the journey rather than just the calendar."
      infoContentBlock1Title="Well suited to mixed-distance travel"
      infoContentBlock1Body="Tavistock sits in a location where hires may involve town driving one moment and wider rural routes the next. Choosing a vehicle with the right comfort, visibility, and carrying space makes those changes easier to manage."
      infoContentBlock2Title="A practical choice for groups"
      infoContentBlock2Body="For events, family outings, and group travel, a minibus can be far simpler than coordinating several cars. It gives everyone one meeting point, one route, and one return plan."
      infoContentBlock3Title="Helpful for local business needs"
      infoContentBlock3Body="If the hire is for work, whether that means deliveries, tools, or site materials, selecting the correct van or truck can help avoid wasted space or unnecessary repeat runs."
      bottomCtaTitle="Plan your Tavistock rental"
      bottomCtaDescription="If you need extra seats, more boot space, or a larger working vehicle from Tavistock, we can help you book something suitable without overcomplicating it."
      secondaryCtaTitle="Not sure which vehicle fits?"
      secondaryCtaDescription="Let us know whether the priority is passengers, load space, or a longer route, and we will help shape the best Tavistock hire for it."
      faqs={[
        { question: "Do you offer full vehicle hire options in Tavistock?", answer: "Yes, Tavistock customers can book from our wider fleet, including practical cars, vans for transport jobs, minibuses for group travel, and trucks for heavier work." },
        { question: "Can the vehicle be brought to me in Tavistock?", answer: "That depends on the vehicle type and your route, but many hires can be arranged with delivery to a convenient local address." },
        { question: "Is Tavistock vehicle hire suitable for business use?", answer: "Yes, many business customers hire for deliveries, site visits, stock movement, and temporary transport needs. Let us know the job and we will suggest a suitable vehicle." },
        { question: "Can I book one-way hire from Tavistock?", answer: "One-way hire is available on selected bookings, which can be useful if your route does not naturally loop back to Tavistock." },
        { question: "Are European trips possible with a Tavistock hire?", answer: "Some hires can be approved for European travel in advance. Contact us before booking so we can confirm which vehicles are eligible." },
      ]}
    />
  );
}
