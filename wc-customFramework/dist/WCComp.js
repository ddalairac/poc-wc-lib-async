const compTemplate = document.createElement("template");
compTemplate.innerHTML = '';
export default class WCComp extends HTMLElement {
    constructor(compTemplate, compCss) {
        super();
        this.shadowroot = this.attachShadow({ mode: "open" });
        this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
        this.compCss = compCss;
    }
    onWcRender() { return ''; }
    runRender() {
        this.shadowroot.innerHTML = this.onWcRender();
        this.shadowroot.appendChild(this.setStylesFile(this.compCss));
    }
    onWcAttrChange(attribute, oldValue, newValue) {
    }
    onWcConnect() {
    }
    onWcDisconnect() {
    }
    onWcObserved() {
    }
    onWcAdopted() {
    }
    connectedCallback() {
        this.onWcConnect();
        this.runRender();
    }
    disconnectedCallback() {
        this.onWcDisconnect();
    }
    adoptedCallback() {
        this.onWcAdopted();
    }
    observedAttributes() {
        this.onWcObserved();
    }
    setStylesFile(file) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', file);
        return linkElem;
    }
}
//# sourceMappingURL=WCComp.js.map