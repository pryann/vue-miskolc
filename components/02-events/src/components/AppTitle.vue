<script setup>
import {
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref
} from 'vue'

const title = ref('App title')
let timer = null

function startTimer() {
  timer = setTimeout(() => (title.value = 'New title'), 3000)
}

onBeforeMount(() => console.log('before mount'))

onMounted(() => {
  startTimer()
  console.log('on mounted')
})

onBeforeUpdate(() => console.log('on before update'))

onUpdated(() => console.log('on updated'))

onBeforeUnmount(() => {
  clearInterval(timer)
  console.log('on before unmount')
})

onUnmounted(() => console.log('on mounted'))
</script>
<template>
  <h1>{{ title }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
}
</style>
