<script setup>
import { useCartStore } from '@/store/cart.js'
import formatPrice from '../utils/formatPrice.js'

const { cart, totalPrice } = useCartStore()
</script>

<template>
  <div class="shopping-cart">
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Count</th>
          <th>Sum price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="guitar in cart" :key="guitar.id">
          <td>{{ guitar.title }}</td>
          <td>{{ guitar.count }}</td>
          <td>{{ formatPrice(guitar.count * guitar.price) }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="3">{{ formatPrice(totalPrice) }}</td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
.shopping-cart {
  display: flex;
  align-items: center;
  flex-direction: column;
}

th,
td {
  padding: 0.25rem 1rem;
}

tfoot {
  font-weight: bold;
  font-size: 1.25rem;
  text-align: right;
}
</style>
