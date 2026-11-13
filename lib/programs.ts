export type ProgramKind = "event" | "school" | "community" | "digital";

export type Program = {
  slug: string;
  title: string;
  period: string;
  kind: ProgramKind;
  kindLabel: string;
  need: string;
  summary: string;
  itemLabel: string;
  cashHint: string;
  image: string;
  imageAlt: string;
};

export type ProgramGroup = {
  id: string;
  title: string;
  blurb: string;
  slugs: string[];
};

export const programsPeriod = "2026";

export const programs: Program[] = [
  {
    slug: "organised-race",
    title: "Organised race event",
    period: "2026",
    kind: "event",
    kindLabel: "Event",
    image: "/programs/program-race.jpg",
    imageAlt: "Runners on a community race",
    need: "Race-day support, marshals, and running costs",
    summary:
      "A planned race used to raise visibility and funds for the year’s school and community work. Join the planning group, give cash toward the event, or provide listed race items.",
    itemLabel: "Race-day supplies listed for this event",
    cashHint: "Cash toward the race budget for this period.",
  },
  {
    slug: "school-fun-run",
    title: "School fun run",
    period: "2026",
    kind: "event",
    kindLabel: "Event",
    image: "/programs/program-race.jpg",
    imageAlt: "A school fun run",
    need: "Water stations, bibs, and marshals",
    summary:
      "A shorter race for schools listed this year. Give cash, provide the listed race items, or join the planning group.",
    itemLabel: "Bibs, water, and marshals’ kits",
    cashHint: "Cash toward the school fun run.",
  },
  {
    slug: "tree-planting",
    title: "Tree planting",
    period: "2026",
    kind: "community",
    kindLabel: "Community",
    image: "/programs/program-planting.jpg",
    imageAlt: "People planting seedlings",
    need: "Seedlings, tools, and planting-day hands",
    summary:
      "A scheduled planting for this year. Support with cash, provide listed planting items, or join the group that organises the day.",
    itemLabel: "Seedlings and planting tools listed for this activity",
    cashHint: "Cash toward seedlings, tools, and the planting day.",
  },
  {
    slug: "nursery-day",
    title: "Nursery day",
    period: "2026",
    kind: "community",
    kindLabel: "Community",
    image: "/programs/program-planting.jpg",
    imageAlt: "Seedlings prepared for planting",
    need: "Bags, soil, and seedling stock",
    summary:
      "A day to raise and bag seedlings before the planting. Give cash, provide the listed nursery items, or join the planning group.",
    itemLabel: "Nursery bags, soil, and seedlings",
    cashHint: "Cash toward the nursery day.",
  },
  {
    slug: "abc-school",
    title: "ABC School",
    period: "2026",
    kind: "school",
    kindLabel: "School",
    image: "/programs/program-school.jpg",
    imageAlt: "A classroom ready for a projector",
    need: "Projector",
    summary:
      "A planned donation to this school for the listed need. Give cash toward it, provide the projector, or join the group that organises delivery.",
    itemLabel: "Projector",
    cashHint: "Cash toward the projector listed for this school.",
  },
  {
    slug: "listed-classroom",
    title: "Listed classroom",
    period: "2026",
    kind: "school",
    kindLabel: "School",
    image: "/impact/impact-digital.jpg",
    imageAlt: "Students in a computer class",
    need: "Working laptops for a class",
    summary:
      "A planned placement of working machines for a listed class. Give cash, provide listed laptops, or join delivery planning. The public card shows the name and the need only.",
    itemLabel: "Working laptops",
    cashHint: "Cash toward the laptops listed for this class.",
  },
  {
    slug: "sensitization-day",
    title: "Sensitization day",
    period: "2026",
    kind: "digital",
    kindLabel: "Digital",
    image: "/impact/impact-digital.jpg",
    imageAlt: "A digital literacy class",
    need: "Facilitators and a demonstration kit",
    summary:
      "A day to show a school what placed machines can do. Join the planning group, give cash, or provide the listed kit.",
    itemLabel: "Demonstration kit",
    cashHint: "Cash toward the sensitization day.",
  },
  {
    slug: "device-placement",
    title: "Device placement",
    period: "2026",
    kind: "digital",
    kindLabel: "Digital",
    image: "/home-impact.jpg",
    imageAlt: "A student using a placed laptop",
    need: "Working machines ready for class",
    summary:
      "Working PCs leave as a planned placement. Give cash, provide a listed machine, or join the group that organises the handoff.",
    itemLabel: "Working laptop or desktop",
    cashHint: "Cash toward machines for this placement.",
  },
];

export const programGroups: ProgramGroup[] = [
  {
    id: "race",
    title: "Organised race",
    blurb: "Race days used to raise visibility and funds.",
    slugs: ["organised-race", "school-fun-run"],
  },
  {
    id: "planting",
    title: "Tree planting",
    blurb: "Planting and the nursery that feeds it.",
    slugs: ["tree-planting", "nursery-day"],
  },
  {
    id: "schools",
    title: "School donations",
    blurb: "Public cards show the school name and the need only.",
    slugs: ["abc-school", "listed-classroom"],
  },
  {
    id: "digital",
    title: "Digital divide and sensitization",
    blurb: "Placement days and the class that learns the machines.",
    slugs: ["sensitization-day", "device-placement"],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

export function programsInGroup(group: ProgramGroup) {
  return group.slugs.map((slug) => getProgram(slug)).filter((program): program is Program => Boolean(program));
}
