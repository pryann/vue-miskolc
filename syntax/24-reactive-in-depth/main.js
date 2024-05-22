const { createApp, reactive, ref, toRefs, toRef } = Vue

const app = createApp({
  setup() {
    const formRef = ref(null)
    const formData = reactive({
      name: '',
      email: '',
    })

    function handleSubmit() {
      console.log(`name: ${formData.name}, email: ${formData.email}`)
    }

    // NOT VALID
    // formData = { name: 'John', email: 'john@mail.com' }

    // VALID, IF NECCESEARY
    // const initialValue = { name: 'John', email: 'john@mail.com' }
    // Object.assign(formData, initialValue)

    // VALID, NOT REACTIVE
    // const email = formData.email

    // VALID,  REACTIVE
    // const email = ref(formData.email)

    // VALID, REACTIVE, NOT THE BEST
    // const email = toRef(formData, 'email')

    const { name, email } = toRefs(formData)

    return {
      formRef,
      formData,
      handleSubmit,
    }
  },
})

app.mount('#app')
