# Product Requirements Document (PRD)
# Political Portfolio Website — Hon. Kelvin Migongo
**Version:** 2.0 — Updated March 2026 (reflects live implementation)

---

## 1. Project Overview

A high-performance, visually immersive political portfolio website for **Hon. Kelvin Migongo** — Academician, Philanthropist, and Candidate for Member of Parliament, Bahati Constituency. The platform serves as a central hub for constituent communication, achievement tracking, public storytelling, and campaign engagement.

The website projects a **premium, modern political brand** through:
- Fluid Framer Motion animations and scroll-triggered reveals
- Glassmorphism UI components (`glass-dark`, `glass-card`, `glass-panel`)
- Consistent dark emerald / zinc-950 visual theme across all pages
- Responsive 2-column layouts and mobile-first design
- Animated counters, hover interactions, and page transitions

---

## 2. Objectives

| Objective | Description |
|---|---|
| **Branding & Visibility** | Premium digital presence reflecting leadership, transparency, and modernity |
| **Transparency** | Publicly document community projects, achievements, and policy initiatives |
| **Constituent Engagement** | Volunteer, donation, AI chat, and contact channels |
| **Thought Leadership** | Dynamic blog with rich-text articles and media embeds |
| **Modern UX** | Animations and glassmorphism that increase engagement and time on site |

---

## 3. Target Audience

- **Constituents** — Citizens of Bahati/Nakuru seeking project updates and leadership information
- **National Stakeholders** — Policy makers, media, and governance observers
- **Supporters & Volunteers** — Individuals donating, volunteering, or spreading the campaign
- **Digital-First Youth** — Young voters who respond to visually dynamic, interactive platforms

---

## 4. Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19 + TypeScript + Vite 6 |
| **Styling** | Tailwind CSS (via CDN in `index.html`) + custom CSS in `index.css` |
| **Routing** | React Router Dom v7 — HashRouter |
| **Animations** | Framer Motion (page transitions, scroll reveals, counters, hover effects) |
| **Icons** | Lucide React |
| **Charts** | Recharts (PieChart, animated progress bars) |
| **CMS / Data** | Airtable (blog posts, achievements, volunteers, donors, supporters) |
| **AI Assistant** | Google Gemini (`gemini-1.5-flash`) via `@google/genai` |
| **Build / Deps** | ESM import maps in `index.html` for CDN-loaded packages |
| **Hosting Config** | Netlify (`netlify.toml`, `public/_redirects`) |

---

## 5. Design System

### 5.1 Color Palette

| Token | Hex | Usage |
|---|---|---|
| Primary Green | `#15803D` | CTAs, badges, active states, icon accents |
| Dark Emerald | `#064E3B` | Footer background, deep overlays |
| Light Emerald | `#DCFCE7` | Tag backgrounds, light badge fills |
| Background Dark | `#09090B` (`zinc-950`) | All page backgrounds |
| Surface | `zinc-900` / `zinc-800` | Cards, inputs, nav elements |
| Text Primary | `#FFFFFF` | Headings, labels |
| Text Muted | `zinc-400` / `zinc-500` | Subtitles, meta text |
| Accent Gradient | `emerald-400 → teal-400` | Hero headline highlights, gradient text |

### 5.2 Typography

| Role | Font | Weight |
|---|---|---|
| Headings | Playfair Display (serif) | 700 / 800 (Black) |
| Body / UI | Inter (sans-serif) | 300–700 |
| Loaded via | Google Fonts (CDN) | — |

### 5.3 Glassmorphism Utility Classes

Defined in `index.css`:

```css
/* Light glass — for light-background sections */
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  border-radius: 1rem;
}

.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Dark glass — used on all dark-background pages */
.glass-dark {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  border-radius: 1rem;
  transition: all 0.3s ease;
}

.glass-dark:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 20px 50px rgba(0,0,0,0.3), 0 0 20px rgba(21,128,61,0.1);
}

/* Sticky navbar — transparent → frosted on scroll */
.glass-navbar {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
```

