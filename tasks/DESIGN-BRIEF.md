# DESIGN BRIEF: "The Savage Gazette"

## 1. The idea

The site is the front page of a printed newspaper, a loud one. Think a broadsheet's structure (masthead, folio line, columns, rules, datelines, page numbers) driven by the poster energy of the Popeye cover: a fat, bubbly masthead, giant cutout product shots breaking out of their columns, outlined feature titles, tiny page-number badges, and vertical sidebars.

The company is a print shop, so the metaphor is literal: **the site should look like something that came off a press**. Ink on paper, a spot colour, slight misregistration, grain. Not a "modern SaaS site with a newspaper font".

One sentence test: _if you screenshot any page and squint, it should read as a newspaper page before it reads as a website._

### Reference images (local only)

In `tasks/` (gitignored, so copy them to `docs/references/` if other contributors need them):

| File                           | Take from it                                                                                                                                                                                                                                                                                                         | Do not take                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `popeye-poster.jpg`            | Gigantic rounded black masthead. Outlined inline feature title. Cutout illustrations overlapping text. Orange page-number badges (`P.58`). Vertical rules and vertical text columns. Small captioned object clusters. Cream paper.                                                                                   | Japanese text. Use **English, with some Irish** (section 5).                         |
| `origen-magazine.jpg`          | Broadsheet structure: masthead flanked by price and edition boxes, a three-up teaser strip under the masthead with hairline rules, one lead story with a huge image, then a dense grid of text and image stories with a 1px column rule. Serif headlines, small serif body, a single red accent for page references. | Its quietness. We are louder.                                                        |
| `palmetto-studios-example.jpg` | The web translation: ticker strip across the top, date and page-number line, boxed nav like a table of contents, mixed-size stories, a "menu" ad box, a sticker strip before the footer, bordered buttons.                                                                                                           | The narrow centred column with a wallpaper pattern behind it. We use the full width. |

---

## 2. Principles

1. **Type is the hero.** Every screen has one oversized, confident typographic moment. Headlines are black weight and tightly tracked.
2. **Structure is visible.** Rules, borders, column lines, folio text and page numbers are part of the design, not hidden decoration. Keep them crisp: 1px hairlines, 3px bars and double rules.
3. **Break the grid on purpose.** The grid is strict so that a cutout photo, a rotated badge or a headline that overlaps its neighbour reads as deliberate. Maximum two grid-breakers per viewport.
4. **Ink, not UI.** No soft shadows, no gradients, no glass, no rounded cards. Flat colour, hard edges, grain.
5. **Real content only.** Headlines and copy come from the existing site (see section 8). Do not invent testimonials, numbers, awards or prices. No lorem ipsum.
6. **Loud and legible.** Bold does not excuse unreadable. Body text stays comfortable at 16px+ on a phone.

---

## 3. Design tokens

Define everything as design tokens in the `@theme` block of `src/styles/index.css` (Tailwind v4 exposes each `--color-*` / `--font-*` token as both a CSS variable and a utility such as `bg-paper`, `text-ink`, `font-display`). No hard-coded colours or font stacks in components.

### Colour

Four colours plus paper. This is a two-spot-colour print job.

| Token           | Value     | Use                                                                                                                                                                                 |
| --------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--paper`       | `#F2EAD0` | Page background. Warm cream, never pure white.                                                                                                                                      |
| `--paper-shade` | `#E8DEBF` | Alternate story backgrounds, pressed states.                                                                                                                                        |
| `--ink`         | `#141210` | All text, rules, borders, masthead. Never `#000`.                                                                                                                                   |
| `--yellow`      | `#FFDD17` | Brand colour. Highlighter bars behind words, badges, the primary button, the ticker. **Never as text colour on paper** (fails contrast).                                            |
| `--tomato`      | `#E4472B` | Second spot colour. Page references, "NEW"/"Available" flags, the misregistration offset on headlines, the stamp. Text only at 24px+ bold, or paper-coloured text on a tomato fill. |

