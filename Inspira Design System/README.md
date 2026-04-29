# Inspira Design System

Inspira is an **AI creative canvas** — a desktop-class web app that pairs an infinite Excalidraw-style canvas with an LLM chat that can generate, edit, and arrange images & video directly on the canvas. The experience is aimed at designers, illustrators, and content creators who want to go from prompt → composition → finished asset in one surface.

This design system captures Inspira's visual language so you can build new flows, marketing pages, upsells, and internal tools that feel like part of the product.

---

## Sources used to build this system

| Source | Path / link | What it gave us |
|---|---|---|
| Figma file | **Prome AI-11～12月设计稿.fig** (mounted VFS) | Toast, chat-history, sidebar, canvas surfaces, and gradient accents. The user focused us on `/chat-history`, `/toast`, `/page3`, `/page6`, `/page9`, `/page10`. |
| Codebase | `Inspira_fronted/promeai-inspira-web` (local mount, read-only) | Authoritative color tokens (`src/assets/style/index.css`), typography (`font.css`), icon sprite, locale copy (`src/i18n/locales/en/`), component source of truth. |
| Fonts | `uploads/Poppins-Regular.ttf`, `uploads/Poppins-SemiBold.ttf`, `uploads/Poppins-Bold.ttf` | Poppins 400 / 600 / 700 — the one type voice. |

> **Note** — the product is internally still referenced as *Prome AI / Jaaz* in some of the Figma pages and locale copy. The codebase and product name is **Inspira** (package: `promeai-inspira-web`). We treat "Inspira" as canonical everywhere in this system. Greeting strings like *"Hello, Jaaz!"* are legacy and will be rewritten to *"Hello, Inspira!"* in our examples.

---

## Index

Files you'll find at the root of this system:

```
├── README.md                    ← you are here
├── SKILL.md                     ← agent-skill entry-point
├── colors_and_type.css          ← tokens + base semantic CSS
├── fonts/                       ← Poppins 400/600/700
├── assets/                      ← logos, cursor, brand PNGs, illustrations
├── preview/                     ← design-system preview cards (registered)
└── ui_kits/
    └── canvas-app/              ← Inspira's canvas + chat app
        ├── README.md
        ├── index.html           ← click-thru prototype
        └── *.jsx                ← Sidebar, Header, Composer, Chat, Toast…
```

No slide deck was attached, so the `slides/` folder is not created.

---

## Products represented

Inspira ships as a **single product**: the web app at `app.inspira` (desktop-first). Within that app there are three connected surfaces we recreate in the UI kit:

1. **Home** — "Hello, Inspira!" greeting, grid of canvas projects. Simple entry point.
2. **Canvas + Chat workspace** — the core product. A three-pane layout:
   - Left: collapsible **Chat history** sidebar
   - Center: **Excalidraw canvas**
   - Right: **Chat / composer** panel with model selector, prompt textarea, image references
3. **Toasts, dialogs, dropdowns** — the shared notification & menu language.

---

## CONTENT FUNDAMENTALS

Copy in Inspira is **short, instructional, and slightly warm**. It's a tool that happens to be fun — not a hype machine.

### Voice

- **Second person, direct.** `"Ready to turn your ideas into art?"`, `"Your credits are depleted. Please recharge to continue."` The user is addressed as *you*; the product rarely refers to itself as *we*.
- **Imperative CTA verbs.** `Save`, `Cancel`, `Delete`, `Edit`, `Create`, `Submit`, `Retry`, `Install Update`, `Recharge`. No "Let's save this" fluff.
- **Warm greeting moment once, then it gets out of the way.** The only exclamation on home is `"Hello, Jaaz!"` / `"Ready to turn your ideas into art?"`. Everywhere else is flat: `"Model"`, `"Image"`, `"Video"`, `"Text"`, `"Balance"`, `"Recharge"`.
- **Emojis — sparingly and functionally.** Only two appear in the product copy:
  - `✨` on `"✨ Magic Generate"` (magic-generation affordance)
  - `✅` on `"Saved ✅"` (success confirmation on canvas save)
  - `🎉` on the update dialog title (`"🎉 New Version Available"`)

  Never use emoji as a bullet or decoration. If you feel the urge, you're probably adding slop.

### Casing

- **Title Case** on buttons and titles: `"New Chat"`, `"Share as Template"`, `"Model Selector"`, `"All Projects"`, `"My Account"`.
- **Sentence case** on helper text, descriptions, toasts: `"Your credits are depleted. Please recharge to continue."`, `"No images found in canvas"`, `"Enter your design requirements"`.
- **UPPERCASE** only in the credits-log (back-end labels): `VIDEO_GENERATION`, `PHOTO_GENERATION`, `MONTH_RELOAD`. Do not surface this to users.

