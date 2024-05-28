<script setup>
import { ref, watch } from 'vue'
import { useCartStore } from '@/store/cart.js'
import { useToast } from 'vue-toastification'

const props = defineProps({
  guitar: {
    type: Object,
    required: true
  }
})

const { addItemToCart, getCartItemById, changeCartItemCount, removeFromCart } = useCartStore()
const itemFromCart = getCartItemById(props.guitar.id)
const count = ref(itemFromCart?.count || 0)
const buttonText = ref(!itemFromCart ? 'Add to cart' : 'Update cart')
const toast = useToast()

function increaseCount() {
  count.value++
}

function decreaseCount() {
  if (count.value > 0) {
    count.value--
  }
}

// separate 3 differnt functions
// use 3 button components
// BAAAD PRACTICE !!!
function handleCartButtonClick() {
  const cartItem = getCartItemById(props.guitar.id)
  if (!cartItem && count.value > 0) {
    addItemToCart(props.guitar, count.value)
    buttonText.value = 'Update cart'
    toast.success('Item added to cart')
  } else if (cartItem?.count !== count.value && cartItem?.stock >= count.value && count.value > 0) {
    changeCartItemCount(props.guitar.id, count.value)
    toast.success('Cart updated')
  } else if (cartItem && count.value === 0) {
    removeFromCart(props.guitar.id)
    buttonText.value = 'Add to cart'
    toast.success('Item removed from cart')
  }
}

// DO NOT NEED IF, IF YOU USE NUMBER INPUT, AND YOU TRUST THE USER
watch(count, () => {
  const minCount = 0
  const maxCount = props.guitar.stock
  if (count.value < minCount) {
    count.value = minCount
  } else if (count.value > maxCount) {
    count.value = maxCount
  }
})
</script>

<template>
  <div class="cart-buttons">
    <button @click="decreaseCount">-</button>
    <input type="text" v-model="count" />
    <button @click="increaseCount">+</button>
    <button class="cart-buttons__modify-cart" @click="handleCartButtonClick">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
button {
  padding: 0.25rem 1rem;
  background: var(--black);
  border: 1px solid var(--black);
  color: var(--white);
}

button:active {
  background: var(--white);
  color: var(--black);
}

button:hover {
  cursor: pointer;
}

input {
  border: 1px solid var(--black);
  padding: 0.25rem 0.5rem;
  border-radius: 0;
  width: 6ch;
  text-align: center;
}

.cart-buttons__modify-cart {
  margin: 0 1rem;
}
</style>
