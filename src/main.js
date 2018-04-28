import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import 'vue-awesome/icons';
import Icon from 'vue-awesome/components/Icon.vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(VueAnalytics, {
	id: 'UA-65620769-3',
});

Vue.component('icon', Icon);

new Vue({
	router,
	render: h => h(App),
}).$mount('#app');