### 5.4 Animation Standards (Framer Motion)

| Interaction | Duration | Easing |
|---|---|---|
| Micro-interactions (buttons, icons) | `0.2–0.25s` | `easeOut` |
| Card / section reveals | `0.6–0.7s` | `easeOut` |
| Hero entrance (staggered) | `0.7–0.9s` | `easeOut` |
| Animated counters | `1.8s` | linear rAF |
| Floating hero elements | `3.5–4s` | `easeInOut`, infinite |
| Tab switcher | `spring { stiffness: 400, damping: 30 }` | — |
| Page HMR / transitions | Via `whileInView`, `once: true` | — |

---

## 6. Global Layout

All pages share:

```
<Navbar />          ← sticky, glass on scroll, mobile hamburger
  <Page Content>    ← pt-24 to clear navbar
<Footer />          ← dark emerald, 4-column links + social icons
<ChatAssistant />   ← fixed bottom-right floating button
```

**Max content width:** `max-w-7xl` (1280px), centered, with `px-4 sm:px-6 lg:px-8` gutters.

**Section padding:** `py-24` desktop / `py-16` mobile.

---

## 7. Component Library

### `components/`

| Component | Description |
|---|---|
| `Navbar.tsx` | Sticky top nav; transparent → `glass-navbar` on scroll; active link indicator via Framer `layoutId`; mobile hamburger with `AnimatePresence` |
| `Footer.tsx` | Dark emerald footer; 4 columns (brand, nav, get involved, contact); social icon hover animations |
| `GlassCard.tsx` | Reusable wrapper applying `glass-card` + Framer `whileHover` y-lift |
| `Button.tsx` | Variants: `primary` (emerald), `secondary`, `ghost`, `outline`; loading state with spinner |
| `NewsletterForm.tsx` | Subscriber form calling `airtableService.addSupporter()`; success state |
| `ChatAssistant.tsx` | Fixed floating chat widget; Gemini AI responses; auto-scroll; typing indicator |
| `Layout.tsx` | Root wrapper rendering Navbar + main + Footer + ChatAssistant |

---

## 8. Pages

### 8.1 Home (`/`)

**Theme:** `bg-zinc-950`, full dark

**Sections (in order):**

1. **Hero** — 2-column layout
   - Left: animated badge (ping dot), `text-5xl–7xl` serif headline ("Building a Stronger Bahati Together"), subheadline, two CTAs (Join Movement → `/get-involved`, Explore Roadmap → `/vision`), trust indicators (25K+ Supporters, 420+ Projects, 100% Accountability)
   - Right (desktop only): campaign portrait image (`/images/Landing.png`) in `rounded-[40px]` frame with border/glow; two floating `glass-dark` stat pills (animated `y` oscillation): "5,000+ Youths Empowered", "98% Project Completion"
   - Scroll indicator: animated vertical line + dot

2. **Impact Statistics** — animated number counters
   - 4 `glass-dark` stat cards: 50,000+ Communities Reached, 5,000+ Youth Empowered, 420+ Projects Initiated, 30+ Schools Supported
   - Counter uses `useInView` + `requestAnimationFrame` count-up
   - Section uses emerald gradient ambient overlay

3. **Featured Updates** — card grid from `LATEST_NEWS`
   - 3 cards min; each: `glass-dark` container, aspect-video image with gradient overlay, category badge, title, excerpt, "Read more → `/blog/:id`"
   - Hover: `translateY(-8px)` lift, image scale-105

4. **Vision Preview** — 4 pillar cards
   - Education, Agriculture, Youth Employment, Infrastructure
   - Icons rotate + scale on hover; link to `/vision`

5. **Media Highlight** — `glass-dark` video container
   - Play button with `whileHover` scale; campaign poster backdrop
   - Link to `/media`

6. **Get Involved CTA** — large `glass-dark` glassmorphism panel
   - Ambient glow blobs; heading with gradient italic text
   - 3 buttons: Volunteer (→ `/get-involved`), Support the Vision (→ `/donate`), Contact Us (→ `/contact`)

