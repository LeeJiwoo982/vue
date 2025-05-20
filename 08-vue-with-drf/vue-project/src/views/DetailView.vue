<template>
  <div v-if="article">
    <h5>{{ article.id }}</h5>
    <p>{{ article.title }}</p>
    <p>{{ article.content }}</p>
    <p>{{ article.created_at }}</p>
    <p>{{ article.updated_at }}</p>
  </div>
</template>

<script setup>
  // axios 
  import axios from 'axios'
  // 게시글 상세 조회 요청 경로
  import { useArticleStore } from '@/stores/articles.js'
  // 조회하고자 하는 게시글 id
  import { useRoute } from 'vue-router'
  // 응답받은 게시글 저장할 위치
  import { ref, onMounted } from 'vue'

  // 상세정보를 다른 곳에서 쓸 경우에는 props를 해야할지, store에 있어야 하느냐는 고민
  const article = ref(null)
  const store = useArticleStore()
  const route = useRoute()

  // 함수 실행 시 params에 있는 id 기준으로 
  // 게시글 상세 조회 요청을 보낸다.
  const getArticle = function () {
    axios({
      method: 'GET',
      url: `${store.API_URL}/api/v1/articles/${route.params.id}/`
    })
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        article.value = res.data
      })
      .catch(err => console.log(err)
      )
  }
  onMounted(() => {
    getArticle()
  })
</script>

<style>

</style>
