<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/store/user'
import UserForm from './UserForm.vue'

const { modifyUser } = useUserStore()
const closeButtonRef = ref(null)

async function handleSaveUser() {
  try {
    // TODO: you need to implement undo feature
    await modifyUser()
    closeButtonRef.value.click()
  } catch (error) {
    console.log('ERROR: Nem sikerült a felhasználó mentése')
  }
}
</script>
<template>
  <div id="editUserModal" class="modal fade" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit user</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <UserForm button-text="Save" @submit-user-form="handleSaveUser" />
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
            ref="closeButtonRef"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" @click="handleSaveUser">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
