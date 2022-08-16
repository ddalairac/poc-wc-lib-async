import { Component, Prop, h, State, Element } from '@stencil/core';
import FieldUtils from './FieldUtils';
import iField from './iField';

@Component({
  tag: 'my-input',
  styleUrl: 'my-input.css',
  shadow: false,
})
export class MyInput implements iField {
  type: string = 'text';
  @Prop() name: string;
  @Prop() label: string;
  @Prop() placeholder: string;
  @Prop() disabled: boolean;
  @State() inputValue: string;
  @Element() host: HTMLElement;

  ensureID() {
    return FieldUtils.ensureID(this, this.host.getAttribute('id'));
  }

  ensureLabel() {
    return FieldUtils.ensureLabel(this);
  }

  onInput(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
    console.log('inputValue', this.inputValue);
  }

  render() {
    return (
      <div class="field">
        <label htmlFor={this.ensureID()}>{this.ensureLabel()}</label>
        <input id={this.ensureID()} 
        name={this.name} 
        placeholder={this.placeholder} 
        disabled={this.disabled} 
        value={this.inputValue} onInput={this.onInput.bind(this)} />
      </div>
    );
  }
}
