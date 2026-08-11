"use client";

import { apiPost, apiPostForm } from "@/lib/api";
import { CommunityJoinRequest } from "@/models/request/community-request";
import { PartnerRequest } from "@/models/request/partner-request";

export const submitCommunityJoin = (body: CommunityJoinRequest) =>
  apiPost("/community/join", body);

export const submitPartnerEnquiry = (body: PartnerRequest) =>
  apiPost("/partners/enquiries", body);

export const submitJoinTeam = (form: FormData) =>
  apiPostForm("/team-applications", form);
