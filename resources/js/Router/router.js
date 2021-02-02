import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Components */
import AppHome from '../components/AppHome.vue';

/* All Routes */
const routes = [
   // { path: '/', component: AppHome }
]

/* Router */
const router = new VueRouter({
    routes // short for `routes: routes`
})


export default router;