- Colours may appear flat, or as a `mix-blend-mode: multiply` overprint on a photo.
- No dark mode. A newspaper is paper. (An inverted "night edition" can be a later enhancement and is out of scope.)
- Legacy tokens still in the `@theme` block of `src/styles/index.css` (`yellow-dark #ff9900`, `charcoal`, `charcoal-dark`, `silver`, `link`/`link-hover` `#008cff`, `required`, `warning`, `ink #212529`) exist only to keep unconverted pages looking as they do today. Remove each as its page is converted.

### Typography

Self-host with `@fontsource` packages (no third-party font request). Five families, each with **one job**:

| Role                   | Family                                      | Notes                                                                                                                                                 |
| ---------------------- | ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| Masthead and splash    | **Chango**                                  | The Popeye bubble wordmark. Used only for "THAT'S SAVAGE" and one splash word per page. If it does not look right at small sizes, never use it there. |
| Outlined feature title | **Bungee Inline**                           | The "POPEYE COOKING CLUB" treatment. All caps, one per page, stacked over two or three lines, with the outline in `--ink` on `--paper`.               |
| Headlines and decks    | **Playfair Display** 700 / 900 / 900 italic | Story headlines, pull quotes, decks. Italic for datelines and bylines.                                                                                |
| Body                   | **Newsreader** (variable, optical size)     | Story copy at 16-18px / 1.5. Real italics and small caps.                                                                                             |
| Labels                 | **Oswald** 500-700                          | Nav, kickers ("PRINTS DESK"), badges, buttons, captions. Uppercase, `letter-spacing: .08em`.                                                          |

Rules:

- Fluid type with `clamp()`. Masthead: `clamp(3.5rem, 15vw, 14rem)`, line-height `.85`, `letter-spacing: -.02em`. Story headlines: `clamp(2rem, 5vw, 4.5rem)`, line-height `.95`.
- Use `text-wrap: balance` on headlines and `text-wrap: pretty` on body.
- Long body copy: `column-count` (2 at tablet, 3 at desktop where the story is long enough), `column-rule: 1px solid var(--ink)`, `hyphens: auto` with `lang` set correctly, and a drop cap on the first paragraph of a lead story only.
- The misregistration effect: on 1-2 big headlines, add `text-shadow: 3px 3px 0 var(--tomato)` (hard offset, zero blur). Never on body or labels.
- Highlighter: wrap one key phrase per story in a `--yellow` background bar (`background: linear-gradient(transparent 55%, var(--yellow) 55%)`).

### Spacing, borders, shape

- 8px base. Page gutter `clamp(16px, 3vw, 40px)`. Max sheet width 1360px, centred.
- Radius: **0 everywhere**, except badges and pills (`999px`) and the oval page-number badge, which are a direct Popeye borrow.
- Borders: `1px` hairline between columns, `3px` under section kickers, a **double rule** (`3px` + `1px` with 3px gap) under the masthead and above the footer.
- Shadows: none. Depth comes from overlap and hard offset, never blur.
- Paper grain: one fixed full-viewport overlay at about 6% opacity using a small tiled SVG `feTurbulence` noise (data URI, under 2KB). `pointer-events: none`.
- Photo treatment: images sit on paper with `mix-blend-mode: multiply`. Optional `filter: contrast(1.05) saturate(.9)` so they feel printed. Photos with plain backgrounds should be cut out (see section 7).

---

## 4. Page architecture

Desktop is a 12-column broadsheet grid. Every page shares the same shell.

### The shell (every page)

