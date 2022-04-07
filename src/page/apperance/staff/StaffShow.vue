<template>
  <div>
    <el-container>
      <el-main>
        <el-table
          :data="tabledata"
          style="width: 100%; color:#fff"
          stripe
          header-cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0;
                         color:#fff
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
            width="200"
            label="操作"
            align="center"
          >
            <template #default>
              <el-row>
                <el-button size="small" type="primary" round> 查看</el-button>
                <el-button size="small" type="danger" round> 删除</el-button>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
        <el-button
          style="margin: 10px; background: #00f9b0; border: 1px"
          @click="dialogVisible = true"
          >新增</el-button
        >
      </el-main>
    </el-container>
    <el-dialog
      title="新增员工"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="additem" label-width="80px">
        <el-form-item label="员工ID">
          <el-input v-model="additem.staffID"></el-input>
        </el-form-item>
        <el-form-item label="员工姓名">
          <el-input v-model="additem.staffName"></el-input>
        </el-form-item>
        <el-form-item label="员工职务">
          <el-input v-model="additem.staffPost"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button type="danger" @click="dialogVisible = false">取消</el-button>
        <el-button type="success" @click="add()">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import staffData from "@/assets/data/staffdata.ts";
export default {
  name: "OrderManage",
  data() {
    return {
      dialogVisible: false,
      additem: {
        staffID: "",
        staffName: "",
        staffPost: "",
      },
      tabledata: staffData, //通过axios获取需要的员工数据
      tableItem: [
        {
          prop: "staffID",
          label: "员工ID",
          width: 200,
        },
        {
          prop: "staffName",
          label: "员工姓名",
          width: 200,
        },
        {
          prop: "staffPost",
          label: "员工职务",
          width: 200,
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },

    add() {
      this.dialogVisible = false;
      this.tabledata.push(this.additem);
    },
  },
  mounted() {
    console.log(this.tabledata);
  },
  components: {
    staffData,
  },
};
</script>
