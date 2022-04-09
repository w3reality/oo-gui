import GUI from 'lil-gui';

class OoGui {
    constructor(data, guiParams=undefined) {
        this.gui = new GUI(guiParams);
        this.data = data;
        this.params = {};
        this.defaults = {};
    }

    // abstract
    init(gui, data, params) {}

    setDefaults(defaults) {
        this.defaults = defaults;
        Object.assign(this.params, defaults);
        this.init(this.gui, this.data, this.params);

        return this;
    }

    applyDefaults() {
        Object.assign(this.params, this.defaults);
        this.updateDisplay();

        return this;
    }

    static _updateDisplay(base) {
        base.controllers.forEach(ctl => ctl.updateDisplay());
        base.folders.forEach(OoGui._updateDisplay);
    }

    updateDisplay() {
        OoGui._updateDisplay(this.gui);

        return this;
    }
}

export default OoGui;