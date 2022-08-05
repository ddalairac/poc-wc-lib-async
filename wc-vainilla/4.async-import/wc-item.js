// Create a class for the element
class WcListItem extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const textProp = this.getAttribute('data-text');
    shadow.appendChild(this.getTemplate(textProp));
  }

  connectedCallback() {
    console.log('connectedCallback wc-item');
  }

  disconnectedCallback() {
    console.log('disconnectedCallback wc-item.');
  }

  getTemplate(hero) {
    const wrapper = document.createElement('li');
    wrapper.innerHTML = `${hero}`;
    // debugger
    return wrapper
  }

}

// Define the new element
// customElements.define('wc-item', WcListItem);
export default async () => WcListItem