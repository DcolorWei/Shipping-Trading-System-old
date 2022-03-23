<template>
  <div>
    <el-container>
      <el-main>
        <el-table
          :data="tabledata"
          style="width: 100%"
          stripe
          header-cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0
          "
          cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0
                        "
        >
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
                <el-button size="small" type="primary" round> 查看</el-button>
                <el-button size="small" type="warning" round> 编辑</el-button>
                <el-button size="small" type="danger" round> 删除</el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import staffData from "@/assets/data/staffdata.ts";
export default {
  name: "OrderManage",
  data() {
    return {
      tabledata: staffData, //通过axios获取需要的员工数据
      tableItem: [
        {
          prop: "StaffID",
          label: "员工ID",
          width: 200,
        },
        {
          prop: "StaffName",
          label: "员工姓名",
          width: 200,
        },
        {
          prop: "StaffPost",
          label: "员工职务",
          width: 200,
        },
      ],
    };
  },

  components: {
    staffData,
  },
};
</script>
