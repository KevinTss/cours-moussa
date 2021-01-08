import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import langEN from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import i18n from './i18n';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(BootstrapVue);
Vue.use(ElementUI);
locale.use(langEN);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
