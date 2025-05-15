<template>
<form @submit.prevent="onAddTodo">
  <input type="text" v-model="todoText">
  <button>CREATE</button>
</form>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todo.js';
const store = useTodoStore()

const todoText = ref('')
const onAddTodo = function () {
  store.addTodo(todoText.value)
  todoText.value = ''
}
</script>

<style scoped>

</style>