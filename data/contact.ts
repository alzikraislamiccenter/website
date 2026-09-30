export interface CentreHours { id: string; days: string; hours: string }
export const contact = {
  formNotice: "Enquiries are temporarily unavailable while email delivery is being configured. Fields marked * will be required when the form opens.",
  hours: [{ id: "hours-placeholder", days: "Centre opening hours", hours: "To be confirmed" }] satisfies CentreHours[],
  mapUrl: null as string | null,
  locationNote: "A verified address and map link will be added here.",
};
