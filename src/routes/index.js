import { createRouter, createWebHistory } from "vue-router";
import LoginComponent from "../components/LoginComponent.vue"
import SignUpComponent from "../components/SignUpComponent.vue"
import ProductsComponent from "../components/ProductsComponent.vue"

const routes = [
    {
        path:'',
        name:'Login',
        component: LoginComponent
    },
    {
        path:'/SignUp',
        name:'SignUp',
        component: SignUpComponent
    },
    {
        path:'/Home',
        name:'Home',
        component: ProductsComponent
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router