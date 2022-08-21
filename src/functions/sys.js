/* global set_current_target, eventStream, nexusclient */
if (typeof nexusclient === "undefined") {
  window.nexusclient = {
    variables() {
      return {
        get() {
          return false;
        },
      };
    },
  };
}
export const sys = {
  settings: {
    sep: nexusclient.variables().get("commandSeparator") || undefined,
    customPrompt: false,
    echoAffGot: false,
    echoAffLost: false,
    echoDefGot: true,
    echoDefLost: true,
    echoBalanceGot: true,
    echoBalanceLost: false,
    echoTrackableGot: true,
    echoTrackableLost: true,
    echoPrioritySet: true,
  },
  state: {
    paused: false,
    slowMode: false,
    sep: nexusclient.variables().get("commandSeparator") || undefined,
    curingMethod: "Transmutation",
    sipPriority: "Health",
    sipHealthAt: 80,
    sipManaAt: 80,
    mossHealthAt: 80,
    mossManaAt: 80,
    focus: true,
    focusOverHerbs: true,
    tree: true,
    clot: true,
    clotAt: 5,
    insomnia: true,
    fracturesAbove: 30,
    manaAbilitiesAbove: 1,
    batch: true,
  },
  char: {
    class: "",
    race: "",
    color: "",
    h: 5000,
    m: 5000,
    e: 20000,
    w: 20000,
    xp: 0,

    maxh: 5000,
    maxm: 5000,
    maxw: 20000,
    maxe: 20000,

    bleed: 0,
    rage: 0,
    kai: 0,
    shin: 0,
    stance: "",
    target: "",
  },
  target: "",
  lifevision: false,

  isPaused() {
    return this.state.paused;
  },

  isSlowMode() {
    return this.state.slowMode;
  },

  getClass() {
    return this.char.class;
  },

  isClass(className) {
    if (className === undefined) {
      return true;
    }

    if (Array.isArray(className)) {
      for (let i = 0; i < className.length; i++) {
        if (this.checkClass(className[i])) {
          return true;
        }
      }
      return false;
    } else {
      return this.checkClass(className);
    }
  },

  checkClass(className) {
    return this.getClass().toLowerCase() === className.toLowerCase();
  },

  setTarget(target) {
    target = target.toProperCase();
    eventStream.raiseEvent("TargetSetEvent", target);

    if (this.target !== target) {
      this.target = target;
      eventStream.raiseEvent("TargetChanged", target);
    }
    eventStream.raiseEvent("SystemOutputAdd", "settarget " + target);
    set_current_target(target, true);
  },

  isTarget(person) {
    return person === undefined
      ? false
      : this.target.toLowerCase() === person.toLowerCase();
  },

  pause() {
    this.state.paused = true;
    eventStream.raiseEvent("SystemPaused");
  },

  unpause() {
    this.state.paused = false;
    eventStream.raiseEvent("SystemUnpaused");
  },

  pauseToggle() {
    if (this.isPaused()) {
      this.unpause();
    } else {
      this.pause();
    }
  },

  slowOn() {
    this.state.slowMode = true;
    eventStream.raiseEvent("SystemSlowModeOn");
  },

  slowOff() {
    this.state.slowMode = false;
    eventStream.raiseEvent("SystemSlowModeOff");
  },

  slowToggle() {
    if (this.isSlowMode()) {
      this.slowOff();
    } else {
      this.slowOn();
    }
  },

  setSystemStatus(status, arg) {
    this.state[status] = arg;
    eventStream.raiseEvent("SystemStatusSetEvent", {
      status: status,
      arg: arg,
    });
  },

  toggleSystemStatus(status) {
    if (this.state[status] === "Health") {
      this.setSystemStatus(status, "Mana");
    } else if (this.state[status] === "Mana") {
      this.setSystemStatus(status, "Health");
    } else {
      this.setSystemStatus(status, !this.state[status]);
    }
  },
};

export const system_loaded = false;

export const sysLogging = {
  locations: "console",
  logEvents: false,
};

export function sysLog(text) {
  if (sysLogging.locations === "console") {
    console.log(text);
  }
}

export function sysLoggingToggle(enable) {
  sysLogging.logEvents = enable === "on";
}
