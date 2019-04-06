<template lang="pug">
  v-app
    v-content
      router-view
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import '@/assets/ipc-listener'
  import {ipcRenderer} from 'electron'


  @Component({})
  export default class App extends Vue {
    private created() {
      if (!this.$store.state.dev) {
        this.$router.push(this.$store.state.path)
        ipcRenderer.send('commit', 'setPath', '/')
      }
    }
  }
</script>

<style lang="stylus">
  ::-webkit-scrollbar
    display none
</style>
