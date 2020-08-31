<template>
  <li>
    {{ item.date }} - {{ item.company }} - ({{ item.location }})
    <br>
    {{ item.title }}
    <br>
    {{ item.bio }}
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class ExperienceItem extends Vue {
  @Prop() item!: object
}
</script>

<style scoped>

</style>