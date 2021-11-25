<template>
    <div>
        <CrossWiseTimeline :shiproute="shipRoute"></CrossWiseTimeline>
        <router-view :form="form" @changeForm="changeForm" @addBox="addBox"></router-view>
    </div>
</template>

<script>
import CrossWiseTimeline from "@/components/apperance_order/CrossWiseTimeline";
import setCargoInfo from "@/components/apperance_order/setCargoInfo.vue";
import setBoxesInfo from "@/components/apperance_order/setBoxesInfo.vue";
import setShipcompanyInfo from "@/components/apperance_order/setShipcompanyInfo.vue";

import portlist from "@/assets/data/portlist.ts";
export default {
    name: "OrderAdd",
    data() {
        return {
            shipRoute: [
                {
                    site: "",
                    type: "porting",
                },
                {
                    site: "",
                    type: "end",
                },
                {
                    site: "",
                    type: "end",
                },
            ],
            addOrderVisible: false,
            form: {
                id: "",
                name: "",
                text: "",
                qua: "",
                allTime: "",
                Line: portlist.line,
                isSelectLine: true, //控制是否可选港口
                LinePorts: {
                    ports: [], //从下面中选取
                    portlist: portlist.portlist,
                    value1: "",
                    value2: "",
                    value3: "",
                },
                unit: "",
                boxesData: [
                    {
                        no: "1",
                        chain: "asjdsjdkk",
                    },
                    {
                        last: true,
                    },
                ],

                //form数据的终点，得放进store里
            },
        };
    },
    mounted() {
        this.$router.push("setCargoInfo");
    },
    components: {
        CrossWiseTimeline,
        setCargoInfo,
        setBoxesInfo,
        setShipcompanyInfo,
    },
    methods: {
        changeForm(form) {
            this.$router.push(form);
            switch (form) {
                case "setCargoInfo":
                    this.shipRoute = [
                        {
                            site: "",
                            type: "porting",
                        },
                        {
                            site: "",
                            type: "end",
                        },
                        {
                            site: "",
                            type: "end",
                        },
                    ];
                    break;
                case "setBoxesInfo":
                    this.shipRoute = [
                        {
                            site: "",
                            type: "passed",
                        },
                        {
                            site: "",
                            type: "porting",
                        },
                        {
                            site: "",
                            type: "end",
                        },
                    ];
                    break;
                case "setShipcompanyInfo":
                    this.shipRoute = [
                        {
                            site: "",
                            type: "passed",
                        },
                        {
                            site: "",
                            type: "passed",
                        },
                        {
                            site: "",
                            type: "porting",
                        },
                    ];
                    break;
                default:
                    break;
            }
        },
        addBox(boxInfo) {
            let boxesData = this.form.boxesData;
            let last = boxesData.pop();
            boxesData.push({
                chain: boxInfo,
            });
            boxesData.push(last);
            this.form.boxesData = boxesData;
        },
    },
    setup() {
        const state = reactive({
            value1: "",
            value2: "",
        });
        return toRefs(state);
    },
};
</script>
<style scoped>
.el-button--mini {
    display: none;
}
</style>
