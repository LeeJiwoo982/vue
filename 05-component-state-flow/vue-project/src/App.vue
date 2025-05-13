<template>
<h1>SSAFY 실습 : App.vue</h1>
<div>
  <!-- userName 변수에 든 값을 Parent 컴포넌트에게 prop -->
  <!-- prop 받을 데이터가 담길 변수명은 HTML의 컨벤션 형태로 작성(케밥 케이스) -->
   <!-- HTML 속성에는 문자열만 담을 수 있음 -->
    <!-- 내 상태를 HTML  속성에 묶는다. >> v-bind -->
  <Parent
    :user-name="userName" 
  />
</div>
</template>

<script setup>
import Parent from "@/components/Parent.vue";
// ref
import { ref } from 'vue'
const userName = ref('Alice')
</script>

<style scoped>

</style>