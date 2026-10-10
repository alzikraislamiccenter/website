import type { PageHeroProps } from "@/components/common/PageHero";
import type { ContentItem, CTA, SectionIntroProps, Value } from "@/types/common";
import type { PageSEO } from "@/lib/seo";

interface PageContent { seo: PageSEO; hero: PageHeroProps }
const updatedHeroImages = new Set(["career", "contact", "courses", "events", "faqs", "nazra-quran", "part-time-program", "services"]);
export function pageHeroImage(image: string) {
  return `/assets/page-imagery/${image}-hero${updatedHeroImages.has(image) ? "-male" : ""}.webp`;
}
function page(title: string, path: string, description: string, image: string): PageContent {
  return {
    seo: { title, path, description },
    hero: { eyebrow: "Al Zikra Islamic Center", title, description, backgroundImage: { src: pageHeroImage(image), alt: "" }, backButton: true, secondaryCTA: { label: "Contact Us", href: path === "/contact" ? "/contact#enquiry" : "/contact" } },
  };
}
export const pages = {
  home: {
    seo: { title: "Quran Learning & Character", path: "/", description: "Established in 2009 in Westridge 3, Rawalpindi, Al Zikra Islamic Center offers Quranic and Islamic education rooted in knowledge, character and family life." },
    hero: { eyebrow: "Al Zikra Islamic Center", title: "Nurturing a lifelong connection with the Quran.", description: "Quran • Knowledge • Character • Excellence. Since 2009, Al Zikra has served families through structured Quranic education in Westridge 3, Rawalpindi, Pakistan.", backgroundImage: { src: "/assets/home/images/hero-architecture.png", alt: "" }, primaryCTA: { label: "Explore learning", href: "/courses" }, secondaryCTA: { label: "Get in touch", href: "/contact#enquiry" }, variant: "home" as const },
  },
  about: page("About Us", "/about", "Founded in 2009 in Westridge 3, Rawalpindi, Al Zikra Islamic Center combines Quranic education, Islamic knowledge, character development and family partnership.", "about"),
  services: page("Services", "/services", "Explore service areas at Al Zikra Islamic Center and ask about current availability.", "services"),
  courses: page("Courses", "/courses", "Explore Al Zikra's Quran and Islamic learning pathways, including Hifz, Nazira and the eight-year Islamic Studies / Aalim-e-Deen course.", "courses"),
  blog: page("Blog", "/blog", "Explore reflections on Quran learning, family, character and education at Al Zikra Islamic Center.", "blog"),
  media: page("Media", "/media", "Explore approved videos, audio, photos and resources from Al Zikra Islamic Center when published.", "media"),
  contact: page("Contact Us", "/contact", "Send an enquiry to Al Zikra Islamic Center about learning, programmes or the center.", "contact"),
  faqs: page("Frequently Asked Questions", "/faqs", "Answers about Al Zikra Islamic Center, programmes, admission, schedules and branches.", "faqs"),
} satisfies Record<string, PageContent>;

