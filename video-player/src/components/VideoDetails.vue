<script setup>
import { computed } from 'vue'

const props = defineProps({
  video: {
    type: Object,
    required: true
  }
})

const videoSrc = computed(() => {
  const baseSrc = 'https://youtube.com/embed/'
  return props.video.id.videoId
    ? `${baseSrc}${props.video.id.videoId}`
    : `${baseSrc}videoseries?list=${props.video.id.playlistId}`
})
</script>

<template>
  <div>
    <div class="ratio ratio-16x9">
      <iframe :src="videoSrc" frameborder="0" :title="video.snippet.title"></iframe>
    </div>
    <div class="mt-3">
      <h2>{{ video.snippet.title }}</h2>
      <p class="lead">{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<style scoped></style>
