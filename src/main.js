// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// 引入echarts
let echarts = require('echarts');
// 设置全局echart
Vue.prototype.$echarts = echarts

// 引入console
import * as constyles from "constyles"
Vue.prototype.$log=(...dataArr) => {
  return constyles.init(true,`log`, dataArr)
}
Vue.prototype.$logStyle=(...dataArr) => {
  return constyles.init(true,`logStyle`, dataArr)
}

import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

Vue.component('VueSlider', VueSlider)

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
