<template>
  <li>
    <b>{{ title }}</b>
    <ul>
      <li v-for="(skill, index) in item" :key="index">{{ skill }}</li>
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class SkillsItem extends Vue {
  @Prop() title!: string
  @Prop() item!: object
}
</script>

<style scoped>

</style>