const template = document.createElement("template");
template.innerHTML = `
<style>
  label {
    display: block;
  }
  input {
    min-width: 200px;
    border-radius: 3px;
    border: 1px solid lightgray;
    padding: 10px;
  }
  span {
    font-size: 0.8rem;
    display: none;
  }
  :host([validation="invalid"]) span {
    display: block;
    color: red;
  }

  :host([validation="invalid"]) input {
    border-color: red;
  }
  :host([validation="valid"]) span {
    display: block;
    color: green;
  }

  :host([validation="valid"]) input {
    border-color: green;
  }
</style>
<label></label>
<input>
<span>Message</span>
`;
class WCInput extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    get help() {
        return this.getAttribute("help");
    }
    set help(help) {
        this.setAttribute("help", help);
    }
    get validation() {
        return this.getAttribute("validation");
    }
    set validation(validation) {
        this.setAttribute("validation", validation);
    }
    connectedCallback() {
        var _a, _b, _c, _d;
        (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(template.content.cloneNode(true));
        this.labelEl = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector("label");
        this.labelEl.textContent = this.getAttribute("label");
        this.spanEl = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector("span");
        this.spanEl.textContent = this.getAttribute("help");
        const input = (_d = this.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector("input");
        input.type = this.getAttribute("type");
        input === null || input === void 0 ? void 0 : input.addEventListener("input", (event) => {
            event.stopPropagation();
            const target = event.target;
            input === null || input === void 0 ? void 0 : input.dispatchEvent(new CustomEvent("app-input", {
                bubbles: true,
                composed: true,
                detail: target.value,
            }));
        });
    }
    static get observedAttributes() {
        return ["help"];
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        this.spanEl.textContent = newValue;
    }
}
customElements.define("app-input", WCInput);
//# sourceMappingURL=input.js.map