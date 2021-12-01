<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
// import Alert from 'bootstrap/js/dist/alert';
@Component({
  components: {}
})
  export default class VTemplate extends Vue {
    @Prop({ default: 'btn-primary' }) private variant!: string;

  }
</script>

<style lang="scss" scoped>
@import '~bootstrap/scss/functions';
@import '~bootstrap/scss/variables';
@import '~bootstrap/scss/mixins';

</style>