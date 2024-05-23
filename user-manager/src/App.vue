<script setup>
import { onMounted } from 'vue'
import AppTitle from './components/AppTitle.vue'
import { useUserStore } from './store/user'
import UsersTable from './components/UsersTable.vue'
import CreateUser from './components/CreateUser.vue'

const { fetchUsers } = useUserStore()

onMounted(async () => {
  try {
    await fetchUsers()
  } catch (error) {
    console.log('ERROR:', error)
  }
})
</script>
<template>
  <AppTitle />
  <div class="container">
    <CreateUser />
    <UsersTable />
  </div>
</template>

<style scoped></style>