### Tone examples (lifted from the codebase)

| Context | Copy |
|---|---|
| Home hero | `Hello, Inspira! / Ready to turn your ideas into art?` |
| Empty canvas list | `No canvases yet` |
| New canvas name | `Untitled` |
| Composer placeholder | `Enter your design requirements` |
| Model guard | `Please select a text model! Go to Settings to set your API keys if you haven't done so.` |
| Out-of-credits | `Insufficient Balance / Your credits are depleted. Please recharge to continue.` |
| Save success | `Saved ✅` |
| Delete confirm | `Are you sure you want to delete this Canvas? This action cannot be undone.` |
| Canvas popbar | `Add to chat` · `✨ Magic Generate` |

The vibe: **matter-of-fact, designer-to-designer, mildly cheerful**. No marketing fluff, no AI-breathless adjectives ("revolutionary", "powerful"), no ALL CAPS shouting, no hedging ("maybe you'd like to…"). When something fails, say what failed and what to do next.

---

## VISUAL FOUNDATIONS

### Palette

Inspira is **dark-first**. The entire product lives against near-black surfaces with three layered charcoals (`#1E202A`, `#2C2D37`, `#353643`). There is no light mode in the codebase; a light-mode theme block exists in `index.css` but is overridden at load. Design in dark.

- **Surfaces** step darkest (outer chrome `#000000`) → panel (`#1E202A`) → raised (`#2C2D37`) → menu/dropdown (`#353643`). Hover lifts to `#3E3F4E`.
- **Borders** are `#292C37` (panel hairline) or `#48495C` (input outline). They're there to separate, not decorate.
- **Text** is white for primary, `#C9CCD5` for secondary, `#A8ADC1` for labels, `#B6B9CA` for tips.
- **Accent = blue→violet gradient** (`#4E9CFF → #A242FF`). This gradient is Inspira's one bold move. It appears on the primary CTA, the brand logotype wash, and nowhere else. If a second gradient is needed it's the slightly brighter `#348DFF → #9B35FF` variant. **Never apply the gradient to large surface areas** — it's for 1-line CTAs, thin logo marks, and progress strokes.
- **Status colors are also gradients** (from `/toast/Container`): success is lime `#77ED21 → #C3FF97`, error is red-orange `#FF4343 → #FD782F`. These are used on icons only, never as fills behind copy.
- **Coin / credit amber** `#FFAD2B` and **upgrade lime** `#D4F462` are spot accents for paid-surface copy.

### Type

- **Poppins**, one family, three weights (400 / 600 / 700). No italics.
- Product text is compact: body 14px, labels/descriptions 12px, tips 11px. Titles are 14–20px. Display sizes (32px / 44px) are reserved for the Home hero and upsell dialogs.
- Default line-height is `1.4` (matches Figma exactly), not the web default 1.5. This tightens the feel.
- Letter-spacing stays at 0 except on the Home display heading (`-0.02em`).
- All-caps text is forbidden in UI. Title Case carries headings.

### Spacing

- **4px baseline**, with `10 / 12 / 15 / 20` dominating in the Figma (10px padding inside toasts, 15px padding on toast container, 12px panel radius). Avoid 16px — the design leans on 10/12/15 instead.

### Corner radii

Inspira's radii ladder is distinctive — slightly smaller than Tailwind defaults:

- `6px` — thumbnails, small chips
- `9px` — **buttons** (see `--custom-primary-button-radius` in source)
- `12px` — panels, cards, composer
- `15px` — **toasts**, prominent sheets
- `20px` — hero surfaces (upsell)

Never use a true pill radius on a rectangle; pills are only used for small tag chips.

### Backgrounds & imagery

- Flat dark surfaces by default. **No full-bleed hero photography, no patterns, no textures.**
- The one decorative backdrop is `coin_detail_bg.jpg` (a subtle dark gradient used behind the wallet sheet). Everything else is a solid `#000` or `#1E202A`.
- Canvas content (Excalidraw) lives on pure `#000` — the drawings themselves become the decoration.
- No hand-drawn illustrations, no stock imagery. When a surface needs "art", we show generated thumbnails from the user's own canvas.

### Borders

- `1px` strokes, always. No `2px` borders anywhere.
- The toast "raised" variant gets `#3E3F4E` strokes, standard panels get `#292C37`, inputs get `#48495C`.
- Borders wrap every panel — Inspira doesn't use shadow-only separation.

### Shadows

- **Basically flat.** Only one elevation exists in the codebase: `0 0 5px rgba(0,0,0,0.15)` on floating nav arrows.
- For overlays we use a `rgba(33,33,33,0.72)` scrim.
- Do not invent drop-shadows on cards, buttons, or the sidebar.

