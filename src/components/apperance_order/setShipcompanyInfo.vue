<template>
    <div>
        <el-button type="primary" @click="pre">上一步</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>
<script>
export default {
    name: "setShipcompanyInfo",
    methods: {
        pre() {
            this.$emit("changeForm", "setBoxesInfo");
        },
        submit() {},
    },
};
</script>
