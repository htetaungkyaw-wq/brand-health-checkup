import { ChecklistItem } from "@/types/checklist";

export const CHECKLIST_ITEMS: ChecklistItem[] = [
  {
    id: "brand_position",
    q: "Do you have a clear brand position (who you serve + why you exist)?",
    weight: 15,
    help: "Write a one-line positioning: who, what, why. Use it on homepage and briefings.",
  },
  {
    id: "visual_identity",
    q: "Do you have consistent visual identity (logo, colors, fonts)?",
    weight: 15,
    help: "Create a simple brand kit & use the same logo and colors across channels.",
  },
  {
    id: "tone",
    q: "Is your tone of voice documented and used in posts/ads?",
    weight: 10,
    help: "Draft 3 sample lines in your brand voice for social captions and ads.",
  },
  {
    id: "website",
    q: "Does your website explain your product clearly in 5 seconds?",
    weight: 15,
    help: "Use a hero headline that explains benefits, not features. Add a single CTA.",
  },
  {
    id: "audience",
    q: "Do you track and understand your core customer (demographics/behavior)?",
    weight: 10,
    help: "Run a simple survey or use analytics to identify top audience segments.",
  },
  {
    id: "cta",
    q: "Do your social posts and ads have clear CTAs tied to measurable goals?",
    weight: 10,
    help: "Use one CTA per asset and track conversions (signup, purchase, call).",
  },
  {
    id: "measurements",
    q: "Do you measure performance with simple KPIs (CPA/CTR/Conversion)?",
    weight: 15,
    help: "Pick 2 KPIs for the next 30 days and monitor daily to detect trends.",
  },
  {
    id: "distribution",
    q: "Do you have a repeatable content distribution plan (channels + cadence)?",
    weight: 10,
    help: "Document which channels get what content and plan a 4-week calendar.",
  },
];
