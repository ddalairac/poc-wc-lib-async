<template>
  <div>
    <div class="dropdown">
      <button
        class="btn dropdown-toggle"
        :class="variant"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        ref="dropdown"
      >
        {{ text }}
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <slot></slot>
        <li
          class="dropdown-item"
          v-for="(item, index) of items"
          :key="index"
          @click="onClick(item)"
        >
          {{ item.view }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
declare const bootstrap: any;
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'bootstrap';
import { Dropdown } from 'bootstrap';
@Component({
  components: {},
})
export default class VDropdown extends Vue {
  @Prop({ default: 'btn-primary' }) private variant!: string;
  @Prop({ default: 'Dropdown' }) private text!: string;
  @Prop({ default: [] }) private items!: tViewValue[] | string; // string needs to be parsed

  // public get _items(): tViewValue[] {
  //   // if (typeof this.items === 'string') {
  //   //   console.log('items string', this.items, JSON.parse(this.items));
  //   //   return JSON.parse(this.items) as tViewValue[];
  //   // } else {
  //     console.log('items arr', this.items);
  //     return this.items as tViewValue[];
  //   // }
  // }
  // beforeMount() {
  //   if (typeof this.items === 'string') {
  //     console.log('items string', this.items)
  //     this.items = JSON.parse(this.items);
  //     console.log('items parsed', this.items)
  //   }
  // }
  mounted() {
  // beforeMount() {
    const options = this.$props;
    const ele = this.$refs.dropdown;
    // console.log('Dropdown', Dropdown);
    // console.log('variant', this.variant);
    // console.log('text', this.text);
    console.warn('mounted Dropdown' );
    console.log('- text:', this.text, );
    console.log('- items:', this.items, );
    console.log('- props:', options, );
    if(typeof this.items === 'object'){
      const vvArr:tViewValue[] = this.items as tViewValue[];
      vvArr.forEach((element:tViewValue) => {
      console.log('  - item vv:', element.view,', ', element.value);
      });
    } else {
      console.log('  - item 1st char:', this.items[0]);
      if(this.items[0] === '['){
        this.items = JSON.parse(this.items);
      } 
      console.log('  - item string:', this.items[0], this.items);
    }
    new Dropdown(ele, options);
  }

  onClick(item: tViewValue) {
    this.$emit('on-click', item);
  }
}

export type tViewValue = {
  view: string;
  value?: any;
};
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/buttons';
@import '~bootstrap/scss/dropdown';
</style>
