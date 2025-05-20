// store/articles.js
import axios from 'axios'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticleStore = defineStore('article', () => {
  // 더미데이터. 미리 컨벤션을 정해서 데이터 형태를 약속하자
  const articles = ref([
    { id: 1, title: 'title 1', content: 'content 1'},
    { id: 2, title: 'title 2', content: 'content 2'},
  ])

  // 해야 할 일
  // axios 요청으로 api/v1/articles에 GET 요청을 보낼 함수 작성
  // 그 게시글 조회 함수를 어딘가에서 요청해야 한다.
  const API_URL = 'http://127.0.0.1:8000'    // 중복해서 여러번 사용하는 경로를 따로 저장하는 방법 고민
  const getArticles = function () {
    axios({
      method: 'GET',
      url: `${API_URL}/api/v1/articles/`,
    })
      .then(res => {
        // console.log(res)
        // console.log(res.data)
        articles.value = res.data
      })
      .catch(err => console.log(err))
  }
  return {
    articles, API_URL,
    getArticles,
   }
}, { persist: true })
