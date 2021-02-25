import { createRouter, createWebHashHistory } from "vue-router"
import ViewHome from "../views/ViewHome"
import ViewAbout from "../views/ViewAbout"

const routes = [
    {
        path: '/',
        name: 'Home',
        component: ViewHome
    },
    {
        path: '/about',
        name: 'About',
        component: ViewAbout
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router