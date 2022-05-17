export default class WC3 extends HTMLElement {

  public static setStylesFile(file) {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}
