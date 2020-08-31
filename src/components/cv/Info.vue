<template>
  <div>
    <h1>{{ info.name }}</h1>
    <h2>{{ info.title }}</h2>
    <ul>
      <li>{{ info.contact.address }}</li>
      <li>{{ info.contact.email }}</li>
      <li>{{ info.contact.tel }}</li>
    </ul>
    <ul>
      <li v-for="(link, name) in info.links" :key="name">
        <b>{{ name }}</b>: <a :href="'https://' + link" target="_blank">{{ link }}</a>
      </li>
    </ul>
    <h3>Summary</h3>
    <p>{{ info.summary }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Info extends Vue {
  @Prop() info!: object
}
</script>

<style scoped>

</style>