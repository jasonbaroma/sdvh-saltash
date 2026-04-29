"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location3-hero",
    src: "/images/callington-hero-country-road.jpg",
    alt: "Blue rental car on a rural route near Ivybridge with valley views and moorland backdrop",
  };

  return (
    <HomePage
      currentLocationLabel="Ivybridge"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Callington"
      heroDescription="Vehicle Hire Callington for local errands, site work, weekend trips, and practical transport needs. Flexible options across cars, vans, minibuses, and trucks."
      serviceAreasTitle="Vehicle hire around Callington"
      serviceAreasDescription="We cover Callington and the surrounding area with flexible vehicle hire for residents, trades, local firms, and customers travelling further across the region."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Choosing practical vehicle hire for Callington"
      infoContentSectionIntro="Callington sits well for both local journeys and cross-county travel, so customers here often need vehicle hire that adapts to changing plans. That might mean extra load space, more seats, or a vehicle better suited to a longer route."
      infoContentBlock1Title="Think about the roads you will use"
      infoContentBlock1Body="Callington customers often need vehicles that can handle mixed routes, from town roads to rural lanes and onward travel into Devon or across Cornwall. Picking the right size and style helps keep the hire practical."
      infoContentBlock2Title="Useful for working days"
      infoContentBlock2Body="For trade work, gardening jobs, equipment transport, or property maintenance, vans and trucks give you the space and load area that a standard car cannot. That can save repeat trips and make the day more productive."
      infoContentBlock3Title="Also handy for family travel"
      infoContentBlock3Body="When the plan is more personal, such as a family outing, airport run, or extra passengers for an event, a larger car or minibus can make the journey more comfortable and easier to organise."
      bottomCtaTitle="Get the right vehicle in Callington"
      bottomCtaDescription="Planning a trip from Callington or need a working vehicle for a job? We can help you arrange a hire that fits the route and the task."
      secondaryCtaTitle="Compare options for Callington"
      secondaryCtaDescription="From one-day rentals to longer bookings, we can help you work out which vehicle makes the most sense for your Callington journey."
      faqs={[
        { question: "What can I hire in Callington?", answer: "Yes, we provide vehicle hire for personal and business use in Callington, including cars, vans, minibuses, and trucks." },
        { question: "Can I book a vehicle quickly in Callington?", answer: "That depends on the vehicle and the booking length, but many hires can be arranged at short notice if availability allows." },
        { question: "Is delivery available in the Callington area?", answer: "Yes, delivery is often possible, which can be helpful if the hire is tied to a workday, move, or planned collection." },
        { question: "Do Callington hires come with unlimited mileage?", answer: "Many rentals include unlimited mileage, though this varies by vehicle type. We will confirm the details before your booking is finalised." },
        { question: "Can I arrange one-way hire from Callington?", answer: "Yes, selected hires can be arranged on a one-way basis. Let us know your preferred return location and we will check availability." },
      ]}
    />
  );
}
