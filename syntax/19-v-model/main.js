const { createApp, ref } = Vue

const app = createApp({
  setup() {
    const name = ref('John')
    
    return {
      name,
    }
  },
})

app.mount('#app')
