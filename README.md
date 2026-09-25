# Al Zikra Islamic Centre — development foundation

A Next.js App Router and TypeScript scaffold for building the site section by section. The initial workspace was empty. No pre-existing configuration or UI was replaced.

The current presentation is deliberately neutral: shared spacing, responsive grids, image placeholders, readable typography and basic controls. Content is explicitly awaiting approval. No real courses, people, addresses, contact information or religious text are asserted.

## Run locally

Use Node.js 20.9 or newer and npm. The lockfile records the installed versions.

```sh
npm ci
npm run dev
```

Open `http://localhost:3000`.

```sh
npm run typecheck
npm run lint
npm run build
npm run start
```

The typecheck command generates Next.js route types first, so it also works before a first build. No third-party component, styling, animation or form packages are installed.

## Routes and composition

Every route receives one Header, one main landmark and one Footer from `app/layout.tsx`. Page files compose sections and import their content from `data/`.

| Route | Page composition |
| --- | --- |
| `/` | Hero, about, services, courses, Islamic learning, reasons, programs, articles, media preview, CTA |
| `/about` | Page hero, introduction, story, mission/vision, values, leadership, campus, impact, CTA |
| `/services` | Page hero, section intro, services, reasons, impact, programs, FAQ, CTA |
| `/courses` | Page hero, section intro, category tabs and courses, learning process, teachers, upcoming programs, FAQ, CTA |
| `/blog` | Page hero, featured article, article category tabs, popular articles, article search, newsletter CTA |
| `/media` | Page hero, featured video, category gallery, audio, photos, resources, social links, CTA |
| `/contact` | Page hero, contact details, campus, form preview, hours, map placeholder, social links, FAQ, CTA |

`app/not-found.tsx` supplies a shared 404 page. Detail routes for articles, courses and services can be added when required; placeholder cards deliberately have no dead detail links.

## Folder and component inventory

```text
app/                     Routes, root layout and shared CSS tokens
components/
  layout/                Header, DesktopNav, MobileNav, Footer
  common/                Container, SectionIntro, PageHero, Button,
                         Breadcrumbs, ImageWrapper, Logo, Section,
                         Card, ContactForm, SocialLinks
  cards/                 ServiceCard, CourseCard, ProgramCard, BlogCard,
                         MediaCard, TeamCard, CampusCard, ValueCard,
                         ResourceCard, StatCard
  ui/                    Accordion, Tabs, Modal, Lightbox
  sections/              The 23 requested section entry points + GridSection
data/                    Typed content and page copy
types/                   Domain interfaces and shared prop types
lib/                     Utilities, constants and metadata helpers
config/                  Central site settings
public/assets/           Approved local assets, grouped by page and purpose
```

All requested section files exist:

```text
HeroSection               AboutSection
ServicesGridSection       CoursesGridSection
IslamicLearningSection    WhyAlZikraSection
ProgramsSection           BlogSection
MediaPreviewSection       SplitContentSection
MissionVisionSection      ValuesSection
LeadershipSection         CampusSection
CommunityImpactSection    LearningProcessSection
FeaturedArticleSection    MediaGallerySection
AudioLecturesSection      ResourcesSection
FAQSection                ContactSection
LeadCTASection
```

These are semantic entry points, not 23 independent designs. `Section`, `GridSection`, `SplitContentSection`, `PageHero` and `Card` own shared layout markup. About and Islamic learning reuse the split layout; media preview and audio reuse the gallery; collection sections reuse grids and cards. Teachers reuse LeadershipSection, upcoming courses reuse ProgramsSection, and photo galleries reuse MediaGallerySection.

Data files: `navigation.ts`, `company.ts`, `services.ts`, `courses.ts`, `programs.ts`, `team.ts`, `campuses.ts`, `blog.ts`, `media.ts`, `resources.ts`, `faqs.ts`, `contact.ts`, `socialLinks.ts`, plus `pages.ts` for route metadata, section copy and CTA presets.

