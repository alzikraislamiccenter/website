export interface CentreHours { id: string; days: string; hours: string }
export const contact = {
  formNotice: "Enquiries are not being collected yet. The form will be enabled when a submission service and privacy information are configured.",
  hours: [{ id: "hours-placeholder", days: "Centre opening hours", hours: "To be confirmed" }] satisfies CentreHours[],
  mapUrl: null as string | null,
  locationNote: "A verified address and map link will be added here.",
};
