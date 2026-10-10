export interface CentreHours { id: string; days: string; hours: string }
export const contact = {
  formNotice: "Online enquiries are temporarily unavailable while email delivery is being configured. Please email info@alzikra.org directly.",
  hours: [
    { id: "hifz", days: "Hifz-e-Quran", hours: "7:00 AM–5:00 PM; Sunday holiday" },
    { id: "nazira", days: "Nazira-e-Quran", hours: "3:00 PM–5:00 PM; Sunday holiday" },
    { id: "islamic-studies", days: "Islamic Studies / Aalim-e-Deen", hours: "Monday–Saturday, 7:00 AM–5:00 PM; Sunday holiday" },
  ] satisfies CentreHours[],
  mapUrl: null as string | null,
  locationNote: "Al Zikra has four branches in Rawalpindi and Islamabad. The head office is at Bismillah Musjid, Gulshan e Nayab, Westridge III, Rawalpindi. A verified map link has not yet been provided.",
};
