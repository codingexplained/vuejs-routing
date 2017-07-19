import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import ProductList from './ProductList.vue';
import Cart from './Cart.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '', component: ProductList },
        { path: '/cart', component: Cart },
        { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
    ],
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
