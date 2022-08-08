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
        this.onLoad();
    }
    onLoad() {
        this.initialTemplate = this.innerHTML;
        this.buttonEl = this.shadowroot.querySelector("button");
        this.buttonEl.addEventListener("click", (event) => {
            event.stopPropagation();
            this.buttonEl.dispatchEvent(new CustomEvent("click-app-button", {
                bubbles: true,
                composed: true,
            }));
        });
    }
    set inprogress(value) {
        if (value === 'true') {
            this.innerHTML = "Loading...";
            this.buttonEl.setAttribute("disabled", "true");
            this.buttonEl.classList.add("fading");
        }
        else {
            this.innerHTML = this.initialTemplate;
            this.buttonEl.removeAttribute("disabled");
            this.buttonEl.classList.remove("fading");
        }
    }
    set variant(value) {
        if (value === 'secondary') {
            this.buttonEl.classList.add('secondary');
        }
        else {
            this.buttonEl.classList.remove('secondary');
        }
    }
};
WCButton = __decorate([
    WCProp(['inprogress', 'variant'])
], WCButton);
customElements.define("app-button", WCButton);
//# sourceMappingURL=button.js.map