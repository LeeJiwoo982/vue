<template>
<h3>Child</h3>
<p>{{ userName }}</p>
<p>{{ parentName }}</p>
<!-- ChildItem component는 Child.vue가 가진 item 배열의 요소 수 만큼 만들거임 -->
<ChildItem
    v-for="item in items"
    :key="item.id"
    :item="item"
    @some-event="onSomeEvent"
/>
</template>

<script setup>
import { ref } from "vue";
import ChildItem from "./ChildItem.vue";
defineProps({
    userName:String,
    parentName:String,
})
const items = ref([
    { id : 1, name : '사과'},
    { id : 2, name : '바나나'},
    { id : 3, name : '딸기'},
])

const onSomeEvent = function (arg) {
    console.log('데이터를 넘겨받음')
    for (let i=0; i<items.value.length; i+=1) {
        if(arg.id === items.value[i].id) {
            items.value[i].name = name
        }
    }
}
</script>

<style scoped>

</style>