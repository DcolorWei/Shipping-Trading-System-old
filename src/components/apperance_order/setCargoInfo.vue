<template>
    <el-container>
        <el-main>
            <el-form
                :model="form"
                ref="ruleForm"
                label-position="left"
                style="margin: 0 10%"
            >
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="货物ID" prop="name">
                            <el-input v-model="form.id"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="货物名称" prop="name">
                            <el-input v-model="form.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="货物型号" prop="name">
                            <el-input v-model="form.model"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-form-item label="类型" prop="name">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="子类型" prop="name">
                            <el-input v-model="form.subtype"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量" prop="name">
                            <el-input v-model="form.qua"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item label="单位" prop="name">
                            <el-input v-model="form.unit"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="箱数" prop="name">
                            <el-input v-model="form.boxQua"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-form-item label="预定航线" prop="name">
                            <el-select
                                v-model="form.Line.value"
                                placeholder="请选择航线"
                                @change="
                                    (val) => {
                                        form.isSelectLine = false;
                                        form.LinePorts.ports =
                                            form.LinePorts.portlist[val]; //更新航线
                                        form.LinePorts.value1 = ''; //清空数据
                                        form.LinePorts.value2 = '';
                                        form.LinePorts.value3 = '';
                                    }
                                "
                            >
                                <el-option
                                    v-for="item in form.Line.options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>

                    <el-col :span="3">
                        <el-form-item label="装货港" prop="name">
                            <el-select
                                v-model="form.LinePorts.value1"
                                :disabled="form.isSelectLine"
                            >
                                <el-option
                                    v-for="item in form.LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="卸货港" prop="name">
                            <el-select
                                v-model="form.LinePorts.value2"
                                :disabled="form.isSelectLine"
                            >
                                <el-option
                                    v-for="item in form.LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.value <= form.LinePorts.value1"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="目的港" prop="name">
                            <el-select
                                v-model="form.LinePorts.value3"
                                :disabled="form.isSelectLine"
                            >
                                <el-option
                                    v-for="item in form.LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="
                                        item.value <= form.LinePorts.value1 ||
                                        item.value < form.LinePorts.value2
                                    "
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-form-item label="运输周期" prop="a">
                            <el-date-picker
                                v-model="form.allTime"
                                type="datetimerange"
                                range-separator="-"
                                start-placeholder="预定发货时间"
                                end-placeholder="预定抵达时间"
                                format="yyyy-MM-DD HH:mm"
                            >
                            </el-date-picker>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
            <br />
            <el-button type="primary" @click="next">下一步</el-button>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: "setCargoInfo",
    props: ["form"],
    methods: {
        checkPorts: function () {
            if (this.form.LinePorts.value1 >= this.form.LinePorts.value2) {
                this.form.LinePorts.value2 = "";
            }
            if (this.form.LinePorts.value2 >= this.form.LinePorts.value3) {
                this.form.LinePorts.value3 = "";
            }
        },
        next() {
            this.$emit("changeForm", "setBoxesInfo");
        },
    },
};
</script>
