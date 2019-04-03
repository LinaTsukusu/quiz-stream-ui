<template lang="pug">
  .setting
    v-flex(xs8)
      v-subheader 最大値
      v-slider(v-model="length" thumb-label="always" min="5" max="50")
      v-btn(@click="$store.commit('addAnswer')" icon color="primary")
        v-icon keyboard_arrow_up
      v-btn(@click="$store.commit('subAnswer')" icon color="primary")
        v-icon keyboard_arrow_down
      v-btn(@click="$store.state.answer = 0") Reset
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component
  export default class Setting extends Vue {
    private length = 20
  }
</script>

<style scoped lang="stylus">

</style>
