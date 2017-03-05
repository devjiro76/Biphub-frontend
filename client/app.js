import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './js/components/App'
import router from './js/router'
import store from './js/store'
sync(store, router)

import 'styles/style.scss'

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
