// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

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

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false

// import Vue from "vue";
import * as Sentry from "@sentry/browser";
import { Vue as VueIntegration } from "@sentry/integrations";

Sentry.init({
  dsn: "http://b34a0ccbec8f406cabc950246290512b@dsx2016fe.mynatapp.cc//2",
  integrations: [new VueIntegration({ Vue, attachProps: true })],
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
