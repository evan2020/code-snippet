<template>
  <div class="index">
    <!-- <el-tabs type="border-card">
      <el-tab-pane label="消息中心">
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs> -->
    <div id="ref"
         aria-describedby="pop">
      ref
    </div>
  </div>
</template>

<script>
import Tooltip from 'tooltip.js';
export default {
  name: "index",
  data () {
    return {};
  },
  mounted () {
    //   console.log(`Tooltip >>>>>>>`,Tooltip)
    this.$nextTick(() => {
      const refEl = document.getElementById('ref');
      const popEl = document.getElementById('pop');

      const instance = new Tooltip(refEl, {
        placement: `top`,
        title:`<div>222</div>`,
        container:false,
        html:true,
        trigger: "hover",
      });
      //   instance.show();
    })

  }
};
</script>

<style lang="scss" scoped>
.index {
  width: 100vw;
  height: 100vh;
  font-size: 0.3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  #ref {
    background: #eee;
    width: 100px;
    height: 100px;
    color:#333;
  }

  /deep/ .tooltip-arrow{
      color:pink;
  }
  /deep/ .tooltip-inner{
      color:blue;
  }
}
</style>
