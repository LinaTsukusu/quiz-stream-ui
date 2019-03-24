<template lang="pug">
  v-app
    v-content
      router-view

</template>

<script lang="ts">
  import {Component, Vue} from 'vue-property-decorator'

  @Component({})
  export default class App extends Vue {
  }
</script>
