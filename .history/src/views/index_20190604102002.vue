<template>
  <div class="index">
    <el-tabs type="border-card">
      <el-tab-pane label="消息中心">
        我的行程
      </el-tab-pane>
      <el-tab-pane label="消息中心">消息中心</el-tab-pane>
      <el-tab-pane label="角色管理">角色管理</el-tab-pane>
      <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
    </el-tabs>
    <div id="ref"
         aria-describedby="pop">
      ref
    </div>
    <div id="pop"
         role="tooltip">
      <div x-arrow>111</div>
      pop
    </div>
  </div>
</template>

<script>
import Popper from 'popper.js';
export default {
  name: "index",
  data () {
    return {};
  },
  mounted () {
    this.$nextTick(() => {
      const refEl = document.getElementById('ref');
      const popEl = document.getElementById('pop');

      new Popper(refEl, popEl, {
        title: `title`,
        placement: 'right',
        trigger: "click",
        delay: 2000,
      });
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
    background: red;
    width: 100px;
    height: 100px;
  }

  #pop {
    background: green;
    width: 100px;
    height: 100px;
  }
}
</style>
