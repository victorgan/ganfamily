# Gan Family Tree

A browsable family tree for the Gan family — [gan.family](https://gan.family).

Zero-dependency static site: open `index.html` in a browser, or serve the folder
with any static host (GitHub Pages, etc.). No build step, no database.

## Features

- **Person pages** — click anyone to see their details plus parents,
  grandparents, siblings (half-siblings labelled), partners, children,
  aunts & uncles, cousins, and nieces & nephews.
- **Kinship labels** — every person shows how they relate to the home person
  ("Victor's paternal uncle", "married to Victor's sister"), computed
  automatically from the tree, including in-law and divorced relationships.
- **Relationship support** — marriages, partners, divorces/separations, and
  remarriages; children are attached to the specific couple, so half-siblings
  and blended families render correctly.
- **Full tree view** — descendant trees from the earliest known ancestors.
- **Search** — by name, location, or occupation; press `/` to jump to the
  search box, arrow keys + Enter to pick a result.
- **Ages** — computed automatically from birth (and death) years.
- **Unknown placeholders** — dashed cards mark relatives whose details still
  need to be filled in.

## Editing the tree

All data lives in [`data.js`](data.js) — edit it and refresh. Two lists:

### `PEOPLE`

```js
{
  id: "victor-gan",        // unique slug, referenced by unions
  name: "Victor Gan",
  gender: "M",             // "M" | "F" | null
  born: 1950,              // year or "YYYY-MM-DD", null if unknown
  died: null,
  birthPlace: null,
  location: "Mississauga, Ontario, Canada",
  occupation: null,
  notes: "Free text shown on the person's page.",
  photo: "photos/victor.jpg",  // optional; drop images in a photos/ folder
  unknown: false,          // true = identity not yet known (renders dashed)
}
```

### `UNIONS`

One entry per couple. Parents, children, and siblings are all derived from
these — nothing is listed twice.

```js
{
  id: "u-cheong-cathy",
  partners: ["cheong-koon-gan", "cathy-gan"],
  status: "married",       // married | divorced | separated | partner | widowed
  start: null,             // year, optional
  end: null,               // year (e.g. divorce year), optional
  children: ["calvin-gan", "victor-gan", "christine-gan"],
}
```

To model a divorce with a new partner: give the person two union entries — one
with `status: "divorced"` (children of that marriage attached there) and one
with the new partner.

## Assumptions to verify

The seed list was ambiguous in places; these guesses are marked in `notes`
fields and should be confirmed or corrected:

1. **Cheong Koon Gan** (b. 1950, Mississauga) is Victor's **dad**, and
   **Forest Gan** is Victor's paternal **grandfather**.
2. **Simon** (Purmerend, NL), **Jonathan**, and **Serene** are Cheong Koon's
   **siblings** (Victor's uncles/aunt) — not Victor's siblings.
3. **Nolan** is Christine & Ian McPhee's son (surname McPhee assumed).
4. **Eric** (KL) is Jonathan's son from a first marriage that ended; **Maria**
   is Jonathan's daughter with his current partner ("Maria's Mom").
5. **Stephanie** and **Natalie Gan** are Serene & John's daughters — Natalie's
   "Gan" surname suggests she may belong elsewhere in the tree.
6. Mom's side: grandfather's family name is **Heng**; all given names on that
   side are still unknown.

## Hosting on gan.family

The repo includes a `CNAME` file for GitHub Pages. To go live:

1. Make the repo public (or have GitHub Pro for private Pages).
2. Repo → Settings → Pages → deploy from the `main` branch, root folder.
3. At your DNS provider, point `gan.family` at GitHub Pages
   (A records `185.199.108.153` … `185.199.111.153`, or an ALIAS/ANAME to
   `victorgan.github.io`).
