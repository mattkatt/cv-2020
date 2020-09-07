<template>
  <main v-if="cvInfo">
    <section v-for="(value, key) in cvInfo" :key="key" :id="key">
      <Info v-if="key === 'info'" :info="value"/>
      <Skills v-if="key === 'skills'" :skills="value"/>
      <Experience v-if="key === 'experience'" :experience="value"/>
      <Education v-if="key === 'education'" :education="value"/>
      <Interests v-if="key === 'interests'" :interests="value"/>
    </section>
  </main>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import Info from '@/components/cv/Info.vue'
import Skills from '@/components/cv/Skills.vue'
import Experience from '@/components/cv/Experience.vue'
import Education from '@/components/cv/Education.vue'
import Interests from '@/components/cv/Interests.vue'

@Component({
  components: {
    Info,
    Skills,
    Experience,
    Education,
    Interests
  }
})
export default class CV extends Vue {
  @Prop() cvInfo!: object
}
</script>

<style scoped>

</style>