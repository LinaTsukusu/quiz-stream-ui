<template lang="pug">
  v-app
    v-content
      router-view

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import {ipcRenderer} from 'electron'

  ipcRenderer.on('openSetting', () => {
    window.open('/setting', '_blank')
  })

  @Component({})
  export default class App extends Vue {
    private mounted() {
      if (this.$route.path === '/') {
        this.$router.push({path: '/'})
      } else {
        this.$router.push({path: '/setting'})
      }
    }

  }
</script>

<style lang="stylus">
</style>
