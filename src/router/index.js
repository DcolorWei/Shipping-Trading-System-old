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
import InfoShow from '../page/apperance/InfoShow'
import AccountInfo from "../page/apperance/account/AccountInfo.vue"
import ChangeInfo from "../page/apperance/account/ChangeInfo.vue"
import OrderManage from "../page/apperance/order/OrderManage.vue"
import OrderSearch from "../page/apperance/order/OrderSearch.vue"
import OrderAdd from "../page/apperance/order/OrderAdd.vue"
import ChangePasswd from "../page/apperance/safety/ChangePasswd.vue"
import OrderMap from "../page/apperance/order/OrderMap.vue"

//添加订单的表单路由
import setCargoInfo from "../components/apperance_order/setCargoInfo.vue"
import setBoxesInfo from "../components/apperance_order/setBoxesInfo.vue"
import setRelatedStaff from "../components/apperance_order/setRelatedStaff.vue"
import setShipcompanyInfo from "../components/apperance_order/setShipcompanyInfo.vue"
Vue.use(ElementUI)
Vue.use(Router)

//员工路由
import staffShow from "../page/apperance/staff/StaffShow.vue"
import shipcompanyShow from "../page/apperance/company/ShipcompanyShow.vue"


//任务路由
import matterManage from "../page/apperance/matter/MatterManage.vue"
import matterHandler from "../page/apperance/matter/matterHandler/MatterHandler.vue"
import fillTable from "../page/apperance/matter/matterHandler/FillTable.vue"
import inquiryList from "../page/apperance/matter/matterHandler/InquiryList.vue"


import Offer from "../page/Offer.vue"

export default new Router({
    routes: [
        {
            path: '/',
            name: 'index',
            redirect: '/home'
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/home',
            name: 'Home',
            component: Home
        },
        {
            path: '/subject',
            name: 'Subject',
            component: Subject,
            children: [
                {
                    path: 'offer',
                    name: 'Offer',
                    component: Offer
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
                            path: 'ordermap',
                            name: 'OrderMap',
                            component: OrderMap
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
                                    path: 'setrelatedstaff',
                                    name: 'setrelatedstaff',
                                    component: setRelatedStaff
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
                        {
                            path: 'mattermanage',
                            name: 'matterManage',
                            component: matterManage
                        },
                        {
                            path: 'matterhandler',
                            name: 'matterHandler',
                            component: matterHandler,
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