export function WCProp(customProps) {
    return function (target) {
        return class extends target {
            constructor(..._args) {
                super(..._args);
                console.log(' * FACTORY class WCProp', this);
            }
            static get observedAttributes() {
                return [...customProps];
            }
            onCustomAtributeChanged(attribute, oldValue, newValue) {
                if (customProps.includes(attribute)) {
                    this[attribute] = newValue;
                }
                else {
                    console.warn(`attribute ${attribute} not defined`);
                }
            }
        };
    };
}
//# sourceMappingURL=WCProp.js.map