<template>
  <div class="index">
    code
    <div class="echartDemo" ref='echartDemo'></div>
  </div>
</template>

<script>
import Tooltip from 'tooltip.js';
export default {
  name: "index",
  data () {
    return {
      echartDemo:``,
      // 折线图表的配置项
            echartOptions: {
                color: ['#F77293', '#A79FFF', '#7098FF'], // 折线的颜色
                title: {
                    text: '',
                    x: 'center',
                    textStyle: {// 标题样式
                        color: '#333',
                        fontSize: 14
                    }
                },
                tooltip: {
                    trigger: 'axis',
                    padding: 10,
                    confine: true,
                    formatter: (params) => {
                        // 设置字符串拼接和换行
                        return `${this.checkQuotaName}：${params[0].value}%`;
                    },
                },
                // legend: {
                //     data: ['病例支付费用'],
                //     textStyle: {// 右边图例样式
                //         color: '#999', // 右边图例字体颜色
                //         fontSize: 13// 右边图例字体大小
                //     },
                //     orient: 'vertical', // 图例列表的布局朝向,分别有水平'horizontal',垂直'vertical'
                //     right: 10, // 图例组件离容器右侧的距离
                //     top: 30 // 图例组件离容器上侧的距离
                //     // bottom: 20 // 图例组件离容器下侧的距
                // },
                grid: {
                    left: '30px',
                    right: '50',
                    bottom: '20',
                    top: '80',
                    containLabel: true
                },
                xAxis: {
                    type: 'category',
                    nameGap: 0,
                    // 设置x坐标轴与轴线有一定的距离(true为有距离,false为x轴起始点与坐标轴重合)
                    boundaryGap: false,
                    // 使用'-'的数据不显示当前对应项(用来设置x轴不从零刻度开始)
                    data: [`2019-05`,`2019-06`,`2019-07`],
                    axisLabel: {// 坐标轴刻度标签的相关设置
                        show: true, // 是否显示刻度标签
                        rotate: -45, // 旋转的角度从 -90 度到 90 度
                        color: '#666', // 标签的颜色
                        fontSize: 13, //  标签的字体大小
                        interval: 0, // 设置成 0 强制显示所有标签,
                        margin: 10,
                    },
                    axisTick: { // 坐标轴刻度标签的相关设置
                        inside: true,
                        lineStyle: {
                            width: 2
                        }
                    },
                    axisLine: { // 刻度线的样式
                        lineStyle: {
                            width: 2,
                            color: '#000',
                            fontSize: 13
                        }
                    }
                },
                yAxis: {
                    name: '百分比',
                    type: 'value',
                    axisLabel: {
                        formatter: '{value}%',
                        margin: 10
                    },
                    axisTick: { // 坐标轴刻度标签的相关设置
                        inside: true,
                        lineStyle: {
                            width: 2
                        }
                    },
                    axisLine: { // 刻度线的样式
                        lineStyle: {
                            width: 2,
                            color: '#000',
                            fontSize: 13
                        }
                    },
                },
                series: [
                    {
                        name: ``,
                        type: 'line',
                        // [{name: '', value: ''}] 最好可以使用name,value的方式  就可以和legend同用一个list
                        // 使用'-'的数据不显示当前对应项(用来设置x轴不从零刻度开始)
                        data: [
                          {
                            name:`series`,
                            value:10
                          },
                          {
                            name:`series`,
                            value:20
                          },
                          {
                            name:`series`,
                            value:30,
                            label:{
                              color:`blue`
                            },
                            itemStyle:{
                              color:`green`
                            }
                          }
                        ],
                        label: {
                            show: true,
                            formatter: (params) => {
                                // 设置字符串拼接和换行
                                return `${params.value}%`+`\n`+`${this.targetNumArr[params.dataIndex]||''}/${this.totalNumArr[params.dataIndex]||''}`;
                            },
                            color: `#333`
                        },
                    },
                ],
            },
            // x轴数据
            xAxisData: [],
            // 坐标点的值
            seriesData: [],
            // 占比数据
            proportionArr: [],
            // 目标数量
            targetNumArr: [],
            // 总数量
            totalNumArr: [],
    };
  },
  mounted () {
    this.$nextTick(()=>{
      // 初始化折线图
      this.echartDemo = this.$echarts.init(this.$refs.echartDemo);
      // 设置图表参数
      this.echartDemo.setOption(this.echartOptions);
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
}
.echartDemo{
  width:100%;
  height:300px;
}
</style>
