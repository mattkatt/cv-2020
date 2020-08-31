<template>
  <div>
    <h3>Education</h3>
    <ul>
      <EducationItem v-for="(item, index) in education" :key="index" :item="item"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import EducationItem from "@/components/cv/items/EducationItem.vue"

@Component({
  components: {
    EducationItem
  }
})
export default class Education extends Vue {
  @Prop() education!: Array<string>
}
</script>

<style scoped>

</style>