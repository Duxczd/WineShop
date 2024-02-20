import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '../views/login/login.vue'
const files = require.context('./module', false, /\.js$/)
var pages = []
files.keys().forEach(key => {
  pages = pages.concat(files(key).default)
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/path404',
    name: 'path404',
    component: () => import(/* 404页面 */'@/views/main/path404')
  }
]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

const createRouter = () => new VueRouter({
  scrollBehavior: () => {
    history.pushState(null, null, document.URL)
  },
  routes
})

const router = createRouter()
export { routes }
export function resetRouter () {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}
// 页面title
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
