<template>
<div>
  <h1>Todo Project</h1>
  <TodoList />
  <TodoForm />

  <!-- <p>state: {{ store.count }}</p>
  <p>getter: {{ store.doubleCount }}</p>
  <button @click="store.increment">C</button>
  <hr>
  <Example /> -->
</div>


</template>

<script setup>
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

// import Example from './components/Example.vue'
// import { useCounterStore } from './stores/counter.js';
// const store = useCounterStore()

</script>

<style scoped>

</style>