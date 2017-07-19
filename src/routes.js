import ProductList from './ProductList.vue';
import Cart from './Cart.vue';

export const routes = [
    { path: '', component: ProductList },
    { path: '/cart', component: Cart },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];