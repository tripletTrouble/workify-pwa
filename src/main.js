import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Attendance from './components/Attendance.vue'

const routes = [
    { path: '/', name: 'Home', component: Home, props: {userName: "Deri Prasetyo"} },
    { path: '/attendance', name: 'Attendance', component: Attendance },
    { path: '/about', name: 'About', component: About },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
