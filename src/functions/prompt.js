/* global nexsys, eventStream */

export const prompt = {};

const generate_chunk = (text, fg, bg) => {
    let result = document.createElement('span');
    result.style.color = fg;
    result.style.backgroundColor = bg;
    result.innerHTML = text;
  
    return result;
  }

const get_formatted_prompt = function(...args) {
    let htmlLine = document.createElement('span');

    for (let i = 0; i < args.length; i+= 3) {
        htmlLine.appendChild(generate_chunk(args[i], args[i+1], args[i+2]))
    }

    return htmlLine.outerHTML;
}
    
export const getCustomPrompt = () => {
    let vars = nexsys.prompt.vars;
    let diffh = vars.diffh;
    let diffm = vars.diffm;

    vars.diffh = "";
    vars.diffm = "";

    if(vars.blackout) {
        return get_formatted_prompt('-', "reset", "");
    }

    return get_formatted_prompt(
        vars.paused, vars.paused.fg, vars.paused.bg,
        vars.aeon, vars.aeon.fg, vars.aeon.bg,
        vars.retard, vars.retard.fg, vars.retard.bg,
        vars.h.text, vars.h.fg, vars.h.bg,
        "(" + vars.ph.text + "), ", vars.h.fg, vars.h.bg,
        vars.m.text, vars.m.fg, vars.m.bg,
        "(" + vars.pm.text + "), ", vars.m.fg, vars.m.bg,
        vars.rage.text, vars.rage.fg, vars.rage.bg,
        vars.w.text + ", ", vars.w.fg, vars.w.bg,
        vars.e.text + " ", vars.ecolor, "",
        vars.eq.text + vars.bal.text + "|", vars.eq.fg, vars.eq.bg,
        vars.c.text + vars.k + vars.d + vars.b + " ", vars.c.fg, vars.c.bg,
        vars.target.text + " ", vars.target.fg, vars.target.bg,
        vars.kai.text, vars.kai.fg, vars.kai.bg,
        vars.kaitrance.text, vars.kaitrance.fg, vars.kaitrance.bg,
        vars.vitality.text, vars.vitality.fg, vars.vitality.bg,
        vars.stance.text + " ", vars.stance.fg, vars.stance.bg,
        vars.affString.text + " ", vars.affString.fg, vars.affString.bg,
        diffh.text + " ", vars.diffh.fg, vars.diffh.bg,
        diffm.text + " ", vars.diffm.fg, vars.diffm.bg,
    );
};

prompt.vars = {
    blackout: false,
    h: {text: "0", fg: "green", bg: ""},
    m: {text: "0", fg: "green", bg: ""},
    e: {text: "0", fg: "green", bg: ""},
    w: {text: "0", fg: "green", bg: ""},
    rage: {text: "", fg: "green", bg: ""},
    xp: {text: "", fg: "", bg: ""},
    maxh: {text: "", fg: "", bg: ""},
    maxm: {text: "", fg: "", bg: ""},
    maxe: {text: "", fg: "", bg: ""},
    maxw: {text: "", fg: "", bg: ""},
    ph: {text: "100%", fg: "", bg: ""},
    pm: {text: "100%", fg: "", bg: ""},
    pe: {text: "100%", fg: "", bg: ""},
    pw: {text: "100%", fg: "", bg: ""},
    diffh: {text: "", fg: "green", bg: ""},
    diffm: {text: "", fg: "green", bg: ""},
    diffxp: {text: "", fg: "", bg: ""},
    target: {text: "", fg: "red", bg: ""},
    eq: {text: "", fg: "", bg: ""},
    bal: {text: "", fg: "", bg: ""},
    c: {text: "", fg: "", bg: ""},
    k: {text: "", fg: "", bg: ""},
    d: {text: "", fg: "", bg: ""},
    b: {text: "", fg: "", bg: ""},
    affs: {},
    affString: {text: "", fg: "brown", bg: ""},
    paused: {text: "", fg: "", bg: ""},
    retard: {text: "", fg: "", bg: ""},
    aeon: {text: "", fg: "", bg: ""},
    kai: {text: "", fg: "", bg: ""},
    vitality: {text: "", fg: "purple", bg: ""},
    kaitrance: {text: "", fg: "blue", bg: ""},
    shintrance: {text: "", fg: "", bg: ""},
    stance: {text: "", fg: "white", bg: ""},
};

