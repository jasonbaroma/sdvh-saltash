"use client";

import { HomePage } from "@/components/home-page";

export default function LocationPage() {
  const locationHeroImage = {
    slot: "location1-hero",
    src: "/images/torpoint-hero-country-road.jpeg",
    alt: "Grey rental car travelling on a road near Torpoint with harbour water and Cornish slopes behind",
  };

  return (
    <HomePage
      currentLocationLabel="Torpoint"
      heroImage={locationHeroImage.src}
      heroImageAlt={locationHeroImage.alt}
      heroTitle="Vehicle Hire Torpoint"
      heroDescription="Vehicle Hire Torpoint for day trips, home moves, trade jobs, and longer travel plans. Choose from cars, vans, minibuses, and trucks with flexible support."
      serviceAreasTitle="Serving Torpoint and nearby routes"
      serviceAreasDescription="We serve Torpoint and nearby parts of south east Cornwall, with flexible vehicle hire for local residents, businesses, and customers planning travel further afield."
      infoContentSectionKicker="Planning your hire"
      infoContentSectionTitle="Practical vehicle hire advice for Torpoint journeys"
      infoContentSectionIntro="Torpoint customers often need vehicle hire that fits around local travel patterns, onward journeys, and practical loading needs. From short local use to wider UK travel, the right rental can save time and reduce hassle."
      infoContentBlock1Title="Plan around your route"
      infoContentBlock1Body="Torpoint hires often involve ferry links, cross-river travel, and practical day planning. Booking a vehicle that suits both the route and the load can make a big difference, especially when the day includes timed collections or returns."
      infoContentBlock2Title="Useful for moves and materials"
      infoContentBlock2Body="For customers handling house clearances, furniture collection, or trade materials, a van or truck can be more efficient than making repeated smaller trips. We can help match the vehicle to the amount you need to carry."
      infoContentBlock3Title="Good for shared travel"
      infoContentBlock3Body="Torpoint is also a good starting point for group outings and family journeys into Cornwall or across into Plymouth. Minibus and car hire can be a straightforward alternative when your own vehicle is too small or not ideal for the trip."
      bottomCtaTitle="Looking for vehicle hire in Torpoint?"
      bottomCtaDescription="Whether you need a car for a local journey or a van, minibus, or truck for something bigger, we can help arrange a suitable hire in Torpoint."
      secondaryCtaTitle="Need help choosing a vehicle?"
      secondaryCtaDescription="Tell us where you are heading and what you need to carry, and we will point you toward the most suitable rental option for Torpoint."
      faqs={[
        { question: "Can I hire more than just vans in Torpoint?", answer: "Yes, Torpoint customers can arrange hire across our wider fleet, including cars, vans, minibuses, and trucks, depending on availability and booking details." },
        { question: "Do you deliver hire vehicles in Torpoint?", answer: "Delivery is often available and can be especially useful in Torpoint if you want to avoid extra planning around onward travel before your hire begins." },
        { question: "Is unlimited mileage available from Torpoint bookings?", answer: "Many hires include unlimited mileage, which suits longer trips beyond Torpoint. We will confirm the mileage terms for your chosen vehicle at booking stage." },
        { question: "Can I return the vehicle somewhere else?", answer: "Yes, one-way rentals can be arranged on selected bookings. Let us know where you want to return the vehicle and we will check what is possible." },
        { question: "What do I need to hire a vehicle in Torpoint?", answer: "You will need a valid driving licence and the usual booking documents. If anything additional is needed for the vehicle type, we will explain that clearly beforehand." },
      ]}
    />
  );
}
