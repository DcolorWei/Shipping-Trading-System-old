<template>
    <el-container>
        <el-main>
            <el-form :model="form" ref="ruleForm"  label-position="left" style="margin: 0 10% ">
                <el-row :gutter="20">
                    <el-col :span="16">
                        <el-form-item label="货物ID" prop="name">
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
                        <el-form-item label="类型" prop="name">
                            <el-input v-model="form.type"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="数量" prop="name">
                            <el-input v-model="form.qua"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="箱数" prop="name">
                            <el-input v-model="form.qua"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-form-item label="预定航线" prop="name">
                            <el-select
                                v-model="Line.value"
                                placeholder="请选择航线"
                                @change="
                                    (val) => {
                                        isSelectLine = false;
                                        LinePorts.ports = LinePorts.portlist[val]; //更新航线
                                        LinePorts.value1 = ''; //清空数据
                                        LinePorts.value2 = '';
                                        LinePorts.value3 = '';
                                    }
                                "
                            >
                                <el-option
                                    v-for="item in Line.options"
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
                                v-model="LinePorts.value1"
                                :disabled="isSelectLine"
                            >
                                <el-option
                                    v-for="item in LinePorts.ports"
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
                                v-model="LinePorts.value2"
                                :disabled="isSelectLine"
                            >
                                <el-option
                                    v-for="item in LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="item.value <= LinePorts.value1"
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="目的港" prop="name">
                            <el-select
                                v-model="LinePorts.value3"
                                :disabled="isSelectLine"
                            >
                                <el-option
                                    v-for="item in LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="
                                        item.value <= LinePorts.value1 ||
                                        item.value < LinePorts.value2
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
                <el-row :gutter="20">
                    
                </el-row>
            </el-form>
            <br />
            <el-button type="primary">下一步</el-button>
        </el-main>
    </el-container>
</template>
<script>
export default {
    name: "setCargoInfo",
    props: ["form"],
    data() {
        return {
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
        };
    },
    methods: {
        checkPorts: function () {
            if (this.LinePorts.value1 >= this.LinePorts.value2) {
                this.LinePorts.value2 = "";
            }
            if (this.LinePorts.value2 >= this.LinePorts.value3) {
                this.LinePorts.value3 = "";
            }
        },
    },
};
</script>
