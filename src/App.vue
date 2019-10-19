<template>
    <div id="app">
        <router-view />
    </div>
</template>

<script>
// 引入rem文件
import { rem } from './utils/rem.js'
// 引入数字三位数货币化
import { dealNumber } from './utils/currency'
export default {
<<<<<<< HEAD
    name: "App",
    created() {
        // 初始化时设置rem布局
        rem();
        this.$log(1000,`这是一个测试log >>>>>>`)
        this.$logStyle(1000,`blue`,[1,2,45646,456456456,456456456456,878979879,12123,123,4684,8789,456,4498,456456456456456456456,787897987798789798,1231231231321321231321231,32123123],{name:`dsx`},`这是一个测试`,1,false,null,undefined)
    },
    methods: {
    }
};
=======
	name: 'App',
	created() {
		// 初始化时设置rem布局
		rem()
	},
	methods: {}
}
>>>>>>> 8e322ee0f8ec032432dd3f2ba698027c34eefcab
</script>

<style>
</style>
