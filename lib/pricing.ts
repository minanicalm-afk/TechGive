export const catalogue = [
  { id: "laptop", label: "Laptop", blurb: "Working or repairable", assessedKes: 28000, charger: true, specs: true },
  { id: "desktop", label: "Desktop / CPU", blurb: "PCs and towers", assessedKes: 18000, charger: true, specs: true },
  { id: "server", label: "Server", blurb: "Working or repairable", assessedKes: 40000, charger: true, specs: true },
  { id: "tv", label: "TV", blurb: "Any size, working or faulty", assessedKes: 15000, charger: false, specs: false },
  { id: "printer", label: "Printer", blurb: "Office and home printers", assessedKes: 7000, charger: true, specs: false },
  { id: "scanner", label: "Scanner", blurb: "Working or faulty", assessedKes: 5000, charger: true, specs: false },
  { id: "switch", label: "Switch", blurb: "Network switches", assessedKes: 8000, charger: true, specs: false },
  { id: "cables", label: "Faulty cables", blurb: "Cables only, not other accessories", assessedKes: 1500, charger: false, specs: false },
] as const;

export const conditions = [
  { id: "like-new", label: "Like new", hint: "Barely used, no marks", factor: 1.08 },
  { id: "good", label: "Good / working", hint: "Works perfectly, light wear", factor: 1 },
  { id: "fair", label: "Fair", hint: "Works, with visible wear or minor issues", factor: 0.75 },
  { id: "faulty", label: "Faulty", hint: "Has a fault, but powers on", factor: 0.45 },
  { id: "dead", label: "Not working", hint: "Dead, or for parts only", factor: 0.25 },
] as const;

export const ages = [
  { id: "under-1", label: "Under 1 year", factor: 1 },
  { id: "1-2", label: "1 – 2 years", factor: 0.92 },
  { id: "3-5", label: "3 – 5 years", factor: 0.78 },
  { id: "6-plus", label: "6 years or more", factor: 0.62 },
  { id: "unknown", label: "Not sure", factor: 0.85 },
] as const;

export type CategoryId = (typeof catalogue)[number]["id"];
export type ConditionId = (typeof conditions)[number]["id"];
export type AgeId = (typeof ages)[number]["id"];

const chargerAddKes = 1500;

function nearestHundred(value: number) {
  return Math.max(0, Math.round(value / 100) * 100);
}

export function formatKes(value: number) {
  return `KES ${value.toLocaleString("en-KE")}`;
}

export function assessItem(input: {
  category: CategoryId;
  condition: ConditionId;
  charger: boolean;
  age?: AgeId | "";
  powersOn?: boolean;
}) {
  const item = catalogue.find((entry) => entry.id === input.category);
  const condition = conditions.find((entry) => entry.id === input.condition);
  if (!item || !condition) return null;

  let factor = condition.factor;
  if (input.powersOn === false && factor > 0.45) factor = 0.45;
  const age = ages.find((entry) => entry.id === input.age);
  const ageFactor = age?.factor ?? 1;
  const withCharger = input.charger && item.charger ? chargerAddKes : 0;
  const assessed = nearestHundred(item.assessedKes * factor * ageFactor + withCharger);
  const low = nearestHundred(assessed * 0.2);
  const high = nearestHundred(assessed * 0.3);
  const offer = nearestHundred(assessed * 0.25);

  return {
    item: item.label,
    condition: condition.label,
    assessed,
    low,
    high,
    offer,
    pricedAsNotWorking: input.powersOn === false && condition.factor > 0.45,
  };
}
