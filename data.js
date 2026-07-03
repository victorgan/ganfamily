// =============================================================================
// Gan Family Tree — Data
// =============================================================================
// This is the only file you need to edit to update the family tree.
//
// PEOPLE: one entry per person.
//   id         unique slug, referenced by unions (required)
//   name       display name (required)
//   gender     "M" | "F" | null
//   born       birth year or full date string, e.g. 1950 or "1950-03-14"; null if unknown
//   died       death year/date, or null if living/unknown
//   birthPlace where they were born
//   location   where they live now
//   occupation what they do / did
//   notes      free text shown on their page
//   photo      optional path to a picture, e.g. "photos/victor.jpg"
//              (drop image files into a photos/ folder in this repo)
//   unknown    true = placeholder person whose identity isn't known yet
//
// UNIONS: one entry per couple (marriage, partnership, or past relationship).
//   partners   [idA, idB]
//   status     "married" | "divorced" | "separated" | "partner" | "widowed"
//   start,end  years, or null
//   children   array of person ids born to this couple
//
// Parents, siblings (including half-siblings), and children are all derived
// from UNIONS automatically — never listed twice.
// =============================================================================

const PEOPLE = [

  // --------------------------------------------------------------------------
  // Dad's side — great-grandparents (Forest Gan's parents)
  // --------------------------------------------------------------------------
  {
    id: "gg-gan-father",
    name: "Great-Grandfather Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Forest Gan's father. Name and details unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gg-gan-mother",
    name: "Great-Grandmother Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Forest Gan's mother. Name and details unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Dad's side — grandparents
  // --------------------------------------------------------------------------
  {
    id: "forest-gan",
    name: "Forest Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's paternal grandfather.",
    unknown: false,
  },
  {
    id: "grandma-gan",
    name: "Grandma Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's paternal grandmother, Forest Gan's wife. Name unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Dad's side — Dad and his siblings
  // --------------------------------------------------------------------------
  {
    id: "cheong-koon-gan",
    name: "Cheong Koon Gan",
    gender: "M",
    born: 1950, died: null,
    birthPlace: null,
    location: "Mississauga, Ontario, Canada",
    occupation: null,
    notes: "Victor's dad.",
    unknown: false,
  },
  {
    id: "simon-gan",
    name: "Simon Gan",
    gender: "M",
    born: "19XX", died: null,
    birthPlace: null,
    location: "Purmerend, Netherlands",
    occupation: null,
    notes: "Assumed to be Cheong Koon's brother (Victor's uncle) — confirm.",
    unknown: false,
  },
  {
    id: "jonathan-gan",
    name: "Jonathan Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Cheong Koon's brother (Victor's uncle) — confirm.",
    unknown: false,
  },
  {
    id: "serene-gan",
    name: "Serene Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Cheong Koon's sister (Victor's aunt) — confirm.",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Mom's side — great-grandparents
  // --------------------------------------------------------------------------
  {
    id: "gg-heng-father",
    name: "Great-Grandfather Heng",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Grandpa Heng's father. Name and details unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gg-heng-mother",
    name: "Great-Grandmother Heng",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Grandpa Heng's mother. Name and details unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gg-mgm-father",
    name: "Great-Grandfather (maternal grandmother's father)",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Father of Victor's maternal grandmother. Unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gg-mgm-mother",
    name: "Great-Grandmother (maternal grandmother's mother)",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Mother of Victor's maternal grandmother. Unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Mom's side — grandparents
  // --------------------------------------------------------------------------
  {
    id: "grandpa-heng",
    name: "Grandpa Heng",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's maternal grandfather (family name Heng). Given name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "grandma-heng",
    name: "Grandma Heng",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's maternal grandmother. Name unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Parents
  // --------------------------------------------------------------------------
  {
    id: "cathy-gan",
    name: "Cathy Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's mom (née Heng).",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Victor and siblings
  // --------------------------------------------------------------------------
  {
    id: "calvin-gan",
    name: "Calvin Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: null,
    unknown: false,
  },
  {
    id: "victor-gan",
    name: "Victor Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: null,
    unknown: false,
  },
  {
    id: "christine-gan",
    name: "Christine Gan",
    gender: "F",
    born: 1991, died: null,
    birthPlace: null,
    location: "Corner Brook, Newfoundland, Canada",
    occupation: null,
    notes: null,
    unknown: false,
  },
  {
    id: "ian-mcphee",
    name: "Ian McPhee",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: "Corner Brook, Newfoundland, Canada", occupation: null,
    notes: "Christine's husband.",
    unknown: false,
  },
  {
    id: "nolan-mcphee",
    name: "Nolan McPhee",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Christine and Ian's son — confirm surname.",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Jonathan's family (first marriage + current partner)
  // --------------------------------------------------------------------------
  {
    id: "erics-mother",
    name: "Eric's Mother",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Jonathan Gan's former partner, Eric's mother. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "eric-gan",
    name: "Eric Gan",
    gender: "M",
    born: "19XX", died: null,
    birthPlace: null,
    location: "Kuala Lumpur, Malaysia",
    occupation: null,
    notes: "Assumed to be Jonathan's son — confirm.",
    unknown: false,
  },
  {
    id: "marias-mom",
    name: "Maria's Mom",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Jonathan Gan's current partner, Maria's mother. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "maria",
    name: "Maria",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Jonathan's daughter with his current partner — confirm.",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Serene's family
  // --------------------------------------------------------------------------
  {
    id: "john",
    name: "John",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Serene Gan's husband. Surname unknown — please fill in.",
    unknown: false,
  },
  {
    id: "stephanie",
    name: "Stephanie",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Serene and John's daughter — surname unknown, confirm.",
    unknown: false,
  },
  {
    id: "natalie-gan",
    name: "Natalie Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Assumed to be Serene and John's daughter — confirm (surname 'Gan' suggests she may belong elsewhere in the tree).",
    unknown: false,
  },
];

const UNIONS = [
  // Great-grandparents → grandparents
  { id: "u-gg-gan",   partners: ["gg-gan-father", "gg-gan-mother"],   status: "married", start: null, end: null, children: ["forest-gan"] },
  { id: "u-gg-heng",  partners: ["gg-heng-father", "gg-heng-mother"], status: "married", start: null, end: null, children: ["grandpa-heng"] },
  { id: "u-gg-mgm",   partners: ["gg-mgm-father", "gg-mgm-mother"],   status: "married", start: null, end: null, children: ["grandma-heng"] },

  // Grandparents → parents' generation
  { id: "u-forest",   partners: ["forest-gan", "grandma-gan"],        status: "married", start: null, end: null,
    children: ["cheong-koon-gan", "simon-gan", "jonathan-gan", "serene-gan"] },
  { id: "u-heng",     partners: ["grandpa-heng", "grandma-heng"],     status: "married", start: null, end: null,
    children: ["cathy-gan"] },

  // Parents → Victor's generation
  { id: "u-cheong-cathy", partners: ["cheong-koon-gan", "cathy-gan"], status: "married", start: null, end: null,
    children: ["calvin-gan", "victor-gan", "christine-gan"] },

  // Christine + Ian
  { id: "u-christine-ian", partners: ["christine-gan", "ian-mcphee"], status: "married", start: null, end: null,
    children: ["nolan-mcphee"] },

  // Jonathan: first relationship (ended), then current partner
  { id: "u-jonathan-ex",    partners: ["jonathan-gan", "erics-mother"], status: "divorced", start: null, end: null,
    children: ["eric-gan"] },
  { id: "u-jonathan-maria", partners: ["jonathan-gan", "marias-mom"],   status: "partner",  start: null, end: null,
    children: ["maria"] },

  // Serene + John
  { id: "u-serene-john", partners: ["serene-gan", "john"], status: "married", start: null, end: null,
    children: ["stephanie", "natalie-gan"] },
];

// The person shown when the site first loads.
const HOME_PERSON = "victor-gan";
