<template>
  <h2>MyComponent</h2>
  <p>{{ message }}</p>
</template>

<script setup>
  import { ref } from 'vue'
  const message = ref('값을 나타냄')
</script>

<style scoped>

</style>