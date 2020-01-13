import { createApp } from 'vue'
import App from './App.vue'
import Route from './utils/router'
import routes from './routes/index'
import { title } from './utils/directive'
import 'swiper/css/swiper.min.css'
import './assets/css/reset.css'
const app = createApp()

app.provide('$route', new Route(routes))
app.directive('title',title)
app.mount(App, '#app')
