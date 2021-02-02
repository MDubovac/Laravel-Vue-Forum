import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Components */
import Login from '../components/login/Login.vue';

/* All Routes */
const routes = [
    { path: '/login', component: Login }
]

/* Router */
const router = new VueRouter({
    routes,
    mode: 'history'
})


export default router;