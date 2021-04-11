import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

require('@/store/subscriber')

var baseUrl = 'https://purge-api-m22a79rthynn.herokuapp.com/'
axios.defaults.baseURL = baseUrl

store.dispatch('auth/attempt', localStorage.getItem('token'))

createApp(App).use(store).use(router).mount('#app')