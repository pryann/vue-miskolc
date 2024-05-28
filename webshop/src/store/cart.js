import { computed, readonly, ref } from 'vue'

const cart = ref([])

// USE MUTATIONS
export function useCartStore() {
  function getCartItemIndexById(id) {
    return cart.value.findIndex((item) => item.id === id)
  }

  function getCartItemById(id) {
    const index = getCartItemIndexById(id)
    return cart.value[index]
  }

  function addItemToCart(item, count) {
    cart.value.push({ ...item, count })
  }

  function changeCartItemCount(id, count) {
    const index = getCartItemIndexById(id)
    cart.value[index].count = count
  }

  function removeFromCart(id) {
    const index = getCartItemIndexById(id)
    cart.value.splice(index, 1)
  }

  const totalPrice = computed(() =>
    cart.value.reduce((prev, curr) => prev + curr.price * curr.count, 0)
  )

  const totalCount = computed(() => cart.value.reduce((prev, curr) => prev + curr.count, 0))

  return {
    cart: readonly(cart),
    getCartItemById,
    addItemToCart,
    changeCartItemCount,
    removeFromCart,
    totalPrice,
    totalCount
  }
}
