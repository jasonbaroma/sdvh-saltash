import type { Metadata } from "next";

import { HomePage } from "@/components/home-page";
import { resolvedMainLocationName } from "@/lib/company";

export async function generateMetadata(): Promise<Metadata> {
  const metaTitle = `Vehicle Hire ${resolvedMainLocationName} | Cars, Vans, Minibuses & Trucks`;
  const metaDescription = `Vehicle hire in ${resolvedMainLocationName} for cars, vans, minibuses and trucks. Practical self-drive options with flexible booking, local support and wide area coverage.`;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: "/",
    },
  };
}

export default function Home() {
  const homepageHeroImage = {
    slot: "homepage-hero",
    src: "/images/homepage-hero-country-road.jpeg",
    alt: "Tree-lined rural road in the Cornwall countryside with fields and bright afternoon light",
  };

  return (
    <HomePage
      heroImage={homepageHeroImage.src}
      heroImageAlt={homepageHeroImage.alt}
      heroTitle="Vehicle Hire in Saltash"
      heroDescription="Vehicle Hire Saltash for cars, vans, minibuses and trucks, with flexible rental options for local journeys, business use, moves and longer trips across the UK."
      serviceAreasTitle="Vehicle hire coverage around Saltash"
      serviceAreasDescription="From Saltash we cover nearby towns across southeast Cornwall and routes into Plymouth and beyond, with vehicle hire for local jobs, business travel, moves and longer trips."
      infoContentSectionKicker="Local hire guidance"
      infoContentSectionTitle="Practical vehicle hire advice for Saltash journeys"
      infoContentSectionIntro="Hiring a vehicle in Saltash can save time when you need more capacity, a different vehicle type or an easier start to a longer journey. With direct links across the Tamar and out along the A38, it is a practical place to arrange transport for business, moving jobs, family travel and regional deliveries."
      infoContentBlock1Title="Easy access over the Tamar"
      infoContentBlock1Body="Saltash works well as a base for hires that need quick access in both directions. With the A38 running past the town and the Tamar Bridge linking into Plymouth, drivers can collect locally and get moving without fighting through too many smaller roads first."
      infoContentBlock2Title="Useful for moves and working days"
      infoContentBlock2Body="Hiring a van or truck in Saltash is practical for house moves, trade work and deliveries across south east Cornwall. Areas such as Pillmere, Liskeard Road and nearby villages often need extra load space that is easier to manage with delivery and collection arranged."
      infoContentBlock3Title="A good starting point for Cornwall travel"
      infoContentBlock3Body="For family trips and group travel, Saltash is well placed for routes towards Plymouth, Looe, Polperro and the wider Cornish coast. A car or minibus can be a simpler option when you need more seats, luggage room or flexibility than public transport offers."
      bottomCtaTitle="Book your Saltash vehicle hire"
      bottomCtaDescription="Tell us what you need to move or where you need to go, and we will help match the right car, van, minibus or truck for the job."
      secondaryCtaTitle="Speak to our Saltash hire team"
      secondaryCtaDescription="Tell us what you need and we will help line up the right car, van, minibus or truck for your Saltash journey."
      faqs={[
        { question: "What types of vehicles can I hire in Saltash?", answer: "Yes. We can arrange hire for private customers and business users, with vehicles suited to everyday driving, moving jobs, group travel and commercial work." },
        { question: "Do you offer delivery and collection?", answer: "In many cases, yes. Delivery and collection can make hiring easier if you are short on time or need the vehicle brought to your home, workplace or site." },
        { question: "Can I arrange a one-way rental?", answer: "One-way hire is available on selected bookings, subject to the vehicle type and route. It is a useful option if you are relocating or finishing a job in a different area." },
        { question: "Is European travel possible with a hire vehicle?", answer: "Some vehicles can be taken into Europe by prior arrangement. Let us know before booking so we can confirm the available options and paperwork requirements." },
        { question: "What do I need to hire a larger vehicle?", answer: "A standard car licence covers many vehicles, but some larger minibuses and trucks may have extra licence or eligibility requirements. We will confirm what applies when you enquire." },
      ]}
    />
  );
}
