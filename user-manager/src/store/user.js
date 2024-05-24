import { ref } from 'vue'
import usersApi from '@/api/usersAPI.js'

const users = ref([])
const selectedUser = ref(null)

export function useUserStore() {
  async function fetchUsers() {
    users.value = await usersApi.getUsers()
  }

  function getUserById(id) {
    return users.value.filter((user) => user.id === id)[0] || null
  }

  function selectUser(user) {
    selectedUser.value = user
  }

  async function removeUser(id) {
    await usersApi.deleteUser(id)
    users.value = users.value.filter((user) => user.id !== id)
  }

  async function modifyUser() {
    usersApi.updateUser(selectedUser.value.id, selectedUser.value)
    users.value = users.value.map((user) =>
      user.id === selectedUser.value.id ? selectedUser.value : user
    )
    selectedUser.value = null
  }

  async function addUser(user) {
    const response = await usersApi.createUser(user)
    users.value = [response, ...users.value]
  }

  return {
    users,
    selectedUser,
    fetchUsers,
    removeUser,
    addUser,
    modifyUser,
    getUserById,
    selectUser
  }
}
