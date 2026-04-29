# PromeAI Design System

A design system extracted from the PromeAI product (promeai.pro) — an AI image, video, design and workflow platform with a strong emphasis on **architecture, interior and product design**.

> **Brand:** PromeAI · 神采AI (cn)
> **Product URL:** https://www.promeai.pro
> **Internal name:** promeAI-nuxt

---

## Sources (for reference only — users may not have access)

- **Codebase** — `promeai-web/` (Nuxt 2 + Vue 2 + Vuetify 2 + Tailwind, SSR, i18n in 12 locales). Entry: `promeAI-web/`. See `AGENT.md` + `CLAUDE.md` there.
- **Figma: "promeai-颜色库"** — brand color library.
- **Figma: "26年一季度设计稿-for 产品&前端"** — Q1 2026 product + marketing designs: home, inspira, magic-editor, nano-pro, what's-new, assets, message, pro, skill, poster, and 21 pages total.

---

## What PromeAI does

PromeAI is an AI creative suite. It runs >40 generative features from one canvas-plus-left-rail product shell. Headline capability buckets:

- **Architecture / interior design** — `ai-architecture-generator`, `interior-design-transformation`, `exterior-renovator`, `architecture-sketch-transformation`, `floorplan-generator`, `scenario-changer`.
- **Image generation + edit** — `text-to-image`, `image-variation`, `inpainting`, `outpainting`, `magic-editor`, `relight`, `image-to-pattern`, `background-remover`, `background-diffusion`.
- **Video** — `image-to-video`, `ai-video-generation`, `video-effect`, `video-hd`, `ai-motion-brush`.
- **Design assets** — `ai-logo-generator`, `ai-poster-generator`, `ai-avatar-generator`, `mockup-generator`, `ai-supermodel-generation`, `virtual-try-on`, `sticker-maker`, `pattern-generator`.
- **Agents / chat** — `ai-painting-chatbot`, `inspira` (new agent-based generation), `promeaigpt`.
- **Other** — `ai-3d-model-generator`, `blender` integration, `model-training`.

The two billboard products in Q1-2026 figma are **Inspira** (agent-driven image generation with a conversational brief + multi-model fan-out) and **Magic Editor** (prompt-based image editing with model picker: Nano Banana Pro / SnapEdit / Nano Banana).

The product is dark-first, runs in 12 languages, and bills in an internal coin system (tiered: free / base / standard / pro / team).

---

## Quick index

- `README.md` — this file (context + content + visual + iconography)
- `SKILL.md` — cross-compatible skill manifest for Claude Code
- `colors_and_type.css` — CSS tokens, fonts, semantic type
- `fonts/` — local-hosted copies (Google Fonts swap, see caveat below)
- `assets/logo/` — PromeAI wordmark, P-hex logo, watermark, favicon
- `assets/icons/` — product icon PNGs (download / edit / like / assets / coin / …)
- `assets/imagery/` — generic hero / tile imagery (architecture, interior, character, daily)
- `preview/` — Design System tab cards (colors, type, components, spacing, brand)
- `ui_kits/web/` — PromeAI web UI kit (home, magic-editor, inspira prototypes)

---

## CONTENT FUNDAMENTALS

PromeAI writes in **utility-first, benefit-led, Title-Case English**, with feature names that are short verb-noun compounds. A lot of copy is product-mode dense (many features, tight labels).

### Voice
- **Direct, capable, product-centric.** Copy describes what a tool does, not how it feels. "Image Generation", "Background Remover", "Magic Editor", "Upscale Image", "Create New".
- **Aspirational headings.** Marketing headings lean into creativity, e.g. *"Bring Your Creativity into Life"* (home mobile). Section labels are nouns: *Recent Projects, Tutorial, What's New, Updates*.
- **Action-led CTAs.** "Create New", "View All", "Go to collect", "Upgrade", "Buy", "Contact Us".
- **Casual, low-hype.** Short tool one-liners under model names: *"Best at following your prompts."*, *"Fast & budget-friendly"*. Never exclamation-heavy, never em-dashed marketing prose.
- **Brand self-reference.** Uses `{BRAND_NAME}` placeholder → "PromeAI" (en) / "神采AI" (cn). E.g. *"PromeAI Academy"*.

### Casing / punctuation
- **Title Case** for feature names, menu items, buttons and card titles. ("Image Editing", "My Assets")
- **Sentence case** for descriptive sub-copy and tooltips.
- **No periods** at the end of button labels or menu items. Feature descriptions use periods.
- Apostrophes are unstylized (`'`).
- Numbers stay numeric ("0/5", "2 coins").

