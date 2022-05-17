import WC3 from './WC3.js';


/************* Re render template example ***************/

  class IconTooltip3 extends HTMLElement {
  shadow: ShadowRoot

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  render(){
    this.shadow.innerHTML = `
    <div class="wrapper">
      <span class="icon" tabindex="0">
        <img src="${this.img}"/>
      </span>
      <span class="info">${this.dataText}</span>
    </div>
    `;
    // Add CSS to shadow dom
    this.shadow.appendChild(WC3.setStylesFile('./css/icon-tooltip.css'));
  }

  static get observedAttributes() {
    // console.log('observedAttributes WC3')
    return ['data-text', 'img'];
  }

  get dataText(): string {
    return this.getAttribute('data-text');
  };

  set dataText(value: string) {
   this.setAttribute('data-text', value)
  };

  get img(): string {
    return this.getAttribute('img');
  };

  set img(value: string) {
   this.setAttribute('img', value)
  };

  attributeChangedCallback(propName, oldValue, newValue) {
    // console.log('attributeChangedCallback WC3', { propName, oldValue, newValue })
    
    if (propName === 'data-text' && oldValue !== newValue) {
      this.dataText = newValue;
    }
    if (propName === 'img' && oldValue !== newValue) {
      this.img = newValue;
    }
    this.render()
  }

  connectedCallback() {
    // console.log('connectedCallback icon-tooltip3');
    this.render()
  }

  disconnectedCallback() {
    // console.log('disconnectedCallback icon-tooltip3');
  }

  adoptedCallback() {
    // console.log('adoptedCallback icon-tooltip3');
  }

}

// Define the new element
customElements.define('icon-tooltip3', IconTooltip3);


