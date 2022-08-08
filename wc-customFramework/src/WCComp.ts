const compTemplate = document.createElement("template");
compTemplate.innerHTML = ''
export default abstract class WCComp extends HTMLElement {
  constructor(compTemplate, compCss) {
    super();
    this.shadowroot = this.attachShadow({ mode: "open" });
    this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
    this.compCss = compCss
  }
  compCss
  protected shadowroot: ShadowRoot

  /* abstract */ onWcRender(){return ''}

  protected runRender() {
    this.shadowroot.innerHTML = this.onWcRender()
    this.shadowroot.appendChild(this.setStylesFile(this.compCss));
  }

  protected onWcAttrChange(attribute, oldValue, newValue) {
    // console.log('onAttrChange', { attribute, oldValue, newValue })
  }
  protected onWcConnect() {
    // console.log('onConnect')
  }
  protected onWcDisconnect() {
    // console.log('onDisconnect')
  }
  protected onWcObserved() {
    // console.log('onObserved')
  }
  protected onWcAdopted() {
    // console.log('onObserved')
  }

  connectedCallback() {
    // console.log('connectedCallback')
    this.onWcConnect()
    this.runRender() 
  }

  disconnectedCallback() {
    // console.log('disconnectedCallback')
    this.onWcDisconnect()
  }

  adoptedCallback() {
    // console.log('adoptedCallback')
    this.onWcAdopted()
  }
  observedAttributes() {
    // console.log('observedAttributes')
    this.onWcObserved()
  }

  protected setStylesFile(file): HTMLLinkElement {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}