import { EventItem } from "@/models/response/event-response";
import { MediaItem } from "@/models/response/media-response";
import { TeamMember } from "@/models/response/team-response";
import { RoadmapMilestone, FocusPage } from "@/models/response/content-response";
import { placeholderImages } from "./placeholder-images";

/** Placeholder content — final approved copy is supplied by BNN via the CMS. */

export const fallbackEvents: EventItem[] = [
  {
    id: 1,
    slug: "tbnn-conference-ghana-2027",
    title: "The Bold New Normal Conference Ghana 2027",
    image: placeholderImages.events.conference2027,
    description:
      "The next edition of The Bold New Normal Conference Ghana is scheduled to take place in February 2027 in Accra, Ghana. The conference will continue TBNN's mission of bringing together leaders, professionals, entrepreneurs, policymakers, changemakers and other stakeholders to engage in meaningful conversations and action around Africa's transformation and shared prosperity.",
    speakers: [
      { name: "Lucy Quist", title: "Founder, The Bold New Normal" },
      { name: "Guest speakers", title: "To be announced" },
    ],
    startsAt: "2027-02-01T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    slug: "the-power-of-the-diaspora-2026",
    title: "2026 — The Power of the Diaspora",
    image: placeholderImages.events.diaspora2026,
    description:
      "The 2026 conference marked the inaugural UK edition of The Bold New Normal Conference and the platform's first intentional expansion beyond Ghana. Held in London, the conference brought together African professionals, business leaders, policymakers, investors and changemakers from across the UK and the diaspora. The conference focused on moving diaspora engagement beyond remittances and cultural connection towards structured partnership, co-creation, institution-building and long-term economic collaboration. It explored how the skills, capital, networks and influence of the African diaspora can contribute to shared prosperity and accelerate meaningful impact across TBNN's H.E.A.R.T pillars.",
    speakers: [{ name: "Lucy Quist", title: "Founder, The Bold New Normal" }],
    startsAt: "2026-05-01T09:00:00.000Z",
    timezone: "BST",
    venue: "London, United Kingdom",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
  {
    id: 3,
    slug: "transformation-through-culture-and-language-2025",
    title: "2025 — Transformation through Culture and Language: Rethinking Socialisation for Prosperity",
    image: placeholderImages.events.conference2025,
    description:
      "The 2025 conference examined the cultural and linguistic narratives that shape economic behaviour and societal outcomes. It explored how inherited norms, values and language can either enable or constrain prosperity, reframing socialisation as a lever for structural and generational transformation.",
    speakers: [{ name: "Lucy Quist", title: "Founder" }],
    startsAt: "2025-11-06T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
  {
    id: 4,
    slug: "transforming-mindsets-creating-leaders-of-prosperity-2024",
    title: "2024 — Transforming Mindsets, Creating Leaders of Prosperity",
    image: placeholderImages.events.conference2024,
    description:
      "The 2024 conference moved the conversation from individual prosperity to leadership responsibility. Participants were challenged to see themselves as architects of institutional and national transformation, with a focus on leaders capable of shaping systems, culture and long-term economic impact.",
    speakers: [{ name: "Lucy Quist", title: "Founder" }],
    startsAt: "2024-11-07T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
  {
    id: 5,
    slug: "leveraging-opportunity-2023",
    title: "2023 — Leveraging Opportunity: Taking Action to Deliver Prosperous Outcomes with a Changed Mindset",
    image: placeholderImages.events.conference2023,
    description:
      "The 2023 conference deepened the action mandate by emphasising mindset transformation as the foundation for sustainable prosperity. Participants were encouraged to identify opportunities in their environments and convert them into tangible outcomes, supported by structured action planning and accountability.",
    speakers: [{ name: "Lucy Quist", title: "Founder" }],
    startsAt: "2023-11-09T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
  {
    id: 6,
    slug: "taking-action-creating-prosperity-2022",
    title: "2022 — Taking Action, Creating Prosperity",
    image: placeholderImages.events.conference2022,
    description:
      "The inaugural conference established The Bold New Normal as a catalytic platform challenging Africans to move from aspiration to execution. It called participants to take personal responsibility for creating prosperity in their own lives and communities, with an emphasis on moving from passive commentary to deliberate action.",
    speakers: [{ name: "Lucy Quist", title: "Founder" }],
    startsAt: "2022-11-10T09:00:00.000Z",
    timezone: "GMT",
    venue: "Accra, Ghana",
    isOnline: false,
    watchUrl: "/media",
    status: "past",
  },
];

export const fallbackMedia: MediaItem[] = [
  {
    id: 1,
    title: "Why Africa needs a bold new normal",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: placeholderImages.media.keynote,
    event: "BNN Annual Conference 2025",
    speaker: "Lucy Quist",
    topic: "Leadership",
    year: 2025,
    description: "Opening keynote on African agency and enterprise.",
  },
  {
    id: 2,
    title: "Building enterprises that scale",
    type: "video",
    embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: placeholderImages.media.enterprise,
    event: "BNN Annual Conference 2025",
    speaker: "Panel",
    topic: "Entrepreneurship",
    year: 2025,
    description: "Founders on productive capacity, jobs and growth.",
  },
  {
    id: 3,
    title: "The Bold New Normal conversation",
    type: "audio",
    embedUrl: "https://open.spotify.com/embed/episode/placeholder",
    event: "BNN Podcast",
    speaker: "Lucy Quist",
    topic: "Movement",
    year: 2024,
    description: "Audio conversation on the movement's origins.",
  },
];

export const fallbackTeam: TeamMember[] = [
  {
    id: 1,
    name: "Lucy Quist",
    title: "Founder, Bold New Normal",
    photo: "/images/img_lucy_3.jpg",
    isFounder: true,
    shortBio:
      "Founder of The Bold New Normal, author of the book of the same name, and Managing Director & Head of Transformation, Global Transaction Banking at Barclays. Former CEO of Airtel Ghana — the first Ghanaian woman to head a multinational telecommunications company.",
    fullBio:
      "Lucy Quist is the Founder of The Bold New Normal, author of the book The Bold New Normal, convener of its annual conference and host of The Bold New Normal Podcast. Through TBNN, she champions a vision of sustainable prosperity and transformation in Africa.\n\nShe is Managing Director and Head of Transformation for Global Transaction Banking at Barclays — an accomplished strategic business leader with extensive experience across financial services, telecommunications, technology transformation, organisational development and operational resilience.\n\nPreviously, Lucy served as Managing Director and Global Head of Firm Resilience at Morgan Stanley, where she led the firm's business continuity and operational resilience functions after serving as Global Head of Change in Technology Transformation. She was also CEO of Airtel Ghana, becoming the first Ghanaian woman to head a multinational telecommunications company, and has held leadership roles at Vodafone and Millicom International Cellular. Earlier in her career, she worked at the Royal Bank of Scotland and Ford Motor Company.\n\nLucy is a chartered electrical and electronic engineer with a first-class honours degree from the University of East London and an MBA from INSEAD. She speaks French as a second business language. She has served on the boards of INSEAD Business School, CSquared and Margins ID Group, and previously served as Vice President of FIFA's Normalisation Committee in Ghana.\n\nShe is a thought leader and international speaker focused on leadership, technology and transformation, with speaking platforms including TEDxEUSTON, the Wharton Africa Business Forum, the Stanford C. Bernstein Center for Leadership & Ethics at Columbia Business School, McGill University, INSEAD's Africa Business Forum and GSMA Mobile World Congress. In January 2020, she moderated the UK-Africa Investment Summit, and she was featured in the BBC's Power Women series.\n\nHer honours include the University of East London Alumni Change Maker Award, CIMG Marketing Woman of the Year, Telecom CEO of the Year, CSR CEO of the Year and the Corporate Leadership Award at the Ghana Legacy Awards.",
    links: [{ label: "YouTube", url: "https://youtube.com/@lucyquistofficial" }],
  },
  {
    id: 2,
    name: "Team Member",
    title: "Programmes Lead",
    photo: placeholderImages.team.member2,
    shortBio: "Placeholder profile — managed through the CMS.",
  },
  {
    id: 3,
    name: "Team Member",
    title: "Partnerships Lead",
    photo: placeholderImages.team.member3,
    shortBio: "Placeholder profile — managed through the CMS.",
  },
];

export const fallbackRoadmap: RoadmapMilestone[] = [
  { id: 1, phase: "Phase 1", period: "2024–2025", headline: "Ignite", detail: "Launch the movement, publish the thesis, convene the first communities." },
  { id: 2, phase: "Phase 2", period: "2026", headline: "Organise", detail: "Stand up the five sector communities and the partner network." },
  { id: 3, phase: "Phase 3", period: "2027", headline: "Governance & Leadership", detail: "A year focused on the leadership Africa's enterprises and institutions need." },
  { id: 4, phase: "Phase 4", period: "2028+", headline: "Scale", detail: "Back community-built solutions to scale across the continent." },
];

export const fallbackFocus: FocusPage[] = [
  {
    year: 2027,
    slug: "governance-leadership",
    title: "Governance & Leadership",
    intro:
      "In 2027, Bold New Normal turns its full attention to governance and leadership — the systems and people that decide whether African enterprise can scale.",
    whyItMatters:
      "Lucy Quist believes capable, accountable leadership is the multiplier on every other investment Africa makes. Enterprises, institutions and nations rise to the level of their leadership. (Final narrative to be supplied by BNN.)",
    outcomes: [
      "A pan-African cohort of enterprise and institutional leaders",
      "Practical governance playbooks for growing African organisations",
      "Public conversations that raise the standard of leadership",
    ],
    activities: [
      "Leadership convenings across the sector communities",
      "Governance masterclasses and mentorship",
      "The 2027 BNN annual conference, themed on the focus",
    ],
  },
];
