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
      const { name, avatar } = this.data; // MAGIA ACÄ (?)
      this.attachShadow({ mode: 'open'});
      this.shadowRoot.appendChild(template.content.cloneNode(true));
      this.shadowRoot.querySelector('h3').innerText = name;
      this.shadowRoot.querySelector('img').src = avatar;   
  } 

  connectedCallback() {
  }

  render(){
  }
}
window.customElements.define('employee-card', EmployeeCard);