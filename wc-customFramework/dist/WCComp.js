export default class WCComp extends HTMLElement {
    constructor(compTemplate, compCss) {
        super();
        this.shadowroot = this.attachShadow({ mode: "open" });
        this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
        this.shadowroot.appendChild(this.setStylesFile(compCss));
    }
    onAttrChange(attribute, oldValue, newValue) {
    }
    onConnect() {
    }
    onDisconnect() {
    }
    onObserved() {
    }
    onAdopted() {
    }
    connectedCallback() {
        this.onConnect();
    }
    disconnectedCallback() {
        this.onDisconnect();
    }
    adoptedCallback() {
        this.onAdopted();
    }
    observedAttributes() {
        this.onObserved();
    }
    setStylesFile(file) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', file);
        return linkElem;
    }
}
//# sourceMappingURL=WCComp.js.map