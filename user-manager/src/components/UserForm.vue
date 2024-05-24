<script setup>
import { onMounted, ref, watch } from 'vue'
import InputGroup from './InputGroup.vue'
import { useUserStore } from '@/store/user'

const props = defineProps({
  buttonText: {
    type: String,
    required: true
  }
})

const initialFormData = {
  emailAddress: '',
  firstName: '',
  lastName: ''
}

const { getUserById, selectedUser } = useUserStore()
const formRef = ref(null)
const formData = ref({ ...initialFormData })
const emit = defineEmits(['submitUserForm'])

function handleSubmit() {
  if (formRef.value.checkValidity()) {
    try {
      emit('submitUserForm', formData.value)
      formData.value = { ...initialFormData }
    } catch (error) {
      console.log(error.message)
    }
  }
}

watch(selectedUser, () => {
  if (selectedUser.value) {
    formData.value = selectedUser.value
  } else {
    formData.value = { ...initialFormData }
  }
})
</script>

<template>
  <form ref="formRef" @submit.prevent="handleSubmit">
    <InputGroup
      v-model="formData.emailAddress"
      type="email"
      id="emailAddress"
      name="emailAddress"
      label="Email address"
      required
    />
    <InputGroup
      v-model="formData.firstName"
      type="text"
      id="firstName"
      name="firstName"
      label="Firstname"
      required
    />
    <InputGroup
      v-model="formData.lastName"
      type="text"
      id="lastName"
      name="lastName"
      label="Lastname"
      required
    />
    <button class="btn btn-primary mb-3">{{ props.buttonText }}</button>
  </form>
</template>

<style scoped></style>
