const { createApp, reactive } = Vue

const app = createApp({
  setup() {
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(`name: ${formData.name}, email: ${formData.email}`)
    }

    return {
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
