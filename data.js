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
    notes: "Grandpa Gan's father. Name and details unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gg-gan-mother",
    name: "Great-Grandmother Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Grandpa Gan's mother. Name and details unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Dad's side — grandparents
  // --------------------------------------------------------------------------
  {
    id: "grandpa-gan",
    name: "Grandpa Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's paternal grandfather. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "grandma-gan",
    name: "Grandma Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's paternal grandmother, Grandpa Gan's wife. Name unknown — please fill in.",
    unknown: true,
  },

  // --------------------------------------------------------------------------
  // Dad's side — the eight Gan siblings, in birth order: Forest, two
  // unknown siblings, Cheong Koon, Simon, Eric, John, Jacqueline
  // --------------------------------------------------------------------------
  {
    id: "forest-gan",
    name: "Forest Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's uncle — eldest of the eight Gan siblings.",
    unknown: false,
  },
  {
    id: "gan-sibling-2",
    name: "Gan Brother (2nd oldest)",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Second-oldest of the eight Gan siblings. Father of Tinie, Michael, and M?. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "gan-sibling-3",
    name: "Gan Brother (3rd oldest)",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Third-oldest of the eight Gan siblings. Has one son (name also unknown). Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "cheong-koon-gan",
    name: "Cheong Koon Gan",
    gender: "M",
    born: 1950, died: null,
    birthPlace: null,
    location: "Mississauga, Ontario, Canada",
    occupation: null,
    notes: "Victor's dad. Fourth-oldest of the eight Gan siblings.",
    unknown: false,
  },
  {
    id: "eric-gan",
    name: "Eric Gan",
    gender: "M",
    born: "19XX", died: null,
    birthPlace: null,
    location: "Kuala Lumpur, Malaysia",
    occupation: null,
    notes: "Victor's uncle. Serene's father. Sixth-oldest of the eight Gan siblings.",
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
    notes: "Victor's uncle. Jonathan's father. Fifth-oldest of the eight Gan siblings.",
    unknown: false,
  },
  {
    id: "jacqueline-gan",
    name: "Jacqueline Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's aunt. Maria's mother. Youngest of the eight Gan siblings.",
    unknown: false,
  },
  {
    id: "john-gan",
    name: "John Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's uncle. Natalie and Stephanie's father. Seventh-oldest sibling and youngest Gan brother.",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Lim branch — Grandpa Gan's sister married a Lim; her son is Han Tiong Lim
  // --------------------------------------------------------------------------
  {
    id: "gan-grandaunt",
    name: "Grandaunt Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Grandpa Gan's sister, Han Tiong Lim's mother. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "lim-grandfather",
    name: "Grandfather Lim",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Han Tiong Lim's father, husband of Grandpa Gan's sister. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "han-tiong-lim",
    name: "Han Tiong Lim",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Son of Grandpa Gan's sister — first cousin of Cheong Koon's generation.",
    unknown: false,
  },
  {
    id: "irene-lim",
    name: "Irene Lim",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Han Tiong Lim's wife; mother of Kevin, Kristen, and Travis.",
    unknown: false,
  },
  {
    id: "kevin-lim",
    name: "Kevin Lim",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Oldest of Han Tiong and Irene's three children.",
    unknown: false,
  },
  {
    id: "kristen-lim",
    name: "Kristen Lim",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Middle child of Han Tiong and Irene.",
    unknown: false,
  },
  {
    id: "travis-lim",
    name: "Travis Lim",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Youngest of Han Tiong and Irene's three children.",
    unknown: false,
  },
  {
    id: "fiona",
    name: "Fiona",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Travis Lim's wife. Surname unknown — please fill in.",
    unknown: false,
  },
  {
    id: "henry-lim",
    name: "Henry Lim",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Travis and Fiona's son.",
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
    notes: "Christine and Ian's son — confirm surname.",
    unknown: false,
  },

  // --------------------------------------------------------------------------
  // Cousins (children of the Gan aunts and uncles) and their other parents
  // --------------------------------------------------------------------------
  {
    id: "erics-partner",
    name: "Serene & Elaine's Mother",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Eric Gan's partner, mother of Serene and Elaine. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "serene-gan",
    name: "Serene Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — Eric's daughter.",
    unknown: false,
  },
  {
    id: "elaine-gan",
    name: "Elaine Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — Eric's daughter, Serene's sister.",
    unknown: false,
  },
  {
    id: "sibling2-partner",
    name: "Tinie, Michael & M?'s Mother",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Partner of the 2nd-oldest Gan brother. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "tinie-gan",
    name: "Tinie Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — daughter of the 2nd-oldest Gan brother.",
    unknown: false,
  },
  {
    id: "michael-gan",
    name: "Michael Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — son of the 2nd-oldest Gan brother.",
    unknown: false,
  },
  {
    id: "m-gan",
    name: "M? Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — son of the 2nd-oldest Gan brother, sibling of Tinie and Michael. Name starts with M — please fill in.",
    unknown: true,
  },
  {
    id: "sibling3-partner",
    name: "Wife of Gan Brother (3rd oldest)",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Partner of the 3rd-oldest Gan brother. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "sibling3-son",
    name: "Gan Cousin (3rd brother's son)",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — the 3rd-oldest Gan brother's son. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "simons-partner",
    name: "Jonathan's Mother",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Jonathan's mother; she and Simon Gan are divorced. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "jonathan-gan",
    name: "Jonathan Gan",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — Simon's son.",
    unknown: false,
  },
  {
    id: "jacquelines-partner",
    name: "Alun",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Jacqueline Gan's husband, Maria's father. Surname unknown — please fill in.",
    unknown: false,
  },
  {
    id: "maria",
    name: "Maria",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — Jacqueline's daughter. Surname unknown.",
    unknown: false,
  },
  {
    id: "erik",
    name: "Erik",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Maria's husband. Surname unknown — please fill in.",
    unknown: false,
  },
  {
    id: "jayden",
    name: "Jayden",
    gender: "M",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Maria and Erik's son. Surname unknown.",
    unknown: false,
  },
  {
    id: "johns-partner",
    name: "Natalie & Stephanie's Mother",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "John Gan's partner, mother of Natalie and Stephanie. Name unknown — please fill in.",
    unknown: true,
  },
  {
    id: "natalie-gan",
    name: "Natalie Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — John's daughter.",
    unknown: false,
  },
  {
    id: "stephanie-gan",
    name: "Stephanie Gan",
    gender: "F",
    born: null, died: null,
    birthPlace: null, location: null, occupation: null,
    notes: "Victor's cousin — John's daughter.",
    unknown: false,
  },
];

