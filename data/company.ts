import type { Stat, Value } from "@/types/common";
export const company = {
  name: "Al Zikra Islamic Center",
  shortName: "Al Zikra",
  description: "Explore Quran learning, community information and updates from Al Zikra Islamic Center.",
  phone: null as string | null,
  email: null as string | null,
  addresses: [] as string[],
};
export const values: Value[] = [{ id: "value-placeholder", title: "Values to be shared", description: "The centre's approved values will be published here.", placeholder: true }];
export const impactStats: Stat[] = [{ id: "impact-placeholder", value: "—", label: "Community impact", description: "Verified outcomes will be published here." }];
