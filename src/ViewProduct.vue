<template>
    <div>
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>
    </div>
</template>

<script>
    import { products } from './data/products';

    export default {
        props: {
            productId: {
                required: true
            }
        },
        data() {
            return {
                products: products,
                product: null
            };
        },
        created() {
            this.product = this.getProduct(this.productId);
        },
        watch: {
            productId(newValue, oldValue) {
                this.product = this.getProduct(newValue);
            }
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