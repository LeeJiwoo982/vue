<template>
<div>
  <!-- vfor는 반복문을 실행
  TodoListItem 컴포넌트에 data prop 시키기!-->
  <TodoListItem
    v-for="todo in store.todos"
    :key="todo.id"
    :todo="todo" 
  />
</div>
</template>

<script setup>
import { useTodoStore } from '@/stores/todo.js';
import TodoListItem from '@/components/TodoListItem.vue';

const store = useTodoStore()
</script>

<style scoped>

</style>