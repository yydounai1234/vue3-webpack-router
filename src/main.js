import { createApp } from 'vue'
import App from './App.vue'
import Route from './utils/router'
import routes from './routes/index'
import 'swiper/css/swiper.min.css'
import './assets/css/reset.css'
const app = createApp()

app.provide('$route', new Route(routes))

app.mount(App, '#app')
