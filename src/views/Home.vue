<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap)
      v-flex(xs4)
        lamp-tower(v-model="answer" :length="length")
      v-flex(xs8)
          v-subheader 最大値
          v-slider(v-model="length" thumb-label="always" min="5" max="50")
          v-btn(@click="increment" icon color="primary")
            v-icon keyboard_arrow_up
          v-btn(@click="decrement" icon color="primary")
            v-icon keyboard_arrow_down
          v-btn(@click="reset") Reset
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import LampTower from '@/components/LampTower.vue'
  import {ipcRenderer} from 'electron'


  @Component({
    components: {LampTower},
  })
  export default class Home extends Vue {
    private answer = 0
    private length = 20

    private mounted() {
      ipcRenderer.on('increment', () => {
        this.increment()
      })

      ipcRenderer.on('decrement', () => {
        this.decrement()
      })
    }

    private reset() {
      this.answer = 0
    }

    private increment() {
      this.answer++
    }

    private decrement() {
      this.answer--
    }
  }

</script>

<style scoped lang="stylus">
</style>
