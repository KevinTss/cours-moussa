import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import langEN from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(ElementUI);
locale.use(langEN);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
