var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WCProp } from './wc-fr.js';
const compTemplate = document.createElement("template");
compTemplate.innerHTML = `
<style>
  :host {
    display: block;
  }
  :host([inprogress]) {
    transform: scale(1.1);
    transform-origin: top left;
  }
  .btn {
    background-color: #0070f3;
    color: white;
    border: none;
    border-radius: 7px;
    margin-top: 5px;
    padding: 0 2rem;
    font-size: 1.5rem;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
    box-shadow: 0 4px 14px 0 rgba(0, 118, 255, 0.39);
  }
  .btn:hover {
    background-color: #1d80f0;
  }
  .btn:disabled {
    background-color: #6aa8f0;
  }
  .fading {
    animation: fading 0.5s infinite;
  }
  .secondary {
    background-color:grey;
  }

  @keyframes fading {
    0% {
      color: #6aa8f0;
    }
    50% {
      color: white;
    }
    100% {
      color: #6aa8f0;
    }
  }
</style>
<button class="btn"><slot>Button Text</slot></button>
`;
let WCButton = class WCButton extends HTMLElement {
    constructor() {
        var _a;
        super();
        this.attachShadow({ mode: "open" });
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(compTemplate.content.cloneNode(true));
        this.onLoad();
        console.log('-----constructor', this);
    }
    onLoad() {
        var _a;
        this.initialTemplate = this.innerHTML;
        this.buttonEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        console.log('buttonEl:', this.buttonEl);
        this.buttonEl.addEventListener("click", (event) => {
            event.stopPropagation();
            this.buttonEl.dispatchEvent(new CustomEvent("click-app-button", {
                bubbles: true,
                composed: true,
            }));
        });
    }
    connectedCallback() {
        console.log('-----connectedCallback', this);
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