<template>
  <div>
    <h3>Personal Interests</h3>
    <ul>
      <li v-for="(item, index) in interests" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue} from "vue-property-decorator"

@Component
export default class Interests extends Vue {
  @Prop() interests!: Array<string>
}
</script>

<style scoped>

</style>