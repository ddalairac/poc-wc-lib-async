import WCComp from './WCComp.js'
import { WCProp } from './WCProp.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML = /* html */ `
<button class="btn"><slot>Button Text</slot></button>
`;
@WCProp(['inprogress', 'variant'])
class WCButton extends WCComp {
  constructor() {
    super(compTemplate, './dist/button.css');
  }

  buttonEl: HTMLButtonElement
  initialBtnText: string

  override onWcRender() {
    return /* html */ `
      <button class="btn ${this.variant} ${this.isFading()}" ${this.isDisabled()}>
      <slot>Button Text</slot>
    </button>
    `;
  }

  onConnect() {
    this.buttonEl = this.shadowroot.querySelector("button")!;
    this.initialBtnText = this.buttonEl.innerText;
    // console.log('buttonEl:', this.buttonEl)
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

  _inprogress: boolean
  get inprogress() {
    return !!this._inprogress
  }
  set inprogress(value) {
    this._inprogress = !!value
    // if (value === 'true') {
    //   this.buttonEl.innerHTML = "Loading...";
    // } else {
    //   this.buttonEl.innerHTML = this.initialBtnText;
    // }
  }
  _variant: string
  get variant(): string {
    return this._variant
  }
  set variant(value) {
    if (value === 'primary' || value === 'secondary') {
      this._variant = value
    } else {
      console.warn(`varian ${value} not valid`)
    }
  }

  isFading() {
    return (this._inprogress) ? 'fading' : ''
  }
  isDisabled() {
    return (this._inprogress) ? 'disabled' : ''
  }
}

customElements.define("app-button", WCButton);