### Transparency & blur

- Used sparingly. The right-side collapse arrow on the canvas is `rgba(44,57,76,0.6)` with `backdrop-filter: blur(10px)` + a faint stroke — this is the **one** "glass" moment.
- Tooltips / tips use a translucent `rgba(30,32,42,0.70)` over whatever is behind.
- Don't blur large surfaces.

### Animation & motion

- **Short, mechanical, opacity-led.** Durations 120 / 180 / 280 ms. Ease-out for entries, standard curve for state changes.
- No bounces, no spring overshoot, no 3D transforms.
- The only "playful" motion is the `shiny-text.css` sweep used on the generate-gradient button text, and the lightweight loader (`loading.svg`) in chat-message streaming.

### Hover / press

- **Hover** = raise the surface one step (`#1E202A` → `#3E3F4E`) or bump opacity to `0.9` for icon buttons. Text doesn't change color on hover.
- **Press** = no scale, no ripple — just drop to `#2C2D37` or `opacity: 0.8`.
- **Disabled** = `opacity: 0.4`, preserve color.
- Focus ring is `2px` of `--brand-blue` at `40%` opacity, offset `2px`.

### Cards

- `#2C2D37` background · `1px #292C37` border · `12px` radius · no shadow · `15px` internal padding.
- Card titles are 14px / 700. Meta inside cards is 12px / 400 / `#C9CCD5`.
- When a card represents a canvas project, the top is a `16:9` preview frame (pure `#000` if empty) with the title below it — no gradient washes, no overlays.

### Layout rules

- Fixed **60px** header across the whole app, `#000` with a `1px #242525` hairline bottom.
- Left sidebar is **290px** wide collapsible; the chat-history panel at `/chat-history` occupies the left 300px of a 1440 design grid.
- Composer / right chat panel: flexible width, min `400px`.
- Dialogs center at `560px` max on desktop.

### Iconography

See the **ICONOGRAPHY** section below.

---

## ICONOGRAPHY

Inspira uses **three complementary icon sources**. In precedence order:

1. **The codebase's own generated icon set** (`src/components/icon/`) — auto-generated React components from SVGs in the same folder. These cover product-specific icons (logo mark, canvas tool icons, brand cursor).
2. **An iconfont sprite** generated by `src/scripts/font-builder/` and referenced through the `FontIcon` component. This is the main set used across chat, header, and composer (a designer's custom outline set — roughly 1.5px stroke, 20–24px container, rounded caps).
3. **Lucide** (icon library) is a visually compatible fallback we use in this system when we can't lift the exact sprite. It matches Inspira's stroke weight and proportions closely enough to stand in on cards and UI kits.

### Rules

- **Container 24×24, glyph 20×20 — always.** Icons align to a 24px grid; padding is visual.
- **Stroke-based, 1.5px.** Minor variations exist for dense icons.
- **Solid fills** are reserved for status icons (success check, error `!`), which use the lime/red gradients described above.
- **No color on line icons** — they inherit `currentColor`, which is usually `#FFFFFF` (primary), `#A8ADC1` (secondary), or `#6C6F82` (disabled).
- **Emoji** is *not* used for icons. The three allowed emoji (✨ / ✅ / 🎉) are text decoration only.
- **Unicode characters** are not used as icons.

### What we copied into `assets/`

- `inspira-logo.png`, `inspira-favicon.png` — primary logotype + favicon.
- `btn-logo.png` — the small brand mark used on the primary CTA.
- `member_icon.png` — membership badge (used in the header avatar row).
- `inspira-cursor.svg` — the custom canvas cursor.
- `loading.svg` — the brand loader used in chat-message streaming.
- `agent-generate.png`, `agent-upload-normal.png`, `agent-upload-error.png` — chat-composer affordances.
- `empty.png` — the empty-state illustration (a simple outline).
- `coin_detail_bg.jpg` — the one decorative background, used behind the wallet sheet.

If you need generic icons (chevrons, ellipses, search, plus, x, settings, history, image, video, arrow-up, sparkle), use Lucide via CDN at `https://unpkg.com/lucide-static@latest/icons/<name>.svg` — they pass as native in the product. **Flag the substitution** in your final artifact so the team can later replace with the real sprite glyph.

---

## Caveats & known substitutions

- **Lucide stands in for the in-product iconfont sprite** on UI kit surfaces. Replace with the real `FontIcon` glyphs when available.
- **Figma file is pseudocode** — pixel values like toast padding and radius are trustworthy; deep nested icon SVGs are approximations.
- **No decks** were attached, so no slide templates were generated.
- **No explicit light-mode theme** is authored. A `.dark` class exists in code but is a no-op: treat Inspira as a dark-only product.