const UNIONS = [
  // Great-grandparents → grandparents (Grandpa Gan and his sister; birth
  // order between them unknown)
  { id: "u-gg-gan",   partners: ["gg-gan-father", "gg-gan-mother"],   status: "married", start: null, end: null, children: ["grandpa-gan", "gan-grandaunt"] },
  { id: "u-gg-heng",  partners: ["gg-heng-father", "gg-heng-mother"], status: "married", start: null, end: null, children: ["grandpa-heng"] },
  { id: "u-gg-mgm",   partners: ["gg-mgm-father", "gg-mgm-mother"],   status: "married", start: null, end: null, children: ["grandma-heng"] },

  // Grandparents → parents' generation (children listed in birth order)
  { id: "u-gan-gp",   partners: ["grandpa-gan", "grandma-gan"],       status: "married", start: null, end: null,
    children: ["forest-gan", "gan-sibling-2", "gan-sibling-3", "cheong-koon-gan", "simon-gan", "eric-gan", "john-gan", "jacqueline-gan"] },
  { id: "u-heng",     partners: ["grandpa-heng", "grandma-heng"],     status: "married", start: null, end: null,
    children: ["cathy-gan"] },

  // Parents → Victor's generation
  { id: "u-cheong-cathy", partners: ["cheong-koon-gan", "cathy-gan"], status: "married", start: null, end: null,
    children: ["calvin-gan", "victor-gan", "christine-gan"] },

  // Christine + Ian
  { id: "u-christine-ian", partners: ["christine-gan", "ian-mcphee"], status: "married", start: null, end: null,
    children: ["nolan-mcphee"] },

  // Aunts/uncles → cousins (spouse names still unknown)
  { id: "u-eric",       partners: ["eric-gan", "erics-partner"],             status: "married", start: null, end: null,
    children: ["serene-gan", "elaine-gan"] },
  { id: "u-sibling2",   partners: ["gan-sibling-2", "sibling2-partner"],     status: "married", start: null, end: null,
    children: ["tinie-gan", "michael-gan", "m-gan"] },
  { id: "u-sibling3",   partners: ["gan-sibling-3", "sibling3-partner"],     status: "married", start: null, end: null,
    children: ["sibling3-son"] },

  // Lim branch
  { id: "u-lim-gp",       partners: ["lim-grandfather", "gan-grandaunt"], status: "married", start: null, end: null,
    children: ["han-tiong-lim"] },
  { id: "u-han-irene",    partners: ["han-tiong-lim", "irene-lim"],       status: "married", start: null, end: null,
    children: ["kevin-lim", "kristen-lim", "travis-lim"] },
  { id: "u-travis-fiona", partners: ["travis-lim", "fiona"],              status: "married", start: null, end: null,
    children: ["henry-lim"] },
  { id: "u-simon",      partners: ["simon-gan", "simons-partner"],           status: "divorced", start: null, end: null,
    children: ["jonathan-gan"] },
  { id: "u-jacqueline", partners: ["jacqueline-gan", "jacquelines-partner"], status: "married", start: null, end: null,
    children: ["maria"] },
  { id: "u-maria-erik", partners: ["maria", "erik"],                         status: "married", start: null, end: null,
    children: ["jayden"] },
  { id: "u-john",       partners: ["john-gan", "johns-partner"],             status: "married", start: null, end: null,
    children: ["natalie-gan", "stephanie-gan"] },
];

// The person shown when the site first loads.
const HOME_PERSON = "grandma-gan";
