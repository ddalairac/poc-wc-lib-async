
class IconTooltip extends HTMLElement {
  shadow
  constructor() {
    super();

    // Create a shadow root
    this.shadow = this.attachShadow({ mode: 'open' });

    // async 
    this.onloadTemplate()
  }

  getStyles() {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'icon-tooltip.css');
    return linkElem;
  }

  async getTemplate(file) {
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

  async onloadTemplate() {
    // Add template
    const template = await this.getTemplate("icon-tooltip.html")
    this.shadow.appendChild(template.content.cloneNode(true));

    // Add CSS to shadow dom
    this.shadow.appendChild(this.getStyles());
    this.loadData()
  }

  loadData() {
    // Take text dataand put it inside tooltip
    const textProp = this.getAttribute('data-text');
    const infoEl = this.shadowRoot.querySelector('.info')
    infoEl.textContent = textProp;

    // Insert icon
    let imgUrl = this.hasAttribute('img') ? this.getAttribute('img') : './icon.svg';
    const imgEl = this.shadowRoot.querySelector('img');
    imgEl.src = imgUrl;
  }
}

// Define the new element
customElements.define('icon-tooltip', IconTooltip);


