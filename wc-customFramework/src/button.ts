import WCComp from './WCComp.js'
import { WCProp } from './WCProp.js'

const compTemplate = document.createElement("template");
compTemplate.innerHTML = /* html */ `
<button class="btn"><slot>Button Text</slot></button>
`;
@WCProp(['inprogress', 'variant'])
class WCButton extends WCComp {
  constructor() {
    super(compTemplate,'./dist/button.css');
    this.onLoad()
  }
  buttonEl: HTMLButtonElement
  initialTemplate: string

  onLoad() {
    this.initialTemplate = this.innerHTML;
    this.buttonEl = this.shadowroot.querySelector("button")!;
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
