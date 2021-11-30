<template>
  <div>

  </div>
</template>

<script setup lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component({
  components: {}
})
  export default class VTemplate extends Vue {
    @Prop({ default: 'btn-primary' }) private variant!: string;

  }
</script>

<style lang="scss" scoped>

</style>