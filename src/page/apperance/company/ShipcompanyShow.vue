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
            prop="companyType"
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
        <el-button
          style="margin: 10px; background: #00f9b0; border: 1px"
          @click="dialogVisible = true"
          >新增</el-button
        >
      </el-main>
    </el-container>
    <el-dialog
      title="新增企业"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose"
    >
      <el-form ref="form" :model="additem" label-width="80px">
        <el-form-item label="企业ID">
          <el-input v-model="additem.companyID"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="additem.companyName"></el-input>
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
import shipcompanyData from "@/assets/data/shipcompanydata.ts";
export default {
  name: "shipcompanyShow",
  data() {
    return {
      dialogVisible: false,
      additem: {
        companyID: "",
        companyName: "",
      },
      tabledata: shipcompanyData.company.options, //通过axios获取需要的公司数据
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
  components: {
    shipcompanyData,
  },
};
</script>