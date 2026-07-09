# Gan Family Tree

A browsable family tree for the Gan family — [gan.family](https://gan.family).

Zero-dependency static site: open `index.html` in a browser, or serve the folder
with any static host (GitHub Pages, etc.). No build step, no database.

## Features

- **Person pages** — click anyone to see their details plus parents,
  grandparents, siblings (half-siblings labelled), partners, children,
  aunts & uncles, cousins, and nieces & nephews.
- **Person descriptors** — every person carries a one-line summary of where
  they fit ("Son of Forest Gan", "Married to Christine Gan"), derived
  automatically from the tree.
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

## Clan heritage

Per family tradition: the first generation of
the 顏 clan — *Gan* in Hokkien, *Yan* in Mandarin — was a disciple of
Confucius; Yan clans traditionally trace to Yan Hui (顏回). Cheong Koon is
the **34th generation**, his children the **35th**. The site computes each
blood-line member's generation from that anchor (patrilineal descent) and
shows it on their page; the legend appears on the Full tree page.

The written clan genealogy — **顏氏家谱**, the 仁贵 family of Shigu town,
Yongchun county, Fujian (ancestral hall **赐美堂**) — was updated 2022 by the
Malaysian clan association (contact listed: 顏章本). Our branch descends from
**顏亨曉** (30th gen) → **顏利潘 曲德公** (31st, emigrated to Malaya) →
**顏貞錄** (32nd) → **顏文雾 / Gan Yong Teng** (33rd). Pages 20–23 cover the
利潘公 branch. Cousins in **Penang** also keep up the Gan genealogy.

Generation-name characters by generation: 贞 (32nd), 文 (33rd), 章 (34th),
and for the 35th, 华 for sons and 婷 for daughters. Chinese genealogies often
record up to three names per person (birth, marriage, death) — e.g. Gan Yong
Teng appears in the genealogy as **Gan Boon Boo (文雾)**, his before-marriage
name. Record alternates in a person's `notes`; Chinese names go in the
`chineseName` field.

## Family structure (confirmed)

- Victor's paternal grandparents are **Gan Yong Teng** (in the genealogy:
  Gan Boon Boo) and **Tan Seok Eng**. Their eight children, in birth order:
  **Forest** (eldest), an unidentified brother (2nd), **Simon** (3rd,
  Purmerend, NL), another unidentified brother (4th), **Cheong Koon** (5th —
  Victor's dad, b. 1950, Mississauga), **Eric** (6th, KL), **John** (7th,
  youngest brother), and **Jacqueline** (youngest).
- Cousins: **Serene** and **Elaine** (Eric's daughters), **Jonathan**
  (Simon's son), **Maria** (Jacqueline's daughter), **Natalie** and
  **Stephanie** (John's daughters), **Tinie**, **Michael**, and **James**
  (the 2nd-oldest brother's children, James youngest), and **Tivien** and
  **Alex** (the 4th-oldest brother's children, Tivien older).
- **Calvin, Victor, Christine** are Cheong Koon & Cathy's children;
  Christine (b. 1991, Corner Brook) is married to **Ian McPhee**, son
  **Nolan**.
- **Lim branch**: Gan Yong Teng had three sisters; the **third sister**
  (name unknown) married a Lim. Their son **Han Tiong Lim** married
  **Irene** — children **Kevin** (oldest), **Kristen** (middle), **Travis**
  (youngest). Travis is married to **Fiona**, son **Henry**.

## Still unknown

1. Names of the aunts'/uncles' partners (the cousins' other parents).
2. Mom's side: Cathy's maiden name is **Neoh**; her oldest brother is
   **Heng Neoh**. Everything else on that side is still unknown.
3. Great-Grandmother Gan's name (顏貞錄's wife — possibly in the photos on
   genealogy page 21); English names for 顏章池, 顏章炫, and the spouses
   taken from the genealogy; the untranscribed branches (顏文啟, 顏文喜,
   顏文經, 顏文娥, and the other 贞-generation brothers' families).
4. Maria's surname; Nolan's surname (McPhee assumed); most birth years.

## Hosting on gan.family

The repo includes a `CNAME` file for GitHub Pages. To go live:

1. Make the repo public (or have GitHub Pro for private Pages).
2. Repo → Settings → Pages → deploy from the `main` branch, root folder.
3. At your DNS provider, point `gan.family` at GitHub Pages
   (A records `185.199.108.153` … `185.199.111.153`, or an ALIAS/ANAME to
   `victorgan.github.io`).
