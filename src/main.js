import Vue from 'vue'
import App from './App.vue'
import router from './routers'
import store from './stores'
import axios from 'axios'
import Vant from 'vant';
import 'vant/lib/index.css';
import { Popup } from "vant";

Vue.use(Popup);
Vue.use(Vant);
Vue.prototype.axios=axios;
Vue.filter('setWH',(url,arg)=>{
  return url.replace(/w\.h/,arg);
})

import Scroller from "@/components/Scroller";
Vue.component('Scroller',Scroller);
import Loading from "@/components/Loading";
Vue.component('Loading',Loading);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
