<template>
    <div>
        <el-container>
            <el-main>
                <el-table
                    :data="$store.state.form.staff"
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
                                    $store.state.form.staff.length
                                "
                                >{{ props.$index + 1 }}</span
                            >
                        </template>
                    </el-table-column>
                    <el-table-column label="工作" align="center">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-select align="center" v-model="newJob.job">
                                    <el-option label="调度" value="调度">
                                    </el-option>
                                    <el-option label="理货" value="理货">
                                    </el-option>
                                    <el-option label="安全员" value="安全员">
                                    </el-option>
                                    <el-option label="操作员" value="操作员">
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else>
                                <span>{{ props.row.job }}</span>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column label="员工" width="300" align="center">
                        <template slot-scope="props">
                            <div v-if="props.row.last">
                                <el-select
                                    align="center"
                                    v-model="newJob.staffId"
                                    @change="(val)=>changeStaff(val)"
                                >
                                    <el-option
                                        v-for="item in staffdata"
                                        :key="item.staffName"
                                        :label="item.staffName"
                                        :value="item.staffId"
                                    >
                                    </el-option>
                                </el-select>
                            </div>
                            <div v-else>
                                <span>{{
                                    props.row.staffName +
                                    "(" +
                                    props.row.staffId +
                                    ")"
                                }}</span>
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
                                    $store.state.form.staff.length - 1
                                "
                            >
                                <el-button
                                    size="mini"
                                    type="warning"
                                    @click="addJob()"
                                    >新增</el-button
                                >
                            </div>
                            <div v-else>
                                <el-button
                                    size="mini"
                                    type="danger"
                                    @click="
                                        $store.commit('deleteJob', props.$index)
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
import staffdata from "@/assets/data/staffdata.ts";
export default {
    name: "setBoxesInfo",
    data() {
        return {
            dialogFormVisible: false,
            staffdata: staffdata,
            newJob: {
                job: "",
                staffName: "",
                staffId: "",
            },
            formLabelWidth: "120px",
        };
    },
    methods: {
        pre() {
            this.$emit("changeForm", "setBoxesInfo");
        },
        next() {
            this.$emit("changeForm", "setShipcompanyInfo");
        },
        addJob() {
            console.log(this.newJob);
            this.$store.commit("addJob", {
                job: this.newJob.job,
                staffName: this.newJob.staffName,
                staffId: this.newJob.staffId,
            });
            this.newJob = { job: "", staffName: "", staffId: "" };
        },
        changeStaff(val) {
            console.log(val);
        },
    },
};
</script>
<style scoped></style>
