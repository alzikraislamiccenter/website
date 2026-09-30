import type { NavigationItem, NavigationLink } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  { label: "Programs", triggerOnly: true, children: [
    { label: "Hifz-ul-Quran", href: "/programs/hifz-ul-quran", description: "Quran memorisation pathway" },
    { label: "Nazra Quran", href: "/programs/nazra-quran", description: "Quran reading and recitation" },
    { label: "Tajweed", href: "/programs/tajweed", description: "Quran recitation principles" },
    { label: "Islamic Studies", href: "/programs/islamic-studies", description: "Explore Islamic learning" },
    { label: "Full-Time Program", href: "/programs/full-time-program", description: "Intensive Quran learning program" },
    { label: "Part-Time Program", href: "/programs/part-time-program", description: "Flexible Quran learning program" },
  ] },
  { label: "Academics", triggerOnly: true, children: [
    { label: "Admission", href: "/academics/admission", description: "Admission information" },
    { label: "Fee Structure", href: "/academics/fee-structure", description: "Fees and payment information" },
    { label: "Class Schedule", href: "/academics/class-schedule", description: "Class times and availability" },
  ] },
  { label: "About", triggerOnly: true, children: [
    { label: "About Us", href: "/about", description: "Get to know Al Zikra" },
    { label: "Events", href: "/about/events", description: "Centre events and updates" },
    { label: "Blogs", href: "/blog", description: "Articles and updates" },
    { label: "Career", href: "/about/career", description: "Career opportunities" },
    { label: "FAQ's", href: "/contact#faqs", description: "Frequently asked questions" },
  ] },
  { label: "Resources", triggerOnly: true, children: [
    { label: "Tajweed e Qaida", href: "/resources/tajweed-e-qaida", description: "Learning resource" },
    { label: "Tajweed e Quran", href: "/resources/tajweed-e-quran", description: "Learning resource" },
    { label: "Other Downloads", href: "/resources/other-downloads", description: "Additional learning materials" },
  ] },
  { label: "Contact Us", href: "/contact" },
];

export const policyLinks: NavigationLink[] = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms of Use", href: "/policies/terms-of-use" },
];
