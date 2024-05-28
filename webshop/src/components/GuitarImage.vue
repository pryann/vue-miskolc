<script setup>
import {computed} from "vue";

const props = defineProps({
  title: {
    type: String,
    required: true
  }
})

const imageSrc = computed(() => `guitars/${props.title}.jpg`);
</script>

<template>
  <img :src="imageSrc" :alt="props.title" class="guitar__image" />
</template>

<style scoped>
.guitar__image {
  height: 250px;
}
</style>
