<template>
    <div>
        <el-container>
            <el-main>
                <el-table :data="tabledata" style="width: 100%" stripe>
                    <el-table-column
                        align="center"
                        v-for="(item, index) in tableItem"
                        :key="index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                    ></el-table-column>
                    <el-table-column
                        prop="StaffType"
                        width="300"
                        label="操作"
                        align="center"
                    >
                        <template #default>
                            <el-row>
                                <el-button size="small" type="primary" round>
                                    查看</el-button
                                >
                                <el-button size="small" type="warning" round>
                                    编辑</el-button
                                >
                                <el-button size="small" type="danger" round>
                                    删除</el-button
                                >
                            </el-row>
                        </template>
                    </el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
import shipcompanyData from "@/assets/data/shipcompanydata.ts";
export default {
    name: "shipcompanyShow",
    data() {
        return {
            tabledata: shipcompanyData.company.options, //通过axios获取需要的员工数据
            tableItem: [
                {
                    prop: "companyID",
                    label: "企业ID",
                    width: 200,
                },
                {
                    prop: "companyName",
                    label: "企业名称",
                    width: 200,
                },
            ],
        };
    },

    components: {
        shipcompanyData,
    },
};
</script>
