<template>
    <div class="index">
        <div class="slider">
            <div class="text">{{value*100}}</div>
            <vue-slider v-model="value" :tooltip="tooltip" :interval="interval"></vue-slider>
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
import { Toast } from 'vant';
export default {
    name: "index",
    components: {
        VueSlider
    },
    data() {
        return {
            value: 0,
            interval:1,
            tooltip:"none"
        };
    },
    created() {
        console.log(`初始化主页4`);
        // this.$router.push({
        //     name: `coupon`
        // });
    },
    watch:{
        value:function(newVal){
            if(newVal>50){
                Toast('最大可借额度5000元');
                setTimeout(()=>{
                    this.value=50
                },500)
                
            }
        }
    },
    mounted() {}
};
</script>

<style lang="less" scoped>
.index {
    width: 100vw;
    height: 100vh;
    // font-size: 0.3rem;
    // display: flex;
    // flex-direction: row;
    // align-items: center;
    // justify-content: center;
    // background-color: pink;
    .slider {
        .text{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            margin-bottom:0.9rem;
            color:#333;
        }
        margin: 0 auto;
        margin-top: 3.5rem;
        // background-color: aqua;
        width: 90%;
        // height:50px;
    }
}
</style>
