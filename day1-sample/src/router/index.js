import { createRouter, createWebHistory } from 'vue-router'
import HomeInit from '../views/HomeInit.vue'
import ProfileUser from '../views/ProfileUser.vue'
import ProductsItem from '../components/ProductsItem.vue';
import ShoppingCart from '../components/ShoppingCart.vue';
import DashboardWidget from '../components/DashboardWidget.vue'
import ItemsFromMongo from '../components/ItemsFromMongo.vue'

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
    { path: '/cart', component: ShoppingCart },
    { path: '/dashboard', component: DashboardWidget },
    { path: '/items', component: ItemsFromMongo }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
