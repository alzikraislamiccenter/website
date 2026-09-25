import type { PageHeroProps } from "@/components/common/PageHero";
import type { ContentItem, CTA, SectionIntroProps, Value } from "@/types/common";
import type { PageSEO } from "@/lib/seo";

interface PageContent { seo: PageSEO; hero: PageHeroProps }
function page(title: string, path: string, description: string): PageContent {
  return {
    seo: { title, path, description },
    hero: { title, description, breadcrumbs: [{ label: "Home", href: "/" }, { label: title }] },
  };
}
export const pages = {
  home: {
    seo: { title: "Home", path: "/", description: "Al Zikra Islamic Centre website. Centre information, courses and community updates will be added as approved." },
    hero: { eyebrow: "Al Zikra Islamic Centre", title: "Homepage introduction pending approval", description: "This space is ready for the centre’s approved welcome message.", primaryCTA: { label: "Explore Courses", href: "/courses" }, secondaryCTA: { label: "About Us", href: "/about" } },
  },
  about: page("About Us", "/about", "Learn about Al Zikra Islamic Centre. The centre’s story, mission and team information await approval."),
  services: page("Services", "/services", "Explore the services of Al Zikra Islamic Centre. Confirmed service details will be published here."),
  courses: page("Courses", "/courses", "Browse course categories at Al Zikra Islamic Centre. Course offerings and enrolment details await confirmation."),
  blog: page("Blog", "/blog", "Read articles and updates from Al Zikra Islamic Centre as approved content becomes available."),
  media: page("Media", "/media", "Explore approved videos, audio, photos and resources from Al Zikra Islamic Centre when published."),
  contact: page("Contact Us", "/contact", "Contact Al Zikra Islamic Centre. Verified contact details, centre hours and location will be added here."),
} satisfies Record<string, PageContent>;

export const sectionContent = {
  about: { eyebrow: "About the centre", title: "Who We Are", description: "Add the centre’s approved introduction and purpose." },
  story: { title: "Our Story", description: "Add the centre’s verified history and milestones." },
  services: { title: "Our Services", description: "Approved services and enquiry details will appear here." },
  servicesIntro: { title: "Explore Services", description: "This area is ready for a short introduction to the confirmed services." },
  courses: { title: "Courses", description: "Browse the planned content categories. Placeholder cards do not indicate confirmed offerings." },
  coursesIntro: { title: "Explore Learning Opportunities", description: "Approved course information and enrolment guidance will be added here." },
  learning: { title: "Islamic Learning", description: "Add an approved overview of the centre’s educational approach." },
  why: { title: "Why Al Zikra", description: "Add verified information about the centre’s approach and facilities." },
  programs: { title: "Programs", description: "Program details and dates will be added after confirmation." },
  upcoming: { title: "Upcoming Courses", description: "Confirmed upcoming courses and registration dates will appear here." },
  blog: { title: "Latest Articles", description: "Approved articles and updates will be published here." },
  popular: { title: "Popular Articles", description: "Article selections will be added once the editorial content is approved." },
  search: { title: "Find an Article", description: "Search the available article titles, descriptions and categories." },
  featuredArticle: { title: "Featured Article" },
  media: { title: "Media Preview", description: "Approved recordings and photos will appear here." },
  featuredVideo: { title: "Featured Video" },
  gallery: { title: "Media Gallery", description: "Browse by category. Resources are listed in the dedicated resources section below." },
  audio: { title: "Audio Lectures" },
  photos: { title: "Photo Gallery" },
  resources: { title: "Resources", description: "Approved downloads and reference materials will appear here." },
  mission: { title: "Mission & Vision" },
  values: { title: "Our Values" },
  leadership: { title: "Leadership", description: "Approved leadership profiles will appear here." },
  teachers: { title: "Teachers", description: "Approved teacher profiles and qualifications will appear here." },
  campus: { title: "Our Centre", description: "Verified campus information will appear here." },
  impact: { title: "Community Impact", description: "Community initiatives and verified outcomes will be added here." },
  process: { title: "Learning Process", description: "The approved learning and enrolment process will be added here." },
  faq: { title: "Frequently Asked Questions" },
  contact: { title: "Contact the Centre", description: "Contact details are awaiting verification." },
  form: { title: "Send an Enquiry" },
  hours: { title: "Centre Hours" },
  location: { title: "Location / Maps" },
  social: { title: "Social Media" },
} satisfies Record<string, SectionIntroProps>;

export const callsToAction = {
  startLearning: { title: "Start Learning", description: "Explore the course categories and check for confirmed learning opportunities.", primaryCTA: { label: "Explore Courses", href: "/courses" } },
  exploreCourses: { title: "Explore Courses", description: "Find the latest available course information.", primaryCTA: { label: "Explore Courses", href: "/courses" } },
  join: { title: "Join Al Zikra", description: "Contact the centre for participation information when verified contact details are available.", primaryCTA: { label: "Contact the Centre", href: "/contact" } },
  question: { title: "Ask a Question", description: "Visit the contact page for enquiry information.", primaryCTA: { label: "Contact the Centre", href: "/contact" } },
  contact: { title: "Contact the Centre", description: "Explore the enquiry information prepared for the centre.", primaryCTA: { label: "Contact Us", href: "/contact" } },
  involved: { title: "Get Involved", description: "Participation information will be added once confirmed.", primaryCTA: { label: "Contact the Centre", href: "/contact" } },
  newsletter: { title: "Stay Updated", description: "Newsletter details will be added once confirmed." },
} satisfies Record<string, SectionIntroProps & { primaryCTA?: CTA }>;

export const missionVision: ContentItem[] = [
  { id: "mission", title: "Our Mission", description: "Add the centre’s approved mission statement.", placeholder: true },
  { id: "vision", title: "Our Vision", description: "Add the centre’s approved vision statement.", placeholder: true },
];
export const reasons: Value[] = [{ id: "reason-placeholder", title: "Centre approach pending approval", description: "Add a verified reason to learn with or participate in the centre.", placeholder: true }];
export const learningSteps: ContentItem[] = [{ id: "process-placeholder", title: "Process awaiting confirmation", description: "Add each approved step, its requirements and related guidance.", placeholder: true }];
