# Al Zikra Project Handoff

Last updated: 2026-10-05, Asia/Karachi.

This handoff is for the next Codex session working inside:

`D:\Dynam Galaxy\Clients\0024 - Al Zikra\website`

The goal of this project is an Al Zikra Islamic Center website using the current Al Zikra branding, brown/gold/cream visual direction, and a Haramain-style Quran institute navigation feel. Do not broadly refactor or redesign unless the user specifically asks.

## 1. Project Structure

### Framework and Build Setup

- Framework: Next.js App Router.
- Package name: `al-zikra-website`.
- Current dependencies in `package.json`:
  - `next` `^16.0.0`
  - `react` `^19.2.0`
  - `react-dom` `^19.2.0`
- Dev dependencies:
  - TypeScript `^5.9.0`
  - ESLint `^9.0.0`
  - `eslint-config-next` `^16.0.0`
  - React/Node type packages.
- Main scripts:
  - `npm run dev`
  - `npm run build`
  - `npm run start`
  - `npm run lint`
  - `npm run typecheck`
- Use `npm ci` for clean install if dependencies need to be restored.

### Important Folders

- `app/`
  - Next.js App Router pages, routes, metadata, API routes, global CSS, error/loading/robots/sitemap.
- `components/common/`
  - Reusable primitives such as `Container`, `Button`, `AnimatedArrow`, `Logo`, `PageHero`, `GoBackButton`, `ContactForm`.
- `components/layout/`
  - Site-wide layout pieces: `Header`, `DesktopNav`, `MobileNav`, `Footer`, `FooterFAQ`, `FooterCTA`, `StudentGallery`, `Testimonials`, `SharedSections`.
- `components/sections/`
  - Page and homepage sections, including `HeroSection`, `HomeHighlightsSection`, `HomeProgramsSection`, `HomeJourneySection`, `CareerOpenings`, `ProgramDetailSections`.
- `components/cards/`
  - Older reusable card components for programs, blog, resources, media, etc.
- `components/ui/`
  - Shared UI controls: `Accordion`, `Tabs`, `Modal`, `Lightbox`.
- `data/`
  - Editable content/data source for navigation, pages, programs, jobs, FAQs, gallery, testimonials, social links, journey, contact, company, blog, etc.
- `config/`
  - `site.ts`, combining company, navigation, social links and URL config.
- `lib/`
  - SEO helpers, constants and utilities.
- `types/`
  - TypeScript types for content models.
- `public/assets/`
  - Images/logos currently used by the website.

### Important Files and Purpose

- `app/layout.tsx`
  - Root layout. Renders `Header`, route content, `SharedSections`, and `Footer`.
  - Adds Organization structured data when `NEXT_PUBLIC_SITE_URL` is configured.
- `app/page.tsx`
  - Homepage section order: hero, 3 start steps, programs, journey/about timeline.
- `app/[group]/[slug]/page.tsx`
  - Dynamic detail pages for navigation children and policy links.
  - Program pages render `ProgramDetailSections`.
  - Career page renders `CareerOpenings`.
- `app/about/page.tsx`, `app/contact/page.tsx`, `app/blog/page.tsx`, `app/courses/page.tsx`, `app/media/page.tsx`, `app/services/page.tsx`
  - Main top-level pages.
- `app/api/contact/route.ts`
  - Contact API exists but email delivery is unavailable/pending.
- `app/api/career/route.ts`
  - Career application API using Resend environment variables.
  - Sends applications to `career@alzikra.org` only when `RESEND_API_KEY` and `CAREER_FROM_EMAIL` are configured.
- `app/globals.css`
  - Main styling file. Contains global reset, design system variables, header/nav, homepage sections, FAQ, footer, career modal and responsive styles.
- `data/navigation.ts`
  - Main navigation and footer navigation source.
- `data/pages.ts`
  - Page metadata, hero copy, section text and CTAs.
- `data/programs.ts`
  - Homepage program cards and 3 steps to start.
- `data/programDetails.ts`
  - Program detail page about/requirements/benefits content.
- `data/jobs.ts`
  - Career jobs and qualification options. Current jobs are sample/example roles.
- `data/studentGallery.ts`
  - Gallery images and stock video clips.
