const template = document.createElement('template');
template.innerHTML = `
<style>
  .employee-card {
    font-family: sans-serif;
    background: #f4f6f7;
    width: 250px;
    display: grid;
    grid-template-columns: 1fr;
    margin-bottom: 10px;
  }
</style>

<div class="employee-card">
  <img />
  <div>
    <h3></h3>
  </div>
</div>`;

class EmployeeCard extends HTMLElement{
  constructor(){
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.render(this.data);
  }

  render(data) {
    const { name, avatar } = this.data;
    this.shadowRoot.querySelector('h3').innerText = name;
    this.shadowRoot.querySelector('img').src = avatar;   
  }
}

class EmployeeCardHook extends HTMLElement{
  constructor() {
    console.log('constructor');
    super();
    this.attachShadow({ mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');
  }

  connectedCallback() {
    console.log('connectedCallback');
  }

  static get observedAttributes() {
    return ['data', 'onUpdate'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
     return;
   }
    console.log(`The attribute ${name} has changed`);
  }

  get data() {
    return this._data;
  }

  set data(newVal) {
    this._data = newVal;
    const { name, avatar } = this.data;
    this.shadowRoot.querySelector('h3').innerText = name;
    this.shadowRoot.querySelector('img').src = avatar;   
    this.onUpdate();
  }

  get onUpdate() {
    return this._onUpdate;
  }

  set onUpdate(newVal) {
    this._onUpdate = newVal;
  }
}

window.customElements.define('employee-card', EmployeeCard);
window.customElements.define('employee-card-hook', EmployeeCardHook);