export interface FocusPage {
  year: string;
  slug: string;
  theme: string;
  intro: string;
  why: string;
  outcomes: string[];
  activities: string[];
  image: string;
}

export const focusPages: FocusPage[] = [
  {
    year: "2027",
    slug: "governance-leadership",
    theme: "Governance & Leadership",
    intro:
      "In 2027, Bold New Normal turns the whole movement's attention to one question: what kind of leadership does Africa's transformation require — and how do we build it deliberately?",
    why:
      "Lucy Quist has long argued that Africa's story is not a resource problem but a leadership opportunity. Enterprises scale where institutions work, capital flows where governance is trusted, and talent stays where leadership creates room to build. Getting governance and leadership right multiplies everything else BNN works on — from healthcare to energy.",
    outcomes: [
      "A shared, practical leadership standard adopted across BNN's sector communities",
      "A cohort of emerging African leaders trained and matched to real institutions",
      "Published governance playbooks for founders scaling enterprises across borders",
      "A flagship Governance & Leadership convening with measurable commitments",
    ],
    activities: [
      "Quarterly leadership intensives hosted across the continent",
      "A governance masterclass series in the BNN media library",
      "Mentorship pairings between established executives and community members",
      "Research and publications on African-led institutional excellence",
    ],
    image:
      "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1600&q=75",
  },
];

export function getFocusPage(year: string, slug: string) {
  return focusPages.find((f) => f.year === year && f.slug === slug);
}
