<template>
    <div>
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p>
            <strong>Price:</strong> {{ (product.price - discount) | currency }}
            <span v-if="discount > 0">(save {{ discount | currency }})</span>
        </p>
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
                product: null,
                discount: 0
            };
        },
        created() {
            this.product = this.getProduct(this.productId);

            if (typeof this.$route.query.discount !== 'undefined') {
                this.discount = this.getDiscount(this.product.price, this.$route.query.discount);
            }
        },
        beforeRouteUpdate(to, from, next) {
            this.discount = this.getDiscount(this.product.price, to.query.discount);
            this.product = this.getProduct(to.params.productId);

            next();
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
            },
            getDiscount(originalPrice, percentage) {
                if (!percentage) {
                    return 0;
                }

                return ((originalPrice * percentage) / 100);
            }
        }
    }
</script>