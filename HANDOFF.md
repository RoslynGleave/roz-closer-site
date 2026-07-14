# Roz Gleave — High-Ticket Closer Site — Handoff Brief

Plain HTML/CSS/JS site, no build step, no framework. Files: `index.html`,
`styles.css`, `script.js`, plus an `images/` folder (real photos already
in your project — this package adds `roz-portrait-flipped.jpg`).

## Design system (already built — reference, don't rebuild)

**Palette** (CSS custom properties at the top of `styles.css`):
- `--black` (#0A0A0A), `--white`, `--dusty-blue` (#8AA6B4), `--pop` (crimson
  pink-red, #FF3B5C)
- `--pop` is reserved almost entirely for hover/focus states and small
  decorative punctuation (the "+" in stats, dashes, a quote mark, checkmark
  bullets). It is not a resting-state fill color. Keep this rule when
  making further changes.

**Fonts** — both current values are PLACEHOLDERS for paid, licensed fonts
not yet purchased:
- `--font-headline` → Cormorant (placeholder for **Coterie**)
- `--font-accent` → Oswald (placeholder for **PP Gatwick** / Pangram
  Pangram)
- `--font-body` → Inter (this one is final, not a placeholder)
- When the real fonts are purchased: add `.woff2` files + `@font-face`
  rules near the Google Fonts `<link>` in `index.html`'s `<head>`, then
  change only the two variable values in `styles.css`. Every rule in the
  file reads from the variables, never a hardcoded font name.

**Section order**: Hero → My Pitch (video) → Proof (dark) → Why Roz
(accordion) → Industries → Recommendations (dark) → Career Bridge/About
(dark) → Training → Looking For → Final CTA (dark). Dark/light sections
alternate deliberately for visual rhythm — preserve this pattern if adding
sections.

**Hero specifics**: two-column desktop layout (text left, portrait right),
stacks to single column on mobile. Portrait is object-fit: cover, flipped
horizontally from the original studio photo so she faces toward the text.
Black stats band runs full edge-to-edge below the hero, content
constrained/centered via the standard `.container` class.

## Known open items / TODOs

1. **Fonts**: Coterie and PP Gatwick still need to be purchased and
   licensed for web use. See swap instructions above.
2. **Industries section**: currently shows 4 confirmed industries
   (Fashion, Retail, Technology, Mining) plus 2 placeholder chips marked
   "To confirm" — Roz needs to supply the final list.
3. **Loom video**: hero and My Pitch section both have a placeholder
   button ("2-Minute Pitch — Coming soon") with HTML comments showing
   exactly how to swap in the real Loom embed once recorded.
4. **LinkedIn recommendations**: Recommendations section uses elegant
   placeholders ("Verified LinkedIn recommendation to be added") — real
   quotes need to be dropped in once supplied, no fake names/quotes.
5. **Proof section, $177K card**: currently unchanged from original
   wording ("$177K transformation proposal"). Roz was considering
   changing this to a "deals sold" framing but this needs her explicit
   confirmation that both ends of any stated range were fully closed,
   verified deals before changing — do not alter this without that
   confirmation, per the site's own accuracy rules (see next point).
6. **Accuracy rules — important**: This site deliberately avoids claiming
   remote high-ticket closing results Roz doesn't have yet (no invented
   close rates, no fabricated commission figures, no years of formal
   closer experience she hasn't done). All current stats are labeled by
   what they actually are (e.g. "account budgets managed" not "revenue
   closed"). Maintain this precision in any new copy.
7. **Favicon**: not yet built. Roz mentioned wanting a monogram-based
   favicon design separately — out of scope for this package.

## Verification expectations

Before treating any change as complete: actually render the page (a
headless browser via Playwright works well in a sandboxed environment)
and check it visually or via measured bounding boxes — don't reason about
CSS outcomes without confirming them. This file's history involved
significant rework caused by unverified changes; don't repeat that.
