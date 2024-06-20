const affs = {
  list: [
    "addiction",
    "aeon",
    "agoraphobia",
    "airfisted",
    "amnesia",
    "anorexia",
    "asphyxiating" /**/,
    "asthma",
    "betrayal" /*6-20-24*/,
    "blackout",
    "bleeding",
    "blindness",
    "blistered" /**/,
    "bloodfire" /**/,
    "bound",
    "breathless" /*6-20-24*/,
    "brokenleftarm",
    "brokenrightarm",
    "brokenleftleg",
    "brokenrightleg",
    "bruisedribs",
    "burning",
    "cadmuscurse",
    "calcifiedskull",
    "calcifiedtorso",
    "claustrophobia",
    "clumsiness",
    "coldfate" /**/,
    "concussion" /**/,
    "condemned" /**/,
    "conflagration",
    "confusion",
    "constricted" /**/,
    "corruption",
    "crackedribs",
    "cremated" /**/,
    "crescendo" /*6-20-24*/,
    "crushedthroat" /**/,
    "daeggerimpale",
    "damagedhead",
    "damagedleftarm",
    "damagedleftleg",
    "damagedrightarm",
    "damagedrightleg",
    "darkshade",
    "dazed",
    "dazzled" /**/,
    "deadening",
    "deafness",
    "death",
    "deathsickness" /**/,
    "deepsleep" /**/,
    "degenerate" /**/,
    "dehydrated",
    "dementia",
    "demonstain",
    "depression" /**/,
    "deteriorate" /**/,
    "diminished" /* 6-20-24 */,
    "disloyalty",
    "disrupted",
    "dissonance",
    "dizziness",
    "earworm" /* 6-20-24 */,
    "empoweredmannaz" /**/,
    "empoweredloshre" /**/,
    "enlightenment",
    "enmesh",
    "ensorcelled" /* pariah */,
    "entangled",
    "epilepsy",
    "fear",
    "flamefisted",
    "flushings" /* pariah */,
    "frozen",
    "fulminated" /* 6-20-24 */,
    "generosity",
    "grievouswounds" /**/,
    "guilt" /**/,
    "hamstrung",
    "haemophilia",
    "hallucinations",
    "hatred" /**/,
    "healthleech",
    "heartseed",
    "hecatecurse",
    "hellsight",
    "hindered" /**/,
    "homunculusmercury",
    "horror" /**/,
    "hypersomnia",
    "hypochondria",
    "hypothermia",
    "icefisted",
    "impaled",
    "impatience",
    "indifference" /**/,
    "inquisition",
    "insomnia",
    "internalbleeding",
    // 'insulation', // CUSTOM not an aff
    "isolation" /**/,
    "itching",
    "justice",
    "kaisurge" /**/,
    "kkractlebrand" /**/,
    "laceratedthroat",
    "lapsingconsciousness" /**/,
    "latched" /**/,
    "lethargy",
    "lightbind" /**/,
    "loneliness",
    "lovers",
    "lovestruck" /* 6-20-24 */,
    "lullaby",
    "manaleech",
    "masochism",
    "mildtrauma",
    "mangledleftarm",
    "mangledleftleg",
    "mangledrightarm",
    "mangledrightleg",
    "mangledhead",
    "mindclamp" /**/,
    "mindravaged" /**/,
    "muddled" /**/,
    "mycalium" /* pariah */,
    "nausea",
    "numbedleftarm",
    "numbedrightarm",
    "pacified",
    "palpatarfeed",
    "paralysis",
    "paranoia",
    "parasite" /* */,
    "peace",
    "penitence" /**/,
    "petrified" /**/,
    "phlogisticated",
    "pinshot",
    "pressure" /**/,
    "prone",
    "pyramides" /* pariah */,
    "pyre" /**/,
    "rebbies" /* pariah */,
    "recklessness",
    "reeling" /* 6-20-24 */,
    "retribution" /**/,
    "revealed" /**/,
    "sandfever" /* pariah */,
    "scalded",
    "scrambledbrains" /**/,
    "scytherus",
    "selarnia",
    "sensitivity",
    "serioustrauma",
    "shadowmadness" /**/,
    "shivering",
    "shyness",
    "silenced" /**/,
    "silver" /**/,
    "skullfractures",
    "slashedthroat",
    "sleeping",
    "slickness",
    "slimeobscure",
    "snared" /* 6-20-24 */,
    "solarburn" /**/,
    "speechless" /* 6-20-24 */,
    "spiritburn" /**/,
    "stridulating" /* 6-20-24 */,
    /*'spiritdisrupt', //This affliction is removed from the game*/
    "stun",
    "stupidity",
    "stuttering",
    "succumbed" /* 6-20-24 */,
    "temperedcholeric",
    "temperedmelancholic",
    "temperedphlegmatic",
    "temperedsanguine",
    "tenderskin" /**/,
    "tension" /**/,
    "timeflux",
    "timeloop" /**/,
    "tonguetied" /**/,
    "torntendons",
    "transfixation",
    "trueblind",
    "unweavingbody" /**/,
    "unweavingmind" /**/,
    "unweavingspirit" /**/,
    "vertigo",
    "vinewreathed",
    "vitiated" /**/,
    "vitrified" /**/,
    "voidfisted",
    "voyria",
    "waterbonds" /**/,
    "weakenedmind",
    "weariness",
    "webbed",
    "woeconstrained" /* 6-20-24 */,
    "whisperingmadness",
    "wristfractures",
    "unconsciousness",

    "harmonic",
    "bop",
    "spiritwrack",
    "bedevil",
    "loki",
    "moon",
    "evileye",
    "dragoncurse",
    "swiftcurse",
  ],

  prios: {
    // TODO: How should we handle prios for countable affs? horror4 etc?
    // affs that don't have serverside prio because can't be 'cured', set as 0
    airfisted: 0,
    asphyxiating: 0,
    blistered: 0,
    bloodfire: 0,
    bruisedribs: 0,
    cadmuscurse: 0,
    coldfate: 0,
    condemned: 0,
    conflagration: 0,
    constricted: 0,
    corruption: 0,
    cremated: 0,
    death: 0,
    deathsickness: 0,
    deepsleep: 0,
    degenerate: 0,
    dehydrated: 0,
    demonstain: 0,
    deteriorate: 0,
    empoweredloshre: 0,
    empoweredmannaz: 0,
    enlightenment: 0,
    enmesh: 0,
    ensorcelled: 0,
    flamefisted: 0,
    hamstrung: 0,
    hatred: 0,
    hecatecurse: 0,
    hindered: 0,
    homunculusmercury: 0,
    icefisted: 0,
    internalbleeding: 0,
    inquisition: 0,
    isolation: 0,
    kaisurge: 0,
    lightbind: 0,
    lullaby: 0,
    mindclamp: 0,
    mindravaged: 0,
    muddled: 0,
    numbedleftarm: 0,
    numbedrightarm: 0,
    palpatarfeed: 0,
    petrified: 0,
    phlogisticated: 0,
    pinshot: 0,
    revealed: 0,
    scalded: 0,
    scrambledbrains: 0,
    silenced: 0,
    silver: 0,
    slimeobscure: 0,
    solarburn: 0,
    stun: 0,
    timeflux: 0,
    trueblind: 0,
    vinewreathed: 0,
    vitiated: 0,
    vitrified: 0,
    voidfisted: 0,
    waterbonds: 0,
    weakenedmind: 0,
    unconsciousness: 0,

    // serverside affs 1-26, 26=ignore

    aeon: 2,
    concussion: 2,
    crushedthroat: 2,
    paralysis: 2,
    peace: 2,

    sleeping: 3,
    grievouswounds: 3,
    latched: 3,
    dazzled: 3,
    unweavingbody: 3,
    unweavingmind: 3,
    unweavingspirit: 3,
    weariness: 3,
    prone: 3,
    timeloop: 3,

    spiritburn: 4,
    heartseed: 4,
    guilt: 4,
    tenderskin: 4,
    pyramides: 4,
    parasite: 4,
    hypochondria: 4,
    pacified: 4,
    depression: 4,
    confusion: 4,
    retribution: 4,
    shadowmadness: 4,
    whisperingmadness: 4,
    hellsight: 4,

    anorexia: 5,
    mycalium: 5,
    flushings: 5,
    rebbies: 5,
    sandfever: 5,
    asthma: 5,
    healthleech: 5,

    impatience: 6,
    itching: 6,
    scytherus: 6,
    clumsiness: 6,
    kkractlebrand: 6,
    damagedleftleg: 6,
    darkshade: 6,
    slickness: 6,
    recklessness: 6,
    dementia: 6,

    bound: 7,
    daeggerimpale: 7,
    entangled: 7,
    sensitivity: 7,
    transfixation: 7,
    webbed: 7,
    horror: 7,
    pyre: 7,
    tonguetied: 7,
    haemophilia: 7,
    lethargy: 7,
    manaleech: 7,
    dissonance: 7,

    skullfractures: 8,
    damagedrightleg: 8,
    hypersomnia: 8,
    earworm: 8, // TODO new aff added with random prio 8
    crescendo: 8, // TODO new aff added with random prio 8
    diminished: 8, // TODO new aff added with random prio 8
    fulminated: 8, // TODO new aff added with random prio 8

    torntendons: 9,
    brokenleftleg: 9,
    brokenrightleg: 9,
    hallucinations: 9,
    burning: 9,

    calcifiedskull: 10,
    calcifiedtorso: 10,
    mangledleftleg: 10,
    mangledrightleg: 10,
    disrupted: 10,
    mangledhead: 10,
    voyria: 10,
    crackedribs: 10,

    hypothermia: 11,
    impaled: 11,
    brokenleftarm: 11,
    brokenrightarm: 11,
    indifference: 11,
    addiction: 11,
    nausea: 11,
    deadening: 11,
    frozen: 11,
    shivering: 11,
    mildtrauma: 11,

    stupidity: 12,
    wristfractures: 12,
    damagedleftarm: 12,
    disloyalty: 12,

    tension: 13,
    damagedhead: 13,
    dazed: 13,

    lovers: 14,
    pressure: 14,
    damagedrightarm: 14,
    temperedcholeric: 14,
    temperedmelancholic: 14,
    temperedphlegmatic: 14,
    temperedsanguine: 14,

    mangledleftarm: 15,
    mangledrightarm: 15,

    agoraphobia: 16,
    claustrophobia: 16,
    generosity: 16,
    justice: 16,
    loneliness: 16,
    vertigo: 16,

    paranoia: 17,

    serioustrauma: 18,
    epilepsy: 18,

    laceratedthroat: 20,
    slashedthroat: 20,
    stuttering: 20,

    selarnia: 21,
    fear: 21,
    masochism: 21,

    dizziness: 23,
    shyness: 23,

    //affs ignored
    horror1: 26,
    horror2: 26,
    horror3: 26,
    horror4: 26,
    horror5: 26,

    // affs you can cure on your own, but no serverside, 30-49, 30=ignore
    bleeding: 30,
    amnesia: 30,
    blackout: 30,

    // def affs
    insomnia: 0,
    // insulation: 20,  // CUSTOM not an aff
    deafness: 0,
    blindness: 0,

    // unknowns, 100=ignore
    harmonic: 100,
    bop: 100,
    spiritwrack: 100,
    bedevil: 100,
    loki: 100,
    moon: 100,
    evileye: 100,
    dragoncurse: 100,
    swiftcurse: 100,
  },
  types: {
    defs: {
      blindness: true,
      deafness: true,
      insomnia: true,
      // insulation: true  // TODO not an aff?
    },
    countable: {
      // TODO: Are unweavings countable?
      // TODO: Is kkractlebrand countable?
      pressure: { min: 0, max: 10 },
      bleeding: { min: 0, max: 15000 },
      burning: { min: 0, max: 5 },
      crackedribs: { min: 0, max: 7 },
      horror: { min: 0, max: 7 },
      pyre: { min: 0, max: 3 },
      skullfractures: { min: 0, max: 7 },
      temperedcholeric: { min: 0, max: 8 },
      temperedmelancholic: { min: 0, max: 8 },
      temperedphlegmatic: { min: 0, max: 8 },
      temperedsanguine: { min: 0, max: 8 },
      torntendons: { min: 0, max: 7 },
      wristfractures: { min: 0, max: 7 },
    },
    timed: {
      aeon: { length: 16 },
      airfisted: { length: 16 },
      betrayal: { length: 15 },
      blackout: { length: 10 },
      blistered: { length: 20 },
      breathless: { length: 3 },
      bruisedribs: { length: 30 },
      cadmuscurse: { length: 20 },
      condemned: { length: 20 },
      constricted: { length: 30 },
      corruption: { length: 45 },
      dazzled: { length: 60 },
      dehydrated: { length: 60 },
      demonstain: { length: 120 },
      empoweredloshre: { length: 12 },
      empoweredmannaz: { length: 20 },
      enmesh: { length: 5 },
      ensorcelled: { length: 20 },
      flamefisted: { length: 30 },
      hamstrung: { length: 9 },
      heartseed: { length: 11 },
      hecatecurse: { length: 16 },
      icefisted: { length: 30 },
      internalbleeding: { length: 30 },
      inquisition: { length: 30 },
      kaisurge: { length: 15 }, // TODO: Made up number. Confirm duration
      lightbind: { length: 22 },
      lovestruck: { length: 5 },
      mindravaged: { length: 20 }, // TODO: Made up number. Confirm duration
      mudded: { length: 12 },
      numbedleftarm: { length: 7.5 },
      numbedrightarm: { length: 7.5 },
      petrified: { length: 10 }, // TODO: Made up number. Confirm duration
      palpatarfeed: { length: 20 },
      phlogisticated: { length: 45 },
      pinshot: { length: 18 },
      reeling: { length: 20 },
      revealed: { length: 60 },
      scalded: { length: 20 },
      scrambledbrains: { length: 60 },
      silenced: { length: 20 }, // TODO: Made up number. Confirm duration
      silver: { length: 180 },
      slimeobscure: { length: 60 },
      solarburn: { length: 5 },
      snared: { length: 20 },
      speechless: { length: 300 },
      stridulating: { length: 6 },
      stun: { length: 3 },
      succumbed: { length: 30 },
      timeflux: { length: 60 },
      trueblind: { length: 6 },
      unconsciousness: { length: 10 },
      vinewreathed: { length: 30 },
      vitrified: { length: 45 },
      voidfisted: { length: 5 },
      waterbonds: { length: 30 },
      weakenedmind: { length: 60 },
      woeconstrained: { length: 30 },
    },
    unknown: {
      moon: [
        "stupidity",
        "confusion",
        "epilepsy",
        "masochism",
        "hypersomnia",
        "hallucinations",
      ],
      loki: [
        "stupidity",
        "clumsiness",
        "recklessness",
        "asthma",
        "shyness",
        "darkshade",
        "paralysis",
        "brokenleftarm",
        "brokenrightarm",
        "brokenleftleg",
        "brokenrightleg",
        "sensitivity",
        "disloyalty",
        "nausea",
        "weariness",
        "dizziness",
        "anorexia",
        "voyria",
        "haemophilia",
        "addiction",
        "selarnia",
        "slickness",
        "scytherus",
      ],
      evileye: ["confusion", "dizziness"],
      dragoncurse: [
        "recklessness",
        "clumsiness",
        "epilepsy",
        "dizziness",
        "pacifism",
        "nausea",
        "addiction",
        "anorexia",
        "generosity",
        "disloyalty",
        "sensitivity",
        "vertigo",
        "paranoia",
        "stupidity",
        "hypochondria",
        "lethargy" /* 'insulation'*/,
        "shivering",
        "frozen",
        "impatience",
        "paralysis",
        "asthma",
        "agoraphobia",
      ],
      harmonic: ["stupidity", "recklessness"],
      bop: ["stupidity", "recklessness"],
      swiftcurse: [
        "stupidity",
        "clumsiness",
        "recklessness",
        "asthma",
        "paralysis",
        "deafness",
        "sensitivity",
        "nausea",
        "weariness",
        "dizziness",
        "anorexia",
        "voyria",
        "haemophilia",
        "addiction",
        "impatience",
        "claustrophobia",
        "vertigo",
        "agoraphobia",
        "masochism",
        "epilepsy",
        "manaleech",
        "pacifism",
        "dementia",
        "healthleech",
      ],
      bedevil: ["stupidity", "recklessness"],
    },
    uncurable: {
      bloodfire: true,
      cadmuscurse: true,
      conflagration: true,
      death: true,
      deathsickness: true,
      deepsleep: true,
      enlightenment: true,
      insomnia: true,
      isolation: true,
      lullaby: true,
      mindclamp: true,
      mindisolation: true,
      palpatarfeed: true,
      penitence: true,
      scalded: true,
      stun: true,
      weakenedmind: true,
    },
  },
};