- `data/testimonials.ts`
  - Fifteen sample Muslim male testimonials. These are placeholder/sample reviews.
- `data/faqs.ts`
  - Footer FAQ content.
- `data/socialLinks.ts`
  - Real social links using `@alzikraislamiccenter`.
- `.env.example`
  - Documents `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`, and `CAREER_FROM_EMAIL`.

## 2. Current Status

The website is in an advanced visual/prototype state with many sections implemented and responsive behavior improved. It is not launch-ready because several pieces of real verified content, assets and integrations are still pending.

### Complete or Mostly Complete

- Global header with desktop dropdowns and mobile slide-in menu.
- Homepage hero and main section flow.
- Programs section and 3 steps to start.
- Journey/timeline/about-style section using 2006, 2014, 2020 and 2025.
- Student gallery section with images and stock video clips.
- Testimonials section with 15 sample reviews.
- FAQ section before FooterCTA.
- FooterCTA email request using `mailto:info@alzikra.org`.
- Footer with navigation links, policy links and social media icons/links.
- Program pages with common hero, learner message/stat section, course/about section, requirements and benefits.
- Career page with job listings and application modal.
- Career page excludes gallery and testimonials.
- Career application API route exists with server-side validation and file attachment handling.

### Pending

- Real Al Zikra content for most pages.
- Real photos/videos instead of generated/illustrative/public stock media.
- Confirmed program/course details, eligibility, fees, schedules and admissions.
- Real testimonials before publishing testimonial claims.
- Career job postings must be replaced with approved vacancies before launch.
- Configure `RESEND_API_KEY` and verified `CAREER_FROM_EMAIL`.
- Contact form delivery service is still not set up.
- SEO copy, performance and accessibility final QA are still required.

### Current Development Status

- Working directory was clean before creating this handoff file.
- `npm run build` was run after creating this handoff file on 2026-10-05 and passed successfully.
- Previous recent checks on the Career popup passed:
  - `npx tsc --noEmit --incremental false`
  - `npx eslint components/sections/CareerOpenings.tsx app/api/career/route.ts`
  - `git diff --check`

## 3. Work Completed

### Header and Navigation

- Header now uses `public/assets/Logo.png`.
- Logo size was adjusted so it is more readable in the hero/header.
- Desktop nav includes:
  - `Programs`
  - `Academics`
  - `About`
  - `Resources`
  - `Contact Us`
- `Programs`, `Academics`, `About` and `Resources` are dropdown triggers only where configured with `triggerOnly: true`; they should not navigate as parent pages.
- Dropdowns were refined:
  - compact width aligned to nav container,
  - 2-column layout where appropriate,
  - more vertical item spacing,
  - less bold item text,
  - subtle hover state,
  - consistent chevron-down icons,
  - smooth chevron rotation,
  - subtle shadow/border/radius.
- Sticky desktop header changes color based on dark/light section backgrounds using `data-header-surface="dark"`.
- On tablet/mobile, sticky header behavior was disabled except desktop per user instruction.
- Mobile menu slides in from left to right, with close button and grouped dropdown sections.

### Homepage

- Removed placeholder-heavy home sections shown in old screenshot:
  - Learning with purpose
  - Areas of Learning
  - Thoughtful learning
  - Why Al Zikra
  - Latest Articles
  - Media Preview
- Current homepage order:
  - `HeroSection`
  - `HomeHighlightsSection` with 3 steps to start
  - `HomeProgramsSection`
  - `HomeJourneySection`
  - shared `StudentGallery`
  - shared `Testimonials`
  - shared `FooterFAQ`
  - shared `FooterCTA`
  - global `Footer`
- 3 steps to start copy:
  - Explore
  - Enquire
  - Get started
- 3 step numbers use gold `#D8B96F`.
- Removed `#` from 1/2/3.
- Reduced section height/text size after user feedback.
- Programs section CTA button was left aligned on mobile.

### Gallery

- Student gallery added before testimonials.
- Gallery uses masonry-style arrangement inspired by references.
- Includes a mix of image and video items.
- Stock video clips are public Pexels URLs; images are illustrative local assets.
- Slider controls were styled like the provided reference, with manual controls and smooth/premium animation.
- User asked for manual infinite slide behavior; current implementation should be checked before launch to confirm it still behaves exactly as expected.

