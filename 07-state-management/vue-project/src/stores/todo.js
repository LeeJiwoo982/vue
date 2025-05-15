import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  let id = 0 //상태변수만 리턴하는거라 얘는 할 필요 없다, 얘는 스토에 내부에 사용하는 일반변수
  const todos = ref([
    // 체크박스에 쓰일 id, v-for로 순회할 때 쓸 key
    { id: id++, text: 'vue 공부', isDone: false },
    { id: id++, text: 'JS 공부', isDone: false },
    { id: id++, text: 'django 공부', isDone: true },
  ])

  const addTodo = function (todoText) {
    todos.value.push({
      id: id++,
      isDone: false,
      text: todoText,
    })
  }
  const deleteTodo = function (selectedId) {
    // const index = todos.value.findIndex((todo) => todo.id === selectedId)
    // todos.value.splice(index, 1)   //단일 항목 수정
    todos.value = todos.value.filter(todo => todo.id !== selectedId) //전체배열 재생성
  }

  const updateTodo = function (selectedId) {
    todos.value = todos.value.map((todo) => {
      if (todo.id === selectedId) {
        todo.isDone = !todo.isDone
      }
      return todo
    })  // 전체 배열 변경
  }
  return { 
    todos,
    addTodo, deleteTodo, updateTodo,
   }
}, { persist: true })
