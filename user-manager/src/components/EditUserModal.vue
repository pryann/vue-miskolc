<script setup>
import { reactive, ref, watch } from 'vue'
import { useUserStore } from '@/store/user'

const props = defineProps({
  user: {
    type: [Object, null],
    required: true
  }
})

const { modifyUser } = useUserStore()

const closeButtonRef = ref(null)
const formRef = ref(null)
// toRef
const formData = reactive({ ...props.user })

async function handleSaveUser() {
  try {
    if (formRef.value.checkValidity()) {
      await modifyUser(props.user.id, formData)
      closeButtonRef.value.click()
    }
  } catch (error) {
    console.log('ERROR: Nem sikerült a felhasználó mentése')
  }
}

watch(
  () => props.user,
  (value) => Object.assign(formData, value)
)
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
          <form ref="formRef">
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
          </form>
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
