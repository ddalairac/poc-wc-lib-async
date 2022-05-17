import WC3 from './WC3.js';
class IconTooltip3 extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
    }
    render() {
        this.shadow.innerHTML = `
    <div class="wrapper">
      <span class="icon" tabindex="0">
        <img src="${this.img}"/>
      </span>
      <span class="info">${this.dataText}</span>
    </div>
    `;
        this.shadow.appendChild(WC3.setStylesFile('./css/icon-tooltip.css'));
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
    }
    ;
    get img() {
        return this.getAttribute('img');
    }
    ;
    set img(value) {
        this.setAttribute('img', value);
    }
    ;
    attributeChangedCallback(propName, oldValue, newValue) {
        if (propName === 'data-text' && oldValue !== newValue) {
            this.dataText = newValue;
        }
        if (propName === 'img' && oldValue !== newValue) {
            this.img = newValue;
        }
        this.render();
    }
    connectedCallback() {
        this.render();
    }
    disconnectedCallback() {
    }
    adoptedCallback() {
    }
}
customElements.define('icon-tooltip3', IconTooltip3);
//# sourceMappingURL=icon-tooltip3.js.map