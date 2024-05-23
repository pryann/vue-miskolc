<script setup>
import { onMounted, ref } from 'vue'
import { youtubeAPI, defaultParams } from './apis/youtubeAPI'
import SearchBar from './components/SearchBar.vue'
import VideoDetails from './components/VideoDetails.vue'
import VideoList from './components/VideoList.vue'

const videos = ref(null)
const selectedVideo = ref(null)

async function searchVideos(q) {
  try {
    const response = await youtubeAPI.get('/search', {
      params: {
        ...defaultParams,
        maxResults: 5,
        q
      }
    })
    videos.value = response.data.items
    selectedVideo.value = videos.value.length > 0 ? videos.value[0] : null
  } catch (error) {
    console.log('Youtube API request error')
  }
}

function selectVideo(video) {
  selectedVideo.value = video
}

onMounted(() => searchVideos('vuejs'))
</script>

<template>
  <header>
    <div class="container">
      <SearchBar @query-submit="searchVideos" />
    </div>
  </header>
  <main>
    <div class="container">
      <div class="row" v-if="videos">
        <div class="col-lg-8">
          <VideoDetails :video="selectedVideo" />
        </div>
        <div class="col-lg-4">
          <VideoList :videos="videos" @select-video="selectVideo" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
