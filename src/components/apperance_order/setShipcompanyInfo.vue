<template>
    <div>
        <div>
            <el-form
                :model="form"
                ref="ruleForm"
                label-position="left"
                style="margin: 0 10%"
            >
                <el-row :gutter="20">
                    <el-col :offset="8" :span="8">
                        <el-form-item label="承运企业ID" prop="name" text-align="center">
                            <el-input v-model="form.comid"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :offset="8" :span="8">
                        <el-form-item label="承运企业名称" prop="name">
                            <el-input v-model="form.comname"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :offset="8" :span="8">
                        <el-form-item label="承运船舶识别号" prop="name">
                            <el-input v-model="form.shipid"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </div>
        <el-button type="primary" @click="pre">上一步</el-button>
        <el-button type="primary" @click="submit">提交</el-button>
    </div>
</template>
<script>
export default {
    name: "setShipcompanyInfo",
    props: ["form"],
    methods: {
        pre() {
            this.$emit("changeForm", "setBoxesInfo");
        },
        submit() {
            this.$emit("submit");
        },
    },
};
</script>
