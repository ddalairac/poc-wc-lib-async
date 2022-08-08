import WCComp from './WCComp.js'
import { WCProp } from './WCProp.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML = /* html */ `
<div>
<label></label>
<input>
<span>Message</span>
</div>
`;
@WCProp(['errormsj', 'validation', 'label'])
class WCInput extends WCComp {
  constructor() {
    super(compTemplate, './dist/input.css');
    this.onLoad();
  }
  divEl: HTMLDivElement
  spanEl: HTMLSpanElement
  labelEl: HTMLLabelElement
  inputEl: HTMLInputElement

  set errormsj(value: string) {
    console.log('spanEl',this.spanEl.textContent,this.spanEl)
    this.spanEl.textContent = value
  }

  set label(value: string) {
    console.log('labelEl',this.labelEl.textContent,this.labelEl)
    this.labelEl.textContent = value
  }

  set validation(value: string) {
    // console.log('validation',value)
    if (value === 'invalid') {
      this.divEl.classList.add('invalid')
    } else {
      this.divEl.classList.remove('invalid')
    }
  }

  onLoad() {
    // console.log('comp imput onLoad')
    this.divEl = this.shadowRoot.querySelector("div");
    this.labelEl = this.shadowRoot.querySelector("label")!;
    this.spanEl = this.shadowRoot.querySelector("span")!;
    this.inputEl = this.shadowRoot.querySelector("input");
    // this.inputEl.type = this.getAttribute("type")!;

    this.inputEl.addEventListener("input", (event: Event) => {
      event.stopPropagation();
      const target = event.target as HTMLInputElement;
      this.inputEl?.dispatchEvent(
        new CustomEvent("app-input", {
          bubbles: true,
          composed: true,
          detail: target.value,
        })
      );
    });
  }

  onConnect() {
    // console.log('comp imput onConnect')
  }

  onAttrChange(attribute, oldValue, newValue) {
    this.spanEl.textContent = newValue;
  }

}

customElements.define("app-input", WCInput);
