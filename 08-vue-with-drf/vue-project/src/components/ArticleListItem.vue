<template>
  <div>
    <h5>{{ article.id }}</h5>
    <p>{{ article.title }}</p>
    <p>{{ article.content }}</p>
    <!-- 디테일 페이지 이동할 수 있는 링크 만들기 RouterLink, router.push -->
    <RouterLink :to="{ name: 'DetailView', params: { id: article.id }}">[DETAIL]</RouterLink>
    <hr>
  </div>
</template>

<script setup>
  import { RouterLink } from  'vue-router'
  const props = defineProps({
    article: Object,
  })
</script>
