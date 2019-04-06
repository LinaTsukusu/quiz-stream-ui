<template lang="pug">
  .home(:style="`background: ${$store.state.backColor};`")
    lamp-tower(v-model="$store.state.answer" :length="$store.state.length")
</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'
  import LampTower from '@/components/LampTower.vue'

  @Component({
    components: {LampTower},
  })
  export default class Home extends Vue {
  }

</script>

<style scoped lang="stylus">
</style>
