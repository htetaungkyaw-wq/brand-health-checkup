import { ChecklistItem } from "@/types/checklist";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "brand_position",
    q: "Do you have a clear brand position (who you serve + why you exist)?",
    weight: 15,
    help: "Write a one-line positioning: who, what, why. Use it on homepage and briefings.",
    inputType: "toggle",
  },
  {
    id: "visual_identity",
    q: "How consistent is your visual identity across all touchpoints?",
    weight: 15,
    help: "Create a simple brand kit & use the same logo and colors across channels.",
    inputType: "slider",
    sliderLabels: { min: "Not at all", max: "Fully consistent" },
  },
  {
    id: "tone",
    q: "Is your tone of voice documented and used in posts/ads?",
    weight: 10,
    help: "Draft 3 sample lines in your brand voice for social captions and ads.",
    inputType: "toggle",
  },
  {
    id: "website",
    q: "How quickly can visitors understand your product?",
    weight: 15,
    help: "Use a hero headline that explains benefits, not features. Add a single CTA.",
    inputType: "slider",
    sliderLabels: { min: "Confusing", max: "Crystal clear" },
  },
  {
    id: "audience",
    q: "How well do you understand your core customer?",
    weight: 10,
    help: "Run a simple survey or use analytics to identify top audience segments.",
    inputType: "slider",
    sliderLabels: { min: "No idea", max: "Deep insights" },
  },
  {
    id: "cta",
    q: "Do your social posts and ads have clear CTAs tied to measurable goals?",
    weight: 10,
    help: "Use one CTA per asset and track conversions (signup, purchase, call).",
    inputType: "toggle",
  },
  {
    id: "measurements",
    q: "How many KPIs are you actively tracking?",
    weight: 15,
    help: "Pick 2 KPIs for the next 30 days and monitor daily to detect trends.",
    inputType: "slider",
    sliderLabels: { min: "None", max: "5+ KPIs" },
  },
  {
    id: "distribution",
    q: "Which channels are you actively using for distribution?",
    weight: 10,
    help: "Document which channels get what content and plan a 4-week calendar.",
    inputType: "devices",
  },
];
