import { apiGet } from "@/lib/api";
import { TeamMember } from "@/models/response/team-response";
import { fallbackTeam } from "@/data/fallback";

export const getTeam = () => apiGet<TeamMember[]>("/team", fallbackTeam);
