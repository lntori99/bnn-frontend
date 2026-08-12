import { Sector } from "@/models/response/content-response";
import { placeholderImages } from "./placeholder-images";

export const sectors: Sector[] = [
  {
    key: "healthcare",
    name: "Healthcare",
    scope: "Health delivery, healthtech, pharmaceuticals, prevention and access.",
    image: placeholderImages.sectors.healthcare,
  },
  {
    key: "real-enterprise",
    name: "Real Enterprise",
    scope: "Businesses that create jobs, build productive capacity and scale sustainable African enterprises.",
    image: placeholderImages.sectors.realEnterprise,
  },
  {
    key: "agriculture",
    name: "Agriculture",
    scope: "Agribusiness, food systems, processing, productivity and agricultural technology.",
    image: placeholderImages.sectors.agriculture,
  },
  {
    key: "technology",
    name: "Technology",
    scope: "Digital infrastructure, software, AI, fintech and technology-enabled solutions.",
    image: placeholderImages.sectors.technology,
  },
  {
    key: "energy-infrastructure",
    name: "Energy & Infrastructure",
    scope: "Power, clean energy, transport, housing and the infrastructure required for African enterprise to scale.",
    image: placeholderImages.sectors.energyInfrastructure,
  },
];