---

### 8.2 About (`/about`)

**Theme:** `bg-zinc-950`, full dark

**Sections:**
1. **Hero** — 2-column: left = animated badge + serif h1 + `glass-dark` bio card with blockquote; right = portrait image (`/images/About.png`) with glow ring
2. **Core Values** — 4 `glass-dark` cards (People First, Integrity, Results-Driven, Education); icons rotate+scale on `whileHover`
3. **Leadership Timeline** — vertical timeline with animated left border gradient; 4 entries (2010 → 2016 → 2022 → Today); each entry scrolls in with `x: -30 → 0`; `glass-dark` content panels

---

### 8.3 Vision (`/vision`)

**Theme:** `bg-zinc-950`, full dark

**Sections:**
1. **Hero Header** — centered; badge, serif h1 with gradient italic, subtitle
2. **Policy Cards Grid** — `lg:grid-cols-2`; 5 policy cards from `POLICIES` constant; each: `glass-dark`, icon (`whileHover` rotate+scale), policy area heading, target audience, description, `CheckCircle` initiative tags
3. **Manifesto CTA** — `glass-dark` panel with ambient glow; Download PDF button (`whileHover` scale)

**Policies (from `constants.tsx`):**
- Economic Empowerment (TrendingUp icon) — SME Grants, Market Refurbishment, Financial Literacy
- Youth & Education (BookOpen) — Bursary Reform, Digital Hubs, Vocation Training
- Sustainable Agriculture (Hammer) — Input Subsidies, Cold Storage, Market Linkage
- Healthcare Access (Users) — Health Fund, Mobile Clinics, Maternal Care
- Infrastructure Development (Cpu) — Rural Roads, Clean Water, Electrification

---

### 8.4 Achievements (`/achievements`)

**Theme:** `bg-zinc-950`, full dark

**Sections:**
1. **Header** — "Track Record" badge, large gradient serif h1
2. **Impact Distribution** — `lg:grid-cols-5`
   - Left (3 cols): `glass-dark` panel with animated progress bars + Recharts `PieChart` (donut)
   - Right (2 cols): green gradient card; "98% Project Completion Rate"; "View Ward Reports" button
3. **Category Filters** — animated pill buttons: All, Education, Agriculture, Healthcare, Infrastructure, Youth, Community; `whileHover` scale, `whileTap` shrink; active = emerald-600 bg
4. **Achievement Cards Grid** — `md:grid-cols-2 lg:grid-cols-3`; filtered by `activeFilter`; `AnimatePresence mode="popLayout"`; each card: aspect-video image, category badge, date, project name, location, impact metric block, description, "Show Proof" CTA

---

### 8.5 Blog (`/blog`)

**Theme:** `bg-zinc-950`, full dark

**Sections:**
1. **Editorial Header** — "Bahati Dispatch" serif h1 with italic emerald underline
2. **Featured Post** — `glass-dark` hero card; 2-column (image left 3/5, content right 2/5); "Featured Article" badge; title, excerpt, "Read Full Story" button
3. **Recent Archives** — `md:grid-cols-2 lg:grid-cols-3` article grid; each: image with category badge, date/author, title (hover → emerald), excerpt, "Continue Reading" link

Data source: Airtable (`getLatestNews()`) with fallback to `LATEST_NEWS` constant.

---

### 8.6 Blog Post (`/blog/:id`)

**Theme:** `bg-zinc-950`, full dark

**Layout:**
- Back link (← Back to Updates)
- Content-type badge, large serif h1, date + author
- Feature image or YouTube iframe embed
- Body text in `prose-invert prose-emerald`
- Footer: content-type tag + Share button

---

### 8.7 Media (`/media`)

**Theme:** `bg-zinc-950`, full dark

**Layout:** `lg:grid-cols-3` — left (2 cols) = gallery, right (1 col, sticky) = inquiry form

