import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '@/views/UserView.vue'
import UserProfile from '@/components/UserProfile.vue'
import UserPosts from '@/components/UserPost.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
    {
      path : '/user/:id',
      name : 'user',
      component : UserView,
      children: [
        { path:'', component: UserProfile },
        { path: 'profile', name: 'user-profile', component: UserProfile },
        { path: 'posts', name: 'user-post', component: UserPosts },
      ]
    },
    {
      path: '/login',
      name: 'login', 
      component: LoginView,
      // beforeEnter: (to, from) => {
      //   console.log(to, from);
      //   //로그인 된 상태면 로그인페이지 못가게
      //   const isLogined = true
      //   if (isLogined) {
      //     return { name: 'home' }
      //     // return false
      //   }        
      // }
    },
  ],
})

// 전역이라 다른 페이지 못갈 수 있음 주의
// router.beforeEach((to, from) => {
//   // console.log(to, from);
//   // alert()
//   const isLogined = false
//   // 이동하려는데 로그인이 안되어 있으면 => 로그인 페이지로
//   if (!isLogined && to.name !== 'login') {
//     alert('로그인 하세여')
//     return { name: 'login' }
//   }
  
// })
export default router
