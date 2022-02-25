// Create a class for the element
class IconTooltip extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Add HTMLElement to shadow dom
    shadow.appendChild(this.getTemplate('wrapper'));

    // Add CSS to shadow dom
    shadow.appendChild(this.getStyles());


    // Take text dataand put it inside tooltip
    const textProp = this.getAttribute('data-text');
    const infoEl = this.shadowRoot.querySelector('.info')
    infoEl.textContent = textProp;

    // Insert icon
    let imgUrl = this.hasAttribute('img') ? this.getAttribute('img') : './icon.svg';
    const imgEl = this.shadowRoot.querySelector('img');
    imgEl.src = imgUrl;
    // // icon.appendChild(img);
  }

  getTemplate(className = '') {
    const wrapper = document.createElement('div');

    if (className) wrapper.setAttribute('class', className);
    wrapper.innerHTML = `
      <span class="icon" tabindex="0">
        <img>
      </span>
      <span class="info"></span>
    `;
    return wrapper
  }

  getStyles() {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'icon-tooltip.css');
    return linkElem;
  }
}

// Define the new element
customElements.define('icon-tooltip', IconTooltip);
