import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'
import Login from '../views/Login'
import Apperance from '../views/Apperance'

Vue.use(ElementUI)
Vue.use(Router)

export default new Router({
    mode:"history",
    routes: [
        {
            path:'/',
            name:'index',
            redirect:'/login'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/apperance',
            name: 'Apperance',
            component: Apperance
        }
    ]
})