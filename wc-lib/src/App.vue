<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <VButton >Default</VButton>
    <VButton variant="secondary" >Secondary</VButton>
    <VButton variant="outline-secondary" >Outline Secondary</VButton>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VButton from "./components/VButton.vue";

@Component({
  components: {
    VButton,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
