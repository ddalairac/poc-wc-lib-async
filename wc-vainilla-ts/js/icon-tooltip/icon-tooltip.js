var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import WC from './WC.js';
class IconTooltip extends WC {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        this.loadTemplate();
    }
    loadTemplate() {
        return __awaiter(this, void 0, void 0, function* () {
            const template = yield this.setTemplateFile("./html/icon-tooltip.html");
            this.shadow.appendChild(template.content.cloneNode(true));
            this.shadow.appendChild(this.setStylesFile('./css/icon-tooltip.css'));
            this.loadData();
        });
    }
    loadData() {
        this.dataText = this.getAttribute('data-text');
        this.img = this.getAttribute('img');
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
        if (infoEl) {
            infoEl.innerText = value;
        }
    }
    ;
    get img() {
        return this.getAttribute('img');
    }
    ;
    set img(value) {
        this.setAttribute('img', value);
        const imgEl = this.shadowRoot.querySelector('img');
        if (imgEl) {
            imgEl.src = value;
        }
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
}
customElements.define('icon-tooltip', IconTooltip);
//# sourceMappingURL=icon-tooltip.js.map