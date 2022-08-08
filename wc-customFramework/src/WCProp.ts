import WCComp from './WCComp.js'

export function WCProp(customProps: string[]) {
  // FACTORY -> FACTORY: Retorna una nueva clase, que reemplaza a la que usa el decorador.
  return function <T extends { new(...arg: any[]): WCComp }>(target: T) {
    return class extends target {
      constructor(..._args: any[]) { // _ es para que typescript entienda que no voy a usarlos, pero tengo que pasarlos.
        super(..._args);
        // console.log(' * new class: ', this);
      }

      static get observedAttributes() {
        // console.log(' * observedAttributes', [...customProps])
        return [...customProps];
      }

      attributeChangedCallback(attribute, oldValue, newValue) {
        // console.log('attributeChangedCallback', { attribute, oldValue, newValue })
        if (customProps.includes(attribute)) {
          this[attribute] = newValue
        } else {
          console.warn(`attribute ${attribute} not defined`)
        }
        this.onWcAttrChange(attribute, oldValue, newValue)
        this.runRender()
      }
    }
  }
}
