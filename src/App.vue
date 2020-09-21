<template>
    <div id="app">
        1112
        <svg id="snap" width="200" height="200"></svg>
        <router-view />
    </div>
</template>

<script>
// 引入rem文件
import { rem } from "./utils/rem.js";
// 引入数字三位数货币化
import { dealNumber } from "./utils/currency";
export default {
    name: "App",
    created() {
        console.log("git flow");
        // 初始化时设置rem布局
        rem();
    },
    mounted() {
        this.$nextTick(() => {
            let s = Snap("#snap");
            var c = s.paper
                .circle(50, 50, 40)
                .attr({
                    fill: "#f00" // 红色
                })
                .hover(
                    function() {
                        // 移入
                        this.animate(
                            {
                                fill: "#00f" // 蓝色
                            },
                            1000
                        );
                    },
                    function() {
                        // 移出
                        this.animate(
                            {
                                fill: "#f00" // 红色
                            },
                            1000
                        );
                    }
                );

                console.log(`innerSVG`,s.innerSVG());
       
       });
    },
    methods: {}
};
</script>

<style>
</style>
