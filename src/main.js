import Vue from 'vue'
import App from './App'
import router from './router'
import './components/buefy'
import 'buefy/lib/buefy.css'
import store from './store';
import './components/Fields';

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});
