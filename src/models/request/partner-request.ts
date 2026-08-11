export interface PartnerRequest {
  name: string;
  email: string;
  phone?: string;
  organisation: string;
  country: string;
  partnershipType: string;
  proposal: string;
  message?: string;
  consent: boolean;
}
