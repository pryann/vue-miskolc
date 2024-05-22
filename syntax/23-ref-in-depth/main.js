const { createApp, reactive, ref, toRefs, toRef } = Vue

const app = createApp({
  setup() {
    const intitialValue = {
      name: '',
      email: '',
    }
    const formRef = ref(null)
    const formData = ref({ ...intitialValue })

    function handleSubmit() {
      console.log(`name: ${formData.value.name}, email: ${formData.value.email}`)
      formData.value = intitialValue
    }

    // VALID
    // formData.value.email = 'CUSTOM VALUE'
    // formData.value = {name: '', email: ''}

    // VALID, NOT REACTIVE
    // const email = formData.value.email

    // VALID, REACTIVE, UGLY
    // const email = ref(formData.value.email)

    // VALID, REACTIVE, UGLY
    // const email = toRef(formData.value, 'email')

    // VALID, REACTIVE, BEST CHOISE
    const { name, email } = toRefs(formData.value)

    return {
      formRef,
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
