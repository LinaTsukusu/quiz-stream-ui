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
          v-text-field(v-model="okColor" label="点灯カラー" :rules="[rules.required, rules.color]")
        v-flex(xs3)
          v-text-field(v-model="noneColor" label="無点灯カラー" :rules="[rules.required, rules.color]")
        v-flex(xs3)
          v-text-field(v-model="backColor" label="背景カラー" :rules="[rules.required, rules.color]")
        v-flex(xs3)
          v-switch(v-model="textColor" :label="`文字カラー: ${textColor && '白' || '黒'}`")
        v-flex(xs4)
          v-text-field(v-model="shortcutUp" label="正解数増ショートカット")
        v-flex(xs4)
          v-text-field(v-model="shortcutDown" label="正解数減ショートカット")
        v-flex(xs4)
          v-text-field(v-model="shortcutReset" label="正解数リセットショートカット")

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
    private shortcutUp: string = this.$store.state.shortcutUp
    private shortcutDown: string = this.$store.state.shortcutDown
    private shortcutReset: string = this.$store.state.shortcutReset

    private rules = {
      required: (val: string) => !!val || 'Required.',
      color: (val: string) => val.match(/^#[0-9a-fA-F]{6}$/) || '',
    }

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

    @Watch('shortcutUp')
    private changeUp(newKey: string, oldKey: string) {
      this.send('setShortcutUp', {newKey, oldKey})
    }
    @Watch('shortcutDown')
    private changeDown(newKey: string, oldKey: string) {
      this.send('setShortcutDown', {newKey, oldKey})
    }
    @Watch('shortcutReset')
    private changeReset(newKey: string, oldKey: string) {
      this.send('setShortcutReset', {newKey, oldKey})
    }
  }
</script>

<style scoped lang="stylus">

</style>
