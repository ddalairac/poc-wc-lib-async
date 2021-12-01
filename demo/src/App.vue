<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    
    <wc-v-button>Default</wc-v-button>
    <wc-v-button variant="btn-secondary">Secondary</wc-v-button>
    <wc-v-button variant="btn-outline-secondary">Outline Secondary</wc-v-button>
    <wc-v-dropdown text="Acctions Dropdown" :items="items" @clicked="onClickedItem"/>
    <wc-v-dropdown text="Acctions Dropdown 2" :items="items" variant="btn-secondary" @on-click="onClickedItem">
      <li class="dropdown-item" @click="onClickedItem('Manual Action')">Manual Action</li>
      <li class="dropdown-item" @click="onClickedItem('Manual Action 2')">Manual Action 2</li>
    </wc-v-dropdown>

    <router-view />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  },
})
export default class App extends Vue {
  items: any[] = [
    {
      view: "Action 1",
      value: "action1",
    },
    {
      view: "Action 2",
      value: false,
    },
    {
      view: "Action 3",
      value: ["action3", true],
    },
  ];
  onClickedItem(item: any) {
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
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
