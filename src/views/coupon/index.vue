<template>
    <div class="coupon">
        <div class="couponOne">
            <div class="circleTop"></div>
            <div class="circleBom"></div>
            <div class="left"></div>
            <div class="right"></div>
        </div>
        <!-- <com-test></com-test> -->
        <!-- <div class="wrap">
            <div class="couponTest">
                <div class="coupon-left"></div>
                <div class="coupon-con"></div>
            </div>
        </div>-->
        <!-- <div class="circle"></div> -->
    </div>
</template>

<script>
export default {
    name: "coupon",
    data() {
        return {
            
        };
    },
    created(){
       console.log(eee)
    }
};
</script>

<style lang="less" scoped>
.coupon {
    width: 100vw;
    font-size: 0.3rem;
    // 上半圆
    .circle{
        width: 200px;
        height: 100px; /* 宽度的一半 */
        border-radius:100px 100px 0 0; /* 上和右为高度的长度 */
        background-color: #fff;
        border: 1px solid gray;
        border-bottom: none;
    }
    .couponOne {
        width: 7rem;
        height: 2rem;
        // background-color: blue;
        // border: 1px solid #ff922b;
        margin: 0 auto;
        margin-top: 0.5rem;
        // border-radius: 0.1rem;
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        .left {
            width: 1.55rem;
            height: 100%;
            background-color: #ffe8cc;
            border-radius: 0.1rem 0 0 0.1rem;
            border: 1px solid #ff922b;
            border-right: none;
        }
        .right {
            flex: 1;
            height: 100%;
            background-color: #ffc9c9;
            border-radius: 0 0.1rem 0.1rem 0;
            border: 1px solid #ff922b;
        }
        .circleTop {
            width: 0.3rem;
            height: 0.2rem; /* as the half of the width */
            // background-color: gold;
            border-radius: 0 0 0.2rem 0.2rem;
            border: 0.02rem solid #ff922b;
            // border-bottom: 0;
            position: absolute;
            top: 0;
            left: 20%;
            box-sizing: border-box;
            border-top: 1px solid #fff;
            background-color: #fff;
        }
        .circleBom {
            width: 0.3rem;
            height: 0.2rem; /* as the half of the width */
            // background-color: gold;
            border-radius: 0.2rem 0.2rem 0 0;
            border: 0.02rem solid #ff922b;
            // border-bottom: 0;
            position: absolute;
            bottom: 0;
            left: 20%;
            box-sizing: border-box;
            border-bottom: 1px solid #fff;
            background-color: #fff;
        }
    }
    .wrap {
        // width: 600px;
        margin: 0 auto;
        margin-top: 0.3rem;
        text-align: center;
        .couponTest {
            display: inline-block;
            overflow: hidden;
            border-radius: 10px;
            margin: 0 auto;
        }
        .coupon-left {
            float: left;
            width: 150px;
            height: 150px;
            position: relative;
        }
        .coupon-left::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: radial-gradient(
                circle at right top,
                transparent 10px,
                #252525 10px,
                #ffd8a8 10px
            );
        }
        .coupon-left::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: radial-gradient(
                circle at right bottom,
                transparent 10px,
                #252525 10px,
                #ffd8a8 10px
            );
        }
        .coupon-con {
            float: left;
            width: 200px;
            height: 150px;
            position: relative;
            // border:1px solid #333;
        }
        .coupon-con::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: radial-gradient(
                circle at left top,
                transparent 10px,
                #252525 10px,
                #ffc9c9 10px
            );
        }
        .coupon-con::after {
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            height: 50%;
            background: radial-gradient(
                circle at left bottom,
                transparent 10px,
                #252525 10px,
                #ffc9c9 10px
            );
        }
    }
}
</style>