```
┌──────────────────────────────────────────────────────────────┐
│ TICKER:  Fáilte! ★ Hello! ★ Dia duit! ★ No minimum order ★…  │ yellow bar, ink text
├──────────────────────────────────────────────────────────────┤
│ Dé Domhnaigh, 22 Samhain 2026 · Sunday 22 November │ P. 1    │ folio line (Oswald, small)
├──────────────────────────────────────────────────────────────┤
│  ┌ price box ┐     T H A T ' S   S A V A G E     ┌ edition ┐ │ MASTHEAD (Chango, full width)
│  │ Printed to │                                  │ Eagrán  │ │
│  │ order      │                                  │ No. 001 │ │
│  └────────────┘                                  └─────────┘ │
│  Custom garment printing & logo design · Déanta in Éirinn    │ tagline row
╞══════════════════════════════════════════════════════════════╡ double rule
│ [P.1 HOME · Baile] [P.2 PRINTS · Priontáil] [P.3 ABOUT · Fúinn] [P.4 CONTACT · Teagmháil] │ nav = table of contents
╞══════════════════════════════════════════════════════════════╡
│                         PAGE CONTENT                         │
╞══════════════════════════════════════════════════════════════╡ double rule
│ COLOPHON (footer)                                            │
└──────────────────────────────────────────────────────────────┘
```

- **Ticker**: CSS-only marquee, `animation-play-state: paused` on hover/focus, static (no animation, first phrase only) under `prefers-reduced-motion`. Content rotates English and Irish greetings plus real selling points ("No minimum order", "Irish owned").
- **Folio line**: today's date in English and Irish, computed in a small helper (glossary in section 5). The page badge shows the current route's page number.
- **Masthead**: live text, not `/Name.png`. "THAT'S SAVAGE" fills the sheet width on desktop. Under 640px it stacks to two lines (`THAT'S` / `SAVAGE`) at the same visual weight. The existing logo head (`/logo-head.png`) can sit as a small "ear" next to the edition box, like the leaf by the POPEYE ®.
- **Navigation = table of contents.** Four boxed cells with a page number badge (oval, `--yellow` fill, ink border, e.g. `P.2`), the English label in Oswald, and the Irish label in Newsreader italic beneath. Active page: inverted (ink fill, paper text). Keyboard focus: 3px `--tomato` outline, offset 2px.
  - On scroll, the masthead collapses to a slim sticky bar (small Chango wordmark + the nav). Pure CSS where possible (`position: sticky`), JS only for the collapse class.
  - Under 768px the nav becomes a 2x2 grid of the same cells under the masthead (no hamburger, since four items fit). Remove `MenuIcon`/`CloseIcon` usage if the menu becomes unused.
- **Colophon (footer)**: styled as a newspaper's imprint. Three columns: "Printed in Monaghan (Muineachán)" with the address, phone, email and WhatsApp; "Find us" with the three social links; "Notices" with the terms link and credit line. Keep existing contact data and links exactly as they are. A rotated `--tomato` stamp reads `DÉANTA IN ÉIRINN` / `MADE IN IRELAND`.

### Home (`/`)

Mirrors the Popeye cover. Reading order top to bottom:

