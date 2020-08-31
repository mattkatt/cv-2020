<template>
  <div>
    <h3>Experience</h3>
    <ul>
      <ExperienceItem v-for="(item, index) in experience" :key="index" :item="item"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import ExperienceItem from '@/components/cv/items/ExperienceItem.vue'

@Component({
  components: {
    ExperienceItem
  }
})
export default class Experience extends Vue {
  @Prop() experience!: Array<string>
}
</script>

<style scoped>

</style>