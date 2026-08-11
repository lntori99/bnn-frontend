export interface JoinTeamRequest {
  name: string;
  email: string;
  phone: string;
  location: string;
  profession: string;
  profileUrl?: string;
  areaOfInterest: string;
  motivation: string;
  consent: boolean;
  // CV file is sent as multipart/form-data alongside these fields
}
