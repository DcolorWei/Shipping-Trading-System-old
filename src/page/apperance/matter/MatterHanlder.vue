<template>
  <el-container>
    <el-main>
      <el-form
        ref="ruleForm"
        label-position="left"
        style="margin: 0 10%"
        v-if="page1"
      >
        <el-card class="box-card">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="任务ID" prop="matterID">
                <el-input disabled v-model="matter.id"></el-input>
              </el-form-item>
              
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="7">
              <el-form-item label="委托方" prop="name">
                <el-input disabled v-model="matter.client.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="电话" prop="phone">
                <el-input disabled v-model="matter.client.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="邮箱" prop="email">
                <el-input disabled v-model="matter.client.email"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="5">
              <el-form-item label="传真" prop="facsimile">
                <el-input disabled v-model="matter.client.facsimile"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="发货地址" prop="name">
                <el-col :span="4">
                  <el-input
                    v-model="matter.cargoInfo.shipping.country"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-input v-model="matter.cargoInfo.shipping.city"></el-input>
                </el-col>
                <el-col :span="12">
                  <el-input
                    v-model="matter.cargoInfo.shipping.address"
                  ></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label="收获地址" prop="name">
                <el-col :span="4">
                  <el-input
                    v-model="matter.cargoInfo.receiving.country"
                  ></el-input>
                </el-col>
                <el-col :span="4">
                  <el-input
                    v-model="matter.cargoInfo.receiving.city"
                  ></el-input>
                </el-col>
                <el-col :span="12">
                  <el-input
                    v-model="matter.cargoInfo.receiving.address"
                  ></el-input>
                </el-col>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <el-row>
            <el-form-item label="货物列表" prop="name">
              <el-table
                :data="matter.cargoList"
                height="220"
                width="1200"
                stripe
                border
              >
                <el-table-column label="序号" width="50" align="center">
                  <template slot-scope="props">
                    <span v-if="props.$index + 1 <= matter.cargoList.length">{{
                      props.$index + 1
                    }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="货物名称" align="center">
                  <template slot-scope="props">
                    <div v-if="props.row.last"></div>
                    <div v-else>
                      <el-input v-model="props.row.name"></el-input>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="货物类型" width="100" align="center">
                  <template slot-scope="props">
                    <div v-if="props.row.last"></div>
                    <div v-else>
                      <el-input v-model="props.row.type"></el-input>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="货物尺寸" width="150" align="center">
                  <template slot-scope="props">
                    <div v-if="props.row.last"></div>
                    <div v-else>
                      <el-input v-model="props.row.size"></el-input>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="货物件数" width="100" align="center">
                  <template slot-scope="props">
                    <div v-if="props.row.last">
                      <el-input style="padding: 0 10%"></el-input>
                    </div>
                    <div v-else>
                      <el-input v-model="props.row.quality"></el-input>
                    </div>
                  </template>
                </el-table-column>
                <el-table-column label="货物总重量" width="100" align="center">
                  <template slot-scope="props">
                    <div v-if="props.row.last">
                      <el-input style="padding: 0 10%"></el-input>
                    </div>
                    <div v-else>
                      <el-input v-model="props.row.weight"></el-input>
                    </div>
                  </template>
                </el-table-column>
              </el-table>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="特殊要求">
              <el-col span="4">
                <el-checkbox v-model="matter.cargoInfo.specialneeds.stackable"
                  >不可堆叠</el-checkbox
                ></el-col
              ><el-col span="4">
                <el-checkbox v-model="matter.cargoInfo.specialneeds.perishable"
                  >需温控或易变质</el-checkbox
                ></el-col
              ><el-col span="4">
                <el-checkbox v-model="matter.cargoInfo.specialneeds.dangerous"
                  >含有危险品</el-checkbox
                ></el-col
              ><el-col span="4">
                <el-checkbox v-model="matter.cargoInfo.specialneeds.clearance"
                  >需要代理清关</el-checkbox
                ></el-col
              >
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="INCOTERMS">
              <el-col span="10">
                <el-select
                  v-model="matter.cargoInfo.INCOTERMS"
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in [{ key: 1, label: 1 }]"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-col>
            </el-form-item>
          </el-row>
        </el-card>
        <el-card class="box-card" style="margin-top: 20px">
          <el-row :gutter="20">
            <el-col :span="8">
              <el-form-item label="出货时间" prop="a">
                <el-date-picker
                  v-model="matter.cargoInfo.deliverytime"
                  type="date"
                  range-separator="-"
                  format="yyyy-MM-DD"
                >
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="4">
              <el-form-item label="期望运输时长" prop="a">
                <el-input-number v-model="matter.cargoInfo.duration">
                </el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
        </el-card>

        <br />
        <el-button type="primary" @click="next"
          >确认货主请求，开始询价</el-button
        >
      </el-form>

      <el-form
        ref="ruleForm"
        label-position="left"
        style="margin: 0 10%"
        v-if="page2"
      >
        <el-card class="box-card" type="flex" justify="start">
          <div style="width: 1000px">
            <el-row :gutter="20" type="flex" justify="start">
              <el-form-item prop="matterID">
                <el-col :span="24">
                  <span><strong>任务ID：</strong>{{ matter.id }}</span>
                </el-col>
              </el-form-item>
            </el-row>

            <el-row :gutter="20" type="flex" justify="start">
              <el-form-item prop="name">
                <el-col :span="24">
                  <span
                    ><strong>发货地址：</strong
                    >{{ matter.cargoInfo.shipping.country
                    }}{{ matter.cargoInfo.shipping.city }}
                    {{ matter.cargoInfo.shipping.address }}</span
                  >
                </el-col>
              </el-form-item>
            </el-row>
            <el-row :gutter="20" type="flex" justify="start">
              <el-form-item prop="name">
                <el-col :span="24">
                  <span
                    ><strong>收获地址：</strong
                    >{{ matter.cargoInfo.receiving.country
                    }}{{ matter.cargoInfo.receiving.city }}
                    {{ matter.cargoInfo.receiving.address }}</span
                  >
                </el-col>
              </el-form-item>
            </el-row>
          </div>
        </el-card>

        <el-card style="margin-top: 20px">
          <el-table :data="tabledata" style="width: 100%" stripe>
            <el-table-column width="55" :prop="item">
              <template slot-scope="prop">
                <el-row>
                  <el-radio
                    v-model="selectShip"
                    size="large"
                    :label="prop.$index"
                    @change="con(prop)"
                    >></el-radio
                  >
                </el-row>
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
            <el-table-column
              prop="StaffType"
              width="200"
              label="操作"
              align="center"
            >
              <template #default>
                <el-row>
                  <el-button size="small" type="primary" round>询价</el-button>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              :prop="item"
              width="100"
              label="运费"
              align="center"
            >
              <template slot-scope="prop">
                <el-row>
                  <span>{{ prop.row.price }}</span>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-card>

        <el-card style="margin-top: 20px">
          <el-table
            :data="landdata"
            style="width: 100%"
            stripe
            @selection-change="(event) => con(event)"
          >
            <el-table-column width="55" :prop="item">
              <template slot-scope="prop">
                <el-row>
                  <el-radio
                    v-model="selectLand"
                    size="large"
                    :label="prop.$index"
                    @change="con(prop)"
                    >></el-radio
                  >
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              v-for="(item, index) in landItem"
              :key="index"
              :prop="item.prop"
              :label="item.label"
              :width="item.width"
            ></el-table-column>
            <el-table-column width="200" label="操作" align="center">
              <template #default>
                <el-row>
                  <el-button size="small" type="primary" round>询价</el-button>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              :prop="item"
              width="100"
              label="运费"
              align="center"
            >
              <template slot-scope="prop">
                <el-row>
                  <span>{{ prop.row.price }}</span>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
        <br />
        <el-button type="primary">确认订舱</el-button>
      </el-form>
    </el-main>
  </el-container>
</template>
<script>
import portlist from "@/assets/data/portlist.ts";
import shipcompanyData from "@/assets/data/shipcompanydata.ts";
import methods from "@/store/methods.js";
export default {
  name: "setCargoInfo",
  data() {
    return {
      selectShip: -1,
      selectLand: -1,
      tabledata: shipcompanyData.company.options,
      landdata: shipcompanyData.company.land,
      tableItem: [
        {
          prop: "companyID",
          label: "船公司ID",
          width: 100,
        },
        {
          prop: "companyName",
          label: "企业名称",
        },
        {
          prop: "shipagent",
          label: "供应商",
        },
      ],
      landItem: [
        {
          prop: "companyID",
          label: "陆运公司ID",
          width: 100,
        },
        {
          prop: "companyName",
          label: "公司名称",
        },
      ],
      matter: this.$route.params.info,
      //切换页面
      page1: true,
      page2: false,
    };
  },
  created() {
    console.log(this.matter);
  },
  methods: {
    next() {
      (this.page1 = !this.page1), (this.page2 = !this.page2);
    },
    con(a) {
      console.log(a);
    },
  },
  components: {
    portlist,
    shipcompanyData,
  },
};
</script>
<style scoped>
</style>