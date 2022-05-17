export default class WC2 extends HTMLElement {
  public shadow: ShadowRoot

  setStylesFile(file) {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}
