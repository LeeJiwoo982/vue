<template>
<div>
  <h1>Example</h1>
  <p>state: {{ store.count }}</p>
  <p>getter: {{ store.doubleCount }}</p>
  <button @click="store.increment">C</button>
</div>


</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js';
const store = useCounterStore()
console.log(store.count);

</script>

<style scoped>

</style>