**Tab System (3 tabs with Framer Motion `layoutId` switcher):**

1. **Photos** — `grid-cols-2 sm:grid-cols-3`; each: `aspect-square`, hover scale-110, overlay with caption + Download; click opens full-screen lightbox (`AnimatePresence` fade)
2. **Videos** — stacked list cards; thumbnail (left) + title/meta (right); Play overlay button + duration badge
3. **Press** — list of press items; outlet name badge, article headline, date, type chip; `ChevronRight` slides on hover

**Media Inquiry Form** — `glass-dark` sticky panel; fields: Media House, Contact Name, Email, Deadline, Inquiry Details; dark-styled inputs; submit calls `mockDatabase.submitMediaInquiry()`

---

### 8.8 Get Involved (`/get-involved`, `/volunteer`)

**Theme:** `bg-zinc-950`, full dark

**Layout:** `lg:grid-cols-12` — left (5 cols) = inspiration + paths, right (7 cols) = volunteer form

- Left: "Movement 2027" badge, large serif italic headline, 3 involvement path cards (`glass-dark`), inspirational quote card
- Right: `glass-dark` form panel; fields: Full Name, Ward/Location, Email, Phone, Primary Interest (dropdown), Availability (dropdown), Skills (textarea); loading state; success state with checkmark

Data: submits via `airtableService.addVolunteer()`

---

### 8.9 Donate (`/donate`)

**Theme:** `bg-zinc-950`, full dark

**Layout:** Single column, `max-w-3xl`, `glass-dark` container

- Heading: "Invest in Our Future"
- Frequency toggle (One-time / Monthly) — dark pill switcher, active = `bg-emerald-600`
- Amount selection — 5 preset buttons + custom KES input; selected = `border-emerald-500 bg-emerald-500/10`
- Personal details (Full Name, Email, Phone) — dark `bg-zinc-900` inputs
- Payment method radio (M-PESA, Credit/Debit Card)
- Legal consent checkbox
- Submit button — `bg-emerald-600`, full-width, shows "Donate KES X,XXX"
- SSL security indicator
- Success state — `glass-dark` panel with emerald heart icon + thank you message

Data: submits via `mockDatabase.submitDonation()`

---

### 8.10 Contact (`/contact`)

**Theme:** `bg-zinc-950`, full dark

**Layout:** `lg:grid-cols-5` — left (2 cols) = contact info cards, right (3 cols) = form

- Left: 3 `GlassCard` info blocks (Constituency Office, Phone Support, Email Correspondence); trust badges (SSL, Priority Response)
- Right: contact form (First Name, Last Name, Email, Topic dropdown, Message); loading state; success state "Message Transmitted"

Data: submits via `airtableService.addInquiry()`

---

## 9. Services Layer (`services/`)

### `airtableService.ts`
- Base ID: `app6j8ItePOm5UZbc`
- API Key: `VITE_AIRTABLE_PAT` env var
- Tables: SUPPORTERS, VOLUNTEERS, DONORS, CMS_CONTENT, ACHIEVEMENTS, INQUIRIES
- Methods: `addSupporter()`, `addVolunteer()`, `addDonation()`, `addInquiry()`, `getLatestNews()`, `getAchievements()`
- Fallback: returns empty/null if API key missing

### `geminiService.ts`
- Model: `gemini-1.5-flash`
- System prompt: candidate name + achievements + policies context
- Tone: professional, inspiring, <100 words, directs to relevant pages
- Fallback: offline message if `VITE_GEMINI_API_KEY` missing

### `mockDatabase.ts`
- Thin wrappers around `airtableService` for volunteer/donation/media inquiry submissions

---

## 10. Data Constants (`constants.tsx`)

