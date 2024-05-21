const app = Vue.createApp({
  setup() {
    const message = 'Vue.js'
    const title = 'Long live Vue!'

    return {
      message,
      title,
    }
  },
})

app.mount('#app')
