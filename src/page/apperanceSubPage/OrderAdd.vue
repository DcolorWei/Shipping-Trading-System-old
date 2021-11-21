<template>
    <div>
        <router-view></router-view>
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
            chainTime: "",
            allTime: "",
            addOrderVisible: false,
            form: {
                id: "",
                name: "",
            },
        };
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
