import WCComp from './WCComp.js'
import { WCProp } from './WCProp.js'
import { WCEvent } from './WCEvent.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML
@WCProp(['errormsj', 'validation', 'label'])
class WCInput extends WCComp {
  constructor() {
    super(compTemplate, './dist/input.css');
    console.log('...class WCInput')
    this.someevent = 'bla bla'
    console.log('someevent ', this.someevent)
  }
  @WCEvent someevent

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

  onConnect() {
    this.addListeners()
  }
  onBeforeAtributeChanged() {
    this.cleanListeners()
  }
  onAtributeChanged(attribute, oldValue, newValue) {
    this.addListeners()
  }
  onDisconnected() {
    this.cleanListeners()
  }

  clickHandler(event: Event) {
    event.stopPropagation();
    const target = event.target as HTMLInputElement;
    this.dispatchEvent(
      new CustomEvent("app-input", {
        bubbles: true,
        composed: true,
        detail: target.value,
      })
    );
  }
  addListeners() {
    const inputEl = this.shadowRoot.querySelector("input");
    inputEl.addEventListener("input", this.clickHandler.bind(this), true);
  }

  cleanListeners() {
    // console.log('cleanListeners')
    const inputEl = this.shadowRoot.querySelector("input");
    if (inputEl) { inputEl.removeEventListener('input', this.clickHandler, true) }
  }

  override onWcRender() {
    // console.log('render input')
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
