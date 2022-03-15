/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { LitElement } from 'lit';
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export declare class MyElementObj extends LitElement {
    private _num;
    set num(num: number);
    get num(): number;
    private _arr;
    set arr(arr: number[]);
    get arr(): number[];
    renderList(): import("lit-html").TemplateResult<1>[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-element-obj': MyElementObj;
    }
}
//# sourceMappingURL=my-element-obj.d.ts.map