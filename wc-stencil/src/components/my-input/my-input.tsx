import { Component, Prop, h, State } from '@stencil/core';
import FieldUtils from './FieldUtils';
import iField from './iField';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: false,
})
export class MyInput implements iField {
  @Prop() name: string;
  @Prop() label: string;
  @Prop() id: string;
  @State() inputValue: string;
  inputEl: HTMLInputElement;
  type: string = 'text';

  ensureID() {
    return FieldUtils.ensureID(this);
  }

  ensureLabel() {
    return FieldUtils.ensureLabel(this);
  }

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log('inputValue', this.inputValue);
  }

  componentWillLoad() {
    if (!this.name) throw Error(`'my-input' component require a 'name' attribute`);
  }

  render() {
    return (
      <div>
        <label htmlFor={this.ensureID()}>{this.ensureLabel()}</label>
        <input id={this.ensureID()} name={this.name} ref={el => (this.inputEl = el)} value={this.inputValue} onInput={this.onInput.bind(this)} />
      </div>
    );
  }
}
