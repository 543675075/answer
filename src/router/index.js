import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=> import ("../views/home/Home.vue")
const Score = () => import ("../views/score/Score.vue")
const Item = () => import ("../views/item/Item.vue")
Vue.use(VueRouter)

  const routes = [
  {
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home
  },
  {
    path: '/item',
    component: Item
  },
  {
    path: "/score",
    component: Score
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
