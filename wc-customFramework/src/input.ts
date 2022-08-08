import WCComp from './WCComp.js'
import { WCProp } from './WCProp.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML
@WCProp(['errormsj', 'validation', 'label'])
class WCInput extends WCComp {
  constructor() {
    super(compTemplate, './dist/input.css');
  }

  _errormsj
  get errormsj(): string {
    return this._errormsj;
  }
  set errormsj(value: string) {
    this._errormsj = value
    // this.spanEl.textContent = value
  }

  _label: string
  get label(): string {
    return this._label
  }
  set label(value: string) {
    this._label = value
  }

  _validation: string
  get validation(): string {
    return this._validation
  }
  set validation(value: string) {
    this._validation = value
  }


  onWcConnect() {
    const inputEl = this.shadowRoot.querySelector("input");

    inputEl.addEventListener("input", (event: Event) => {
      event.stopPropagation();
      const target = event.target as HTMLInputElement;
      inputEl?.dispatchEvent(
        new CustomEvent("app-input", {
          bubbles: true,
          composed: true,
          detail: target.value,
        })
      );
    });
  }

  onWcAttrChange(attribute, oldValue, newValue) {
  }

  override onWcRender() {
    console.log('render input')
    return /* html */ `
    <div class="${this._validation}">
      <label>${this._label}</label>
      <input>
      <span>${this._errormsj}</span>
    </div>
    `;
  }

}

customElements.define("app-input", WCInput);
