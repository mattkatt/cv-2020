<template>
  <CV :cvInfo="cvInfo"/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import CV from '@/components/CV.vue'
import cvInfo from '@/cv-info.json'

@Component({
  components: {
    CV,
  }
})
export default class App extends Vue {
  cvInfo: object = cvInfo
}
</script>

<style lang="scss">
html {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
