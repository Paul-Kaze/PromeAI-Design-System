# PromeAI Landing Page Visual Style

Use this reference to design PromeAI marketing and product landing pages without inheriting a fixed page topic. Treat the bundled files as style cues, not mandatory copy or layout.

## Brand Feel

- Dark, technical, premium, and creator-focused.
- Confident and benefit-forward, but not loud or gimmicky.
- Best suited for AI creation tools, workflow pages, feature launches, generators, and conversion pages.
- The page should feel fast, precise, and production-ready rather than playful or decorative.

## Voice

- Lead with the user's outcome, then explain the mechanism.
- Use concise second-person copy where helpful.
- Use specific claims only when the product context provides them. Do not invent numbers, deadlines, usage limits, or proof points.
- Prefer action-oriented CTAs tied to the page goal, such as "Try for free", "Start creating", "Generate now", or a product-specific verb.
- Avoid emoji, jokey phrasing, and overly clever headlines.

## Color

- Base background: near-black `rgb(1, 4, 11)`.
- Section background: dark navy `rgb(15, 23, 42)`.
- Card background: slate `rgb(30, 41, 59)`.
- Primary accent: electric blue `rgb(52, 141, 255)` and `rgb(59, 130, 246)`.
- Secondary accent: vivid purple `rgb(155, 53, 255)` and `rgb(147, 51, 234)`.
- Supporting accents: green `rgb(34, 197, 94)` for progress or steps, pink `rgb(236, 72, 153)` for secondary emphasis.
- Text: white for headings, muted grey-blue `rgb(157, 162, 174)` for body, and lighter muted values for small UI labels.
- Use blue-to-purple gradients sparingly for primary CTAs and major CTA bands.

## Typography

- Primary typeface: Poppins.
- Use 700 for hero headings, section headings, and primary CTAs.
- Use 600 for key numbers, compact labels, and strong UI emphasis.
- Use 400 or 500 for body copy and supporting text.
- Suggested scale:
  - Hero display: 40-48px desktop, 32-38px tablet, 28-34px mobile.
  - Section titles: 32-40px desktop, 26-32px mobile.
  - Feature titles: 24-28px.
  - Body: 16-18px.
  - Small supporting text: 14px.
- Keep letter spacing at 0 unless using a deliberate watermark or short label treatment.

## Layout

- Build in full-width dark sections with constrained inner content.
- Favor clear vertical progression: hero, proof or workflow steps, benefits, examples/use cases, FAQ, final CTA.
- Desktop section padding should generally be around 72-96px vertically with 80-104px horizontal margins.
- Use two-column feature sections for explanation plus visual proof, alternating image/text alignment when useful.
- Keep cards as repeated items only. Do not nest cards inside cards.
- On mobile, collapse columns into a single scanning path and keep CTA buttons full-width or near full-width.

## Hero Direction

- Hero should communicate the page-specific outcome immediately.
- A strong PromeAI hero often uses:
  - dark base,
  - subtle blue/purple gradient depth,
  - organic polygon overlays,
  - a prominent interactive-looking input/upload/generation surface,
  - one clear primary CTA.
- The hero visual should match the product or workflow. Replace bundled sample imagery with page-specific output, UI screenshots, or generated results when available.

## Components

- Primary CTA: pill button, blue-to-purple gradient, white bold text, height around 56-64px.
- Secondary CTA: white or transparent button, restrained border, blue text when placed on gradient bands.
- Cards: slate background, 12-16px radius, no heavy borders, depth from contrast instead of shadows.
- FAQ rows: slate cards, 12px radius, white question text, muted answer text, simple chevron icon.
- Step indicators: 56-64px gradient squares with white line icons.
- Upload or input panels: semi-transparent slate surface with subtle dashed border.

## Imagery

- Use clean, saturated digital imagery with cool tones: blue, purple, magenta, teal.
- Prefer real product output, UI screenshots, generated assets, or workflow examples over generic stock art.
- Use 12px radius for images and product previews.
- Avoid warm, beige, hand-drawn, grainy, or overly soft visual treatments.
- The bundled `assets/` folder contains sample visual references. Replace them when building a page for a concrete product or campaign.

## Motion

- Use subtle fades, short upward transforms, button hover brightening, and accordion transitions.
- Avoid bouncy, toy-like, or excessive animation.
- Generation/loading states can use a simple blue spinner or progress treatment.

## Implementation Notes

- `colors_and_type.css` contains reusable CSS tokens and font-face declarations.
- `preview/` contains style specimens that demonstrate tokens and component patterns.
- `ui_kits/landing/` contains a React/static HTML prototype. Treat its content as placeholders and adapt all copy, imagery, and flows to the current page.
- `fonts/` contains Poppins font files for local prototypes.
