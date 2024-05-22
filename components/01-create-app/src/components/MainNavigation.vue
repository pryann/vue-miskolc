<script setup>
// Nem módosítjuk a props-okat a komponensben
// A props reaktív
const props = defineProps({
  title: {
    type: String,
    reqired: true
  }
})

function alertTitle() {
  alert(props.title)
}
</script>

<template>
  <nav>
    <ul>
      <li>
        <a href="/" @click="alertTitle">{{ props.title }}</a>
      </li>
      <li>
        <a href="https://training360.com">Training360</a>
      </li>
      <li>
        <a href="https://vuejs.org">Vue.js</a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
nav {
  background: lightgray;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

li {
  display: inline-block;
}

a {
  color: black;
  display: inline-block;
  padding: 1rem;
  font-size: 1.15rem;
  text-decoration: none;
}
</style>
