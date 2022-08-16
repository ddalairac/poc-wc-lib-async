import { Component, Prop, h, State, Method, Watch, Event, EventEmitter, Element } from '@stencil/core';

export interface iAvenger {
  id: number;
  name: string;
}

@Component({
  tag: 'my-list',
  styleUrl: 'my-list.css',
  shadow: false,
})
export class MyList {
  @State() arr: iAvenger[] = [{ id: -1, name: 'default' }]; 

  @Method() 
  setAvengersArr(arr: iAvenger[]) {
    this.arr = arr;
  }

  @Event()
  myAvengerEvent: EventEmitter<iAvenger>;

  onAvengerClick(avenger: iAvenger) {
    // console.log('avenger:', avenger);
    this.myAvengerEvent.emit(avenger);
  }

  render() {
    return (
      <div>
        <h2>my-list</h2>
        <ul class="click-list">
          {
            // for render
            this.arr.map(av => (
              <li onClick={this.onAvengerClick.bind(this, av)}>{av.id}:{av.name}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}
