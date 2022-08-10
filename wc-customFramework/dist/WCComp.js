const compTemplate = document.createElement("template");
compTemplate.innerHTML = '';
export default class WCComp extends HTMLElement {
    constructor(compTemplate, compCss) {
        super();
        this.shadowroot = this.attachShadow({ mode: "open" });
        this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
        this.compCss = compCss;
        console.log(' * abstract class WCComp');
    }
    onWcRender() { return ''; }
    onCustomAtributeChanged(attribute, oldValue, newValue) { }
    runRender() {
        this.shadowroot.innerHTML = this.onWcRender();
        this.shadowroot.appendChild(this.setStylesFile(this.compCss));
    }
    onBeforeAtributeChanged() {
        console.log('onBeforeAtributeChanged');
    }
    onAtributeChanged(attribute, oldValue, newValue) {
        console.log('onAttrChange', { attribute, oldValue, newValue });
    }
    onConnectd() {
        console.log('onConnect', this);
    }
    onDisconnected() {
        console.log('onDisconnect');
    }
    onObserved() {
        console.log('onObserved');
    }
    onAdopted() {
        console.log('onObserved');
    }
    connectedCallback() {
        this.runRender();
        this.onConnectd();
    }
    disconnectedCallback() {
        this.onDisconnected();
    }
    adoptedCallback() {
        this.onAdopted();
    }
    observedAttributes() {
        this.onObserved();
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        this.onBeforeAtributeChanged();
        this.onCustomAtributeChanged(attribute, oldValue, newValue);
        this.runRender();
        this.onAtributeChanged(attribute, oldValue, newValue);
    }
    setStylesFile(file) {
        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', file);
        return linkElem;
    }
}
//# sourceMappingURL=WCComp.js.map