<template>
    <div>
        <el-button type="primary" @click="pre">上一步</el-button>
        <el-button type="primary" @click="next">下一步</el-button>
    </div>
</template>
<script>
export default {
    name: "setBoxesInfo",
    methods: {
        pre() {
            this.$emit("changeForm", "setCargoInfo");
        },
        next() {
            this.$emit("changeForm", "setShipcompanyInfo");
        },
    },
};
</script>
