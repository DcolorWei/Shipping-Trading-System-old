import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

import methods from './methods.js'

const store = new Vuex.Store({
    strict: true,//严格模式肯定得开的
    state: {
        form: {//增加订单时，共用该状态
            //加*号表示要在前端数据库中选择
            //加#表示不需要填写，系统自动获取
            cargo: {
                ID: "",//货物ID
                name: "",//货物名称
                model: "",//货物型号
                type: "",//货物海运类型*
                subtype: "",
                qua: "",//货物数量
                unit: "",//数量计量单位
                boxqua: "",//集装箱数量
                time: [],
            },
            line: {
                lineCode: "",//*
                lineName: "",//*
                linePassPort: {
                    loading: "",//装货港序号*
                    unloading: "",//卸货港序号*
                    destination: "",//目的港序号*
                }
            },
            company: {
                shipCompany: {
                    shipCompanyName: "",
                    shipcompanyId: "",
                    shipName: "",
                    shipId: "",
                },
            },
            staff: [
                {
                    last: true,
                },
            ],
            boxesData: [
                {
                    last: true,
                },
            ],
        },
    },
    mutations: {
        //更改货物信息（订单信息）
        changeCargoInfo(state, newInfo) {
            newInfo = methods.deepClone(newInfo);
            Vue.set(state.form, "cargo", newInfo);
        },
        //更改航线信息（话说长得一样？）
        changeLineInfo(state, newInfo) {
            newInfo = methods.deepClone(newInfo);
            Vue.set(state.form, "line", newInfo);
        },

        //订单-增删集装箱
        addBox(state, newBox) {
            let last = state.form.boxesData.pop();
            state.form.boxesData.push(newBox);
            state.form.boxesData.push(last);
        },
        deleteBox(state, index) {
            state.form.boxesData.splice(index, 1);
        },
        //订单-增删人员
        addJob(state, newBox) {
            let last = state.form.staff.pop();
            state.form.staff.push(newBox);
            state.form.staff.push(last);
        },
        deleteJob(state, index) {
            state.form.boxesData.splice(index, 1);
        },
        //订单-修改船公司
        changeCompanyInfo(state, newInfo) {
            console.log(newInfo)
            newInfo = methods.deepClone(newInfo);
            Vue.set(state.form.company, "shipCompany", newInfo);
        },

    }
});

export default store;