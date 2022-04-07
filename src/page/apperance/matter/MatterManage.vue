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
          <el-table-column
            align="center"
            v-for="(item, index) in tableItem"
            :key="index"
            :prop="item.prop"
            :label="item.label"
            :width="item.width"
          ></el-table-column>
          <el-table-column width="150" label="操作" align="center">
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
        <el-button
          style="margin: 10px; background: #00f9b0; border: 1px"
          @click="add()"
          >新增</el-button
        >
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
      dialogVisible: false,
      additem: {
        companyID: "",
        companyName: "",
      },
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
      console.log(item)
      this.$router.push({
        name: "matterHandler",
        params: {
          info: item,
        },
      });
    },
    add() {
      let a={
        id: "47",
        client: {
          name: "大连生产",
          phone: "",
          email: "",
          facsimile: "",
        },
        carrier: {
          land: {
            landCompany: "",
            truckList: [],
          },
          shipagent: {
            id: "",
            name: "中远海运",
          },
          sea: {
            shipCompany: "",
            shipName: "",
            sailingdate: "",
            voyage: "",
            passPorts: [],
            crewList: [],
          },
          box: {
            packingList: [],
            supervisingList: [],
            loadingList: [],
          },
        },
        statusList: [
          {
            time: "2022/03/23 19:00",
            name: "新增",
          },
        ],
        siteList: [],
        cargoList: [],
        cargoInfo: {
          shipping: {
            country: "",
            city: "",
            address: "",
          },
          receiving: {
            country: "",
            city: "",
            address: "",
          },
          INCOTERMS: "amet aliquip ut anim",
          specialneeds: {
            unstackable: false,
            perishable: false,
            clearance: false,
            dangerous: true,
            other: "esse occaecat laboris",
          },
          deliverytime: "2022-02-01 00:00:00",
          duration: 858,
        },
        Inquiry: {
          shippingSchedule: [
            {
              ssid: "17",
              passPorts: ["incididunt", "laborum in ut", "pariatur quis"],
              sailingdate: "1984-09-08 08:42:19",
              voyage: 23,
              shipCompany: "anim consectetur",
              shipName: "红调论",
              price: 14,
            },
            {
              ssid: "81",
              passPorts: [
                "in sit minim",
                "nisi culpa ex laboris",
                "sunt cupidatat id consectetur",
              ],
              sailingdate: "1989-06-17 06:24:43",
              voyage: 80,
              shipCompany: "velit",
              shipName: "东群标全",
              price: 27,
            },
          ],
          landTransList: [
            {
              lsid: "58",
              landCompany: "qui",
              price: "59",
            },
            {
              lsid: "41",
              landCompany: "sed quis consectetur ea",
              price: "36",
            },
          ],
        },
      }
      this.tabledata.push(a);
      this.$router.push({
        name: "matterHandler",
        params: {
          info: a,
        },
      });
    },
  },

  components: {
    tableData,
  },
};
</script>
