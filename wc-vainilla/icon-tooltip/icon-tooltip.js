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
    let imgUrl = this.hasAttribute('img') ? this.getAttribute('img') :'./icon.svg';
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
    const style = document.createElement('style');
    style.textContent = `
    .wrapper {
      position: relative;
      vertical-align: middle;
      display: inline-block;
    }

    .icon{ 
      background:grey; 
      width:20px;
      height:20px;
      border-radius:50%;
      display: inline-block;
    }

    .icon:hover + .info, 
    .icon:focus + .info {
      opacity: 1;
    }

    .icon img {
      width: inherit;
      max-width: 100%;
      max-height: 100%;
      box-sizing: border-box;
      padding: 4px;
    }
    
    .info {
      opacity: 0;
      font-size: 0.8rem;
      width: 200px;
      display: inline-block;
      border: 1px solid #ccc;
      padding: 10px;
      background: white;
      border-radius: 5px;
      transition: 0.6s all;
      position: absolute;
      bottom: 20px;
      left: 10px;
      z-index: 3;
    }
  `;
    return style;
  }
}

// Define the new element
customElements.define('icon-tooltip', IconTooltip);
