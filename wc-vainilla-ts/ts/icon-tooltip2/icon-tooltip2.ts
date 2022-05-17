import WC2 from './WC2.js';


/************* Inner template example ***************/

const template = document.createElement('template');
template.innerHTML = `
<div class="wrapper">
  <span class="icon" tabindex="0">
    <img />
  </span>
  <span class="info"></span>
</div>
`;

class IconTooltip2 extends WC2 {
  // class IconTooltip extends HTMLElement {
  shadow: ShadowRoot

  constructor() {
    super();

    // Create a shadow root
    this.shadow = this.attachShadow({ mode: 'open' });

    // Add HTML to shadow dom
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Add CSS to shadow dom
    this.shadow.appendChild(this.setStylesFile('./css/icon-tooltip.css'));
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
    infoEl.innerText = value;
  };


  get img(): string {
    return this.getAttribute('img');
  };

  set img(value: string) {
    this.setAttribute('img', value)
    const imgEl = this.shadowRoot.querySelector('img');
    imgEl.src = value;
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

  connectedCallback() {
    // console.log('connectedCallback icon-tooltip2');
  }

  disconnectedCallback() {
    // console.log('disconnectedCallback icon-tooltip2');
  }

  adoptedCallback() {
    // console.log('adoptedCallback icon-tooltip2');
  }

}

// Define the new element
customElements.define('icon-tooltip2', IconTooltip2);


