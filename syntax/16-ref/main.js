const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const counter = ref(0)

    function increaseCounter() {
      counter.value += 1
    }

    function decreaseCounter() {
      counter.value -= 1
    }

    return {
      counter,
      increaseCounter,
      decreaseCounter,
    }
  },
})

app.mount('#app')
