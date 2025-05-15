<template>
<div>
    <h1>This is User Page.</h1>
    <h2>현재 경로에 관련된 어떤 정보들은 {{ $route.params }}</h2>
    <h2>현재 경로에 관련된 어떤 정보들 {{ $route.params.id }}</h2>
    
    <!-- post, profile로 이동 -->
    <RouterLink :to="{ name: 'user-profile' }">Profile</RouterLink>
    <RouterLink :to="{ name: 'user-post' }">Posts</RouterLink>

    <!-- 중첩된 자식들 정보 보여주는 -->
    <RouterView />
</div>
</template>

<script setup>
// route 기능은 우리가 프로젝트에 추가할 vue-router가 가지고 있음
import { useRoute, useRouter, RouterView, RouterLink, onBeforeRouteLeave } from 'vue-router'

onBeforeRouteLeave((to, from) => {
    const answer = window.confirm('진짜 떠날거니?')
    if (answer === false) {
        return false
    }
})

const route = useRoute()
const router = useRouter()

console.log(route)
console.log(router);

</script>

<style scoped>

</style>