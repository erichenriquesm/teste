import Vue from 'vue'
import VueRouter from 'vue-router'
import CepSearchView from '../views/CepSearchView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'CepSearch',
    component: CepSearchView
  },

]

const router = new VueRouter({
  routes
})

export default router
