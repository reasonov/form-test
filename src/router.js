import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/home';
import Preview from './pages/preview'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {}
    },
    {
        path: '/preview',
        name: 'preview',
        component: Preview
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router