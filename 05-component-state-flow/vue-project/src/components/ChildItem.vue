<template>
    <h4>ChildItem</h4>
    <p>{{ item.id }}</p>
    <p>{{ item.name }}</p>
    <button class="btn btn-dark text-white" @click="buttonClick">클릭</button>
    <!-- @click="$emit('someEvent')" 템플릿말고 다른 이벤트발생방식을 고려하라고 경고창이 뜨는것 -->
    <hr>
</template>

<script setup>
const props = defineProps({
    item : Object
})
// props.item.name = '파인애플' 모든 name이 변경됨
// props.item = {id:4, name:'파인애플'} readonly라는 경고창 발생

const emit = defineEmits(['someEvent'])
const buttonClick = function () {
    //복잡한 로직 작성 가능
    emit('someEvent', props.item, '구아바') 
    //props.item이 Child의 onSomeEvent의 인자로 넘어감. like 콜백함수
}
</script>

<style scoped>

</style>