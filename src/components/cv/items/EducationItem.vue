<template>
  <li>
    {{ item.date }} - {{ item.institution }}
    <ul>
      <li v-for="(qualification, index) in item.qualifications" :key="index">
        {{ qualification }}
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class EducationItem extends Vue {
  @Prop() item!: object
}
</script>

<style scoped>

</style>