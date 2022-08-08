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
<div>
<label></label>
<input>
<span>Message</span>
</div>
`;
let WCInput = class WCInput extends WCComp {
    constructor() {
        super(compTemplate, './dist/input.css');
        this.onLoad();
    }
    set errormsj(value) {
        console.log('spanEl', this.spanEl.textContent, this.spanEl);
        this.spanEl.textContent = value;
    }
    set label(value) {
        console.log('labelEl', this.labelEl.textContent, this.labelEl);
        this.labelEl.textContent = value;
    }
    set validation(value) {
        if (value === 'invalid') {
            this.divEl.classList.add('invalid');
        }
        else {
            this.divEl.classList.remove('invalid');
        }
    }
    onLoad() {
        this.divEl = this.shadowRoot.querySelector("div");
        this.labelEl = this.shadowRoot.querySelector("label");
        this.spanEl = this.shadowRoot.querySelector("span");
        this.inputEl = this.shadowRoot.querySelector("input");
        this.inputEl.addEventListener("input", (event) => {
            var _a;
            event.stopPropagation();
            const target = event.target;
            (_a = this.inputEl) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new CustomEvent("app-input", {
                bubbles: true,
                composed: true,
                detail: target.value,
            }));
        });
    }
    onConnect() {
    }
    onAttrChange(attribute, oldValue, newValue) {
        this.spanEl.textContent = newValue;
    }
};
WCInput = __decorate([
    WCProp(['errormsj', 'validation', 'label'])
], WCInput);
customElements.define("app-input", WCInput);
//# sourceMappingURL=input.js.map