### Testimonials

- Testimonial section added before FAQ and after gallery.
- Uses 15 sample Muslim male names, countries, reviews and dates.
- Background: `#FCFAF6`.
- Review card background: `#f6efe2`.
- Uses the site typography and branding.
- User explicitly requested removal of the sample-warning line from the UI.
- Important: `data/testimonials.ts` still marks these as samples in code comments. Replace with verified testimonials before publication.

### FAQ

- FAQ section attached before FooterCTA.
- Styled close to the reference:
  - left text column,
  - right accordion column,
  - compact proportions,
  - smaller contact card,
  - smooth accordion open/close animation,
  - circular accordion icons,
  - subtle active state.
- FAQ section background set to `#EEE7D9`.
- Contact card button uses `#3B2C20` with subtle hover.
- Current FAQ content is in `data/faqs.ts`.

### FooterCTA and Footer

- FooterCTA inspired by the reference image but adapted to Al Zikra.
- Email submission opens user's email app to send request to `info@alzikra.org`.
- Footer includes all navigation links, social icons, policy pages and copyright.
- Footer copyright:
  - `© 2026 Al Zikra Islamic Center. All Rights Reserved | Web by Dynam Galaxy`
  - `Dynam Galaxy` links to `https://dynamgalaxy.com`.
- Social links:
  - Facebook: `https://facebook.com/alzikraislamiccenter`
  - Instagram: `https://instagram.com/alzikraislamiccenter`
  - YouTube: `https://youtube.com/@alzikraislamiccenter`
  - LinkedIn: `https://linkedin.com/company/alzikraislamiccenter`
  - TikTok: `https://tiktok.com/@alzikraislamiccenter`

### Program Pages

- All six program routes have the same header and hero structure as the home/site style:
  - `/programs/hifz-ul-quran`
  - `/programs/nazra-quran`
  - `/programs/tajweed`
  - `/programs/islamic-studies`
  - `/programs/full-time-program`
  - `/programs/part-time-program`
- Hero uses page-specific text and buttons:
  - `Go Back`
  - `Contact Us`
- After hero:
  - learner message/stat section,
  - course/about section,
  - 4 requirements,
  - benefits,
  - why choose this course section.
- Course details are editorial placeholders until confirmed.

### Career Page

- Career page route: `/about/career`.
- Gallery and testimonials are removed from Career page by `SharedSections`.
- Career page has job listings inspired by the attached reference.
- Current jobs in `data/jobs.ts` are random/example roles as requested:
  - Quran Teacher
  - Hifz Instructor
  - Tajweed Teacher
  - Islamic Studies Teacher
  - Academic Coordinator
- Clicking `Apply Now` opens a branded modal.
- Modal collects:
  - full name,
  - father's name,
  - email,
  - phone,
  - street address,
  - city,
  - postal code,
  - province/region,
  - CNIC,
  - completed qualifications,
  - latest educational document,
  - CV,
  - optional relevant experience,
  - consent checkbox.
- Qualification options:
  - Hifz
  - Dars e Nizami
  - Tajweed
  - Islamic Studies
  - Matric
  - FSc
  - BS
  - MS
  - PhD
  - Other
- Upload UI was redesigned to match reference-style drag/drop upload areas while keeping Al Zikra branding.
- Modal now has:
  - reference-style header,
  - grouped fields,
  - sticky action row,
  - Cancel and Submit buttons,
  - mobile-checked action row.

### Forms and APIs

- FooterCTA uses mailto to `info@alzikra.org`.
- Career application posts to `/api/career`.
- Career API validates:
  - same-origin request,
  - max request size,
  - required fields,
  - email format,
  - CNIC format,
  - consent,
  - qualifications,
  - file size max 5 MB each,
  - allowed education document types: PDF, JPG, PNG,
  - allowed CV types: PDF, DOCX.
- Career API sends via Resend only if environment is configured.
- Contact API currently returns unavailable until delivery is configured.

### Bugs Fixed / UX Refinements

- Dropdown parents no longer navigate.
- Dropdown chevrons made consistent.
- Dropdown size, padding and spacing reduced.
- FAQ proportions and open/close animation refined.
- FAQ contact card alignment and spacing fixed.
- Header sticky color behavior adjusted for dark/light sections.
- Mobile menu added/refined.
- Career modal label margins and checkbox alignment fixed.
- Career modal upload UI changed to reference-style drag/drop.

