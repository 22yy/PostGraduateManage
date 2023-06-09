import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './plugins/element.js'
import './plugins/antd'
require('./mock'); //引入mock数据，关闭则注释该行

import {Message} from 'element-ui'
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
