<template>
<h2>Parent</h2>
<div>
    <p>{{ userName }}</p>
    <Child 
        :user-name="userName"
        parent-name="Bella"
    />
</div>
</template>

<script setup>
import Child from "./Child.vue"
// prop 정보를 정의하는 방법
// userName:String 정도는 지정해줘야 함
// 타입이 잘못 들어오면 콘솔에서 경고문구 출력. 렌더링에는 문제 없음
defineProps({
    userName : {
        type : String,
        required : true,
    }
})
</script>

<style scoped>

</style>