| Export | Contents |
|---|---|
| `CANDIDATE_NAME` | `"Hon. Kelvin Migongo"` |
| `CANDIDATE_TITLE` | `"Candidate for Member of Parliament, Bahati"` |
| `ACHIEVEMENTS` | 3 entries: Youth Empowerment, Small Scale Farmers Support, Community Health Outreach |
| `POLICIES` | 5 entries: Economic Empowerment, Youth & Education, Sustainable Agriculture, Healthcare Access, Infrastructure Development |
| `LATEST_NEWS` | 3 entries: Transforming Bahati, Digital Divide, Clean Water Access |
| `IMPACT_STATS` | 4 entries: Education 45%, Infrastructure 30%, Economy 15%, Agriculture 10% |

---

## 11. Routing (`App.tsx`)

```
HashRouter
  └── Layout (Navbar + Footer + ChatAssistant)
        ├── /                  → Home
        ├── /about             → About
        ├── /achievements      → Achievements
        ├── /vision            → Vision
        ├── /media             → Media
        ├── /blog              → Blog
        ├── /blog/:id          → BlogPost
        ├── /get-involved      → GetInvolved
        ├── /volunteer         → GetInvolved (alias)
        ├── /donate            → Donate
        └── /contact           → Contact
```

`ScrollToTop` hook scrolls window to top on route change.

---

## 12. File Structure

```
kev/
├── index.html              # Entry point; Tailwind CDN; importmap for ESM deps
├── index.tsx               # React root render
├── index.css               # Global styles, glassmorphism utilities, fonts
├── App.tsx                 # Router + Layout
├── constants.tsx           # Static data (achievements, policies, news, stats)
├── types.ts                # TypeScript types (BlogPost, Achievement, Volunteer, etc.)
├── tailwind.config.js      # Tailwind theme extension (colors, fonts)
├── postcss.config.js       # autoprefixer only (Tailwind served via CDN)
├── vite.config.ts          # Vite build config
├── netlify.toml            # Netlify deployment config
│
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Layout.tsx
│   ├── GlassCard.tsx
│   ├── Button.tsx
│   ├── NewsletterForm.tsx
│   └── ChatAssistant.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── About.tsx
│   ├── Vision.tsx
│   ├── Achievements.tsx
│   ├── Blog.tsx
│   ├── BlogPost.tsx
│   ├── Media.tsx
│   ├── GetInvolved.tsx
│   ├── Donate.tsx
│   └── Contact.tsx
│
├── services/
│   ├── airtableService.ts
│   ├── geminiService.ts
│   └── mockDatabase.ts
│
└── public/
    ├── favicon.png
    ├── _redirects
    └── images/
        ├── About.png
        ├── Landing.png
        ├── budget.png
        ├── masomo-bora.png
        ├── progress.png
        └── Saf.png
```

---

## 13. Environment Variables

| Variable | Purpose |
|---|---|
| `VITE_AIRTABLE_PAT` | Airtable Personal Access Token |
| `VITE_GEMINI_API_KEY` | Google Gemini API key for chat assistant |

---

## 14. Performance & Quality Standards

- Animations use `viewport: { once: true }` — trigger only on first scroll entry
- Floating animations use CSS `will-change: transform` (GPU-accelerated)
- Images are lazy-loaded via native browser behaviour
- No animation overload — motion is purposeful and refined
- Framer Motion `AnimatePresence` used for enter/exit transitions on tabs and modals
- `reduced-motion` CSS media query respected via Framer Motion defaults

---

## 15. Future Roadmap

| Feature | Priority |
|---|---|
| Constituent CRM with personalized supporter journeys | High |
| Interactive constituency map (ward-level project tracking) | High |
| Payment gateway integration (Stripe / M-Pesa SDK) | High |
| Multi-language support (English / Kiswahili) | Medium |
| Event calendar (rallies, town halls, community visits) | Medium |
| Volunteer & donor dashboards (authenticated) | Medium |
| Progressive Web App (offline support, installable) | Medium |
| SEO meta tags + og:image per page | Medium |
| Campaign analytics dashboard (admin) | Low |
| SMS broadcast integration | Low |
| Real-time project progress tracking | Low |

---

*Last updated: March 2026 — reflects the live v2.0 implementation.*
