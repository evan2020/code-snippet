<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// 引入rem文件
import { rem } from "./utils/rem.js";
export default {
  name: "App",
  created () {
    // 初始化时设置rem布局
    rem();
    // this.test.apply(this,[1,2])
    // this.$log( { name: 123 },[1,2]).toColor(`pink`)
    // this.$log(1000,`这是一个测试log >>>>>>`)
    // this.$log(1000, `red`, [1, 2], { name: `dsx` })
    // this.$logStyle( { name: `dsx` }).toColor(`blue`)
    // this.$logStyle( { name: `dsx` }).toString()
  },
  methods: {
    test (...data) {
      console.log(...data)
    }
  }
};
</script>

<style>
</style>
