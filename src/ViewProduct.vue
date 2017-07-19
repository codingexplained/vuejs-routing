<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>
    </div>
</template>

<script>
    import { products } from './data/products';

    export default {
        data() {
            return {
                products: products,
                product: null
            };
        },
        created() {
            let productId = this.$route.params.productId;
            this.product = this.getProduct(productId);
        },
        methods: {
            getProduct(productId) {
                let match = null;

                this.products.forEach(function(product) {
                    if (product.id == productId) {
                        match = product;
                    }
                });

                return match;
            }
        }
    }
</script>