const app = Vue.createApp({
  setup() {
    const message = 'Vue is cooool!'

    return {
      message,
    }
  },
})

app.mount('#app')
