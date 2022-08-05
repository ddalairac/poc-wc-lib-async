const template = document.createElement("template");
template.innerHTML = /* html */ `
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
  spanEl:HTMLSpanElement
  labelEl:HTMLLabelElement

  get help(): string {
    return this.getAttribute("help") as string;
  }

  set help(help: string) {
    this.setAttribute("help", help);
  }

  get validation(): string {
    return this.getAttribute("validation") as string;
  }

  set validation(validation: string) {
    this.setAttribute("validation", validation);
  }

  connectedCallback() {
    this.shadowRoot?.appendChild(template.content.cloneNode(true));
    this.labelEl = this.shadowRoot?.querySelector("label")!;
    this.labelEl.textContent = this.getAttribute("label");

    this.spanEl = this.shadowRoot?.querySelector("span")!;
    this.spanEl.textContent = this.getAttribute("help");

    const input = this.shadowRoot?.querySelector("input") as HTMLInputElement;
    input.type = this.getAttribute("type")!;
    input?.addEventListener("input", (event:Event) => {
      event.stopPropagation();
      const target = event.target as HTMLInputElement;
      input?.dispatchEvent(
        new CustomEvent("app-input", {
          bubbles: true,
          composed: true,
          detail: target.value,
        })
      );
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
