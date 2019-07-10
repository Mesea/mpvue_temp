import Vue from 'vue'
import App from './App'

import core from "@/core/core.config.js"
Vue.use(core);

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
