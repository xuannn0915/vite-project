<template>
  <div class="about">
    <h1>This is an about page</h1>
    <LoadingComponent :active="isLoading"/>
  </div>
</template>

<script>
const {VITE_APP_URL, VITE_APP_PATH} = import.meta.env
export default{
  data() {
    return {
      isLoading:false
    } 
  },
  mounted() {
    this.$http.get(`${VITE_APP_URL}v2/api/${VITE_APP_PATH}/products/all`)
    .then(res=>{
      console.log(res);
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
