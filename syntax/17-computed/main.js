const { createApp, ref, computed } = Vue

const app = createApp({
  setup() {
    const price = ref(0)

    const formattedPrice = computed(() => price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }))

    function increasePrice() {
      price.value += 100
    }

    function decreasePrice() {
      price.value -= 100
    }

    return {
      formattedPrice,
      increasePrice,
      decreasePrice,
    }
  },
})

app.mount('#app')
