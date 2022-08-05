// Create a class for the element
class WcList extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    this.wrapper = this.getTemplate()
    shadow.appendChild(this.wrapper);
    shadow.appendChild(this.getStyles());
    
    const titleProp = this.getAttribute('data-text');
    this.setTitle(titleProp)
    this.setItems()


  }

  wrapper

  connectedCallback() {
    console.log('connectedCallback wc-list');
    this.deleteLastItem()
  }

  disconnectedCallback() {
    console.log('disconnectedCallback. wc-list');
  }

  adoptedCallback() {
    console.log('adoptedCallback wc-list');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`attributeChangedCallback wc-list: '${name}', '${oldValue}' '${newValue}'`);
    this.setTitle(newValue)
  }
  
  static get observedAttributes() { return ['data-text']; }

  listHeros = [
    'Wolverine',
    'Spider-Man',
    'Thor',
    'Iron Man',
    'Hulk',
    'Captain America',
    'Daredevil',
    'Punisher',
  ]

  getTemplate() {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
      <h3 class="title"></h3>
      <ul id="list"></ul>
    `;
    return wrapper
  }
  setTitle(textProp=''){
    const titleEl = this.shadowRoot.querySelector('.title')
    titleEl.textContent = textProp;
  }

  setItems(wrapper) {
    const ulElm = this.shadowRoot.querySelector('#list');
    this.listHeros.forEach((hero, index) => {
      const item = document.createElement('wc-item')
      item.setAttribute('data-text', hero);
      ulElm.appendChild(item)
    })
  }

  deleteLastItem(){
    // setTimeout(() => {
    //   const itemElmList = document.querySelector('wc-list');
    //   console.log('itemElmList',itemElmList)
    //   itemElmList.remove()
    // }, 4000);

  }

  getStyles() {
    const linkElem = document.createElement('link');
    linkElem.setAttribute('rel', 'stylesheet');
    linkElem.setAttribute('href', 'wc-list.css');
    return linkElem;
  }
}

// Define the new element
// customElements.define('wc-list', WcList);

export default async () => WcList