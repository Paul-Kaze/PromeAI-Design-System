# PromeAI Design System

## Overview

**PromeAI** is an AI-powered creative generation platform. The primary product shown in this design system is a **Character Sheet Generator** — a tool that converts user-uploaded photos into professional, print-ready character sheets (for use in games, RPGs, and creative projects) in under 30 seconds. The platform also supports other AI generation workflows (3D models, game assets, etc.).

The brand positioning is: *fast, professional, AI-powered creative tools for game developers, indie studios, freelancers, and digital creators.*

---

## Sources

- **Figma File:** `SEO Landing Page.fig` — 1 page, frame: `character sheet genertor` (node 1:10, 1440×4513px). Mounted as virtual filesystem. Full Figma link unavailable (file was attached directly).
- No codebase attached.

---

## Products / Surfaces

| Surface | Description |
|---|---|
| **Character Sheet Generator** | Main landing page. AI photo → character sheet tool. |
| **Other Workflows** | Section hinting at more tools (3D models, game assets, architecture). |
| **Header/Nav** | Global nav with PromeAI branding, tool links, upgrade CTA. |

---

## CONTENT FUNDAMENTALS

### Tone & Voice
- **Direct and benefit-forward.** Headlines state the outcome immediately. E.g. *"Turn Your Photo into a Professional Character Sheet in 30 Seconds"*
- **Confident, not boastful.** Uses phrases like "powered by advanced AI" rather than superlatives.
- **Action-oriented CTAs.** Buttons say what you *do*: "Generate Character Sheet", "Try for free", "Try our character sheet for free."
- **Reassurance through specifics.** Copy anchors claims in numbers: *"30 seconds", "under 30 seconds", "10 models free"*, etc.
- **No jargon overload.** Technical concepts (AI, generation) are named but not explained in depth — the audience is assumed to be creatively technical.

### Casing
- **Title Case** for headings and section titles.
- **Sentence case** for body copy and CTAs.
- Product name: **PromeAI** (camel-cased, no space).

### Person
- **Second-person "you/your"** throughout. *"Upload your portrait photo."* The interface speaks directly to the user.
- No first-person "I/we" in UI copy. Brand voice is tool-first, not company-first.

### Emoji
- **Not used** in the UI or copy. Visual hierarchy achieved through type weight, color, and iconography instead.

### Example Copy Samples
- *"Turn Your Photo into a Professional Character Sheet in 30 Seconds"* — hero subtitle
- *"Zero-Design Speed"* — feature heading
- *"Upload a selfie—our AI illustrates, aligns, and exports a print-ready character sheet in under 30 seconds, saving hours of hand-drawing or formatting."* — feature body
- *"Generate your first 10 models free • No credit card needed • Cancel anytime"* — trust line under CTA

---

## VISUAL FOUNDATIONS

### Color Palette
- **Background (primary):** `#010409` / `rgb(1,4,11)` — near-black, used for the main content background.
- **Background (secondary):** `rgb(15,23,42)` — dark navy blue, used for all content sections.
- **Background (card):** `rgb(30,41,59)` — slate blue, used for FAQ items and step cards.
- **Accent Blue:** `rgb(52,141,255)` / `rgb(59,130,246)` — electric blue, used in gradients and highlights.
- **Accent Purple:** `rgb(155,53,255)` / `rgb(147,51,234)` — vivid purple, paired with blue.
- **Hero gradient:** `linear-gradient(rgb(52,141,255) 0%, rgb(155,53,255) 100%)` — primary CTA gradient.
- **CTA section gradient:** `linear-gradient(rgb(59,130,246) 0%, rgb(147,51,234) 100%)` — full-bleed section.
- **Text primary:** `rgb(255,255,255)` — white headings.
- **Text secondary:** `rgb(157,162,174)` — muted grey-blue for body/descriptions.
- **Text tertiary:** `rgb(182,185,202)`, `rgb(156,163,175)` — even more muted, small labels.
- **Text subtle UI:** `rgb(215,216,224)`, `rgb(237,237,241)` — upload prompt, subheadings.
- **Step icon gradient:** `linear-gradient(rgb(34,197,94) 0%, rgb(59,130,246) 100%)` — green→blue, used for step number icons.

### Typography
- **Primary Typeface:** Poppins (Google Fonts)
  - Bold (700): Display headings, section titles, CTA labels
  - SemiBold (600): Large display numbers, emphasis
  - Medium (500): Subheadings, FAQ questions
  - Regular (400): Body copy, descriptions
- **Accent Typeface:** Akzidenz-Grotesk BQ Extra Condensed Bold Italic — used sparingly for watermark/overlay text (e.g. "Character Sheet" overlay on hero image)
- **Type Scale:**
  - Hero display: 41px Bold
  - Section title: 36px Bold
  - Feature heading: 27px Bold
  - Card title: 24px Bold / 21px Bold
  - Body large: 20px Medium / 18px Regular
  - Body small: 16px Regular / 14px Regular
  - CTA button: 21px Bold / 20px Bold

