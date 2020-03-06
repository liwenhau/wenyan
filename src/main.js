import Vue from 'vue'
import App from './App.vue'
import animated from 'animate.css' // 因入animate动画库

Vue.use(animated)
Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')