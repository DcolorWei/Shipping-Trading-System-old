<template>
    <div>
        <router-view :form="form" @changeForm="changeForm"></router-view>
    </div>
</template>

<script>
import setCargoInfo from "@/components/apperance_order/setCargoInfo.vue";
import setBoxesInfo from "@/components/apperance_order/setBoxesInfo.vue";
import setShipcompanyInfo from "@/components/apperance_order/setShipcompanyInfo.vue";
export default {
    name: "OrderAdd",
    data() {
        return {
            addOrderVisible: false,
            form: {
                id: "",
                name: "",
                type: "",
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
            },
        };
    },
    mounted() {
        this.$router.push("setCargoInfo");
    },
    components: {
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
