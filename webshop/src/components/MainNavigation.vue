<script setup>
import { useCartStore } from '@/store/cart.js'

const { cart, totalCount } = useCartStore()
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <RouterLink class="nav__link" :to="{ name: 'guitars-list' }">Home</RouterLink>
      </li>
      <li class="nav__item">
        <RouterLink class="nav__link" :to="{ name: 'cart' }"
          >Cart
          <span v-if="cart.length > 0">({{ totalCount }})</span>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background-color: var(--black);
}

.nav__list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  margin: 0;
  list-style: none;
}

.nav__item {
  padding: 0 1rem;
}

.nav__link {
  text-decoration: none;
  font-size: 1.25rem;
  font-weight: bold;
}
</style>
