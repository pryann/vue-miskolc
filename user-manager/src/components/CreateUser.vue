<script setup>
import { reactive, ref } from 'vue'
import { useUserStore } from '@/store/user'

const { addUser } = useUserStore()
const isFormVisible = ref(false)
const formInitivalValues = {
  emailAddress: '',
  firstName: '',
  lastName: ''
}
const formData = reactive({ ...formInitivalValues })
const formRef = ref(null)

function showForm() {
  isFormVisible.value = true
}

async function handleFormSubmit() {
  try {
    if (formRef.value.checkValidity()) {
      await addUser(formData)
      Object.assign(formData, formInitivalValues)
      isFormVisible.value = false
    }
  } catch (error) {
    console.log('ERROR: nem sikerült az új felhasználó létrehozása')
    console.log(error)
  }
}
</script>

<template>
  <button class="btn btn-primary" v-show="!isFormVisible" @click="showForm">Create User</button>
  <div v-show="isFormVisible">
    <div class="d-flex flex-column align-items-center">
      <h2>Create new user</h2>
      <form ref="formRef" @submit.prevent="handleFormSubmit">
        <div class="form-group mb-3">
          <label for="emailAddress">Email address</label>
          <input
            v-model="formData.emailAddress"
            type="email"
            id="emailAddress"
            name="emailAddress"
            class="form-control"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="firstName">Firstname</label>
          <input
            v-model="formData.firstName"
            type="text"
            id="firstName"
            name="firstName"
            class="form-control"
            required
          />
        </div>
        <div class="form-group mb-3">
          <label for="lastName">Lastname</label>
          <input
            v-model="formData.lastName"
            type="text"
            id="lastName"
            name="lastName"
            class="form-control"
            required
          />
        </div>
        <div class="form-group mb-3">
          <button class="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
