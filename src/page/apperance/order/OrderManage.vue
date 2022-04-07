<template>
  <div>
    <el-container>
      <el-main>
        <el-table
          :data="tabledata"
          style="width: 100%; color: #fff"
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
          <el-table-column type="expand">
            <template slot-scope="props">
              <div style="background: #35415e">
                <CrossWiseTimeline
                  :shiproute="props.row.shipRoute"
                ></CrossWiseTimeline>
                <div style="padding-left: 100px">
                  <p>区块链：{{ props.row.blockchain }}</p>
                  <p>上链时间：{{ props.row.orderTime }}</p>
                </div>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            v-for="(item, index) in tableItem"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          ></el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import CrossWiseTimeline from "@/components/apperance_order/CrossWiseTimeline";
import tableData from "@/assets/data/orderdata.ts";
import shipRoute from "@/assets/data/shiproute.ts";
export default {
  name: "OrderManage",
  data() {
    return {
      tabledata: tableData, //通过axios获取需要的订单数据
      shiproute: shipRoute, //通过axios获取需要的船舶航行数据
      tableItem: [
        {
          prop: "orderID",
          label: "订单ID",
          width: 165,
        },

        {
          prop: "cargoType",
          label: "货物类别",
          width: 100,
        },

        {
          prop: "shipLine",
          label: "航线",
          width: 170,
        },
        {
          prop: "deliveryTime",
          label: "发货时间",
          width: 170,
        },
        {
          prop: "daLeadTime",
          label: "预定到达时间",
          width: 170,
        },
        {
          prop: "safety",
          label: "是否经过疫区",
          width: 165,
        },
        {
          prop: "reLeadTime",
          label: "实际交付时间",
          width: 170,
        },
        {
          prop: "status",
          label: "当前状态",
        },
      ],
    };
  },
  mounted() {
    setTimeout(() => {
      this.tabledata.push({
        orderID: "TD-07-K271827391",
        safety: "否",
        cargoType: "零件", //子类别
        shipLine: "大连-西雅图",
        shipRoute: [
          {
            site: "大连",
            type: "start",
          },
          {
            site: "釜山",
            type: "porting",
          },
          {
            site: "横滨",
            type: "nopass",
          },
          {
            site: "西雅图",
            type: "end",
          },
        ],
      });
    }, 20000);
  },

  components: {
    shipRoute,
    CrossWiseTimeline,
    tableData,
  },
};
</script>
