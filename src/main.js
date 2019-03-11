import 'mapbox-gl/dist/mapbox-gl.css';
import './styles/main.scss';
import Vue from 'vue';
import App from './App.vue';

console.log(`< ${process.env.VUE_APP_NAME} v${process.env.VUE_APP_VERSION} >`);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
