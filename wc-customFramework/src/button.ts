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
    console.log('...class WCButton')
  }

  initialBtnText: string

  override onWcRender() {
    return /* html */ `
      <button class="btn ${this.variant} ${this.isFading()}" ${this.isDisabled()} >
      <slot>Button Text</slot>
    </button>
    `;
  }

  onConnect() {
    this.addListeners()
  }
  onAtributeChanged(attribute, oldValue, newValue){
    this.addListeners()
  }

  addListeners(){
    const buttonEl = this.shadowRoot.querySelector("button")!;
    console.log('buttonEl:', buttonEl)
    buttonEl.addEventListener("click", (event) => {
      console.log('buttonEl: click')
      event.stopPropagation();
      buttonEl.dispatchEvent(
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
