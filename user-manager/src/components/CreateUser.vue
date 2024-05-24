<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import UserForm from './UserForm.vue'

const { addUser } = useUserStore()
const isFormVisible = ref(false)

function showForm() {
  isFormVisible.value = true
}

async function handleFormSubmit(formData) {
  try {
    await addUser(formData)
    isFormVisible.value = false
  } catch (error) {
    console.log('ERROR: nem sikerült az új felhasználó létrehozása')
  }
}
</script>

<template>
  <button class="btn btn-primary" v-show="!isFormVisible" @click="showForm">Create User</button>
  <div v-show="isFormVisible">
    <div class="d-flex flex-column align-items-center">
      <h2>Create new user</h2>
      <UserForm button-text="Save new user" @submit-user-form="handleFormSubmit" />
    </div>
  </div>
</template>

<style scoped></style>
