import { slugifyLocation } from "@/lib/utils";

export const mainLocationLink = {
  label: "Saltash",
  href: "/",
};

type LocationMetadata = {
  label: string;
  href: string;
  county: string;
  region: string;
  population: string;
};

const mainLocationMetadata: LocationMetadata = {
  label: "Saltash",
  href: "/",
  county: "Cornwall",
  region: "South West England",
  population: "16269",
};

const LOCATION_METADATA: LocationMetadata[] = [
  {
    label: "Torpoint",
    href: `/${slugifyLocation("Torpoint")}`,
    county: "Cornwall",
    region: "South West England",
    population: "8564",
  },
  {
    label: "Liskeard",
    href: `/${slugifyLocation("Liskeard")}`,
    county: "Cornwall",
    region: "South West England",
    population: "9202",
  },
  {
    label: "Ivybridge",
    href: `/${slugifyLocation("Ivybridge")}`,
    county: "Devon",
    region: "South West England",
    population: "11951",
  },
  {
    label: "Yelverton",
    href: `/${slugifyLocation("Yelverton")}`,
    county: "Devon",
    region: "South West England",
    population: "6576",
  },
  {
    label: "Tavistock",
    href: `/${slugifyLocation("Tavistock")}`,
    county: "Devon",
    region: "South West England",
    population: "11708",
  },
  {
    label: "Callington",
    href: `/${slugifyLocation("Callington")}`,
    county: "Cornwall",
    region: "South West England",
    population: "5786",
  },
];

export const nearbyLocationLinks = LOCATION_METADATA.map(({ label, href }) => ({
  label,
  href,
}));

export function buildLocationLinks(currentLocationLabel?: string) {
  const currentHref = currentLocationLabel ? `/${slugifyLocation(currentLocationLabel)}` : "/";
  const filteredNearbyLinks = nearbyLocationLinks.filter((location) => location.href !== currentHref);

  return [mainLocationLink, ...filteredNearbyLinks];
}

export const locationSlugEntries = LOCATION_METADATA.map(({ label }, index) => ({
  index: index + 1,
  label,
  slug: slugifyLocation(label),
}));
