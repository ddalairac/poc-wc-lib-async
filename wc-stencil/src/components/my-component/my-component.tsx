import { Component, Prop, h, State, Method, Watch, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: false,
  scoped: true,
})
export class MyComponent {
  @Prop({
    attribute: 'someStr', // override DOM attribute name
    mutable: false, // A Prop is _by default_ immutable
    reflect: true, // keep a Prop in sync with the DOM attribute
  })
  str: string;
  @Prop() bool: boolean;
  @State() open: boolean; // Dispara cambios cuando cuando hay una mutacion
  @Element() host: HTMLElement;

  fadeElement: HTMLElement; // 'ref' da valor a este atributo

  @Method() // Expone el metodo fuera del componente
  toggle() {
    this.open = !this.open;
  }

  @Watch('bool')
  onBollPropChange(newValue: string, oldValue: string) {
    if (newValue !== oldValue) {
      // console.log('bool change', newValue, oldValue);
    }
  }

  @Event()
  // {
  //   // *Stencil custom Attr
  //   // eventName: 'myCompEvent', // A string custom event name to override the default.
  //   // cancelable: true, //A Boolean indicating whether the event is cancelable.
  //   // *JS native Attr
  //   // bubbles: true, //A Boolean indicating whether the event bubbles up through the DOM or not.
  //   // composed: true, //A Boolean value indicating whether or not the event can bubble across the boundary between the shadow DOM and the regular DOM.
  // }
  myAvengerEvent: EventEmitter<string>;

  onAvengerClick(avenger: string) {
    // console.log('avenger:', avenger);
    this.myAvengerEvent.emit(avenger);
  }

  onClickBtn(param) {
    // console.log('onClickBtn', param, this);
    this.open = !this.open;
  }

  cssFadeInOut() {
    return !this.open ? 'fade fade-in' : 'fade fade-out';
  }

  arrAvengers = ['Iron man', 'Thor', 'Black widow', 'Hulk', 'Hawkeye', 'Capitan America'];

  render() {
    return (
      <div>
        <h2>my-component</h2>
        <p>prop str: {this.str}</p>
        <p>prop bool: {this.bool + ''}</p>
        <p>state open: {this.open + ''}</p>
        <p>
          <slot></slot>
        </p>
        <button onClick={this.onClickBtn.bind(this, 'some param')}>Toogle display</button>
        <hr />
        <div class={this.cssFadeInOut()} ref={el => (this.fadeElement = el)}>
          <b>Some open/close content</b>
          <br />
          <div class="bool-value">
            IF <br />
            {
              // if render
              this.bool ? <p>true conditional</p> : <p>false conditional</p>
            }
          </div>
          FOR <br />
          <ul class="click-list">
            {
              // for render
              this.arrAvengers.map(av => (
                <li onClick={this.onAvengerClick.bind(this, av)}>{av}</li>
              ))
            }
          </ul>
        </div>
      </div>
    );
  }

  // All Life Cycles ************************

  // // Stencil LifeCycle
  // componentWillLoad() {
  //   console.log('componentWillLoad');
  // }

  // // Stencil LifeCycle
  componentDidLoad() {
    console.log('componentDidLoad');
    console.log('fadeElement', this.fadeElement);
    console.log('host Element', this.host, 'id:',this.host.getAttribute('id'));
  }

  // // Stencil LifeCycle
  // componentWillUpdate() {
  //   console.log('componentWillUpdate');
  // }

  // // Stencil LifeCycle
  // componentDidUpdate() {
  //   console.log('componentDidUpdate');
  // }

  // // JS native LifeCycle
  // disconnectedCallback() {
  //   console.log('disconnectedCallback');
  // }
}
