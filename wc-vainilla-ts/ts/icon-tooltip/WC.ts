export default abstract class WC extends HTMLElement {
  public shadow: ShadowRoot

  async setTemplateFile(file): Promise<HTMLTemplateElement> {
    return new Promise(resolve => {
      fetch(file)
        .then(stream => stream.text())
        .then(HTMLtext => {
          const template = document.createElement('template');
          template.innerHTML = HTMLtext
          resolve(template)
        });
    })
  }


  setStylesFile(file): HTMLLinkElement {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', file);
    return linkElem;
  }
}