## 4. Website Structure

### Current Routes

- `/`
- `/about`
- `/services`
- `/courses`
- `/blog`
- `/media`
- `/contact`
- `/programs/hifz-ul-quran`
- `/programs/nazra-quran`
- `/programs/tajweed`
- `/programs/islamic-studies`
- `/programs/full-time-program`
- `/programs/part-time-program`
- `/academics/admission`
- `/academics/fee-structure`
- `/academics/class-schedule`
- `/about/events`
- `/about/career`
- `/resources/tajweed-e-qaida`
- `/resources/tajweed-e-quran`
- `/resources/other-downloads`
- `/policies/privacy-policy`
- `/policies/terms-of-use`

Dynamic detail pages come from `app/[group]/[slug]/page.tsx` using entries from `data/navigation.ts` and `policyLinks`.

### Navbar Structure

- Programs dropdown:
  - Hifz-ul-Quran
  - Nazra Quran
  - Tajweed
  - Islamic Studies
  - Full-Time Program
  - Part-Time Program
- Academics dropdown:
  - Admission
  - Fee Structure
  - Class Schedule
- About dropdown:
  - About Us
  - Events
  - Blogs
  - Career
  - FAQ's
- Resources dropdown:
  - Tajweed e Qaida
  - Tajweed e Quran
  - Other Downloads
- Contact Us direct link.
- Header CTA:
  - Apply for Admission.

### Footer Structure

- Brand/logo block.
- Short description.
- Social icons.
- Link columns for Programs, Academics, About and Resources.
- Bottom copyright and legal/contact nav.
- Policy links:
  - Privacy Policy
  - Terms of Use

### Reusable Components

- `Container`: width constraint.
- `Button`: global button variants.
- `AnimatedArrow`: arrow animation used in buttons.
- `PageHero`: common page hero with back button and Contact Us CTA support.
- `GoBackButton`: go-back behavior.
- `Accordion`: used in FAQ.
- `Header`, `DesktopNav`, `MobileNav`: navigation system.
- `FooterFAQ`, `FooterCTA`, `Footer`: shared bottom-of-page stack.
- `SharedSections`: appends StudentGallery, Testimonials, FAQ, CTA to pages; skips gallery/testimonials on Career.
- `CareerOpenings`: full Career listing and application modal.
- `ProgramDetailSections`: program detail page sections.

## 5. Content and Data

### Real Content Already Added

- Al Zikra name/branding.
- Social handles/links for `@alzikraislamiccenter`.
- Footer email update destination: `info@alzikra.org`.
- Career application destination: `career@alzikra.org`.
- Journey years requested by user:
  - 2006
  - 2014
  - 2020
  - 2025

### Placeholder or Sample Content

- Most page copy is provisional.
- Course/program details are not verified.
- Fees, schedules and admissions are not confirmed.
- Student gallery images are illustrative/generated/local assets.
- Gallery videos are public Pexels stock clips.
- Testimonials are sample placeholders and must not be treated as verified reviews.
- Career jobs are random/example roles as requested by user.
- Journey milestone text is placeholder copy.
- Blog/events/resources/media pages still need approved content.
- Policy pages need real legal copy.

### Data Files to Edit

- Programs: `data/programs.ts`, `data/programDetails.ts`.
- Academics/nav pages: `data/navigation.ts`, `data/pages.ts`.
- About/story/journey: `data/pages.ts`, `data/journey.ts`.
- Events: currently a generated detail page from nav; needs real content if required.
- Blogs: `data/blog.ts`.
- Career: `data/jobs.ts`, `components/sections/CareerOpenings.tsx`, `app/api/career/route.ts`.
- FAQs: `data/faqs.ts`.
- Resources: `data/resources.ts`.
- Contact: `data/contact.ts`, `components/common/ContactForm.tsx`, `app/api/contact/route.ts`.
- Gallery: `data/studentGallery.ts`, assets in `public/assets/gallery/`.
- Testimonials: `data/testimonials.ts`.
- Social links: `data/socialLinks.ts`.
- Company info: `data/company.ts`.

## 6. Design System

