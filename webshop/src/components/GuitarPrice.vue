<script setup>
import {computed} from "vue";
import formatPrice from "@/utils/formatPrice.js";

const props = defineProps({
  price: {
    type: Number,
    required: true
  }
})

const formattedPrice = computed(()=>formatPrice(props.price))
</script>

<template>
  <div class="guitar__price">{{ formattedPrice }}</div>
</template>

<style scoped>
.guitar__price {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0 .5rem 0;
}
</style>