### Backgrounds & Imagery
- **Full-bleed dark sections** dominate. Content sits on `rgb(15,23,42)` throughout the page.
- **Hero section** uses a layered gradient overlay: base black → dark blue purple, with organic polygon SVG shapes (no hard edges) used as atmospheric color blobs. This creates depth without images.
- **Feature images** are real photography: digital art / gaming / tech aesthetic. Used at `border-radius: 12px` in alternating left-right layouts.
- **No hand-drawn illustrations.** No textures or patterns. Clean dark surfaces only.
- **Header:** Navigation background is a full-width image (dark UI screenshot showing the PromeAI app interface).

### Shapes & Decorative Elements
- **Custom polygon SVG shapes** in the hero serve as atmospheric color gradients (deep purple/blue blobs). They use gradient fills and semi-transparency to create a glowing effect without being literal glows/shadows.
- No circles used as decorative elements. Polygons only.

### Corner Radii
- **Cards/Feature images:** `border-radius: 12px`
- **Step cards / workflow cards:** `border-radius: 16px`
- **Step icon containers:** `border-radius: ~10.67px`
- **Primary CTA button (pill):** `border-radius: 40px` (fully rounded)
- **Secondary CTA button (white):** `border-radius: 12px`
- **FAQ accordion items:** `border-radius: 12px`

### Buttons
- **Primary (pill gradient):** Blue→Purple gradient, fully rounded (`r: 40px`), white bold text, `box-shadow: 0 0 10px rgba(0,0,0,0.25)` on label.
- **Secondary (white):** White background, blue text (`rgb(37,99,235)`), `border-radius: 12px`. Used inside gradient sections.
- **Hover/active states:** Not explicitly defined in Figma, but pattern suggests opacity reduction or lighter gradient shift.

### Shadows
- **Minimal shadow usage.** Only a soft `box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.25)` on button text labels. Cards rely on background color contrast rather than shadows for depth.

### Spacing & Layout
- **Page width:** 1440px.
- **Content margins:** 80–104px horizontal padding on sections; 272px padding on narrow sections.
- **Section padding:** `80px 0` top/bottom consistently.
- **Card gaps:** 21px (step cards), 32px (workflow cards), 36px (feature sections).
- **Section spacing:** 80px between major content blocks.

### Animation
- **Not defined** in Figma. Based on the dark, technical aesthetic, subtle fade-ins and transforms are appropriate. No bounces or playful animations.

### Transparency & Blur
- **Semi-transparent colored backgrounds** used for hero overlays (e.g. `rgba(61,62,90,0.7)` for the upload dropzone, `rgba(85,40,162,0.6)` for the character preview overlay).
- No frosted glass / backdrop-filter blur detected.

### Imagery Vibe
- **Cool color palette.** Blues, purples, magentas, teals. No warm tones.
- **High-tech / digital art / gaming aesthetic.** Photo assets feature glowing UI screens, cyberpunk character art, game assets.
- **No grain or film effects.** Clean, saturated digital imagery.

### Borders
- **Dashed border** on upload dropzone: `1px dashed rgb(72,73,92)` — subtle dark divider line.
- **Solid border** on header: `1px solid rgb(36,37,37)`.
- Otherwise, **no borders used** — background color contrast does the work.

### Iconography
- See ICONOGRAPHY section below.

---

## ICONOGRAPHY

- **Upload icon:** Custom SVG (checkmark-style vector, white fill). See `assets/icons/upload-icon.svg`.
- **Accordion chevron:** Inline SVG chevron (up/down arrow). White fill, 14×8px. Used in FAQ items.
- **Step icons:** No icon font detected. Step icons use gradient-background square containers with embedded SVG icons (white, outlined style).
- **No icon font or sprite sheet** detected in the Figma design.
- **No emoji used** as icons.
- **Recommended icon library for implementation:** Heroicons (stroke style, 24px) or Lucide Icons — both match the outlined, clean aesthetic of the existing icons.
- All icons are white (`rgb(255,255,255)`) on colored/dark backgrounds.

---

## File Index

```
README.md                    — This file
SKILL.md                     — Agent skill definition
colors_and_type.css          — CSS custom properties: colors, type, spacing
assets/
  header-nav.png             — Full-width header/nav background image
  character-sheet-preview.png — Character art used in hero section
  feature-speed.png          — Feature section image 1 (speed)
  feature-accuracy.png       — Feature section image 2 (accuracy)
  feature-quality.png        — Feature section image 3 (quality)
  workflow-card.jpg          — Workflow card thumbnail image
  icons/
    upload-icon.svg          — Upload/add icon (white SVG)
preview/
  colors-base.html           — Base color palette swatches
  colors-semantic.html       — Semantic color tokens
  colors-gradient.html       — Gradient tokens
  type-scale.html            — Typography scale specimen
  type-weights.html          — Font weight specimens
  spacing-radii.html         — Border radius tokens
  spacing-layout.html        — Spacing & layout tokens
  components-buttons.html    — Button variants
  components-cards.html      — Card components
  components-hero.html       — Hero section component
  components-faq.html        — FAQ accordion component
  brand-logo.html            — Logo / header brand
ui_kits/
  landing/
    README.md                — Landing page UI kit notes
    index.html               — Interactive landing page prototype
    Header.jsx               — Navigation header component
    HeroSection.jsx          — Hero / upload section
    StepsSection.jsx         — How-to steps section
    FeaturesSection.jsx      — Why choose us features
    FAQSection.jsx           — FAQ accordion
    CTASection.jsx           — Bottom CTA banner
    WorkflowCards.jsx        — Try other workflows cards
```
