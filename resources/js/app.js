
require('./bootstrap');

window.Vue = require('vue');

// User Class
import User from './Helpers/User';
window.User = User;


// Components
Vue.component('app-home', require('./components/AppHome.vue').default);

// Vue Instance
import router from './Router/router';
import vuetify from '../plugin/vuetify';

const app = new Vue({
    vuetify,
    el: '#app',
    router,
});
