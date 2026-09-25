import type { Stat, Value } from "@/types/common";
export const company = {
  name: "Al Zikra Islamic Centre",
  shortName: "Al Zikra",
  description: "Website foundation for Al Zikra Islamic Centre. Approved centre information will be added here.",
  phone: null as string | null,
  email: null as string | null,
  addresses: [] as string[],
};
export const values: Value[] = [{ id: "value-placeholder", title: "Values to be confirmed", description: "Add the centre’s approved values and supporting descriptions.", placeholder: true }];
export const impactStats: Stat[] = [{ id: "impact-placeholder", value: "Pending", label: "Community impact", description: "Add verified statistics and their reporting period." }];
