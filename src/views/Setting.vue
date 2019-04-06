<template lang="pug">
  .setting
    v-container(text-xs-center grid-list-md)
      v-layout(row wrap justify-center)
        v-flex(xs10)
          h1 操作画面
          v-subheader 最大値
          v-slider(v-model="length" thumb-label="always" min="5" max="50")
          v-btn(@click="send('addAnswer')" icon color="primary")
            v-icon keyboard_arrow_up
          v-btn(@click="send('subAnswer')" icon color="primary")
            v-icon keyboard_arrow_down
          v-btn(@click="send('setAnswer', 0)") Reset
        v-flex(xs3)
          v-text-field(v-model="okColor" label="点灯カラー")
        v-flex(xs3)
          v-text-field(v-model="noneColor" label="無点灯カラー")
        v-flex(xs3)
          v-text-field(v-model="backColor" label="背景カラー")
        v-flex(xs3)
          v-switch(v-model="textColor" :label="`文字カラー: ${textColor && '白' || '黒'}`")


</template>

<script lang="ts">
  import {Component, Vue, Watch} from 'vue-property-decorator'
  import {ipcRenderer} from 'electron'


  @Component
  export default class Setting extends Vue {
    private length: number = this.$store.state.length
    private okColor: string = this.$store.state.okColor
    private noneColor: string = this.$store.state.noneColor
    private backColor: string = this.$store.state.backColor
    private textColor: boolean = this.$store.state.textColor

    private send(mutation: string, ...args: any[]) {
      ipcRenderer.send('commit', mutation, ...args)
    }

    @Watch('length')
    private changeLength(num: number) {
      this.send('setLength', num)
    }

    @Watch('okColor')
    private changeOkColor(color: string) {
      this.send('setOkColor', color)
    }
    @Watch('noneColor')
    private changeNoneColor(color: string) {
      this.send('setNoneColor', color)
    }
    @Watch('backColor')
    private changeBackColor(color: string) {
      this.send('setBackColor', color)
    }
    @Watch('textColor')
    private changeTextColor(color: boolean) {
      this.send('setTextColor', color)
    }
  }
</script>

<style scoped lang="stylus">

</style>
