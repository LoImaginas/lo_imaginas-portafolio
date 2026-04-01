import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/main.css'
import pawFavicon from './assets/img/patita.webp'

const faviconEl = document.querySelector('#app-favicon')
if (faviconEl) {
  faviconEl.setAttribute('href', pawFavicon)
}

createApp(App).use(router).mount('#app')
