I need you to scaffold a complete, production-ready landing page.

## Project config
- Product name: {{PRODUCT_NAME}}
- Description: {{PRODUCT_DESCRIPTION}}
- Target audience: {{TARGET_AUDIENCE}}
- Primary color (Tailwind): {{PRIMARY_COLOR}}
- Visual style: {{STYLE}}

## Tech stack
- Next.js 14 with App Router
- TypeScript (strict mode)
- Tailwind CSS
- shadcn/ui

## Step 1 — Project setup (only if no project exists yet)
Run the following in sequence:
1. `npx create-next-app@latest . --typescript --tailwind --eslint --app --no-src-dir --import-alias "@/*"`
2. `npx shadcn@latest init -d`
3. Install shadcn components:
   `npx shadcn@latest add button card badge navigation-menu sheet accordion separator`

## Step 2 — File structure to generate
Create ALL of the following files:

### Layout components — /components/layout/
- `Navbar.tsx` — Logo + nav links + CTA button + mobile Sheet menu (hamburger)
- `Footer.tsx` — Logo, link columns (Product, Company, Legal), copyright line

### Section components — /components/sections/
- `Hero.tsx` — Big headline, subheadline, 2 CTA buttons, decorative placeholder (gradient div or SVG mockup)
- `LogoBar.tsx` — "Trusted by" strip with 5–6 placeholder company names in muted text
- `Features.tsx` — Section title + 3-column grid of cards (icon + title + 2-line description)
- `HowItWorks.tsx` — Numbered 3-step horizontal flow (icon + title + description)
- `Pricing.tsx` — 3 cards: Free / Pro (highlighted) / Enterprise, each with feature list and CTA button using shadcn Card
- `Testimonials.tsx` — 3 quote cards with avatar placeholder, name, role, and company
- `FAQ.tsx` — 6 questions using shadcn Accordion
- `CTABanner.tsx` — Full-width banner with headline + email input + submit button
- `Stats.tsx` — 3–4 big numbers with labels (e.g. "10k+ users", "99.9% uptime")

### App files
- `app/page.tsx` — Imports and renders all sections in this order:
  Navbar → Hero → LogoBar → Stats → Features → HowItWorks → Pricing → Testimonials → FAQ → CTABanner → Footer
- `app/layout.tsx` — Sets metadata (title, description), imports global styles

## Step 3 — Design requirements
- Fully responsive, mobile-first
- Dark mode support using Tailwind `dark:` variants
- Primary accent color: {{PRIMARY_COLOR}}-600 (light) / {{PRIMARY_COLOR}}-400 (dark)
- Consistent spacing: section padding `py-20 md:py-28`
- Max content width: `max-w-6xl mx-auto px-4`
- Use shadcn/ui components for all interactive elements (Button, Card, Accordion, Sheet)
- Realistic placeholder copy (not Lorem Ipsum) — write copy relevant to {{PRODUCT_DESCRIPTION}}
- All SVG icons from lucide-react

## Step 4 — Quality checklist (apply before finishing)
- [ ] No TypeScript errors
- [ ] No unused imports
- [ ] All components have proper prop types if they accept props
- [ ] Navbar mobile menu opens and closes correctly
- [ ] Pricing cards use consistent height (use flex-col + mt-auto on CTA buttons)
- [ ] FAQ accordion items open/close without layout shift

## Important rules
- Work section by section, create each file completely before moving to the next
- Do NOT use `any` TypeScript type
- Do NOT use inline styles — Tailwind classes only
- Keep components self-contained (no global state needed)
- After all files are created, run `npm run build` and fix any errors before finishing