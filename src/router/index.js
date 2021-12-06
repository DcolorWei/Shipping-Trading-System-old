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
import AccountInfo from "../page/apperanceSubPage/AccountInfo.vue"
import ChangeInfo from "../page/apperanceSubPage/ChangeInfo.vue"
import OrderManage from "../page/apperanceSubPage/OrderManage.vue"
import OrderSearch from "../page/apperanceSubPage/OrderSearch.vue"
import OrderAdd from "../page/apperanceSubPage/OrderAdd.vue"
import ChangePasswd from "../page/apperanceSubPage/Changepasswd.vue"

//添加订单的表单路由
import setCargoInfo from "../components/apperance_order/setCargoInfo.vue"
import setBoxesInfo from "../components/apperance_order/setBoxesInfo.vue"
import setShipcompanyInfo from "../components/apperance_order/setShipcompanyInfo.vue"
Vue.use(ElementUI)
Vue.use(Router)

//员工路由
import staffShow from "../page/apperanceSubPage/StaffShow.vue"
import shipcompanyShow from "../page/apperanceSubPage/shipcompanyShow.vue"

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
                            path: 'accountinfo',
                            name: 'AccountInfo',
                            component: AccountInfo
                        },
                        {
                            path: 'changeinfo',
                            name: 'ChangeInfo',
                            component: ChangeInfo
                        },
                        {
                            path: 'changepasswd',
                            name: 'ChangePasswd',
                            component: ChangePasswd
                        },
                        {
                            path: 'ordermanage',
                            name: 'OrderManage',
                            component: OrderManage
                        },
                        {
                            path: 'ordersearch',
                            name: 'OrderSearch',
                            component: OrderSearch
                        },
                        {
                            path: 'orderadd',
                            name: 'OrderAdd',
                            component: OrderAdd,
                            children: [
                                {
                                    path: 'setcargoinfo',
                                    name: 'setCargoInfo',
                                    component: setCargoInfo
                                },
                                {
                                    path: 'setboxesinfo',
                                    name: 'setBoxesInfo',
                                    component: setBoxesInfo
                                },
                                {
                                    path: 'setShipcompanyinfo',
                                    name: 'setShipcompanyInfo',
                                    component: setShipcompanyInfo
                                },
                            ]
                        },
                        {
                            path: 'staffshow',
                            name: 'staffShow',
                            component: staffShow,
                        },
                        {
                            path: 'shipcompanyshow',
                            name: 'shipcompanyShow',
                            component: shipcompanyShow
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