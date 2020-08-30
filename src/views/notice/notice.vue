<template>
    <!-- 首页消息通知 -->
    <div class="notice">
        <!-- 左侧Icon start -->
        <div class="icon"></div>
        <!-- 左侧Icon end -->
        <!-- 右侧文字信息 start -->
        <div
            class="textCon"
            ref="textCon"
            :style="{transform:'translateY('+rollCoorY+')',transitionDuration:''+overTime+''}"
        >
            <div v-for="(item,index) in noticeArr" :key="index" class="text">{{item}}</div>
        </div>
        <!-- 右侧文字信息 end -->
    </div>
</template>
<script>
export default {
    name: `Notice`,
    components: {},
    data() {
        return {
            noticeArr: [
                `这是测试1`,
                `这是测试2`,
                `这是测试3`,
                `这是测试4`,
                `这是测试5`
            ],
            coorY: 0, // 文字的偏移坐标(使用translateY设置偏移)
            coorIndex: 0, //当前文字偏移的总次数
            isUp: true, //当前是上滚动还是下滚动
            toggleTime: 3000, //切换的时间间隔
            overTime: `2s` // 过度效果的时间
        };
    },
    created() {},
    mounted() {
        let that = this;
        // 当DOM结构加载完毕的时候
        that.$nextTick(() => {
            // 执行消息通知动画
            that.roll();
        });
    },
    methods: {
        // 动画效果
        roll() {
            let that = this;
            // 当文字内容不为空时开始动画
            if (that.coorIndex === 0 && that.coorLen !== 0) {
                // 设置定时器（动画切换的时间）
                let timer = setInterval(() => {
                    if (that.isUp) {
                        // 如果当前为向上滚动
                        that.coorIndex++;
                        that.coorY -= 0.7;
                    } else {
                        // 如果当前为向下滚动
                        that.coorIndex++;
                        that.coorY += 0.7;
                    }
                }, that.toggleTime);
            }
        }
    },
    computed: {
        // 监听位移（坐标单位换算）
        rollCoorY: function() {
            let that = this;
            return that.coorY + `rem`;
        },
        //当前文字的总数量（决定动画上下滚动的开关）
        coorLen: function() {
            let that = this;
            let coorLen = that.noticeArr.length;
            return coorLen;
        }
    },
    watch: {
        // 监听文字偏移的次数
        coorIndex: function(newVal, oldVal) {
            let that = this;
            // ***很重要*** 当文字偏移的次数 模上 文字总数量-1 为0的时候就是一次循环
            if (newVal % (that.coorLen - 1) === 0) {
                // 上下滚动切换
                that.isUp = !that.isUp;
            }
        }
    }
};
</script>
<style lang='less' scoped>
.notice {
    width: 6.9rem;
    height: 0.7rem;
    background-color: #eee;
    overflow: hidden;
    .icon {
    }
    .textCon {
        width: 100%;
        display: flex;
        flex-direction: column;
        // 设置过度效果
        transition: all ease-out;
        .text {
            height: 0.7rem;
            line-height: 0.7rem;
            text-indent: 1rem;
            display: flex;
            align-items: center;
            color: pink;
            font-size: 0.3rem;
        }
    }
}
</style>
