<template>
    <el-container>
        <el-main>
            <el-form ref="ruleForm" label-position="left" style="margin: 0 10%">
                <el-row :gutter="20">
                    <el-col :span="8">
                        <el-form-item label="货物ID" prop="name">
                            <el-input v-model="cargo.ID"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="货物名称" prop="name">
                            <el-input v-model="cargo.name"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="货物型号" prop="name">
                            <el-input v-model="cargo.model"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-form-item label="类型" prop="name">
                            <el-input v-model="cargo.type"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="5">
                        <el-form-item label="子类型" prop="name">
                            <el-input v-model="cargo.subtype"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="数量" prop="name">
                            <el-input v-model="cargo.qua"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="2">
                        <el-form-item label="单位" prop="name">
                            <el-input v-model="cargo.unit"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="箱数" prop="name">
                            <el-input v-model="cargo.boxQua"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="5">
                        <el-form-item label="预定航线" prop="name">
                            <el-select
                                v-model="lineCode"
                                placeholder="请选择航线"
                                @change="
                                    (val) => {
                                        changeLine(val);
                                    }
                                "
                            >
                                <el-option
                                    v-for="item in portlist[lineCode]"
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
                                :disabled="alreadySelectLine"
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
                                :disabled="alreadySelectLine"
                            >
                                <el-option
                                    v-for="item in form.LinePorts.ports"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                    :disabled="
                                        item.value <= form.LinePorts.value1
                                    "
                                >
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="3">
                        <el-form-item label="目的港" prop="name">
                            <el-select
                                v-model="form.LinePorts.value3"
                                :disabled="alreadySelectLine"
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
import portlist from "@/assets/data/portlist.ts";
import methods from "@/store/methods.js";
export default {
    name: "setCargoInfo",
    props: ["form"],
    data() {
        return {
            alreadySelectLine: true,
            portlist: portlist,
            lineCode: 0,
            
            cargo: {},
            line: {
                linePassPort: {},
            },
        };
    },
    created() {
        this.cargo = methods.deepClone(this.$store.state.form.cargo);
    },
    watch: {
        cargo: {
            handler(val) {
                this.$store.commit("changeCargoInfo", val);
            },
            deep: true,
        },
        line: {
            handler(val) {
                this.$store.commit("changeLineInfo", val);
            },
            deep: true,
        },
    },
    methods: {
        changeLine(val) {
            this.alreadySelectLine = false;
        },
        checkPorts: function () {
            if (this.form.LinePorts.value1 >= this.form.LinePorts.value2) {
                this.form.LinePorts.value2 = "";
            }
            if (this.form.LinePorts.value2 >= this.form.LinePorts.value3) {
                this.form.LinePorts.value3 = "";
            }
        },
        next() {
            console.log(this.$store.state.form);
            this.$emit("changeForm", "setBoxesInfo");
        },
    },
    components: {
        portlist,
    },
};
</script>
