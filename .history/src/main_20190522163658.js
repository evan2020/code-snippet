// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import {Log,LogStyle,init} from './utils/consoleClass'
Vue.config.productionTip = false
Vue.prototype.$log=init(true,`log`, dataArr)
Vue.prototype.$logStyle=init(true,`logStyle`, dataArr)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
