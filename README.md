# PrepVerse Official Platform Closure & Decommissioning Website

A standalone, responsive, high-performance static shutdown website for **PrepVerse**. 

This portal serves as the official public record of the platform's closure, honoring its community of **40,000+ registered users**, outlining explicit **PrepVerse-specific data stewardship and privacy protections**, and providing a dedicated transition support channel active through **21st October 2026**.

---

## Key Features & Compliance

- **Zero Tracking, Zero Cookies & Zero External APIs**:
  - No cookies, no analytics scripts, no external font trackers, and no telemetry dependencies.
  - Completely self-contained with embedded SVG icons and modern web-standard CSS.
- **40,000+ Community Recognition**:
  - Prominently acknowledges and thanks the 40,000+ registered candidates, learners, and interview aspirants who utilized PrepVerse.
- **PrepVerse Data Stewardship & Privacy**:
  - **Commitment to Verified Accuracy**: Does not make false or unverified claims that all personal data or backup records have been instantaneously erased.
  - Explains the phased decommissioning lifecycle: operational network decoupling, encrypted isolated backups, statutory retention compliance windows, and scheduled cryptographic destruction.
  - Details user rights for account record verification, data export summaries, and expedited deletion inquiries.
- **Dedicated Support Configuration**:
  - Configured with the dedicated transition support email (`madhu@hyrecruitai.com`).
  - Features 1-click clipboard copy with instant visual feedback and a pre-formatted `mailto:` client trigger.
- **Availability Window**:
  - Notice remains officially active and accessible through **21st October 2026**.
- **Official Brand Assets**:
  - High-resolution PrepVerse logo and matching custom brand SVG favicon.
  - Dark / Light executive mode toggle with print-optimized styles for generating official PDF documentation (`window.print()`).

---

## Project Structure

```text
shutdown-static-website/
├── dist/                          # Production-ready static output (Deployable directly)
│   ├── assets/
│   │   ├── index-*.js             # Bundled static client logic
│   │   └── index-*.css            # Bundled styling & design system
│   ├── favicon.svg                # PrepVerse custom brand favicon
│   ├── index.html                 # Semantic entry point with OpenGraph & meta tags
│   └── prepverse-logo.png         # Official brand logo
├── public/
│   ├── favicon.svg                # Brand icon
│   └── prepverse-logo.png         # Official brand logo
├── src/
│   ├── assets/
│   │   └── prepverse-logo.png     # Component asset reference
│   ├── components/
│   │   ├── ClosureNotice.tsx       # Formal closure notice & service status matrix
│   │   ├── CommunityMilestones.tsx # 40,000+ user community acknowledgment
│   │   ├── FAQ.tsx                 # Searchable, categorized interactive FAQ
│   │   ├── Footer.tsx              # Brand footer, copyright & static guarantees
│   │   ├── Header.tsx              # Top alert bar, navigation, print & theme toggle
│   │   ├── Hero.tsx                # Hero headline, dates & key metric cards
│   │   ├── Icons.tsx               # Standalone inline SVG icons
│   │   ├── PrivacySection.tsx      # Verified privacy & data governance policies
│   │   ├── SupportSection.tsx      # Email placeholder, copy button & tips
│   │   └── Timeline.tsx            # Transition & decommissioning milestones
│   ├── config/
│   │   └── siteConfig.ts           # Central configuration (support email, dates, FAQs)
│   ├── App.tsx                     # Main application layout
│   ├── index.css                   # Modern design system & CSS custom properties
│   └── main.tsx                    # React DOM root mounting
├── index.html                     # Root HTML template
├── package.json                   # Dependencies and npm scripts
├── tsconfig.json                  # TypeScript compiler settings
├── vite.config.ts                 # Vite bundler configuration (base: './')
└── README.md                      # Documentation
```

---

## Configuring the Dedicated Support Email

The support email is centrally managed in [`src/config/siteConfig.ts`](./src/config/siteConfig.ts).

To update the placeholder with the finalized mailbox:

1. Open `src/config/siteConfig.ts`.
2. Locate the `support` configuration block:
   ```typescript
   support: {
     emailPlaceholder: 'madhu@hyrecruitai.com', // Active transition support mailbox
     isPlaceholder: false,
     helperNote: '...',
     responseWindow: 'Typically 3-5 business days during the decommissioning transition window',
     subjectTemplate: 'PrepVerse Decommissioning - Account & Data Inquiry',
   },
   ```
3. Re-run `npm run build` to update the production assets in `dist/`.

---

## Local Development & Build Commands

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation
```bash
npm install
```

### Run Locally (Development Server)
```bash
npm run dev
```

### Create Production Build
```bash
npm run build
```
Compiles and bundles the application into the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

---

## Free Static Hosting Deployment Options

Because Vite is configured with `base: './'`, the contents of the `dist/` directory are completely relative and can be deployed directly to any static web hosting provider without server dependencies.

> **Important**: In accordance with operations policy, **do not deploy or change DNS records without explicit stakeholder approval.**

### 1. Cloudflare Pages
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/`

### 2. GitHub Pages
- Option A: Set GitHub Pages source to GitHub Actions using standard static deployment.
- Option B: Commit or push the `dist/` folder contents to a `gh-pages` branch.

### 3. Netlify
- Drag and drop the `dist/` folder directly into the Netlify Drop interface, or connect repository:
- **Build command**: `npm run build`
- **Publish directory**: `dist`

### 4. Vercel
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`

---

## Notice Active Period

- **Platform Operations Concluded**: October 2026
- **Notice & Support Transition Window Active Through**: **21st October 2026**
