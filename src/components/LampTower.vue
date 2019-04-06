<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap v-for="num in reversed()")
      v-btn.font-weight-bold(
        depressed
        :color="num <= value && $store.state.okColor || $store.state.noneColor"
        @click="click(num)"
        :dark="$store.state.textColor"
        ) {{num}}
</template>

<script lang="ts">
  import {Component, Prop, Vue} from 'vue-property-decorator'
  import {ipcRenderer} from 'electron'


  @Component
  export default class LampTower extends Vue {
    @Prop()
    private value!: number
    @Prop({default: 5})
    private length!: number

    private reversed() {
      return [...Array(this.length).keys()].map((n) => n + 1).reverse()
    }

    private async click(num: number) {
      ipcRenderer.send('commit', 'setAnswer', num)
    }
  }
</script>

<style scoped lang="stylus">
  .v-btn
    margin 1px
  .home
    background
</style>
