<template>
    <div>
        <h1>{{ product.name }}</h1>
        <p><strong>ID:</strong> {{ product.id }}</p>
        <p><strong>Price:</strong> {{ product.price | currency }}</p>
        <p><strong>In stock:</strong> {{ product.inStock }}</p>
        <p>{{ product.description }}</p>

        <div v-if="relatedProducts != null">
            <h2>Related Products</h2>
            <ul>
                <li v-for="related in relatedProducts">
                    <router-link :to="{ name: 'viewProduct', params: { productId: related.id } }">
                        {{ related.name }}
                    </router-link>
                </li>
            </ul>
        </div>
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
        },
        computed: {
            relatedProducts() {
                if (this.product === null) {
                    return [];
                }

                let related = [];
                let count = 0;

                this.products.forEach((product) => {
                    if (product.id != this.product.id && count < 5) {
                        related.push(product);
                        count++;
                    }
                });

                return related;
            }
        }
    }
</script>