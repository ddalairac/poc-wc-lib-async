import WC2 from './WC2.js';
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
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadow.appendChild(this.setStylesFile('./css/icon-tooltip.css'));
    }
    static get observedAttributes() {
        return ['data-text', 'img'];
    }
    get dataText() {
        return this.getAttribute('data-text');
    }
    ;
    set dataText(value) {
        this.setAttribute('data-text', value);
        const infoEl = this.shadowRoot.querySelector('.info');
        infoEl.innerText = value;
    }
    ;
    get img() {
        return this.getAttribute('img');
    }
    ;
    set img(value) {
        this.setAttribute('img', value);
        const imgEl = this.shadowRoot.querySelector('img');
        imgEl.src = value;
    }
    ;
    attributeChangedCallback(propName, oldValue, newValue) {
        if (propName === 'data-text' && oldValue !== newValue) {
            this.dataText = newValue;
        }
        if (propName === 'img' && oldValue !== newValue) {
            this.img = newValue;
        }
    }
    connectedCallback() {
    }
    disconnectedCallback() {
    }
    adoptedCallback() {
    }
}
customElements.define('icon-tooltip2', IconTooltip2);
//# sourceMappingURL=icon-tooltip2.js.map