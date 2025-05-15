<template>
<div>
  <input type="checkbox" :id="todo.id" v-model="todo.isDone">
  <!-- 라벨: for와 같은 값을 가진 id를 찾아서
   라벨에 적힌 textContent를 클릭하면 찾아둔 동일 id를 가진 요소에 focus -->
  <label :for="todo.id">{{ todo.text }}</label>
  <button @click="onDeleteTodo">삭제</button>
</div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTodoStore } from '@/stores/todo.js';

const props = defineProps({
  todo:Object,
})

const store = useTodoStore()
const isDone = ref(props.todo.isDone)

watch(isDone, () => {
  store.updateTodo(props.todo.id)
})

const onDeleteTodo = function () {
  store.deleteTodo(props.todo.id)
}
</script>

<style scoped>

</style>