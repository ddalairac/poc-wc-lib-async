export function WCProp(customProps: string[]) {
  // FACTORY -> FACTORY: Retorna una nueva clase, que reemplaza a la que usa el decorador.
  return function <T extends { new(...arg: any[]): {} }>(target: T) {
    return class extends target {
      constructor(..._args: any[]) { // _ es para que typescript entienda que no voy a usarlos, pero tengo que pasarlos.
        super(..._args);
        console.log('* -----FACTORY constructor', this)
        // this.dinamicProperties(customProps);
        // console.log(' * customProps: ', customProps);
        console.log(' * new class: ', this);
      }

      static get observedAttributes() {
        console.log(' * observedAttributes', [...customProps])
        return [...customProps];
      }


      // dinamicProperties(customProps: string[]) {
      //   console.log(' * SET dinamicProperties')
      //   customProps.forEach(propName => {
      //     Object.defineProperty(this, propName, {
      //       get() {
      //         console.log('dynamic Getter', propName)
      //         return this.getAttribute(propName);
      //       },
      //       set(value) {
      //         console.log('dynamic Setter', propName)
      //         this.setAttribute(propName, value)
      //       }
      //     })
      //   })
      // }

      attributeChangedCallback(attribute, oldValue, newValue) {
        console.log('attributeChangedCallback', { attribute, oldValue, newValue })
        if (customProps.includes(attribute)) {
          this[attribute] = newValue
        }
      }
    }
  }
}

// @WCProp('Class mutation')
// class SomeClass3 {
//   constructor(classParam: string) {
//     console.log('- SomeClass3 constructor(' + classParam + ')');
//   }
// }