export type ResumeRole = {
  title: string;
  /** One display line, or several when one employer covers more than one engagement. */
  period: string | string[];
  bullets: string[];
};

const hedraBullets = [
  "Prototyped, designed, and shipped new features and flows, including major UX redesigns.",
  "Collaborated closely with engineers, cross-functional teams, and leadership on agentic experiences and video timelines.",
];

const gumroadBullets = [
  "Worked with the CEO to ship features for Gumroad, Flexile, and Helper.",
  "Built designs directly in code and shipped to millions of users.",
];

const procreateBullets = [
  "Led design for all aspects of user experience for Procreate's digital platforms.",
  "Advised on product design and brand architecture.",
];

const laVisualBullets = [
  "Designed digital products with clients, such as the NFL and the U.S. Department of Education, focusing on brand identity and intuitive UX.",
];

const huemorBullets = [
  "Shipped websites for numerous clients across tech, construction, and many other industries.",
];

/** Public resume. Year ranges only; this stays the default at `/`. */
export const publicExperience: ResumeRole[] = [
  {
    title: "Product Designer at Hedra",
    period: "2025 - Present",
    bullets: hedraBullets,
  },
  {
    title: "Design Engineer at Gumroad (Antiwork)",
    period: "2024 – 2025",
    bullets: gumroadBullets,
  },
  {
    title: "UI/UX Designer at Procreate",
    period: "2023 – 2025",
    bullets: procreateBullets,
  },
  {
    title: "Product Designer at La Visual",
    period: "2022 – 2023",
    bullets: laVisualBullets,
  },
  {
    title: "UI/UX Designer at Huemor",
    period: "2019 – 2022",
    bullets: huemorBullets,
  },
];

/**
 * PERM / immigration copy at `/perm`.
 * Dates are mm/dd/yyyy where a day is documented.
 * Soft dates (do not treat as a sworn last day):
 * - Gumroad 1099 starts about 01/15/2024 and runs through March 2025 (no end day).
 * - La Visual ends ~06/2023. 06/30/2023 is the last day of that month, not a documented separation date.
 *   Paid via Dreamrock; no US W-2.
 * Legal names not shown on the public titles: Hedra Inc.; Gumroad Inc.;
 * Procreate / Savage Software Group Pty Ltd; LA Visual, Inc.; Huemor Designs LLC;
 * Arena Technologies / Arena Physica.
 */
export const permExperience: ResumeRole[] = [
  {
    title: "Product Designer at Arena Technologies / Arena Physica",
    period: "04/27/2026 – Present",
    bullets: [],
  },
  {
    title: "Product Designer at Hedra",
    period: "07/14/2025 – 04/24/2026",
    bullets: hedraBullets,
  },
  {
    title: "Design Engineer at Gumroad (Antiwork)",
    period: [
      "04/01/2025 – 05/31/2025 (W-2 via Gusto)",
      "01/15/2024 – 03/2025 (1099 contractor)",
    ],
    bullets: gumroadBullets,
  },
  {
    title: "UI/UX Designer at Procreate",
    period: "07/03/2023 – 03/14/2025",
    bullets: procreateBullets,
  },
  {
    title: "Product Designer at La Visual",
    period: "03/21/2022 – 06/30/2023",
    bullets: laVisualBullets,
  },
  {
    title: "UI/UX Designer at Huemor",
    period: "04/22/2019 – 03/18/2022",
    bullets: huemorBullets,
  },
];
