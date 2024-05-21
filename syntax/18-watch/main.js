const { createApp, ref, computed, watch } = Vue

const app = createApp({
  setup() {
    const money = 2000
    const price = ref(0)
    const errorMessage = ref(null)

    const formattedPrice = computed(() => price.value.toLocaleString('en-US', { style: 'currency', currency: 'EUR' }))

    watch(price, () => {
      errorMessage.value = price.value > money ? 'You do not have enough money' : null
    })

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
      errorMessage,
    }
  },
})

app.mount('#app')
