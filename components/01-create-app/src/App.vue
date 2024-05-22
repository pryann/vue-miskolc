<script setup>
import MainNavigation from './components/MainNavigation.vue'
import SiteFooter from './components/SiteFooter.vue'
import MainContent from './components/MainContent.vue'
import { ref } from 'vue'

const title = ref('MH')

// Ilyet nem csinálunk!!! Majd az életciklusoknál mutatom a tutit
setTimeout(() => {
  title.value = 'Miskolc Holding'
}, 3000)
</script>

<template>
  <div>
    <MainNavigation :title="title" />
    <MainContent />
    <SiteFooter />
  </div>
</template>

<style scoped></style>
