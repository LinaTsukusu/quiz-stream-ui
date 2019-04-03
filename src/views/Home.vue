<template lang="pug">
  v-container(grid-list-md text-xs-center)
    v-layout(row wrap)
      v-flex(xs4)
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
