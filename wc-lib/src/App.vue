<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <div class="components">
      <VButton>Default</VButton>
      <VButton variant="btn-secondary">Secondary</VButton>
      <VButton variant="btn-outline-secondary">Outline Secondary</VButton>
    </div>
    <div class="components">∫
      <VDropdown
        text="Acctions Dropdown"
        :items="items"
        @clicked="onClickedItem"
      />
      <VDropdown
        text="Acctions Dropdown 2"
        :items="items"
        variant="btn-secondary"
        @on-click="onClickedItem"
      >
        <li class="dropdown-item" @click="onClickedItem('Manual Action')">
          Manual Action
        </li>
        <li class="dropdown-item" @click="onClickedItem('Manual Action 2')">
          Manual Action 2
        </li>
      </VDropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import VButton from './components/VButton.vue';
import VDropdown, { tViewValue } from './components/VDropdown.vue';

@Component({
  components: {
    VButton,
    VDropdown,
  },
})
export default class App extends Vue {
  items: tViewValue[] = [
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
  ];
  onClickedItem(item: tViewValue) {
    console.log(item);
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  .components {
    display: flex;
    border-top: 1px solid #ccc;
    padding: 30px 0 0;
    margin: 30px;
    > * {
      margin-right: 10px;
    }
  }
}
</style>
