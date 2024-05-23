import { ref } from 'vue'
import usersApi from '@/api/usersAPI.js'

const users = ref([])

export function useUserStore() {
  async function fetchUsers() {
    users.value = await usersApi.getUsers()
  }

  async function removeUser(id) {
    await usersApi.deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  async function modifyUser(id, updatedUser) {
    const response = await usersApi.updateUser(id, updatedUser)
    users.value = users.value.map((user) => (user.id === response.id ? response : user))
  }

  async function addUser(user) {
    const response = await usersApi.createUser(user)
    users.value = [response, ...users.value]
  }

  return {
    users,
    fetchUsers,
    removeUser,
    addUser,
    modifyUser
  }
}
