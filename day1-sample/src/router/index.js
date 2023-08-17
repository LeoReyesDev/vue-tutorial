import { createRouter, createWebHistory } from 'vue-router'
import HomeInit from '../views/HomeInit.vue'
import ProfileUser from '../views/ProfileUser.vue'

const routes = [
    {
        path: '/',
        name: 'HomeInit',
        component: HomeInit
    },
    {
        path: '/profile/:username',
        name: 'ProfileUser',
        component: ProfileUser,
        props: true
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
