<template>
    <div>
        <el-container>
            <el-main>
                <el-table
                    :data="form.boxesData"
                    height="500"
                    width="1000"
                    stripe
                    border
                >
                    <el-table-column label="序号" width="100" align="center">
                        <template slot-scope="props">
                            <span v-if="props.$index + 1 < form.boxesData.length">{{
                                props.$index + 1
                            }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="箱链" align="center" prop="id">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-input
                                    v-model="boxChain"
                                    style="padding: 0 10%"
                                ></el-input>
                            </div>
                            <div v-else>
                                <span>{{ props.row.chain }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="200" align="center" prop="op">
                        <template slot-scope="props">
                            <div v-if="props.$index == form.boxesData.length - 1">
                                <el-button
                                    size="mini"
                                    type="warning"
                                    @click="addBox(boxChain)"
                                    >新增</el-button
                                >
                            </div>
                            <div v-else>
                                <el-button
                                    size="mini"
                                    type="danger"
                                    @click="deleteBox(props.$index)"
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
    props: ["form"],
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
        addBox(chain) {
            this.$emit("addBox", chain);
            this.boxChain = "";
        },
        deleteBox(index) {
            this.form.boxesData.splice(index, 1);
        },
    },
};
</script>
<style scoped></style>
