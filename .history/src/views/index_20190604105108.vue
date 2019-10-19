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
      上海市金筛去
    </div>
    <div class="d3"></div>
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
        title: `<div class="tooltip-title">222</div>`,
        container: false,
        html: true,
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
  .d3 {
    margin-left: 10px;
    float: left;
    width: 0;
    height: 0;
    border-width: 100px;
    border-style: solid;
    border-color: #ffcccc transparent transparent transparent;
  }
  #ref {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 0px 10px;
    font-size: 16px;
  }

  /deep/ .tooltip-title {
    color: pink;
  }
}
</style>
