<script>
// import { RouterLink, RouterView } from 'vue-router'

export default{
  components:{
  }
}
</script>

<template>
  <header>
    <div class="wrapper">
      <ul class="nav bg-body-tertiary justify-content-center">
        <li class="nav-item px-4 py-2">
          <RouterLink to="/" >前台</RouterLink>
        </li>
        <li class="nav-item px-4 py-2">
          <RouterLink to="/backstage/products" >後台</RouterLink>
        </li>
      </ul>
    </div>
  </header>

  <div class="container">
    <RouterView />
  </div>
</template>

<style>
.active{
  color: red;
}
</style>