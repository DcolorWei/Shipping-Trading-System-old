import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Router from 'vue-router'

//登录页面路由
import Login from '../views/Login'

//项目页面路由
import Subject from '../views/Subject'
import Home from "../page/Home"
import Apperance from '../page/Apperance'
import About from "../page/About"

//仪表页面路由
import InfoShow from '../page/apperanceSubPage/InfoShow'
import OrderManage from "../page/apperanceSubPage/OrderManage.vue"

Vue.use(ElementUI)
Vue.use(Router)


export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/Subject'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/subject',
            name: 'Subject',
            component: Subject,
            children: [
                {
                    path: 'home',
                    name: 'Home',
                    component: Home
                },
                {
                    path: 'apperance',
                    name: 'Apperance',
                    component: Apperance,
                    children: [
                        {
                            path: 'infoshow',
                            name: 'InfoShow',
                            component: InfoShow
                        },
                        {
                            path: 'ordermanage',
                            name: 'OrderManage',
                            component: OrderManage
                        },
                    ]
                },
                {
                    path: 'about',
                    name: 'About',
                    component: About
                }
            ]
        },


    ]
})

//解决重复路由
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}