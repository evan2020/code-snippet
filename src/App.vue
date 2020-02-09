<template>
    <div id="app">
        1112
        <router-view />
    </div>
</template>

<script>
// 引入rem文件
import { rem } from './utils/rem.js'
// 引入数字三位数货币化
import { dealNumber } from './utils/currency'
export default {
	name: 'App',
	created() {
        console.log("git flow")
		// 初始化时设置rem布局
		rem()
	},
	methods: {}
}
</script>

<style>
</style>
