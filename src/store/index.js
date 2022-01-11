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
                time:[],
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
                companyCode: "",//企业ID#
                companyName: "",//企业名称*
                companyType: "",//企业类型#
            },
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
    }
});

export default store;