<template>
    <div>
        <el-container>
            <el-main>
                <el-table :data="form.boxesData" style="width: 1000px" stripe border>
                    <el-table-column label="序号" width="100" align="center" prop="no" />
                    <el-table-column label="箱链" align="center" prop="id">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-input v-model="boxChain"></el-input>
                            </div>
                            <div v-else>
                                <span>{{ props.row.chain }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="200" align="center" prop="op">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-button size="mini" type="warning" @click="addBox()"
                                    >新增</el-button
                                >
                            </div>
                            <div v-else>
                                <el-button size="mini" type="info">编辑</el-button>
                                <el-button size="mini" type="danger">删除</el-button>
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
            boxChain: "",
            formLabelWidth: "120px",
        };
    },
    methods: {
        pre() {
            this.$emit("changeForm", "setCargoInfo");
        },
        next() {
            this.$emit("changeForm", "setShipcompanyInfo");
        },
        addBox() {
            this.$emit("addBox", this.boxChain);
            this.boxChain = "";
        },
    },
    props: ["form"],
};
</script>
<style scoped></style>
