<script setup>
import { ref } from 'vue'

const query = ref('')

defineEmits(['query-submit'])
</script>

<template>
  <div class="m-3">
    <form class="form d-flex justify-content-center" @submit.prevent="$emit('query-submit', query)">
      <div class="input-group m-2 w-50">
        <input v-model="query" type="text" class="form-control" placeholder="Search..." />
        <button class="btn btn-outline-secondary">Search</button>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