prompt.affAbbrev = {
    addiction: {text: 'add', fg: '', bg: ''},
    aeon: {text: 'ae', fg: '', bg: ''},
    agoraphobia: {text: 'agor', fg: '', bg: ''},
    airdisrupt: {text: 'adsr', fg: '', bg: ''},
    amnesia: {text: 'amn', fg: '', bg: ''},
    anorexia: {text: 'ano', fg: '', bg: ''},
    asleep: {text: 'asl', fg: '', bg: ''},
    asthma: {text: 'ast', fg: '', bg: ''},
    blackout: {text: 'bo', fg: '', bg: ''},
    blindness: {text: 'unb', fg: '', bg: ''},
    bound: {text: 'bnd', fg: '', bg: ''},
    brokenleftarm: {text: 'la1', fg: '', bg: ''},
    brokenleftleg: {text: 'll1', fg: '', bg: ''},
    brokenrightarm: {text: 'ra1', fg: '', bg: ''},
    brokenrightleg: {text: 'rl1', fg: '', bg: ''},
    bruisedribs: {text: 'ribs', fg: '', bg: ''},
    burning: {text: 'burn', fg: '', bg: ''},
    charredburn: {text: '4burn', fg: '', bg: ''},
    claustrophobia: {text: 'clau', fg: '', bg: ''},
    clumsiness: {text: 'cl', fg: '', bg: ''},
    confusion: {text: 'con', fg: '', bg: ''},
    corruption: {text: 'corr', fg: '', bg: ''},
    crackedribs: {text: 'cr', fg: '', bg: ''},
    damagedleftarm: {text: 'la2', fg: '', bg: ''},
    damagedleftleg: {text: 'll2', fg: '', bg: ''},
    damagedrightarm: {text: 'ra2', fg: '', bg: ''},
    damagedrightleg: {text: 'rl2', fg: '', bg: ''},
    damagedhead: {text: 'hd2', fg: '', bg: ''},
    darkshade: {text: 'dark', fg: '', bg: ''},
    dazed: {text: 'dzd', fg: '', bg: ''},
    deadening: {text: 'dea', fg: '', bg: ''},
    deafness: {text: 'und', fg: '', bg: ''},
    dehydrated: {text: 'deh', fg: '', bg: ''},
    dementia: {text: 'dem', fg: '', bg: ''},
    disloyalty: {text: 'disl', fg: '', bg: ''},
    disrupted: {text: 'disr', fg: '', bg: ''},
    dissonance: {text: 'disso', fg: '', bg: ''},
    dizziness: {text: 'diz', fg: '', bg: ''},
    entangled: {text: 'entgl', fg: '', bg: ''},
    epilepsy: {text: 'epi', fg: '', bg: ''},
    extremeburn: {text: '3burn', fg: '', bg: ''},
    fear: {text: 'fear', fg: '', bg: ''},
    frozen: {text: 'frz', fg: '', bg: ''},
    generosity: {text: 'gen', fg: '', bg: ''},
    haemophilia: {text: 'haem', fg: '', bg: ''},
    hallucinations: {text: 'hall', fg: '', bg: ''},
    hamstrung: {text: 'hms', fg: '', bg: ''},
    healthleech: {text: 'hthl', fg: '', bg: ''},
    heartseed: {text: 'heart', fg: '', bg: ''},
    hellsight: {text: 'hell', fg: '', bg: ''},
    hypersomnia: {text: 'hypers', fg: '', bg: ''},
    hypochondria: {text: 'hypoch', fg: '', bg: ''},
    hypothermia: {text: 'hypoth', fg: '', bg: ''},
    icefist: {text: 'ice', fg: '', bg: ''},
    impaled: {text: 'impl', fg: '', bg: ''},
    impatience: {text: 'impat', fg: '', bg: ''},
    itching: {text: 'itch', fg: '', bg: ''},
    justice: {text: 'just', fg: '', bg: ''},
    laceratedthroat: {text: 'lac2', fg: '', bg: ''},
    lethargy: {text: 'let', fg: '', bg: ''},
    loneliness: {text: 'lon', fg: '', bg: ''},
    lovers: {text: 'love', fg: '', bg: ''},
    /*insulation: {text: 'cal',*/
    whisperingmadness: {text: 'mad', fg: '', bg: ''},
    mangledleftarm: {text: 'la3', fg: '', bg: ''},
    mangledleftleg: {text: 'll3', fg: '', bg: ''},
    mangledrightarm: {text: 'ra3', fg: '', bg: ''},
    mangledrightleg: {text: 'rl3', fg: '', bg: ''},
    mangledhead: {text: 'hd3', fg: '', bg: ''},
    masochism: {text: 'maso', fg: '', bg: ''},
    meltingburn: {text: '5burn', fg: '', bg: ''},
    mildtrauma: {text: 'tor1', fg: '', bg: ''},
    nausea: {text: 'nau', fg: '', bg: ''},
    slimeobscure: {text: 'nkh', fg: '', bg: ''},
    numbedleftarm: {text: 'nbla', fg: '', bg: ''},
    numbedrightarm: {text: 'nbra', fg: '', bg: ''},
    pacified: {text: 'pac', fg: '', bg: ''},
    paralysis: {text: 'par', fg: '', bg: ''},
    paranoia: {text: 'prn', fg: '', bg: ''},
    peace: {text: 'pea', fg: '', bg: ''},
    phlogistication: {text: 'phlog', fg: '', bg: ''},
    pinshot: {text: 'psh', fg: '', bg: ''},
    prone: {text: 'pr', fg: '', bg: ''},
    recklessness: {text: 'reck', fg: '', bg: ''},
    retardation: {text: 'ret', fg: '', bg: ''},
    roped: {text: 'rop', fg: '', bg: ''},
    sanguinehumour: {text: 'sanH', fg: '', bg: ''},
    scalded: {text: 'scald', fg: '', bg: ''},
    scytherus: {text: 'scy', fg: '', bg: ''},
    selarnia: {text: 'sel', fg: '', bg: ''},
    sensitivity: {text: 'sen', fg: '', bg: ''},
    serioustrauma: {text: 'tor2', fg: '', bg: ''},
    severeburn: {text: '2burn', fg: '', bg: ''},
    shivering: {text: 'shiv', fg: '', bg: ''},
    shyness: {text: 'shy', fg: '', bg: ''},
    skullfractures: {text: 'sf', fg: '', bg: ''},
    slashedthroat: {text: 'lac1', fg: '', bg: ''},
    sleeping: {text: 'slp', fg: '', bg: ''},
    slickness: {text: 'sli', fg: '', bg: ''},
    //spiritdisrupt: {text: 'sdsr', // CUSTOM
    stain: {text: 'sta', fg: '', bg: ''},
    stupidity: {text: 'st', fg: '', bg: ''},
    stuttering: {text: 'stut', fg: '', bg: ''},
    homunculusmercury: {text: 'merc', fg: '', bg: ''},
    temperedcholeric: {text: 'choH', fg: '', bg: ''},
    temperedmelancholic: {text: 'melaH', fg: '', bg: ''},
    temperedphlegmatic: {text: 'phleH', fg: '', bg: ''},
    temperedsanguine: {text: 'sanH', fg: '', bg: ''},
    timeflux: {text: 'tmfx', fg: '', bg: ''},
    torntendons: {text: 'tt', fg: '', bg: ''},
    transfixation: {text: 'trfx', fg: '', bg: ''},
    vertigo: {text: 'vert', fg: '', bg: ''},
    vitrification: {text: 'vitri', fg: '', bg: ''},
    voidfist: {text: 'void', fg: '', bg: ''},
    voyria: {text: 'voy', fg: '', bg: ''},
    waterdisrupt: {text: 'wdsr', fg: '', bg: ''},
    weariness: {text: 'wea', fg: '', bg: ''},
    webbed: {text: 'web', fg: '', bg: ''},
    wristfractures: {text: 'wf', fg: '', bg: ''},
};

