var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import WCComp from './WCComp.js';
import { WCProp } from './WCProp.js';
const compTemplate = document.createElement("template");
compTemplate.innerHTML;
let WCInput = class WCInput extends WCComp {
    constructor() {
        super(compTemplate, './dist/input.css');
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
    onWcConnect() {
        const inputEl = this.shadowRoot.querySelector("input");
        inputEl.addEventListener("input", (event) => {
            event.stopPropagation();
            const target = event.target;
            inputEl === null || inputEl === void 0 ? void 0 : inputEl.dispatchEvent(new CustomEvent("app-input", {
                bubbles: true,
                composed: true,
                detail: target.value,
            }));
        });
    }
    onWcAttrChange(attribute, oldValue, newValue) {
    }
    onWcRender() {
        console.log('render input');
        return `
    <div class="${this._validation}">
      <label>${this._label}</label>
      <input>
      <span>${this._errormsj}</span>
    </div>
    `;
    }
};
WCInput = __decorate([
    WCProp(['errormsj', 'validation', 'label'])
], WCInput);
customElements.define("app-input", WCInput);
//# sourceMappingURL=input.js.map