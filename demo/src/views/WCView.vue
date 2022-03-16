<template>
  <div class="wc">
    <h1>Async Web Components</h1>

    <div class="components">
      <wc-v-button>Default</wc-v-button>
      <wc-v-button variant="btn-secondary">Secondary</wc-v-button>
      <wc-v-button variant="btn-outline-secondary"
        >Outline Secondary</wc-v-button
      >
    </div>
    <div class="components">
      <wc-v-dropdown text="Dropdown 1" :items="items" @clicked="onItem" />

      <wc-v-dropdown
        text="Dropdown 2"
        variant="btn-secondary"
        @on-click="onItem"
      >
        <li class="dropdown-item" @click="onItem('Manual Action')">
          Manual Action
        </li>
        <li class="dropdown-item" @click="onItem('Manual Action 2')">
          Manual Action 2
        </li>
      </wc-v-dropdown>

      <!-- <my-element name="Diego">
        <p>This is child content</p>
      </my-element> -->
      <my-element-obj :arr="JSON.stringify(list)" num="1000" id="wc-obj"> 
        <p>Other component</p>
      </my-element-obj>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class WCView extends Vue {
  list = [1, 2, 4];

  mounted(){
    this.list = [1, 2, 4, 5];
  }

  items: string /* any[] */ = JSON.stringify([
    {
      view: 'Action 1',
      value: 'action1',
    },
    {
      view: 'Action 2',
      value: false,
    },
    {
      view: 'Action 3',
      value: ['action3', true],
    },
  ]);
  onItem(item: any) {
    console.log(item);
  }
}
</script>

<style lang="scss">
.components {
  display: flex;
  border-top: 1px solid #ccc;
  padding: 30px 0 0;
  margin: 30px;
  > * {
    margin-right: 10px;
  }
}
</style>
