import { Sector } from "@/models/response/content-response";
import { placeholderImages } from "./placeholder-images";

/** The H-E-A-R-T Agenda — TBNN's five Gateways to Prosperity. */
export const sectors: Sector[] = [
  {
    key: "healthcare",
    name: "Healthcare",
    scope: "Access to healthcare, community health, mental healthcare and awareness, and solutions that respond to African realities.",
    image: placeholderImages.sectors.healthcare,
  },
  {
    key: "education",
    name: "Education",
    scope: "Talent development, reskilling for the digital economy, heritage and language preservation, STEM development and learning support.",
    image: placeholderImages.sectors.education,
  },
  {
    key: "agriculture",
    name: "Agriculture",
    scope: "Food security, local seed sovereignty, agricultural technology and innovation, and urban farming.",
    image: placeholderImages.sectors.agriculture,
  },
  {
    key: "real-enterprise",
    name: "Real Enterprise",
    scope: "Enterprise creation and growth, entrepreneurship and intrapreneurship, economic empowerment and job creation.",
    image: placeholderImages.sectors.realEnterprise,
  },
  {
    key: "trade-beyond-borders",
    name: "Trade Beyond Borders",
    scope: "Regional trade, e-commerce, investment, export readiness, compliance and stronger cross-border economic networks.",
    image: placeholderImages.sectors.tradeBeyondBorders,
  },
];
