<script setup>
import { reactive, ref } from 'vue'
import InputField from './components/InputField.vue'
import AppTitle from './components/AppTitle.vue'

const formData = reactive({
  email: 'pryann@gymail.com',
  username: '',
  password: ''
})

function handleSubmit() {
  console.log(JSON.stringify(formData))
}

const isTitleVisible = ref(true)

setTimeout(() => (isTitleVisible.value = false), 5000)
</script>

<template>
  <AppTitle v-if="isTitleVisible" />
  <form action="" @submit.prevent="handleSubmit">
    <InputField
      id="email"
      name="email"
      type="email"
      label="Email adddress"
      v-model="formData.email"
    />
    <InputField
      id="username"
      name="username"
      type="text"
      label="Username"
      v-model="formData.username"
    />
    <InputField
      id="password"
      name="password"
      type="password"
      label="Password"
      v-model="formData.password"
    />
    <button>Submit</button>
  </form>
</template>

<style scoped></style>
