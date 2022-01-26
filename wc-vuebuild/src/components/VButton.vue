<template>
  <button class="btn" :class="variant" role="button" type="button">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {},
})
/**
 * @Prop variant {string}
 * @description default value: 'btn-primary'
 * 
 */
export default class VButon extends Vue {
  @Prop({ default: 'btn-primary' }) private variant!: string;
  
  // mounted() {
  //   console.log(this.variant);
  // }
}
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/bootstrap-reboot';
@import '~bootstrap/scss/buttons';
</style>
