import WC from './WC.js';

/************* External template example ***************/

class IconTooltip extends WC {
  // class IconTooltip extends HTMLElement {

  constructor() {
    super();

    // Create a shadow root
    this.shadow = this.attachShadow({ mode: 'open' });

    // async 
    this.loadTemplate()
  }



  async loadTemplate() {
    // Add template
    const template = await this.setTemplateFile("./html/icon-tooltip.html")
    this.shadow.appendChild(template.content.cloneNode(true));

    // Add CSS to shadow dom
    this.shadow.appendChild(this.setStylesFile('./css/icon-tooltip.css'));
    this.loadData()
  }

  loadData() {
    this.dataText = this.getAttribute('data-text');
    this.img = this.getAttribute('img')
  }


  static get observedAttributes() {
    return ['data-text', 'img'];
  }


  get dataText(): string {
    return this.getAttribute('data-text');
  };

  set dataText(value: string) {
    this.setAttribute('data-text', value)
    const infoEl = this.shadowRoot.querySelector('.info') as HTMLElement
    if (infoEl) { infoEl.innerText = value; }
    // else { console.log("data-text doesn't exist yet") }
  };


  get img(): string {
    return this.getAttribute('img');
  };

  set img(value: string) {
    this.setAttribute('img', value)
    const imgEl = this.shadowRoot.querySelector('img');
    if (imgEl) { imgEl.src = value; }
    // else { console.log("img doesn't exist yet") }
  };

  attributeChangedCallback(propName, oldValue, newValue) {
    // console.log('attributeChangedCallback WC2', { propName, oldValue, newValue })

    if (propName === 'data-text' && oldValue !== newValue) {
      this.dataText = newValue;
    }
    if (propName === 'img' && oldValue !== newValue) {
      this.img = newValue;
    }
  }


}

// Define the new element
customElements.define('icon-tooltip', IconTooltip);


