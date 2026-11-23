## Modern print culture meets contemporary Celtic editorial design

- Editorial newspaper layout combined with the texture of independent print publishing. Think contemporary Irish arts magazine, underground culture newspaper and handmade print studio.
- Bold typography, unusual colour combinations and simplified illustrations.
- The Celtic influence should come through in the illustration language, decorative motifs and typography rather than making the website look traditionally Celtic or folkloric.

Effect - Application
Paper grain - Subtle background texture
Ink overlap - Illustrations and coloured panels
Misregistration - Slightly offset colour layers
Halftone - Photographs and portraits
Rough edges - Illustrations and decorative shapes
Ink noise - Large colour areas

## Code

- use pnpm to run script commands
- Stack: Vite + React (React Router), not Next.js — do not suggest Next.js-specific APIs (`next/image`, `next/router`, App Router conventions, etc.).
- TypeScript: strict — no `any`, no unused variables.
- Imports: use `@/` alias for `src/`
- File naming: All newly created files must use lowercase kebab-case (e.g., user-profile.tsx, use-trip-data.ts, api-client.ts).
- Tailwind: use the default theme scale only — no arbitrary values (`text-[12.5px]`, `w-[118px]`, `h-[80vh]`, `z-[1]`, `min-[1600px]:`) and no half steps (`py-2.5`, `gap-1.5`, `gap-y-0.5`). Round to the nearest scale step (`text-xs`, `w-30`, `h-4/5`, `z-1`, `2xl:`); don't match a mockup pixel-for-pixel. No `!` overrides — `cn()` already merges over component defaults.

## Planning, design and spec docs

- deployed to Netlify
- Avoid Overly Defensive Code. Validate at API/external boundaries; inside the system assume typed data is correct. Use `assert` for impossible states, not redundant `isinstance`/`typeof`/null checks. Fix data at the source instead of guarding every usage.
- This app is not used by millions — don't add backwards-compatibility layers, fallbacks, or defensive mitigations for hypothetical scale or edge cases. When changing a field, function, or schema, change it everywhere directly rather than supporting both old and new shapes.
- Avoid storing state that can be derived from other state — it can drift and become out of sync over time. Compute it instead.
- Avoid multi-line comments explaining a variable name or a single statement. Well-chosen names and design should make these unnecessary — the code is self-documenting.
- Code should explain itself through clear, self-explanatory function and variable names. Never use large comment blocks to describe what code does line by line. Rename functions, extract smaller functions, or restructure the code when intent is unclear. Comments are only for non-obvious reasoning, business rules, or constraints that cannot be expressed clearly through code.
