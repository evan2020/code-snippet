<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
// 引入rem文件
import { rem } from "./utils/rem.js";
export default {
    name: "App",
    created() {
        // 初始化时设置rem布局
        rem();
    }
};
</script>

<style>
</style>
