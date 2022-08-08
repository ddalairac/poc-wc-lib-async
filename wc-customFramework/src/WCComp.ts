
export default abstract class WCComp extends HTMLElement {
  constructor(compTemplate,compCss) {
    super();
    this.shadowroot = this.attachShadow({ mode: "open" });
    this.shadowroot.appendChild(compTemplate.content.cloneNode(true));
    this.shadowroot.appendChild(this.setStylesFile(compCss));
  }

  protected shadowroot: ShadowRoot

  protected onAttrChange(attribute, oldValue, newValue){
    // console.log('onAttrChange', { attribute, oldValue, newValue })
  }
  protected onConnect(){
    // console.log('onConnect')
  }
  protected onDisconnect(){
    // console.log('onDisconnect')
  }
  protected onObserved(){
    // console.log('onObserved')
  }
  protected onAdopted(){
    // console.log('onObserved')
  }

  connectedCallback(){
    // console.log('connectedCallback')
    this.onConnect()
  }
  
  disconnectedCallback(){
    // console.log('disconnectedCallback')
    this.onDisconnect()
  }

  adoptedCallback(){
    // console.log('adoptedCallback')
    this.onAdopted()
  }
  observedAttributes(){
    // console.log('observedAttributes')
    this.onObserved()
  }

  protected setStylesFile(file): HTMLLinkElement {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}