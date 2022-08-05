const buttonTemplate = document.createElement("template");
buttonTemplate.innerHTML = `
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
class WCButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b;
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(buttonTemplate.content.cloneNode(true));
        this.buttonEl = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("button");
        this.initialTempleate = this.innerHTML;
        this.buttonEl.addEventListener("click", (event) => {
            event.stopPropagation();
            this.buttonEl.dispatchEvent(new CustomEvent("click-app-button", {
                bubbles: true,
                composed: true,
            }));
        });
    }
    set inprogress(progress) {
        if (progress) {
            this.setAttribute("inprogress", "true");
        }
        else {
            this.removeAttribute("inprogress");
        }
    }
    get inprogress() {
        return this.getAttribute("inprogress");
    }
    static get observedAttributes() {
        return ["inprogress"];
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (newValue) {
            this.innerHTML = "Loading...";
            this.buttonEl.setAttribute("disabled", "true");
            this.buttonEl.classList.add("fading");
        }
        else {
            this.innerHTML = this.initialTempleate;
            this.buttonEl.removeAttribute("disabled");
            this.buttonEl.classList.remove("fading");
        }
    }
}
customElements.define("app-button", WCButton);
//# sourceMappingURL=button.js.map