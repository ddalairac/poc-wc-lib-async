const compTemplate = document.createElement("template");
compTemplate.innerHTML = ''
export default abstract class WCComp extends HTMLElement {
  constructor(compTemplate, compCss) {
    super();
    this.shadowroot = this.attachShadow({ mode: "open" });
    this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
    this.compCss = compCss

    console.log(' * abstract class WCComp')
  }
  compCss
  protected shadowroot: ShadowRoot

  /* abstract */ onWcRender(){return ''}
  /* abstract */ onCustomAtributeChanged(attribute, oldValue, newValue):void{}

  protected runRender() {
    this.shadowroot.innerHTML = this.onWcRender()
    this.shadowroot.appendChild(this.setStylesFile(this.compCss));
  }


  protected onBeforeAtributeChanged() {
    console.log('onBeforeAtributeChanged')
  }
  protected onAtributeChanged(attribute, oldValue, newValue) {
    console.log('onAttrChange', { attribute, oldValue, newValue })
  }
  protected onConnectd() {
    console.log('onConnect',this)
  }
  protected onDisconnected() {
    console.log('onDisconnect')
  }
  protected onObserved() {
    console.log('onObserved')
  }
  protected onAdopted() {
    console.log('onObserved')
  }

  connectedCallback() {
    // console.log('connectedCallback')
    this.runRender() 
    this.onConnectd()
  }
  disconnectedCallback() {
    // console.log('disconnectedCallback')
    this.onDisconnected()
  }
  adoptedCallback() {
    // console.log('adoptedCallback')
    this.onAdopted()
  }
  observedAttributes() {
    // console.log('observedAttributes')
    this.onObserved()
  }

  attributeChangedCallback(attribute, oldValue, newValue) {
    // console.log('attributeChangedCallback', { attribute, oldValue, newValue })
    this.onBeforeAtributeChanged()
    this.onCustomAtributeChanged(attribute, oldValue, newValue)
    this.runRender()
    this.onAtributeChanged(attribute, oldValue, newValue)
  }

  protected setStylesFile(file): HTMLLinkElement {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}