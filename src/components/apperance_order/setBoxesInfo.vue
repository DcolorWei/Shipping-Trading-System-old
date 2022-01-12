<template>
    <div>
        <el-container>
            <el-main>
                <el-table
                    :data="$store.state.form.boxesData"
                    height="500"
                    width="1000"
                    stripe
                    border
                >
                    <el-table-column label="序号" width="100" align="center">
                        <template slot-scope="props">
                            <span
                                v-if="
                                    props.$index + 1 <
                                    $store.state.form.boxesData.length
                                "
                                >{{ props.$index + 1 }}</span
                            >
                        </template>
                    </el-table-column>
                    <el-table-column label="类型" align="center">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-select
                                    align="center"
                                    v-model="newBox.type"
                                >
                                    <el-option
                                        label="A类箱(4.3*2.1*2.1)"
                                        value="A类箱(4.3*2.1*2.1)"
                                    >
                                    </el-option>
                                    <el-option
                                        label="B类箱(6.5*2.9*2.9)"
                                        value="B类箱(6.5*2.9*2.9)"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else>
                                <span>{{ props.row.type }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="数量" width="200" align="center">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-input
                                    v-model="newBox.qua"
                                    style="padding: 0 10%"
                                ></el-input>
                            </div>
                            <div v-else>
                                <span>{{ props.row.qua }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        label="操作"
                        width="200"
                        align="center"
                        prop="op"
                    >
                        <template slot-scope="props">
                            <div
                                v-if="
                                    props.$index ==
                                    $store.state.form.boxesData.length - 1
                                "
                            >
                                <el-button
                                    size="mini"
                                    type="warning"
                                    @click="addBox()"
                                    >新增</el-button
                                >
                            </div>
                            <div v-else>
                                <el-button
                                    size="mini"
                                    type="danger"
                                    @click="
                                        $store.commit('deleteBox', props.$index)
                                    "
                                    >删除</el-button
                                >
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <br />
                <el-button type="primary" @click="pre">上一步</el-button>
                <el-button type="primary" @click="next">下一步</el-button>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "setBoxesInfo",
    data() {
        return {
            dialogFormVisible: false,
            newBox: {
                type: "",
                qua: "",
            },
            formLabelWidth: "120px",
        };
    },
    methods: {
        pre() {
            this.$emit("changeForm", "setCargoInfo");
        },
        next() {
            this.$emit("changeForm", "setRelatedStaff");
        },
        addBox() {
            this.$store.commit("addBox", {
                type: this.newBox.type,
                qua: this.newBox.qua,
            });
            this.newBox = { type: "", qua: "" };
        },
    },
};
</script>
<style scoped></style>
