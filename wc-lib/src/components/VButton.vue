<template>
  <button class="btn" :class="getClass">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import Alert from 'bootstrap/js/dist/alert';
@Component({
  components: {}
})
  export default class VButon extends Vue {
    @Prop({ default: 'primary' }) private variant!: string;

    get getClass() {
      return `btn-${this.variant}`;
    }
  }
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';
@import '~bootstrap/scss/buttons';

</style>