### Pronouns
- **"You / your"** speaks to the user. ("Your browser does not support video playback!", "You've earned N coins")
- **"We / our"** is restrained to support / terms / contact contexts.
- **"My"** labels personal areas ("My Assets", "My Home Page", "My Collects") — appears throughout the left-rail / profile menu.

### Emoji / tone flourishes
- **Emoji are not used in product UI.** Icons are always rendered as image assets.
- **Unicode is minimal.** Occasional `×` for close, `+` for add, `/` in counters.
- Lime green + bold type carries the "excitement" that emoji would elsewhere.

### Specific copy examples
- Nav: `Image Generation`, `Image Editing`, `Video`, `Workflows`, `What's New`.
- Model-picker: `Nano Banana Pro` / `Best at following your prompts.`
- Home hero (Inspira): `Bring Your Creativity into Life`.
- Coin toast: `You've earned N coins`.
- Asset upload prompt: `choose from assets`.

### i18n note
12 locales are shipped (`ar/de/en/es/fr/hi/it/ja/ko/pt/ru/zh-CN`). All product copy lives in `lang/` and SFC `<i18n>` blocks — never hard-code text.

---

## VISUAL FOUNDATIONS

### The system
- **Dark-first, near-black chrome** with high-saturation gradient accents, lime signal green for CTAs / success, and cool pastel chips (coral / magenta) layered on.
- **Figma / product imagery** is photographic and ultra-saturated (architecture photography, portraiture) — never illustrated. Imagery is always **full-bleed** inside rounded frames, never matted.

### Color vibe
- Surface: `#000` body, `#15181D → #272B34` for layered cards/panels, `#20232B` / `#21232B` for dialogs.
- Accent gradient: **#2199DA → #9931ED** (135°). Also appears as `#348DFF → #9B35FF`. Used on: primary buttons, the P-hex logomark, hero wash, title underlines, progress bars, "Create" CTAs.
- Signal lime: `#c7f14c` — new-feature pills, success, active "live" dot, challenge coin amounts.
- Secondary accents: coral `#FF7085`, magenta `#F984FF`, indigo `#4378E0`, inline link blue `#91A1FF`.
- Imagery reads **warm-saturated in hero tiles** (architecture / interior) and **moody cool with grain** in chat / agent screens.

### Type
- UI body is **Inter 14/15px medium-regular**. Marketing + home headings are **Poppins SemiBold/Bold 18–45px**. Display experiments (campaign pages, posters) reach **Outfit ExtraBold, Anton, Alimama ShuHeiTi Bold, DingTalk JinBuTi** at 30–66px. See `colors_and_type.css` for the full scale.
- Chinese campaign surfaces use `Alimama ShuHeiTi`, `eryaxindahei`, `DingTalk JinBuTi`, `Alibaba PuHuiTi 3.0` — substituted to `Noto Sans SC` in this system pending font files (see Caveats).

### Spacing
- 4-px base grid. Card padding is usually 10–16px (tight mobile-style); section padding is 48–64px on desktop.
- Left rail widths: 60px (collapsed rail) / 280–320px (expanded panel).

### Backgrounds
- Primary background is **solid black** (`body { background: #000 }`).
- Hero gets a **soft radial wash** using the brand gradient at low opacity plus a **subtle grid tile** (`grid_bg.jpg`, repeating `.grid-tile-bg`).
- Marketing pages use **full-bleed imagery with a black→transparent overlay** (top & bottom protection gradients, never capsules). Values: `linear-gradient(#000 0%, rgba(23,23,23,.53) 49%, #303030 100%)`.
- No hand-drawn illustrations. No repeating decorative patterns beyond the grid tile.

### Animation
- `animate.css` is the motion toolkit — used sparingly.
- Main motif: `animate__fadeInUp` with `--animate-duration: 0.6s`.
- Transitions: `0.4s cubic-bezier(0.25, 0.8, 0.5, 1)` for fade-down dialog/stack motion.
- Tooltips intentionally have **zero transition** (`.v-tooltip__content { transition: none }`).
- Video cards autoplay muted previews; Lottie is used for loading states in the image bench.

### Hover / press
- Hover: +8% brightness on buttons; `rgba(255,255,255,0.06)` tint on list rows.
- Press: scale `.98` + 5% dim, no shadow change.
- Links: `text-decoration: underline` + `#91A1FF` on dark surfaces.

