import apiClient from '@/utils/apiClient'

const urlFragment = 'users'

// GET /users
async function getUsers() {
  const response = await apiClient.get(urlFragment)
  return response.data
}

// DELETE /users/1
async function deleteUser(id) {
  await apiClient.delete(`${urlFragment}/${id}`)
}

// POST /users
async function createUser(user) {
  const response = await apiClient.post(urlFragment, user)
  return response.data
}

async function updateUser(id, user) {
  const response = await apiClient.put(`${urlFragment}/${id}`, user)
  return response.data
}

export default {
  getUsers,
  deleteUser,
  createUser,
  updateUser
}
