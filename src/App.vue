<template lang="pug">
  v-app
    v-content
      router-view

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {ipcRenderer} from 'electron'

  @Component({})
  export default class App extends Vue {
    private created() {
      this.$router.push({path: '/'})
    }

    private mounted() {
      ipcRenderer.on('increment', () => {
        this.$store.commit('addAnswer')
      })

      ipcRenderer.on('decrement', () => {
        this.$store.commit('subAnswer')
      })

      ipcRenderer.on('openSetting', () => {
        window.open('/setting')
      })
    }
  }
</script>

<style lang="stylus">
</style>
