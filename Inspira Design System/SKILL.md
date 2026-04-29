---
name: inspira-design
description: Use this skill to generate well-branded interfaces and assets for Inspira, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick-reference when designing for Inspira

- **Dark-first, always.** Surfaces step `#000 → #1E202A → #2C2D37 → #353643`. There is no light mode.
- **Accent = blue→violet gradient** (`#4E9CFF → #A242FF`). Use on CTAs, brand logotype, and progress only — never as a large surface.
- **Poppins 400 / 600 / 700**, one family. Product body 14px / line-height 1.4.
- **Radii ladder**: 6 / 9 / 12 / 15 / 20. Buttons are 9px, panels 12px, toasts 15px.
- **Flat** — one tiny shadow on floating nav arrows, nothing else. Borders (1px) do the separation.
- **Copy is short, direct, Title Case buttons / Sentence case descriptions.** Emoji allowed only as ✨ ✅ 🎉, and only where the product itself uses them.
- **Icons**: use Lucide via CDN as a stand-in for the product iconfont — match 1.5px stroke, 24px container. Flag the substitution.

## Files in this skill

- `README.md` — full system narrative (content + visual + iconography).
- `colors_and_type.css` — drop-in CSS with every token + base semantic styles.
- `fonts/` — Poppins 400 / 600 / 700 TTFs.
- `assets/` — logos, brand cursor, loader, brand PNGs.
- `preview/` — reference cards that power the Design System tab.
- `ui_kits/canvas-app/` — click-thru JSX recreation of the canvas+chat workspace. Lift components from here rather than inventing new ones.