Type files: `common.ts`, `navigation.ts`, `service.ts`, `course.ts`, `program.ts`, `team.ts`, `campus.ts`, `blog.ts`, `media.ts`, `resource.ts`, `faq.ts`. No explicit `any` is used.

Supporting files: `lib/utils.ts`, `lib/seo.ts`, `lib/constants.ts`, `config/site.ts`, `tsconfig.json`, `eslint.config.mjs`, `next-env.d.ts`, `package.json`, `package-lock.json`, `.gitignore`, `.env.example`.

Assets include `brand/` and `images/` + `icons/` under each of `home/`, `about/`, `services/`, `courses/`, `blog/`, `media/`, `contact/`, and `shared/`. All 17 leaf folders have `.gitkeep` files.

## Where to make changes

| Change | Source of truth |
| --- | --- |
| Navigation labels and destinations | `data/navigation.ts` |
| Site identity, verified contact details | `data/company.ts`, aggregated in `config/site.ts` |
| Social destinations | `data/socialLinks.ts` |
| Page copy, section headings, CTA presets | `data/pages.ts` |
| Global hero layout | `components/common/PageHero.tsx` |
| All course cards | `components/cards/CourseCard.tsx` |
| All card shells | `components/common/Card.tsx` |
| All CTA layouts | `components/sections/LeadCTASection.tsx` |
| All buttons | `components/common/Button.tsx` |
| Spacing, colors, breakpoints and image ratios | `app/globals.css` |

Example composition:

```tsx
<SplitContentSection
  eyebrow="About the centre"
  title={approvedContent.title}
  description={approvedContent.description}
  image={approvedContent.image}
  imagePosition="left"
/>

<CoursesGridSection
  title="Courses"
  courses={courses}
  categories={courseCategories}
/>
```

`PageHero` supports eyebrow, title, description, backgroundImage, breadcrumbs, primaryCTA, secondaryCTA, alignment and variant. `SectionIntro` supports eyebrow, title, description, alignment and maxWidth. Collections receive their data through props. CTA presets cover Start Learning, Explore Courses, Join Al Zikra, Ask a Question, Contact the Centre, Get Involved and newsletter messaging.

## Content and interaction boundaries

- Course, blog and media categories are typed and include every requested category. Tabs filter their associated collections. The Resources media category is reserved; actual downloadable resources appear in ResourcesSection below the gallery.
- Article search matches the supplied article titles, descriptions and categories locally. No search service is required.
- Navigation, disclosures and tabs have keyboard support. Tabs support arrow keys, Home and End. Native modal dialogs provide focus containment and Escape handling; focus returns to the trigger when closed. Photo lightboxes and media playback become available when real asset URLs are provided.
- Media `sourceUrl` is a direct playable asset URL. Supply captions and transcripts with approved recordings. Third-party embed providers are not configured.
- ImageWrapper uses Next.js Image and shared aspect ratios. Prefer approved assets in `public/assets/`. Supply meaningful alt text; decorative images may use an empty alt. Remote image hosts must be explicitly configured in Next.js before use.
- Contact form inputs and submission are disabled with an explanatory notice. No messages are collected, sent or stored. Add a submission service, server validation and approved privacy copy before enabling it.
- Newsletter signup is an explicit availability placeholder. No fake success state or email subscription request is implemented.
- Unknown phone, email and map values remain `null`; addresses and social links remain empty until verified. No placeholder `#` links are used.

## SEO foundation

Each route has its own title, description, canonical configuration and Open Graph metadata through `createMetadata` in `lib/seo.ts`.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the verified public origin before deployment. Canonical and Open Graph URL fields are intentionally omitted until that value is configured; no production domain is invented. Restart or rebuild after changing it.

`createOrganizationStructuredData` and `serializeStructuredData` prepare a small opt-in JSON-LD foundation. They are not injected into pages yet. Expand them with verified organization details when needed.

## Next development steps

Build Header, then Hero, then homepage sections, then remaining pages. Implement the visual treatment in the shared components before introducing variants. Keep approved content in data files and pass it into sections. Add a new layout only when an existing shared layout cannot express the requirement clearly.
