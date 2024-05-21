const app = Vue.createApp({
  setup() {
    const message = '<span style="color: #42b883">Vue.js</span>'

    return {
      message,
    }
  },
})

app.mount('#app')
