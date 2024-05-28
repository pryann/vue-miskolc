<script setup>
import GuitarImage from '@/components/GuitarImage.vue'
import GuitarTitle from '@/components/GuitarTitle.vue'
import GuitarDescription from '@/components/GuitarDescription.vue'
import GuitarPrice from '@/components/GuitarPrice.vue'
import GuitarRating from '@/components/GuitarRating.vue'
import GuitarStock from '@/components/GuitarStock.vue'
import CartButton from '@/components/CartButton.vue'

defineProps({
  guitar: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="guitar">
    <div class="left-column">
      <GuitarImage :title="guitar.title" />
    </div>
    <div class="right-column">
      <GuitarTitle :title="guitar.title" />
      <GuitarDescription :description="guitar.description" />
      <GuitarPrice :price="guitar.price" />
      <GuitarRating :rating="guitar.rating" />
      <GuitarStock :stock="guitar.stock" />
      <CartButton v-if="guitar.stock > 0" :guitar="guitar" />
    </div>
  </div>
</template>

<style scoped>
.guitar {
  box-shadow: 0.25rem 0.1rem 0.5rem rgba(0, 0, 0, 0.15);
  display: flex;
  margin: 0 0 2rem 0;
  padding: 1rem;
}

.right-column {
  padding: 0 0 0 2rem;
}
</style>
