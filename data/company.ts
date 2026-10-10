import type { Stat, Value } from "@/types/common";
export const company = {
  name: "Al Zikra Islamic Center",
  shortName: "Al Zikra",
  description: "Quranic and Islamic education rooted in knowledge, character and excellence since 2009 in Westridge 3, Rawalpindi, Pakistan.",
  phone: null as string | null,
  email: "info@alzikra.org" as string | null,
  addresses: ["Bismillah Musjid, Gulshan e Nayab, Westridge III, Rawalpindi, Pakistan"],
};
export const values: Value[] = [
  { id: "quran", title: "Quran & understanding", description: "Students memorise and revise the Quran, then are introduced to Tarjuma-e-Quran after Hifz." },
  { id: "character", title: "Character & tarbiyah", description: "Adab with parents, respect for teachers, honesty, cleanliness, punctuality and responsibility are part of daily learning." },
  { id: "family", title: "Family partnership", description: "Non-residential study keeps students with their families; parents support revision and stay connected with teachers." },
  { id: "teaching", title: "Guided learning", description: "Teachers supervise memorisation, correct mistakes and encourage each student at his own pace." },
];
export const impactStats: Stat[] = [
  { id: "established", value: "2009", label: "Established", description: "Al Zikra Islamic Center has served families since 2009." },
  { id: "branches", value: "04", label: "Branches", description: "Four locations in Rawalpindi and Islamabad." },
  { id: "hifz", value: "02", label: "Year Hifz pathway", description: "A focused two-year programme for suitable students." },
];
