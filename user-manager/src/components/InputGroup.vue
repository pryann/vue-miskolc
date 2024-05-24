<script setup>
defineProps({
  label: {
    type: String,
    reqired: true
  },
  type: {
    type: String,
    reqired: true
  },
  id: {
    type: String,
    reqired: true
  },
  name: {
    type: String,
    reqired: true
  },
  required: {
    type: Boolean,
    reqired: true
  },
  modelValue: {
    type: [String, Number],
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

function handleInput(event) {
  console.log(event.target.value)
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <div class="form-group mb-3">
    <label :for="id">{{ label }}</label>
    <input
      :value="modelValue"
      :type="type"
      :id="id"
      :name="name"
      class="form-control"
      :required="required"
      @input="handleInput"
    />
  </div>
</template>
<style scoped></style>
