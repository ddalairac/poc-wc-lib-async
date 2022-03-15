/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html,
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
let MyElementObj = class MyElementObj extends LitElement {
    constructor() {
        super(...arguments);
        // static override styles = css`
        //   :host {
        //     display: block;
        //     border: solid 1px gray;
        //     padding: 16px;
        //     max-width: 800px;
        //   }
        // `;
        this._num = 0;
        this._arr = [0];
    }
    set num(num) {
        console.log("num", num, this._num);
        const oldValue = this._num;
        this._num = num;
        this.requestUpdate("num", oldValue);
    }
    get num() {
        return this._num;
    }
    set arr(arr) {
        console.log("set arr", arr, this._arr);
        const oldValue = this._arr;
        this._arr = arr;
        this.requestUpdate("arr", oldValue);
    }
    get arr() {
        return this._arr || ['no defined'];
    }
    renderList() {
        const listTemplates = [];
        for (const item of this.arr) {
            listTemplates.push(html `<li>${item}</li>`);
        }
        console.log(listTemplates);
        return listTemplates;
    }
    render() {
        return html `
      <h1>Array Prop!</h1>
      <p>Arr: ${this.arr}</p>
      <p>Num: ${this.num}</p>
      <ul>
        ${this.renderList()}
      </ul>
      <slot> ç</slot>
    `;
    }
};
__decorate([
    property({ type: Number }),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MyElementObj.prototype, "num", null);
__decorate([
    property({ type: Array }),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], MyElementObj.prototype, "arr", null);
MyElementObj = __decorate([
    customElement('my-element-obj')
], MyElementObj);
export { MyElementObj };
//# sourceMappingURL=my-element-obj.js.map