1. **Lead story (the cover).** A big product cutout (best hoodie or tee shot, background removed) on the left overlaps the masthead's baseline and spills over the column rule, like the sandwich in the Popeye cover. On the right, one Bungee Inline outlined title (for example `NO MINIMUM / ORDER`), a Playfair 900 headline from the existing copy ("There are enough rules in life."), a one-line deck, a `--yellow` primary button (`Get a quote →`, links to `/contact-us`), and a rotated vertical sidebar strip (`writing-mode: vertical-rl`) carrying an Irish and English note. Page badges (`P.2`) point to the Prints desk.
2. **Three stories under the fold** (Origen's teaser strip). These are the existing "No Minimum Order", "Irish Owned" and "Highest Quality & Service" texts. **Do not render three equal boxes** (see `docs/structural-slop-patterns.md`, S2). Make them unequal: one wide with a drop cap and two-column body, two narrow with a 1px column rule between them, each with a kicker in Oswald, a Playfair headline and a tomato `P.x` page reference.
3. **The Picture Page (what we can do).** The 8 job photos from `cardArray.ts` laid out as a photo spread of different plate sizes (one 6-col, two 3-col, the rest 2-col), each with a numbered caption (`Fig. 3 — Hen & Stag Parties`). Fixed-ratio crops, hairline frames, slightly different rotations (max ±1.5°) for a pasted-in-proof feel. "View more" becomes a bordered button to `/prints`, labelled as a page reference.
4. **Print methods strip.** Popeye's labelled object cluster: small cutouts with all-caps captions for the two methods already described in About (`VINYL TRANSFER`, `DIRECT TO GARMENT`), plus a one-line spec each.
5. **Letters to the Editor ("Our happy customers").** The 5 customer photos as a staggered picture strip with captions from their alt text. Not a carousel (see S4).
6. **Ad box.** A bordered, rounded "menu"-style box (Palmetto's price list) that holds the real FAQ prices: `T-shirts from €20-25 · Jumpers & hoodies from €35`, and a pointer to ask for a quote. Use only the figures that already appear on the About page.

### Prints (`/prints`)

"The Picture Desk". A headline row, then the five categories (Parties, Fitness, Outerwear, Workwear, Miscellaneous) as five **sections with a rule, a kicker and a page badge**, each a different layout: a lead photo with caption, a masonry strip, a two-column list, and so on. The category bullet list becomes the section decks. Keep the existing `CollagePic` and `ModalView` behaviour (click to enlarge), but restyle the modal as a "full-page plate": paper background, ink border, caption in Playfair italic, `Esc` and focus trap intact. `ModalView` is now a native `<dialog>` opened with `showModal()` (via `hooks/use-modal-handler.hook.ts`), which provides `Esc`, the focus trap and the backdrop for free; keep it that way.

### About (`/about-us`)

A long-form feature story. Outlined title, byline-style dateline (`By That's Savage · Monaghan`), lead paragraph with drop cap, then multi-column body. FAQs become **"Ceisteanna Coitianta / Questions, answered"**: a Q&A column where each question is a Playfair bold run-in head. "The Nitty Gritty" is a sidebar box (ink border, `--paper-shade` fill) with the Vinyl vs DTG specs. Keep all existing copy.

### Contact (`/contact-us`)

"Fógraí Beaga / Classifieds: place an ad." The form is a bordered classified-ad coupon with a dashed cut line and a scissors glyph in the corner, sat next to the contact details as a standard classified listing. Fields keep their existing validation and submit logic; only the presentation changes. Success message: "Go raibh maith agat! Thanks for your message." Inputs: 2px ink border, 0 radius, paper background, labels in Oswald, error text in `--tomato` with an icon-free `!` badge.

### Terms (`/terms-and-conditions`)

"Notices and Small Print": single story, narrow measure (max 70ch), numbered clauses with run-in heads.

### 404 (`NotFound`)

Treat it as a "STOP PRESS" splash. Chango `404`, the Irish line `Níor aimsíodh an leathanach` and the English `Page not found. This one never made it to print.` and a button back to `/`.

---

## 5. Language: English first, Irish as seasoning

- **English is the language of the site.** Irish is used as flavour: roughly 10% of visible text, never carrying meaning on its own.
- Irish appears in: ticker greetings, the folio date, kickers, page-nav sublabels, section sublabels, form and 404 microcopy, the stamp, the footer sign-off. It does **not** appear in body copy, form labels, error messages that tell the user how to fix something, or aria-labels.
- Always pair with English (`Baile` under `Home`), or place the English immediately next to it. Mark Irish text with `lang="ga"` so screen readers and hyphenation behave.
- **Have a fluent speaker proof every Irish string before launch.** The glossary below is the approved starter set; do not invent new Irish phrases. If a new one is needed, add it to this table as `TO VERIFY` and flag it.

| English               | Irish                         |
| --------------------- | ----------------------------- |
| Welcome               | Fáilte                        |
| Hello                 | Dia duit                      |
| Cheers                | Sláinte                       |
| Goodbye               | Slán                          |
| Thank you             | Go raibh maith agat           |
| News                  | Nuacht                        |
| Lead story            | Príomhscéal                   |
| Edition               | Eagrán                        |
| Page                  | Leathanach                    |
| Home                  | Baile                         |
| Prints / Printing     | Priontáil                     |
| Design                | Dearadh                       |
| Clothes               | Éadaí                         |
| About us              | Fúinn                         |
| Contact               | Teagmháil                     |
| FAQs                  | Ceisteanna Coitianta          |
| Classifieds           | Fógraí Beaga                  |
| Letters to the Editor | Litreacha chuig an Eagarthóir |
| Made in Ireland       | Déanta in Éirinn              |
| Available now         | Ar fáil anois                 |
| Call us               | Cuir glaoch orainn            |
| Monaghan              | Muineachán                    |
| Page not found        | Níor aimsíodh an leathanach   |

Days: Dé Luain, Dé Máirt, Dé Céadaoin, Déardaoin, Dé hAoine, Dé Sathairn, Dé Domhnaigh.
Months: Eanáir, Feabhra, Márta, Aibreán, Bealtaine, Meitheamh, Iúil, Lúnasa, Meán Fómhair, Deireadh Fómhair, Samhain, Nollaig.

---

## 6. Voice

Headlines are short, declarative and a bit cheeky, in the way the existing copy already is ("We don't do min. orders, there are enough rules in life"). Write them like front-page splashes, not marketing taglines. Datelines and bylines are used as a joke the reader is in on (`MONAGHAN —`, `By the Savage desk`), not overdone.

Avoid: "Elevate", "Unleash", "Seamless", "Craft your…", "Your one-stop shop". See `docs/conceptual-slop-patterns.md` (C1, C2, C5, C6).

---

## 7. Imagery

- Existing photos stay. Re-crop to fixed ratios (3:2, 4:5, 1:1) and treat with multiply and light contrast.
- **Cutouts are the signature move.** Pick 4-6 of the strongest product photos (hoodie, jersey, tote, hat, tee, teddy) and produce transparent PNG/WebP cutouts under `src/assets/cutouts/`. Use them for the Home lead story, the print methods strip and section openers. Give them a 3px solid `--ink` hairline offset ("die-cut sticker" edge) via `filter: drop-shadow(0 0 0 var(--ink))` stacking or an SVG outline, with **no blur shadow**.
- Badges and stickers (page numbers, "NEW", the stamp) are inline SVG or CSS, in `--yellow`, `--tomato` and ink only.
- Icons: keep the existing social and contact icons in `src/components/Icons`, set to ink, 2px stroke, no fills beyond what they have now.
- Provide `width`/`height` and `loading="lazy"` on all below-the-fold images, `fetchpriority="high"` on the lead cutout. Serve WebP where the build allows.

---

## 8. Motion

Print is static, so motion is small and purposeful. Max three effects.

1. **Ticker** (above).
2. **Ink-in on load.** The masthead letters and lead headline step in with a short `clip-path` wipe or opacity stagger (under 600ms total).
3. **Cutout parallax.** The existing `react-scroll-parallax` provider can drive a subtle (max 40px) offset on Home cutouts only.

Everything is disabled or reduced under `prefers-reduced-motion: reduce`. Hover states are binary and sharp: invert colours, or a 3px hard offset shadow in `--ink` (`box-shadow: 3px 3px 0 var(--ink)`, zero blur).

---

## 9. Responsive behaviour

Mobile-first. Test at **360, 390, 768, 1024, 1440 and 1920** wide.

| Width    | Grid                   | Notes                                                                                                                                                                                                                                                      |
| -------- | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| < 640    | 1 column, 16px gutter  | Masthead on two lines. Nav is a 2x2 grid. Lead cutout sits above the headline and is allowed to bleed off the right edge. Vertical sidebar text becomes a horizontal tomato strip. Multi-column body falls back to one column with a rule between stories. |
| 640-1023 | 6 columns              | Stories pair up. Photo spread becomes 2 or 3 across. Body in 2 columns for long stories.                                                                                                                                                                   |
| ≥ 1024   | 12 columns             | Full broadsheet: masthead with side boxes, 3-up teaser strip, asymmetrical spreads, 3-column body.                                                                                                                                                         |
| ≥ 1536   | Sheet capped at 1360px | Paper continues full bleed, centred sheet inside, never stretched text.                                                                                                                                                                                    |

Rules:

- No horizontal scroll at any width. Vertical text and rotated elements must be contained.
- Tap targets 44px minimum. Body 16px minimum.
- Column rules vanish when a layout collapses to one column; use horizontal story rules instead.
- Use `clamp()` and CSS grid (`grid-template-columns`, `grid-column: span`) instead of breakpoint-heavy overrides. Container queries are welcome for story cards.

---

## 10. Accessibility and performance

- Contrast: ink on paper is about 15:1. Ink on yellow is about 14:1. `--tomato` on paper is about 3.9:1, so tomato text only at large bold sizes (24px+).
- Semantic HTML: one `h1` per page (the lead headline), `header`, `nav`, `main`, `article` for stories, `footer`. Decorative duplicates (ticker repeat, stamp) are `aria-hidden`.
- Visible focus on every interactive element. The modal traps focus and closes on `Esc`.
- Rotations and vertical text must not reduce readability of important information (contact details, prices stay horizontal).
- Budget: LCP under 2.5s on mobile 4G. Fonts: subset to Latin and Latin-Extended (Irish needs the fada: á é í ó ú), `font-display: swap`. Preload the Chango and Playfair files used above the fold.

---

## 11. Do and don't

Do:

- Commit to the scale. One giant thing, many small things.
- Use rules, kickers, page numbers, datelines and captions everywhere. They make it a newspaper.
- Let one element per section overlap or break out.
- Keep colour flat and limited.

Don't:

- Gradients, blurred shadows, glassmorphism, blobs (`docs/visual-slop-patterns.md` V1, V3, V6-V9).
- Uniform rounded cards (V4), equal three-box grids (S2), carousels of testimonials (S4), uniform-everything pages (S6).
- Centered SaaS hero with a two-CTA row (S1).
- Bootstrap-style class names (`row`, `col-*`, `card`, `btn`, `form-control`) in converted pages. Use CSS grid and Tailwind utilities. Bootstrap is already removed; the `.container` and `.card` rules in `src/styles/index.css` are leftovers that mimic it for unconverted pages, so delete them once the last page stops using them.
- Yellow text on paper, tomato body text, pure black or pure white.
- More than five font families, or fonts outside their assigned role.
- Fabricated content, fake press quotes, fake numbers.

---

## 12. Acceptance checklist

- [ ] Any page, squinted at, reads as a newspaper.
- [ ] Masthead, ticker, folio line, TOC nav and colophon on every page.
- [ ] Home has: cutout lead story, unequal three-story strip, picture page, print methods strip, customer strip, ad box.
- [ ] Only the five approved fonts, each in its assigned role; Irish fadas render correctly.
- [ ] Only the defined colour tokens; no gradients, blur shadows or rounded cards.
- [ ] Irish text is under about 10% of visible copy, always paired with English, tagged `lang="ga"`, and listed in the glossary.
- [ ] All Irish strings checked by a fluent speaker.
- [ ] No horizontal scroll at 360-1920px; tap targets 44px; body 16px+.
- [ ] `prefers-reduced-motion` respected; keyboard nav and the modal work.
- [ ] Existing content, form behaviour, routes and contact details unchanged.
- [ ] `npm run build` passes.
