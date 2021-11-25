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
                Line: {
                    options: [
                        {
                            value: 0,
                            label: "A1(大连-西雅图)",
                        },
                        {
                            value: 1,
                            label: "A2(大连-马尼拉)",
                        },
                    ],
                    value: "",
                },
                isSelectLine: true, //控制是否可选港口
                LinePorts: {
                    ports: [], //从下面中选取
                    portlist: [
                        [
                            {
                                value: 0,
                                label: "大连",
                            },
                            {
                                value: 1,
                                label: "天津",
                            },

                            {
                                value: 2,
                                label: "釜山",
                            },

                            {
                                value: 3,
                                label: "横滨",
                            },
                            {
                                value: 4,
                                label: "西雅图",
                            },
                        ],
                        [
                            {
                                value: 0,
                                label: "大连",
                            },
                            {
                                value: 1,
                                label: "连云港",
                            },
                            {
                                value: 2,
                                label: "高雄",
                            },
                            {
                                value: 3,
                                label: "马尼拉",
                            },
                            {
                                value: 4,
                                label: "雅加达",
                            },
                        ],
                    ],
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
        handleClose() {
            this.$refs.ruleForm.resetFields();
            this.form = {
                name: "",
            };
        },
        handleSave() {
            this.$refs.ruleForm.validate((valid) => {
                if (valid) {
                    this.addOrderVisible = false;
                }
            });
        },
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
            this.form.boxesData[this.form.boxesData.length - 1] = {
                no: this.form.boxesData.length,
                chain: boxInfo,
            };
            this.form.boxesData[this.form.boxesData.length] = {
                last: true,
            };
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
