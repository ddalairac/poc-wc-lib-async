import { WCProp } from './wc-fr.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML = /* html */ `
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
@WCProp(['inprogress', 'variant'])
class WCButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot?.appendChild(compTemplate.content.cloneNode(true));
    this.onLoad()
    console.log('-----constructor', this)
  }
  buttonEl: HTMLButtonElement
  initialTemplate: string

  onLoad() {
    this.initialTemplate = this.innerHTML;
    this.buttonEl = this.shadowRoot?.querySelector("button")!;
    console.log('buttonEl:', this.buttonEl)
    this.buttonEl.addEventListener("click", (event) => {
      event.stopPropagation();
      this.buttonEl.dispatchEvent(
        new CustomEvent("click-app-button", {
          bubbles: true,
          composed: true,
        })
      );
    });
  }

  connectedCallback() {
    console.log('-----connectedCallback', this)
  }

  set inprogress(value) {
    if (value === 'true') {
      this.innerHTML = "Loading...";
      this.buttonEl.setAttribute("disabled", "true");
      this.buttonEl.classList.add("fading");
    } else {
      this.innerHTML = this.initialTemplate;
      this.buttonEl.removeAttribute("disabled");
      this.buttonEl.classList.remove("fading");
    }
  }

  set variant(value) {
    if (value === 'secondary') {
      this.buttonEl.classList.add('secondary')
    } else {
      this.buttonEl.classList.remove('secondary')
    }
  }
}

customElements.define("app-button", WCButton);
