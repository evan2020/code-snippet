<template>
    <div class="timer">timer</div>
</template>
<script>
import { timer } from "../../utils/timer.js";
export default {
    name: `timer`,
    data() {
        return {
            timerData: 1
        };
    },
    created() {
        // 使用定时函数
        timer(3, 1000, this.test, this.end);
        console.log(`test1`)
    },
    methods: {
        test() {
            console.log(`test`);
        },
        end() {
            console.log(`end`);
        }
    }
};
</script>
<style lang="scss" scoped>
.timer {
}
</style>
