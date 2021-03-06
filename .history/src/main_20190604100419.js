// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入console
import * as constyles from "constyles"

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.$log=(...dataArr) => {
  return constyles.init(true,`log`, dataArr)
}
Vue.prototype.$logStyle=(...dataArr) => {
  return constyles.init(true,`logStyle`, dataArr)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
