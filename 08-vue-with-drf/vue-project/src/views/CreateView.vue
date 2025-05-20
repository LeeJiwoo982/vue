<!-- 양방향 바인딩 -->
<template>
  <div>
    <h1>Create page</h1>
    <form @submit.prevent="createArticle">
      <!-- input태그와 textarea가 비었을 때 처리하는 로직은 있었으면 좋음 -->
      <label for="title">title: </label>
      <input type="text" id="title" v-model="title">
      <br>
      <label for="content">content: </label>
      <textarea id="content" v-model="content"></textarea>

      <input type="submit" value="[CREATE]">
    </form>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  // axios 
  import axios from 'axios'
  // 게시글 상세 조회 요청 경로
  import { useArticleStore } from '@/stores/articles.js'
  // 게시글 생성 완료 후 router.push
  import {useRouter } from 'vue-router'

  const title = ref(null)
  const content = ref(null)
  const router = useRouter()

  const store = useArticleStore()

  const createArticle = function () {
    axios({
      method: 'POST',
      url: `${store.API_URL}/api/v1/articles/`,
      data: {
        title: title.value,
        content: content.value,
      }
    })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        router.push({ name: 'DetailView', params: { id:res.data.id }})
      })
      .catch(err => {
        console.log(res.data);
      })
    // csrf token이 필요

  }
</script>

<style>

</style>