### Colors

The current visual direction is warm Al Zikra branding:

- Deep brown: `#3B2C20`
- Gold: `#D8B96F`
- Cream background: `#FCFAF6`
- FAQ background: `#EEE7D9`
- Review card background: `#f6efe2`
- Muted brown/cream borders around `#e2d8c7`, `#d8cbb8`, `#cbbb9f`
- Accent brown/gold variations like `#7d6028`, `#a78245`, `#916f37`

Do not casually switch to green/blue/purple or generic SaaS colors. Keep the Islamic center warm brown/gold/cream aesthetic unless user asks.

### Fonts and Typography

- Body font: Arial/Helvetica/sans-serif.
- Serif headings: Georgia / Times New Roman in many editorial sections, FAQ, footer, career modal headings, etc.
- Some home hero/major headings use Arial-based large display style.
- Keep heading hierarchy elegant, not overly bold.
- User repeatedly asked for lighter/medium dropdown text and smaller responsive text.

### Spacing and Layout

- Keep content aligned to footer/container width.
- Avoid huge mega menus.
- Keep dropdowns compact and proportional to nav.
- FAQ and gallery/testimonials should align with footer content width.
- Mobile should be carefully checked because many sections have custom responsive adjustments.

### Buttons

- Site buttons use `AnimatedArrow` where relevant.
- Arrow button animation is used across the site.
- Header CTA is intentionally smaller than early versions.
- Hero primary gold button hover should be subtle color change.
- Secondary hero button should keep existing behavior.
- FAQ contact button is `#3B2C20`.

### Cards and Modals

- Cards should be subtle, not bulky.
- FAQ active item should not look like a focused input.
- Career modal follows a reference-style form panel:
  - rounded white/cream container,
  - top header,
  - grouped fields,
  - dashed upload areas,
  - sticky bottom action row.

### Header/Footer Behavior

- Header is fixed/transparent over hero on desktop.
- On scroll, desktop nav condenses to a pill-like nav.
- Sticky header text/background changes based on sections with `data-header-surface="dark"`.
- Footer and FooterCTA mark dark surface with `data-header-surface="dark"`.
- Do not make header sticky on tablet/mobile; user explicitly asked desktop only.

### Visual References and Decisions

- Header/dropdowns were based on a Haramain Quran Institute-style dropdown reference.
- FooterCTA was based on a Zenlyfe-style email CTA reference but adapted to Al Zikra.
- FAQ section was based on a clean operations-consulting FAQ reference.
- Gallery was based on masonry/grid references and slider arrow reference.
- Journey/about timeline was based on a dark timeline/history reference.
- Career listings were based on minimal job-listing reference.
- Career application modal/upload UI was based on task/project form references.

## 7. Commands and Verification

### Install

Use:

```bash
npm ci
```

### Development

Use:

```bash
npm run dev
```

Default local preview URL:

```text
http://localhost:3000
```

If port 3000 is already in use, Next may offer another port such as 3001.

### Build

Use:

```bash
npm run build
```

This handoff request requires running the build after this file is saved.

Latest build result from 2026-10-05:

```text
npm run build
Compiled successfully.
TypeScript passed.
Generated static pages: 30/30.
Dynamic API routes: /api/career and /api/contact.
Build status: passed.
```

### Other Checks

Useful targeted checks:

```bash
npx tsc --noEmit --incremental false
npx eslint components/sections/CareerOpenings.tsx app/api/career/route.ts
git diff --check
```

Full checks:

```bash
npm run lint
npm run typecheck
```

### Browser / Responsive Checks Already Done

Recent manual browser checks were done through the Codex in-app browser for:

- Career page desktop modal.
- Career modal mobile viewport around `390x844`.
- Upload drop areas and mobile action row.
- Header/mobile menu behavior was previously reviewed during implementation.

Before launch, repeat QA on:

- 360px mobile.
- 390px mobile.
- 768px tablet.
- 1024px desktop/tablet.
- 1280px and wider desktop.

## 8. Pending Tasks Before Launch

### Content

