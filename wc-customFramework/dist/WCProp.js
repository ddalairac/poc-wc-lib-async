export function WCProp(customProps) {
    return function (target) {
        return class extends target {
            constructor(..._args) {
                super(..._args);
            }
            static get observedAttributes() {
                return [...customProps];
            }
            attributeChangedCallback(attribute, oldValue, newValue) {
                if (customProps.includes(attribute)) {
                    this[attribute] = newValue;
                }
                else {
                    console.warn(`attribute ${attribute} not defined`);
                }
                this.onAttrChange(attribute, oldValue, newValue);
            }
        };
    };
}
//# sourceMappingURL=WCProp.js.map