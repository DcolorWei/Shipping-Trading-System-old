<template>
    <div>
        <div style="text-align: right">
            <el-button type="primary" plain @click="addOrderVisible = true"
                >新建订单</el-button
            >
            <el-button type="warning" plain>管理订单</el-button>
        </div>

        <el-dialog title="新建" :visible.sync="addOrderVisible" @closed="handleClose">
            <el-form :model="form" ref="ruleForm">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="订单ID" prop="name">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="货物名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="货物种类" prop="name">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="货物数量" prop="name">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="预定航线" prop="name">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>

                <el-row :gutter="20">
                    <el-col :span="24">
                        <el-form-item label="运输周期" prop="a">
                            <el-date-picker
                                v-model="value1"
                                type="datetimerange"
                                range-separator="-"
                                start-placeholder="预定发货时间"
                                end-placeholder="预定抵达时间"
                            >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="addOrderVisible = false">取消</el-button>
                <el-button type="primary" @click="handleSave">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: "AddOrderTable",
    data() {
        return {
            startTime: {
                date: "",
                time: "",
            },
            endTime: {
                date: "",
                time: "",
            },
            addOrderVisible: false,
            form: {
                id: "",
                name: "",
            },
        };
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
                } else {
                    console.log("输入错误");
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
