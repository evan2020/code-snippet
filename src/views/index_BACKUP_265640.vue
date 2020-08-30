<template>
    <div class="index">
        index
    </div>
</template>

<script>
export default {
    name: "index",
    components: {
        VueSlider
    },
    data() {
        return {
            value: 2,
            interval:1,
            tooltip:"none"
        };
    },
    created() {
        console.log(`初始化主页5`);
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
	font-size: 0.3rem;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
}
</style>
