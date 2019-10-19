<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// 引入rem文件
import { rem } from "./utils/rem.js";
// 引入浏览器检测
import {getBrowserInfo} from "./utils/checkBro"
export default {
  name: "App",
  created () {
    // 初始化时设置rem布局
    rem();
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