- Replace all placeholder/sample copy with approved Al Zikra content.
- Confirm all program names, details, requirements, benefits and schedules.
- Confirm admissions, fees and class schedule.
- Add real About Us content, mission, vision, leadership/team, campus/center details.
- Add real Events.
- Add real Blog articles.
- Add real Resources/download files.
- Add real policy pages.
- Add real FAQs if current answers are not final.
- Replace sample testimonials with verified testimonials.
- Replace random/example career jobs with confirmed vacancies.

### Assets

- Replace illustrative/generated gallery images with approved student/media images.
- Replace public stock videos if Al Zikra has real clips.
- Confirm logo files and sizes for header/footer.
- Confirm favicon/app icon.

### Forms and Integrations

- Configure career form:
  - create/verify Resend sender domain,
  - set `RESEND_API_KEY`,
  - set `CAREER_FROM_EMAIL`,
  - test delivery to `career@alzikra.org`.
- Configure contact form delivery. Current contact API does not send enquiries.
- FooterCTA currently uses `mailto:` to `info@alzikra.org`; decide whether to replace with real subscription/email service.
- Confirm data retention and privacy expectations for CNIC/CV submissions.

### SEO / Performance / Accessibility

- Set `NEXT_PUBLIC_SITE_URL`.
- Review sitemap/robots output after production URL is known.
- Add final metadata for each page.
- Add real Open Graph images if required.
- Run Lighthouse/performance checks.
- Check image dimensions and asset optimization.
- Keyboard test all dropdowns, mobile menu, FAQ accordion and career modal.
- Review color contrast.
- Review focus states.
- Confirm upload controls work in target browsers.

### Final QA

- Run `npm run lint`.
- Run `npm run typecheck`.
- Run `npm run build`.
- Test all routes manually.
- Test responsive behavior across key widths.
- Test career API with non-sensitive dummy data after email environment is configured.
- Confirm no placeholder/sample content remains before launch.

## 9. Important Context for Next Codex Session

These are conversation-level instructions/decisions that may not be obvious from files:

- User strongly prefers low token/credit usage and targeted edits.
- User repeatedly said: do not redesign unrelated parts; only change requested areas.
- Existing design, layout, content structure and working features should not be unnecessarily changed.
- Broad refactors, unrelated package installation and sweeping rewrites should be avoided.
- Header/dropdowns should remain compact and aligned to nav width.
- Programs, Academics, About and Resources in header should behave as dropdown triggers only, not parent links.
- About and Resources are not links in footer headings.
- Header sticky color behavior matters:
  - dark section background -> light header/nav treatment,
  - light section background -> dark header/nav treatment.
- Header should not be sticky on tablet/mobile.
- FooterCTA email destination is `info@alzikra.org`.
- Career destination is `career@alzikra.org`.
- Social username is `@alzikraislamiccenter`; do not invent alternate social URLs.
- Do not invent unverified destinations or provider details.
- If a social/platform URL does not resolve, keep slot ready instead of guessing a replacement.
- Gallery videos were allowed as public stock clips by user.
- Testimonials were requested as random placeholders by user, but they should be replaced before real publication.
- Career jobs were requested as random 5 jobs by user, but they should be replaced before launch.
- Existing Haramain-style direction matters mostly for nav/dropdown/header feel, not as a full copy.
- Al Zikra brand should remain brown/gold/cream, with readable logo and premium minimal UI.
- If changing form/email behavior, check `.env.example`, `app/api/career/route.ts`, `app/api/contact/route.ts`, and user-approved destinations first.

## 10. Known Uncertainties

- Real launch domain is unknown.
- Verified sender address for Resend is unknown.
- Whether Resend is the final provider is not fully confirmed; current implementation uses Resend because it was prepared as the practical email path.
- Real Al Zikra contact phone/address details may still be placeholder depending on `data/company.ts`.
- Real course schedules, fees, admission dates and eligibility are not confirmed.
- Real testimonials and job postings are not confirmed.
- Public stock clips and illustrative student images may not be acceptable for final launch without user/client approval.

## 11. Suggested Next Session Starting Checklist

1. Read this file first.
2. Run `git status --short`.
3. Check whether the user wants content editing, design polishing, integration setup or launch QA.
4. Before changing layout, inspect the relevant component and `app/globals.css`.
5. Keep edits narrow.
6. Run the smallest useful verification for the changed area.
7. For launch work, run full `npm run lint`, `npm run typecheck`, and `npm run build`.
