// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './common/rem'
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button, Row, Col, List, NavBar, Field } from 'vant'
Vue.use(Button).use(Row).use(Col).use(List).use(NavBar).use(Field);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
