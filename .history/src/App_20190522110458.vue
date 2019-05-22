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
        this.test().apply(this,[1,2])
        // this.$log(1)
        // this.$log(1000,`这是一个测试log >>>>>>`)
        // this.$logStyle(1000,`red`,[1,2],{name:`dsx`},`这是一个测试`,1,false,null,undefined)
    },
    methods: {
        test(data=1){
            console.log(data)
        }
    }
};
</script>

<style>
</style>
