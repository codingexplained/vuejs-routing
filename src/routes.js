import ProductList from './ProductList.vue';
import ViewProduct from './ViewProduct.vue';
import Cart from './Cart.vue';

export const routes = [
    // LEGACY ROUTES
    { path: '/products/:productId/view', redirect: { name: 'viewProduct' } },
    // /LEGACY ROUTES
    
    { path: '', component: ProductList },
    { path: '/products/:productId', name: 'viewProduct', props: true, component: ViewProduct },
    { path: '/cart', component: Cart },
    { path: '*', component: { template: '<h1>Page Not Found!</h1>' } }
];