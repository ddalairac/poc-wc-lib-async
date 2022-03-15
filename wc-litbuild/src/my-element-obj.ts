/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {
  LitElement,
  html,
  // css 
} from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement('my-element-obj')
export class MyElementObj extends LitElement {
  // static override styles = css`
  //   :host {
  //     display: block;
  //     border: solid 1px gray;
  //     padding: 16px;
  //     max-width: 800px;
  //   }
  // `;
  private _num: number = 0;

  @property({ type: Number }) set num(num: number) {
    console.log("num", num, this._num)
    const oldValue = this._num;
    this._num = num;
    this.requestUpdate("num", oldValue);
  }

  get num(): number {
    return this._num;
  }

  private _arr: number[] = [0];

  @property({ type: Array }) set arr(arr: number[]) {
    console.log("set arr", arr, this._arr)
    const oldValue = this._arr;
    this._arr = arr;
    this.requestUpdate("arr", oldValue);
  }

  get arr(): number[] {
    return this._arr || ['no defined'];
  }

  renderList() {
    const listTemplates = [];
    for (const item of this.arr) {
      listTemplates.push(html`<li>${item}</li>`);
    }
    console.log(listTemplates)
    return listTemplates
  }

  override render() {
    return html`
      <h1>Array Prop!</h1>
      <p>Arr: ${this.arr}</p>
      <p>Num: ${this.num}</p>
      <ul>
        ${this.renderList()}
      </ul>
      <slot> ç</slot>
    `;
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'my-element-obj': MyElementObj;
  }
}
