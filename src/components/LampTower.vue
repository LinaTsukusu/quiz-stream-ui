<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap v-for="num in reversed()")
      v-btn(depressed :color="num <= value && 'error' || ''" @click="click(num)") {{num}}
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  
  
  @Component
  export default class LampTower extends Vue {
    @Prop()
    private value!: number
    @Prop({default: 5})
    private length!: number

    private reversed() {
      return [...Array(this.length).keys()].map((n) => n + 1).reverse()
    }

    private click(num: number) {
      this.$emit('input', num)
    }
  }
</script>

<style scoped lang="stylus">
  .v-btn
    margin 1px
</style>
