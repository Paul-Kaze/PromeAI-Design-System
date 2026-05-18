# PromeAI Landing Page UI Kit

## Overview
High-fidelity recreation of the PromeAI Character Sheet Generator landing page.
Source: `SEO Landing Page.fig` — frame `character sheet genertor` (node 1:10).

## Components
| File | Description |
|---|---|
| `index.html` | Interactive prototype — full landing page + generate flow |
| `Header.jsx` | Fixed nav bar with PromeAI brand, tool links, upgrade CTA |
| `HeroSection.jsx` | Hero with decorative blobs, upload dropzone, template picker, CTA |
| `StepsSection.jsx` | 3-step how-to cards with gradient icon containers |
| `FeaturesSection.jsx` | Alternating image+text feature rows with "Try for free" CTAs |
| `FAQSection.jsx` | Animated accordion FAQ items |
| `WorkflowCards.jsx` | 3-column workflow card grid |
| `CTASection.jsx` | Full-bleed gradient CTA banner |

## Interactive States
- Hero "Generate Character Sheet" button → loading spinner (2s) → result screen
- FAQ accordion expands/collapses on click
- Upload dropzone responds to drag-over

## Design Notes
- Page width: 1440px
- Font: Poppins (Google Fonts)
- Primary accent: blue→purple gradient (`rgb(52,141,255)` → `rgb(155,53,255)`)
- All tokens defined in `../../colors_and_type.css`
