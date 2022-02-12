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
            width="150"
            label="操作"
            align="center"
          >
            <template slot-scope="prop">
              <el-row>
                <el-button
                  size="small"
                  type="primary"
                  round
                  @click="handlingMatter(prop.row)"
                >
                  详细</el-button
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
import tableData from "@/assets/data/mattersList.ts";
export default {
  name: "OrderManage",
  data() {
    return {
      tabledata: tableData, //通过axios获取需要的任务数据
      tableItem: [
        {
          prop: "id",
          label: "任务ID",
          width: 165,
        },
        {
          prop: "client.name",
          label: "委托方",
          width: 215,
        },
        {
          prop: "statusList[0].time",
          label: "起始时间",
          width: 215,
        },
        {
          prop: "carrier.shipagent.name",
          label: "承运方",
          width: 215,
        },
        {
          prop: "statusList[0].name",
          label: "当前状态",
          width: 215,
        },
      ],
    };
  },
  methods: {
    handlingMatter(item) {
      this.$router.push({
        name: "matterHandler",
        params: {
          info: item
        },
      });
    },
  },
  components: {
    tableData,
  },
};
</script>
