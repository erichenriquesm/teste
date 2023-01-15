import Vue from 'vue'
import VueRouter from 'vue-router'
import CepSearchView from '../views/CepSearchView.vue'
import ListagemCepView from '../views/ListagemCepView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/search',
    name: 'CepSearch',
    component: CepSearchView
  },
  {
    path: '/listagem',
    name: 'ListagemCep',
    component: ListagemCepView
  },

]
const router = new VueRouter({
  mode: "history",
  routes
});


export default router
