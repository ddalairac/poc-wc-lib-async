var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import WCComp from './WCComp.js';
import { WCProp } from './WCProp.js';
const compTemplate = document.createElement("template");
compTemplate.innerHTML = `
<button class="btn"><slot>Button Text</slot></button>
`;
let WCButton = class WCButton extends WCComp {
    constructor() {
        super(compTemplate, './dist/button.css');
    }
    onWcRender() {
        return `
      <button class="btn ${this.variant} ${this.isFading()}" ${this.isDisabled()}>
      <slot>Button Text</slot>
    </button>
    `;
    }
    onConnect() {
        this.buttonEl = this.shadowroot.querySelector("button");
        this.initialBtnText = this.buttonEl.innerText;
        this.buttonEl.addEventListener("click", (event) => {
            event.stopPropagation();
            this.buttonEl.dispatchEvent(new CustomEvent("click-app-button", {
                bubbles: true,
                composed: true,
            }));
        });
    }
    get inprogress() {
        return !!this._inprogress;
    }
    set inprogress(value) {
        this._inprogress = !!value;
    }
    get variant() {
        return this._variant;
    }
    set variant(value) {
        if (value === 'primary' || value === 'secondary') {
            this._variant = value;
        }
        else {
            console.warn(`varian ${value} not valid`);
        }
    }
    isFading() {
        return (this._inprogress) ? 'fading' : '';
    }
    isDisabled() {
        return (this._inprogress) ? 'disabled' : '';
    }
};
WCButton = __decorate([
    WCProp(['inprogress', 'variant'])
], WCButton);
customElements.define("app-button", WCButton);
//# sourceMappingURL=button.js.map