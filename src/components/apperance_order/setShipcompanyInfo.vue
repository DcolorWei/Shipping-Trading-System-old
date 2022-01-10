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
                    <el-col :offset="4" :span="8">
                        <el-form-item label="承运企业" prop="name">
                            <el-select
                                v-model="form.shipcompany.value"
                                @change="
                                    (val) => {
                                        form.shipInfo.ships =
                                            form.shipInfo.shiplist[val]; //更新船列表
                                        shipCompany.shipcompanyid =
                                            form.shipcompany.options[
                                                val
                                            ].companyID;

                                        form.shipInfo.value = '';
                                        shipCompany.shipid = '';
                                    }
                                "
                            >
                                <el-option
                                    v-for="item in form.shipcompany.options"
                                    :key="item.companyID"
                                    :label="item.companyName"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="承运企业ID"
                            prop="name"
                            text-align="center"
                        >
                            <el-input
                                v-model="shipCompany.shipcompanyid"
                                :disabled="true"
                            ></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :offset="4" :span="8">
                        <el-form-item label="承运船舶" prop="name">
                            <el-select
                                v-model="form.shipInfo.value"
                                @change="
                                    (val) => {
                                        shipCompany.shipid = val;
                                    }
                                "
                            >
                                <el-option
                                    v-for="item in form.shipInfo.ships"
                                    :key="item.shipID"
                                    :label="item.shipName"
                                    :value="item.shipID"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item
                            label="承运船舶识别号"
                            prop="name"
                            text-align="center"
                        >
                            <el-input
                                v-model="shipCompany.shipid"
                                :disabled="true"
                            ></el-input>
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
    data(){
        return{
            shipCompany:{
                shipcompanyid:'',
                shipid:'',
            }
        }
    },
    watch: {
        shipCompany:{
            handler(val){
                console.log(val);
            }
        },
    },
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
