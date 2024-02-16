<template>
  <div>
    <h1>產品列表頁面</h1>
    <LoadingComponent :active="isLoading"/>
    <table class="table">
      <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">名稱</th>
      <th scope="col">價格</th>
      <th scope="col">更多</th>
      <!-- <th scope="col">Handle</th> -->
    </tr>
  </thead>
      <tbody>
        <tr v-for="(product,index) in products" :key="product.id">
          <td>
            {{ index+1 }}
          </td>
          <td>
            {{ product.title }}
          </td>
          <td>
            {{ product.price }}
          </td>
          <td>
            <router-link :to="`/products/${product.id}`" class="btn btn-primary">產品內容</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
const {VITE_APP_URL, VITE_APP_PATH} = import.meta.env
export default{
  data() {
    return {
      isLoading:true,
      products:[]
    } 
  },
  mounted() {
    this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
    .then(res=>{
      this.products = res.data.products
      this.isLoading = false
    })
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>