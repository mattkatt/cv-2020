<template>
  <div>
    <h3>Skills</h3>
    <ul>
      <SkillsItem v-for="(item, title) in skills" :key="title" :title="title" :item="item"/>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import SkillsItem from "@/components/cv/items/SkillsItem.vue"

@Component({
  components: {
    SkillsItem
  }
})
export default class Skills extends Vue {
  @Prop() skills!: object
}
</script>

<style scoped>

</style>