export const sectionContent = {
  homePrograms: { title: "Our Programs", description: "From Quran reading and a focused two-year Hifz pathway to Islamic scholarship, Al Zikra combines structured learning with character development and family involvement." },
  about: { eyebrow: "Established in 2009", title: "More than memorization", description: "At Al Zikra Islamic Center, the Quran is a guide to be understood, respected and lived. Our non-residential learning environment brings memorisation, Islamic knowledge, discipline and family values together." },
  story: { title: "Our Story", description: "Since 2009, Al Zikra has worked to nurture young Muslims through Quranic education, Islamic knowledge, character development and responsibility in Westridge 3, Rawalpindi." },
  services: { title: "Our Services", description: "See the areas being prepared and enquire about current availability." },
  servicesIntro: { title: "Explore Services", description: "Find a starting point and ask us for the latest details." },
  courses: { title: "Areas of Learning", description: "Explore Quran recitation, memorisation, Islamic sciences and the academic pathway for Huffaz." },
  coursesIntro: { title: "Explore Learning Opportunities", description: "Hifz, Nazira and Islamic Studies have distinct eligibility criteria and schedules. Review the dedicated programme pages before enquiring." },
  learning: { title: "Thoughtful learning", description: "An approved overview of the centre’s teaching approach will appear here." },
  why: { title: "Why Al Zikra", description: "More about the centre's approach and facilities will be shared when verified." },
  programs: { title: "Programs", description: "Explore the learning pathways and ask about admission assessment and seat availability." },
  upcoming: { title: "Upcoming Courses", description: "Confirmed upcoming courses and registration dates will appear here." },
  blog: { title: "Latest Articles", description: "Read our reflections on Quran learning, character and family life." },
  popular: { title: "Selected Articles", description: "A few places to begin exploring the collection." },
  search: { title: "Find an Article", description: "Search the available article titles, descriptions and categories." },
  featuredArticle: { title: "Featured Article" },
  media: { title: "Media Preview", description: "Watch and listen as approved recordings become available." },
  featuredVideo: { title: "Featured Video" },
  gallery: { title: "Media Gallery", description: "Browse by category. Resources are listed in the dedicated resources section below." },
  audio: { title: "Audio Lectures" },
  photos: { title: "Photo Gallery" },
  resources: { title: "Resources", description: "Approved downloads and reference materials will appear here." },
  mission: { title: "Mission & Vision" },
  values: { title: "Our Values", description: "Memorize. Revise. Understand. Practice. Develop character." },
  leadership: { title: "A Message from the Founder", description: "Mufti Muhammad Aamir, Founder & Visionary of Al Zikra Islamic Center." },
  teachers: { title: "Teachers", description: "Approved teacher profiles and qualifications will appear here." },
  campus: { title: "Our Four Branches", description: "Find Al Zikra’s campuses in Rawalpindi and Islamabad." },
  impact: { title: "Community Impact", description: "Since 2009, Al Zikra has supported Quranic learning through structured study, family partnership and character development." },
  process: { title: "Learning Process", description: "From assessment and a strong Quran reading foundation through memorisation, revision and understanding." },
  faq: { title: "Frequently Asked Questions" },
  contact: { title: "Contact the Centre", description: "Al Zikra Islamic Center is based in Westridge 3, Rawalpindi, Pakistan. Enquire about programmes and admissions using the available contact options." },
  form: { title: "Send an Enquiry" },
  hours: { title: "Programme Hours" },
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
  { id: "mission", title: "Our Mission", description: "Provide structured, focused and nurturing Quranic and Islamic education: quality Hifz and Tajweed, strong reading and revision habits, Arabic introduction, Islamic knowledge, character, punctuality and responsibility. After Hifz, introduce students to Tarjuma-e-Quran while keeping families closely involved." },
  { id: "vision", title: "Our Vision", description: "Nurture young Muslims connected to the Quran, grounded in Islamic values, strong in character, disciplined in life, respectful towards parents and teachers, and ready to serve their families and society." },
];
export const reasons: Value[] = [{ id: "reason-hifz", title: "A considered approach", description: "Two-year Hifz with teacher supervision and regular assessment; non-residential learning, character development, a structured day and Tarjuma-e-Quran after Hifz." }];
export const learningSteps: ContentItem[] = [
  { id: "admission", title: "01 — Admission", description: "Students are assessed for their educational background, Quran reading ability, readiness and suitability for the chosen programme." },
  { id: "foundation", title: "02 — Foundation", description: "Students strengthen Quran reading, pronunciation, Tajweed and learning discipline." },
  { id: "hifz", title: "03 — Hifz", description: "Students begin structured memorisation under regular teacher supervision." },
  { id: "revision", title: "04 — Revision", description: "Daily and continuous revision helps retain what has been memorised." },
  { id: "completion", title: "05 — Completion", description: "Students continue developing their relationship with the Quran after completing Hifz." },
  { id: "understanding", title: "06 — Understanding", description: "Tarjuma-e-Quran introduces students to the meaning and message of what they have memorised." },
];