const colorPercentage = (perc) => {
        return perc > 75 ? 'green' : (perc >= 33 ? 'yellow' : 'red');
};

let setPromptVitals = function(vitals) {
    let vars = nexsys.prompt.vars;
    vars.h.text = vitals.h;
    vars.m.text = vitals.m;
    vars.e.text = vitals.e;
    vars.w.text = vitals.w;
    vars.xp.text = vitals.xp;
    vars.rage.text = vitals.rage > 0 ? vitals.rage : "";
    vars.maxh.text = vitals.maxh;
    vars.maxm.text = vitals.maxm;
    vars.maxe.text = vitals.maxe;
    vars.maxw.text = vitals.maxw;
    vars.bleed.text = vitals.bleed;
    vars.rage.text = vitals.rage;

    let perch = vitals.h*100/vitals.maxh;
    let percm = vitals.m*100/vitals.maxm;
    let perce = vitals.e*100/vitals.maxe;
    let percw = vitals.w*100/vitals.maxw;

    vars.h.fg = nexsys.prompt.colorPercentage(perch);
    vars.m.fg = nexsys.prompt.colorPercentage(percm);
    vars.e.fg = nexsys.prompt.colorPercentage(perce);
    vars.w.fg = nexsys.prompt.colorPercentage(percw);

    vars.ph.text = perch.toFixed(1)+"%";
    vars.pm.text = percm.toFixed(1)+"%";
    vars.pe.text = perce.toFixed(1)+"%";
    vars.pw.text = percw.toFixed(1)+"%";
};

