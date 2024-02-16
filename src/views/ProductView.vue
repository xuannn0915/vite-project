<template>
    <h2>
        更多品內容</h2>
    <h3>{{ product.title }}</h3>
    <img :src="product.imageUrl" alt="">
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env

export default {
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        const {
            productId
        } = this.$route.params;
        this.$http.get(`${VITE_APP_URL}/v2/api/${VITE_APP_PATH}/product/${productId}`)
            .then((res) => {
                this.product = res.data.product
            }).catch((err) => {
                console.log(err);
            });
    },
}
</script>

<style>
img {
    width: 100%;
    height: 500px;
    object-fit: cover;
}
</style>
