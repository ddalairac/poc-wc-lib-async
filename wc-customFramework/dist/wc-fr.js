export function WCProp(customProps) {
    return function (target) {
        return class extends target {
            constructor(..._args) {
                super(..._args);
                console.log('* -----FACTORY constructor', this);
                console.log(' * new class: ', this);
            }
            static get observedAttributes() {
                console.log(' * observedAttributes', [...customProps]);
                return [...customProps];
            }
            attributeChangedCallback(attribute, oldValue, newValue) {
                console.log('attributeChangedCallback', { attribute, oldValue, newValue });
                if (customProps.includes(attribute)) {
                    this[attribute] = newValue;
                }
            }
        };
    };
}
//# sourceMappingURL=wc-fr.js.map