let setPromptAffs = function() {
    let promptAffs = [];
    let affs = nexsys.prompt.vars.affs;
    let affAbbrev = nexsys.prompt.affAbbrev;

    for(let aff in affs) {
        if(affs[aff]) {
            if(affs[aff] === true) {
                promptAffs.push(affAbbrev.hasOwnProperty(aff) ? affAbbrev[aff] : aff);
            }
            else {
                promptAffs.push((affAbbrev.hasOwnProperty(aff) ? affAbbrev[aff] : aff) + "\(" + affs[aff] + "\)");
            }
        }
    }

    nexsys.prompt.vars.affString = promptAffs.length > 0 ?  "["+promptAffs.join(" ")+"]" : "";
};

let gotPromptAff = function(aff) {
    let affs = nexsys.prompt.vars.affs;
    affs[aff.name] = aff.count || true;

    setPromptAffs();
};

let lostPromptAff = function(aff) {
    let affs = nexsys.prompt.vars.affs;
    affs[aff.name] = false;

    setPromptAffs();
};

let setPromptDefs = function(args) {
    nexsys.prompt.vars.c = nexsys.Defs.cloak.have ? "c" : "";
    nexsys.prompt.vars.k = nexsys.Defs.kola.have ? "k" : "";
    nexsys.prompt.vars.d = nexsys.Affs.deafness.have ? "" : "d";
    nexsys.prompt.vars.b = nexsys.Affs.blindness.have ? "" : "b";
};

let setPromptBals = function(args) {
    nexsys.prompt.vars.eq = nexsys.Bals.balance.have ? "x" : "";
    nexsys.prompt.vars.bal = nexsys.Bals.equilibrium.have ? "e" : "";
};

let setHealthDiffPrompt = function(args) {
    nexsys.prompt.vars.diffh = args.diff < 0 ? "("+args.diff+")h" : "(+"+args.diff+")h";
    nexsys.prompt.vars.diffhcolor = args.diff < 0 ? "red" : "green";
};

let setManaDiffPrompt = function(args) {
    nexsys.prompt.vars.diffm = args.diff < 0 ? "("+args.diff+")m" : "(+"+args.diff+")m";
    nexsys.prompt.vars.diffmcolor = args.diff < 0 ? "red" : "green";
};


eventStream.registerEvent('AffGot', gotPromptAff);
eventStream.registerEvent('AffLost', lostPromptAff);
eventStream.registerEvent('SystemLoaded', setPromptDefs);
eventStream.registerEvent('DefGot', setPromptDefs);
eventStream.registerEvent('DefLost', setPromptDefs);
eventStream.registerEvent('SystemLoaded', setPromptBals);
eventStream.registerEvent('BalanceGot', setPromptBals);
eventStream.registerEvent('BalanceLost', setPromptBals);
eventStream.registerEvent('SystemCharVitalsUpdated', setPromptVitals);
eventStream.registerEvent('HealthUpdated', setHealthDiffPrompt);
eventStream.registerEvent('ManaUpdated', setManaDiffPrompt);
eventStream.registerEvent('SystemPaused',  function(args) { nexsys.prompt.vars.paused.text = "(p)"; });
eventStream.registerEvent('SystemUnpaused',  function(args) { nexsys.prompt.vars.paused.text = ""; });
eventStream.registerEvent('aeonLostAffEvent', function(args) { nexsys.prompt.vars.aeon.text = ""; });
eventStream.registerEvent('aeonGotAffEvent', function(args) { nexsys.prompt.vars.aeon.text = "(a)"; });
eventStream.registerEvent('SystemSlowModeOn', function(args) { nexsys.prompt.vars.retard.text = "(r)"; });
eventStream.registerEvent('SystemSlowModeOff', function(args) { nexsys.prompt.vars.retard.text = ""; });