### Borders / shadows
- Borders default to `1px solid rgba(255,255,255,.06–.10)` on cards; `1px dashed #5A606D` on upload drop zones.
- Shadows: mostly soft and low-opacity — `0 1px 2px rgba(0,0,0,.25)` and `0 12px 32px rgba(0,0,0,.45)`. A glow variant `0 12px 40px rgba(105,70,255,.25)` appears under hero cards / model-picker highlights.
- Inner gloss highlight `inset 0 1px 1px rgba(1,255,179,.25)` appears on the decorative "star" accents in marketing frames.

### Transparency / blur
- Toolbars and floating panels over imagery use `rgba(33,35,39,.8)` + a backdrop-blur of 10–20px.
- Modal backdrops use `rgba(0,0,0,.6)`.
- Chips over imagery use a capsule with `rgba(0,0,0,.55)` + 2px blur (never a solid fill).

### Corner radii
- `3px` for chips, `6px` for inputs & compact buttons, `9px` for the default card/CTA (most common in figma), `12–16px` for larger cards, `24px` for hero / featured cards, and pill (`999px`) for filter chips and status dots.

### Card anatomy
- Dark card: `background: #1E202A`, `border-radius: 9px`, no border (shadow only), 10–16px padding.
- Imagery card: 9–16px rounded photo, title overlays are placed over the bottom-of-image protection gradient, not in a caption strip.
- "Selected option" card: solid plum-violet fill `#412C85` (see magic-editor model picker).

### Layout rules
- Fixed: top bar 60–72px, left nav 60px, floating "+" FAB on mobile.
- Content area uses a centered max-width column on marketing (~1200px); the product view is edge-to-edge.
- The right side is often a **flexible gallery with waterfall layout** (see `components/waterfall.vue`).

---

## ICONOGRAPHY

PromeAI's icon system is **raster-first**. The codebase ships a large set of **PNG icons** in `assets/new_icon/`, `assets/mob_icon/`, `assets/image/*` — typically **18–24 px monochrome glyphs** on transparent backgrounds, with a second "active" (`_a.png`) variant for selected/hover state (e.g. `like.png` / `like_a.png`, `open.png` / `open_a.png`, `collect.png` / `collect_a.png`). We've copied the representative set into `assets/icons/`.

- There is **no icon font**. No `icomoon`, no Font Awesome, no Material icon font.
- **SVGs do appear** for vector-precise marks: the P-hex logo, product watermark, architecture/commerce category marks (`architecture.svg`, `commerce.svg`). Inline SVG from figma is used for playful accents (decorative "star" glyphs in marketing frames).
- Vuetify 2 is installed; when a mono Material glyph is needed (search, close, arrow, chevron, dots, plus) the product relies on `mdi-*` via Vuetify's MDI plugin. For convenience, `ui_kits/` links the **Lucide** CDN as a closest visual match (same 2px stroke, rounded caps).
- **Emoji are not used** in product UI. **Unicode** `×`, `+`, `/` appear as typographic glyphs inside buttons/counters.
- Socials ship as a two-state PNG pair (`twitter.png` / `twitter_on.png`, etc.) in `/static`.

### What's in `assets/icons/`
`download`, `edit`, `like` + `_a`, `dislike` + `_a`, `follow`, `unfollow`, `content_replace`, `similar`, `language`, `open` + `_a`, `asset`, `assets_add`, `assets_remove`, `other`, `coin`, `coins`, `collect` + `_a`.

### Substitution policy
For any glyph not in `assets/icons/`, use **Lucide** via CDN (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`). Flag the substitution in component comments.

---

## Caveats

- **Fonts:** PromeAI's product fonts include proprietary Chinese display faces — `Alimama ShuHeiTi Bold`, `eryaxindahei`, `DingTalk JinBuTi`, `Alibaba PuHuiTi 3.0`, and paid faces like `Anton` / `Outfit`. We've **substituted the Latin faces to Google Fonts** (Poppins, Inter, Outfit, Anton, Sansita One, Luckiest Guy, Paytone One, Noto Sans SC). Please supply the TTF/WOFF2 files for the CN display faces so we can self-host them under `fonts/`.
- **Figma is pseudocode.** Layout/spacing was derived from a reconstruction; it matches but may be off by ±1 px in places. Prefer the codebase values where they conflict.
- **Iconography completeness** — only a representative set was copied. If you need the full set, we can mirror more icons from `promeai-web/assets/new_icon/*` and `promeai-web/assets/image/*` on request.

---

## Using this system

See `SKILL.md` — drop this folder into a Claude Code skill directory or reference the CSS + assets directly.
