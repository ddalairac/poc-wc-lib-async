var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import WCComp from './WCComp.js';
import { WCProp } from './WCProp.js';
import { WCEvent } from './WCEvent.js';
const compTemplate = document.createElement("template");
compTemplate.innerHTML;
let WCInput = class WCInput extends WCComp {
    constructor() {
        super(compTemplate, './dist/input.css');
        console.log('...class WCInput');
        this.someevent = 'bla bla';
        console.log('someevent ', this.someevent);
    }
    get errormsj() {
        return this._errormsj;
    }
    set errormsj(value) {
        this._errormsj = value;
    }
    get label() {
        return this._label;
    }
    set label(value) {
        this._label = value;
    }
    get validation() {
        return this._validation;
    }
    set validation(value) {
        this._validation = value;
    }
    onConnect() {
        this.addListeners();
    }
    onBeforeAtributeChanged() {
        this.cleanListeners();
    }
    onAtributeChanged(attribute, oldValue, newValue) {
        this.addListeners();
    }
    onDisconnected() {
        this.cleanListeners();
    }
    clickHandler(event) {
        event.stopPropagation();
        const target = event.target;
        this.dispatchEvent(new CustomEvent("app-input", {
            bubbles: true,
            composed: true,
            detail: target.value,
        }));
    }
    addListeners() {
        const inputEl = this.shadowRoot.querySelector("input");
        inputEl.addEventListener("input", this.clickHandler.bind(this), true);
    }
    cleanListeners() {
        const inputEl = this.shadowRoot.querySelector("input");
        if (inputEl) {
            inputEl.removeEventListener('input', this.clickHandler, true);
        }
    }
    onWcRender() {
        return `
    <div class="${this._validation}">
      <label>${this._label}</label>
      <input>
      <span>${this._errormsj}</span>
    </div>
    `;
    }
};
__decorate([
    WCEvent
], WCInput.prototype, "someevent", void 0);
WCInput = __decorate([
    WCProp(['errormsj', 'validation', 'label'])
], WCInput);
customElements.define("app-input", WCInput);
//# sourceMappingURL=input.js.map