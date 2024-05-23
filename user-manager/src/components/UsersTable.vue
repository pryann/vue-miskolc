<script setup>
import { useUserStore } from '@/store/user'
import EditUserModal from './EditUserModal.vue'
import 'bootstrap/js/dist/modal'
import { ref } from 'vue'

const { users, removeUser } = useUserStore()
const selectedUser = ref(null)

async function handleDeleteClick(id) {
  try {
    const confirmDelete = confirm('Are you sure?')
    if (confirmDelete) await removeUser(id)
  } catch (error) {
    console.log('ERROR: Can not remove user')
  }
}

function handleSelectUser(user) {
  selectedUser.value = user
}
</script>

<template>
  <table class="table table-striped table-fixed">
    <thead>
      <tr>
        <th>Email address</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <td>{{ user.emailAddress }}</td>
        <td>{{ user.firstName }}</td>
        <td>{{ user.lastName }}</td>
        <td>
          <button
            data-bs-toggle="modal"
            data-bs-target="#editUserModal"
            class="btn btn-primary me-2"
            @click="handleSelectUser(user)"
          >
            Edit
          </button>
          <button class="btn btn-danger" @click="handleDeleteClick(user.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>
  <EditUserModal :user="selectedUser" />
</template>

<style scoped></style>
