import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

Vue.filter('currency', function(value) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    
    return formatter.format(value);
});

export const eventBus = new Vue();

new Vue({
    el: '#app',
    render: h => h(App),
    router: router
})
