const { createApp, reactive, ref } = Vue

const app = createApp({
  setup() {
    const intitialValue = {
      name: '',
      email: '',
    }
    const formRef = ref(null)
    const formData = reactive({ ...intitialValue })

    function handleSubmit() {
      console.log(`name: ${formData.name}, email: ${formData.email}`)
      Object.assign(formData, intitialValue)
    }

    return {
      formRef,
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
