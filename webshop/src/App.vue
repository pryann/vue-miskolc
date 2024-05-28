<script setup>
import { RouterView } from 'vue-router'
import MainNavigation from "@/components/MainNavigation.vue";
</script>

<template>

  <div class="container">
    <MainNavigation />
    <RouterView />
  </div>
</template>

<style scoped>
</style>
