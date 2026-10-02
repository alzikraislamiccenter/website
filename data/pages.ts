import type { PageHeroProps } from "@/components/common/PageHero";
import type { ContentItem, CTA, SectionIntroProps, Value } from "@/types/common";
import type { PageSEO } from "@/lib/seo";

interface PageContent { seo: PageSEO; hero: PageHeroProps }
function page(title: string, path: string, description: string): PageContent {
  return {
    seo: { title, path, description },
    hero: { eyebrow: "Al Zikra Islamic Center", title, description, backButton: true, secondaryCTA: { label: "Contact Us", href: path === "/contact" ? "/contact#enquiry" : "/contact" } },
  };
}
export const pages = {
  home: {
    seo: { title: "Quran Learning & Community", path: "/", description: "Explore Quran learning pathways, community information and updates from Al Zikra Islamic Center. Ask about current opportunities." },
    hero: { eyebrow: "Al Zikra Islamic Center", title: "A thoughtful space for Quran learning.", description: "Explore learning pathways, discover the center, and ask about current opportunities. Confirmed class details will be published as they become available.", backgroundImage: { src: "/assets/home/images/hero-architecture.png", alt: "" }, primaryCTA: { label: "Explore learning", href: "/courses" }, secondaryCTA: { label: "Get in touch", href: "/contact#enquiry" }, variant: "home" as const },
  },
  about: page("About Us", "/about", "Learn about Al Zikra Islamic Center. The center’s story, mission and team information will be shared when confirmed."),
  services: page("Services", "/services", "Explore service areas at Al Zikra Islamic Center and ask about current availability."),
  courses: page("Courses", "/courses", "Browse Quran and Islamic learning areas at Al Zikra Islamic Center. Specific courses and schedules await confirmation."),
  blog: page("Blog", "/blog", "Read articles and updates from Al Zikra Islamic Center as approved content becomes available."),
  media: page("Media", "/media", "Explore approved videos, audio, photos and resources from Al Zikra Islamic Center when published."),
  contact: page("Contact Us", "/contact", "Send an enquiry to Al Zikra Islamic Center about learning, programmes or the center."),
} satisfies Record<string, PageContent>;

export const sectionContent = {
  homePrograms: { title: "Our Programs", description: "Explore Al Zikra's learning areas. Schedules, levels and enrolment details will be confirmed with the centre." },
  about: { eyebrow: "A place to begin", title: "Learning with purpose", description: "Al Zikra is preparing a welcoming space for Quran learning and community connection. More about the centre will be shared when confirmed." },
  story: { title: "Our Story", description: "The centre's verified history and milestones will be shared here." },
  services: { title: "Our Services", description: "See the areas being prepared and enquire about current availability." },
  servicesIntro: { title: "Explore Services", description: "Find a starting point and ask us for the latest details." },
  courses: { title: "Areas of Learning", description: "Browse subjects of interest. These categories do not indicate confirmed enrolment." },
  coursesIntro: { title: "Explore Learning Opportunities", description: "Specific courses, schedules and enrolment guidance will be announced when confirmed." },
  learning: { title: "Thoughtful learning", description: "An approved overview of the centre’s teaching approach will appear here." },
  why: { title: "Why Al Zikra", description: "More about the centre's approach and facilities will be shared when verified." },
  programs: { title: "Programs", description: "Explore the learning areas and enquire about current details. Schedules and enrolment dates will be confirmed." },
  upcoming: { title: "Upcoming Courses", description: "Confirmed upcoming courses and registration dates will appear here." },
  blog: { title: "Latest Articles", description: "Read approved articles and updates as they are published." },
  popular: { title: "Popular Articles", description: "Article selections will be added once the editorial content is approved." },
  search: { title: "Find an Article", description: "Search the available article titles, descriptions and categories." },
  featuredArticle: { title: "Featured Article" },
  media: { title: "Media Preview", description: "Watch and listen as approved recordings become available." },
  featuredVideo: { title: "Featured Video" },
  gallery: { title: "Media Gallery", description: "Browse by category. Resources are listed in the dedicated resources section below." },
  audio: { title: "Audio Lectures" },
  photos: { title: "Photo Gallery" },
  resources: { title: "Resources", description: "Approved downloads and reference materials will appear here." },
  mission: { title: "Mission & Vision" },
  values: { title: "Our Values" },
  leadership: { title: "Leadership", description: "Meet the people behind the centre when profiles are approved." },
  teachers: { title: "Teachers", description: "Approved teacher profiles and qualifications will appear here." },
  campus: { title: "Our Centre", description: "Verified campus information will appear here." },
  impact: { title: "Community Impact", description: "Community initiatives and verified outcomes will be added here." },
  process: { title: "Learning Process", description: "The confirmed learning and enrolment process will appear here." },
  faq: { title: "Frequently Asked Questions" },
  contact: { title: "Contact the Centre", description: "Direct contact details will be added when verified. You can send an enquiry below." },
  form: { title: "Send an Enquiry" },
  hours: { title: "Centre Hours" },
  location: { title: "Location / Maps" },
  social: { title: "Social Media" },
} satisfies Record<string, SectionIntroProps>;

export const callsToAction = {
  startLearning: { title: "Start a conversation", description: "Explore learning pathways or ask about current availability.", primaryCTA: { label: "Send an enquiry", href: "/contact#enquiry" }, secondaryCTA: { label: "Explore courses", href: "/courses" } },
  exploreCourses: { title: "Explore Courses", description: "Find the latest available course information.", primaryCTA: { label: "Explore Courses", href: "/courses" } },
  join: { title: "Be part of the story", description: "Ask us about ways to connect with the centre.", primaryCTA: { label: "Send an enquiry", href: "/contact#enquiry" } },
  question: { title: "Have a question?", description: "Tell us what you would like to learn.", primaryCTA: { label: "Ask a question", href: "/contact#enquiry" } },
  contact: { title: "Contact the Centre", description: "Explore the enquiry information prepared for the centre.", primaryCTA: { label: "Contact Us", href: "/contact" } },
  involved: { title: "Connect with Al Zikra", description: "Get in touch about current programmes and opportunities.", primaryCTA: { label: "Send an enquiry", href: "/contact#enquiry" } },
  newsletter: { title: "Stay Updated", description: "Newsletter details will be added once confirmed." },
} satisfies Record<string, SectionIntroProps & { primaryCTA?: CTA; secondaryCTA?: CTA }>;

export const missionVision: ContentItem[] = [
  { id: "mission", title: "Our Mission", description: "The centre's approved mission statement will be published here.", placeholder: true },
  { id: "vision", title: "Our Vision", description: "The centre's approved vision statement will be published here.", placeholder: true },
];
export const reasons: Value[] = [{ id: "reason-placeholder", title: "A considered approach", description: "Verified information about the learning experience will appear here.", placeholder: true }];
export const learningSteps: ContentItem[] = [{ id: "process-placeholder", title: "Enquire about a pathway", description: "Share your learning goals through the contact form. Confirmed next steps will be shared when available.", placeholder: true }];
