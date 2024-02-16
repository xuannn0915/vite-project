<template>
    <h1>
        這是前台的畫面</h1>
    <div class="container">
        <div class="row">
            <div class="col-2">
                <nav class="nav flex-column bg-body-tertiary">
                    <RouterLink class="nav-item px-4 py-2" to="/home" >Home</RouterLink>
                    <RouterLink class="nav-item px-4 py-2" to="/about">About</RouterLink>
                    <RouterLink class="nav-item px-4 py-2" to="/test">Test</RouterLink>
                    <RouterLink class="nav-item px-4 py-2" to="/products">產品列表</RouterLink>
                </nav>
            </div>
            <div class="col-10">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<style>
.active {
    color: red;
}
</style>