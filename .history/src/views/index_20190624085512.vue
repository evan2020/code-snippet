<template>
  <div class="index">
    code
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
    position: absolute;
    bottom: -20px;
    right: 50%;
    transform:translateX(10px);
    // margin-left: -10px;
    // float: left;
    width: 0;
    height: 0;
    border-width: 10px;
    border-style: solid;
    border-color: #ffcccc transparent transparent transparent;
  }
  #ref {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 0px 10px;
    font-size: 16px;
    line-height:24px;
    position: relative;
    max-width:20em;
    &:after{
        content:"123";
        color:blue;
    }
  }

  /deep/ .tooltip-title {
    color: pink;
  }
}
</style>
