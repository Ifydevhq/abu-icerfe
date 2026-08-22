# ABU ICERFE

A rebuild of the website for the **International Center of Excellence for Rural
Finance and Entrepreneurship (ICERFE)**, Ahmadu Bello University, Zaria —
replacing the previous static PHP site at `icerfe.abu.edu.ng`.

## Stack

- **Next.js 14** (App Router, TypeScript)
- **Tailwind CSS 3** with a small set of design tokens
- **lucide-react** for icons
- Path alias `@grc/*` → `src/*`
- Fully static: every route prerenders, no backend required

```bash
yarn dev      # development
yarn build    # production build
yarn start    # serve the production build
```

## Design

Institutional and restrained by intent — one green drawn from the ICERFE mark,
a gold hairline used only as a section marker, and neutrals for everything else.
Headings are set in Source Serif 4, body copy in Inter.

Tokens live in `tailwind.config.ts` (`brand`, `gold`, `ink`, `paper`); the two
recurring components — the gold section rule and the animated link underline —
are defined in `src/app/globals.css`.

## Structure

```
src/
  app/                    routes (thin pages that delegate to components)
    about/{history,director,governing-board,academic-board,organogram}
    administration/  staff/  programmes/  news/  gallery/  contact/
  components/
    layout/               site header (nav + mobile menu) and footer
    home/                 homepage sections
    ui/                   container, page header, avatar, person card, form
  _shared/
    data/                 all site content (site, people, programmes, history, news)
    utils/                cn, initials, formatDate
```

All copy and people data live in `src/_shared/data/` — content edits happen
there, not in components.

## Content notes

Everything on the site was carried over from the Centre's existing pages. A few
deliberate decisions:

- **Academic Board membership is not listed.** The old site's Academic Board page
  duplicated the Governing Board exactly, so no membership is asserted here — the
  page describes the Board's remit and points to a contact route instead.
- **No invented quotations.** The homepage statement attributed to the Directorate
  is a paraphrase of the Centre's own published account of its founding mandate,
  presented as prose rather than as a personal quote.
- **Staff photographs.** Only three portraits are still retrievable from the old
  site (Director, Vice-Chancellor, GENS Coordinator); every other person renders a
  typographic monogram so the directory stays visually consistent.
- **Gallery.** Eight of the nine images referenced by the old gallery return 404
  from the original server and could not be imported. Those slots render a
  "Photograph to be added" state, keeping the Centre's own captions as a checklist
  of what to supply.
- **Placeholders removed.** The old site had live rows reading "Name / Rank" and
  roles with no name attached; none were carried over.
- **Corrections.** The old homepage listed a truncated phone number
  (`+234(0)34001270`); the contact page's full numbers are used throughout.
  Typos in the source pages ("Histroy", "newslaters", "Chariman", "Head Quaters")
  are not reproduced.

## To supply

- Gallery photographs (eight slots, captions already in place)
- Academic Board membership
- Staff portraits, if the Centre wants photographs rather than monograms
- Details for the further postgraduate and diploma awards referenced on
  `/programmes`
