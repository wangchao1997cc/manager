// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import store from './store/store.js';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
import axios from 'axios';

Vue.prototype.$axios = axios;
Vue.prototype.$store = store;
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
