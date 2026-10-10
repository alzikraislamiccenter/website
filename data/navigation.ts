import type { NavigationItem, NavigationLink } from "@/types/navigation";

export const navigation: NavigationItem[] = [
  { label: "Programs", triggerOnly: true, children: [
    { label: "Hifz-ul-Quran", href: "/programs/hifz-ul-quran", description: "Two-year memorisation, revision and Tajweed pathway" },
    { label: "Nazra Quran", href: "/programs/nazra-quran", description: "Quran reading, Tajweed and Makharij" },
    { label: "Tajweed", href: "/programs/tajweed", description: "Correct pronunciation and Quran recitation" },
    { label: "Islamic Studies", href: "/programs/islamic-studies", description: "Eight-year Aalim-e-Deen course" },
    { label: "Full-Time Program", href: "/programs/full-time-program", description: "Structured full-day Quranic learning" },
    { label: "Part-Time Program", href: "/programs/part-time-program", description: "Nazira Quran alongside regular education" },
  ] },
  { label: "Academics", triggerOnly: true, children: [
    { label: "Admission", href: "/academics/admission", description: "Admission information" },
    { label: "Class Schedule", href: "/academics/class-schedule", description: "Class times and availability" },
  ] },
  { label: "About Us", href: "/about" },
  { label: "More", triggerOnly: true, children: [
    { label: "Blogs", href: "/blog", description: "Articles and updates" },
    { label: "Career", href: "/about/career", description: "Career opportunities" },
    { label: "FAQ's", href: "/faqs", description: "Frequently asked questions" },
  ] },
  { label: "Contact Us", href: "/contact" },
];

export const policyLinks: NavigationLink[] = [
  { label: "Privacy Policy", href: "/policies/privacy-policy" },
  { label: "Terms of Use", href: "/policies/terms-of-use" },
];
