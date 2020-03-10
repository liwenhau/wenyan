import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css' // 引入animate动画库
import "./mock/index.js";
import axios from 'axios'
Vue.prototype.$http = axios //  this.$http 方式来使用 axios


Vue.use(animated)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')