// EXPERIMENTAL: Code snippet added to maintain prio arrays for the purpose
// of potentially sorting affs within the same priority.
affs.prioArrays = {};
for (const aff in affs.prios) {
  const prio = affs.prios[aff];
  if (Array.isArray(affs.prioArrays[prio])) {
    // If it exists, push the value to the array
    affs.prioArrays[prio].push(aff);
  } else {
    // If it doesn't exist, create an array with the value
    affs.prioArrays[prio] = [aff];
  }
}

export { affs as affTable };

const defaultPrios = {
  1: [
    "paralysis",
    "aeon",
    "peace",
    "scytherus",
    "anorexia",
    "bound",
    "whisperingmadness",
    "sleeping",
    "transfixation",
    "voyria",
    "webbed",
    "prone",
    "disrupted",
    "latched",
  ],
  2: [
    "entangled",
    "hellsight",
    "slickness",
    "asthma",
    "recklessness",
    "impatience",
    "daeggerimpale",
    "impaled",
    "heartseed",
    "spiritburn",
    "tenderskin",
    "guilt",
    "crushedthroat",
    "calcifiedskull",
    "calcifiedtorso",
  ],
  3: [
    "brokenrightleg",
    "brokenleftleg",
    "damagedleftleg",
    "lovers",
    "confusion",
    "pacified",
    "clumsiness",
    "healthleech",
    "stupidity",
    "manaleech",
    "sensitivity",
    "disloyalty",
    "dissonance",
    "temperedmelancholic",
    "temperedcholeric",
    "temperedsanguine",
    "temperedphlegmatic",
    "skullfractures",
    "wristfractures",
    "crackedribs",
    "torntendons",
    "retribution",
    "grievouswounds",
  ],
  4: [
    "damagedrightleg",
    "mangledrightleg",
    "mangledleftleg",
    "epilepsy",
    "nausea",
    "weariness",
    "addiction",
    "deadening",
    "hypochondria",
    "lethargy",
    "darkshade",
    "hypothermia",
    "unweavingbody",
    "unweavingmind",
    "unweavingspirit",
    "mindravaged",
    "mycalium",
  ],
  5: [
    "itching",
    "fear",
    "brokenrightarm",
    "brokenleftarm",
    "dazed",
    "justice",
    "shyness",
    "dizziness",
    "haemophilia",
    "masochism",
    "vertigo",
    "hypersomnia",
    "shivering",
    "frozen",
    "kkractlebrand",
    "pressure",
  ],
  6: [
    "damagedrightarm",
    "damagedleftarm",
    "mangledrightarm",
    "mangledleftarm",
    "hallucinations",
    "generosity",
    "agoraphobia",
    "loneliness",
    "claustrophobia",
    "shadowmadness",
    "tension",
    "flushings",
    "rebbies",
  ],
  7: [
    "damagedhead",
    "mangledhead",
    "concussion",
    "dementia",
    "paranoia",
    "horror",
    "depression",
    "tonguetied",
    "pyre",
  ],
  8: ["mildtrauma", "serioustrauma", "burning", "pyramides"],
  9: ["slashedthroat", "laceratedthroat", "parasite", "timeloop", "sandfever"],
  10: ["selarnia"],
  11: ["stuttering"],
  20: ["indifference"],
};
