import { createRouter, createWebHistory } from 'vue-router'
import HomeInit from '../views/HomeInit.vue'
import ProfileUser from '../views/ProfileUser.vue'
import ProductsItem from '../components/ProductsItem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';

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
    },
    { path: '/products', component: ProductsItem },
    { path: '/cart', component: ShoppingCart }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
