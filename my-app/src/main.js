// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import  '../src/common/css/iconfont.css';
import 'swiper/dist/css/swiper.css';
import axios from 'axios'
import './assets/iconfont/iconfont.css'
import './assets/star/iconfont.css'


Vue.prototype.axios = axios

Vue.use(ElementUI);
require("./mock");

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  render: h => h(App),

})
