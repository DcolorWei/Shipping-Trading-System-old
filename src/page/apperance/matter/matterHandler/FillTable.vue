<template>
  <el-form ref="ruleForm" label-position="left" style="margin: 0 10%">
    <svg
      t="1644487418130"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2103"
      width="76"
      height="76"
    >
      <path
        d="M467.968 955.392c-21.504 0-40.96-8.192-56.32-23.552l-317.44-317.44c-15.36-15.36-23.552-34.816-23.552-56.32s8.192-40.96 23.552-56.32l389.12-389.12c12.288-12.288 31.744-12.288 43.008 0 12.288 12.288 12.288 31.744 0 43.008l-389.12 389.12c-3.072 3.072-5.12 8.192-5.12 12.288s2.048 9.216 5.12 12.288l318.464 318.464c6.144 6.144 18.432 6.144 24.576 0 12.288-12.288 31.744-12.288 43.008 0 12.288 12.288 12.288 31.744 0 43.008-14.336 16.384-34.816 24.576-55.296 24.576zM577.536 866.304c-8.192 0-15.36-3.072-21.504-9.216-12.288-12.288-12.288-31.744 0-43.008L870.4 499.712c12.288-12.288 31.744-12.288 43.008 0 12.288 12.288 12.288 31.744 0 43.008L599.04 857.088c-6.144 6.144-14.336 9.216-21.504 9.216z"
        p-id="2104"
      ></path>
      <path
        d="M872.448 543.744c-26.624 0-51.2-10.24-69.632-28.672L512 223.232c-18.432-18.432-28.672-43.008-28.672-69.632 0-26.624 10.24-51.2 28.672-69.632 18.432-18.432 43.008-28.672 69.632-28.672 26.624 0 51.2 10.24 69.632 28.672L942.08 374.784c37.888 37.888 37.888 100.352 0 138.24-19.456 20.48-44.032 30.72-69.632 30.72zM580.608 117.76c-9.216 0-18.432 4.096-25.6 10.24-14.336 14.336-14.336 36.864 0 51.2L846.848 471.04c13.312 13.312 37.888 13.312 51.2 0 14.336-14.336 14.336-36.864 0-51.2L606.208 128c-6.144-6.144-15.36-10.24-25.6-10.24zM404.48 967.68H150.528c-53.248 0-96.256-43.008-96.256-96.256V616.448c0-23.552 8.192-46.08 24.576-64.512l46.08 40.96c-6.144 6.144-9.216 14.336-9.216 23.552V870.4c0 19.456 15.36 34.816 34.816 34.816h253.952c11.264 0 22.528-6.144 29.696-15.36l51.2 34.816c-18.432 26.624-48.128 43.008-80.896 43.008z"
        p-id="2105"
      ></path>
    </svg>

    <el-card style="background: #35415e; border: 1px solid #35415e">
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="任务ID" prop="matterID">
            <el-input  v-model="matter.id"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="7">
          <el-form-item label="委托方" prop="name">
            <el-input  v-model="matter.client.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="电话" prop="phone">
            <el-input  v-model="matter.client.phone"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="邮箱" prop="email">
            <el-input  v-model="matter.client.email"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="5">
          <el-form-item label="传真" prop="facsimile">
            <el-input  v-model="matter.client.facsimile"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="发货地址" prop="name">
            <el-col :span="4">
              <el-input v-model="matter.cargoInfo.shipping.country"></el-input>
            </el-col>
            <el-col :span="4">
              <el-input v-model="matter.cargoInfo.shipping.city"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input v-model="matter.cargoInfo.shipping.address"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="24">
          <el-form-item label="收获地址" prop="name">
            <el-col :span="4">
              <el-input v-model="matter.cargoInfo.receiving.country"></el-input>
            </el-col>
            <el-col :span="4">
              <el-input v-model="matter.cargoInfo.receiving.city"></el-input>
            </el-col>
            <el-col :span="12">
              <el-input v-model="matter.cargoInfo.receiving.address"></el-input>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <el-card
      class="box-card"
      style="margin-top: 20px; background: #35415e; border: 1px solid #35415e"
    >
      <el-row>
        <el-form-item label="货物列表" prop="name">
          <el-table
            style="color: #fff"
            :data="cargoList"
            height="220"
            width="1200"
            stripe
            border
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
            <el-table-column label="序号" width="50" align="center">
              <template slot-scope="props">
                <span v-if="props.$index + 1 <= matter.cargoList.length">{{
                  props.$index + 1
                }}</span>
              </template>
            </el-table-column>
            <el-table-column label="货物名称" align="center">
              <template slot-scope="props">
                <div>
                  <el-input v-model="props.row.name"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="货物类型" width="100" align="center">
              <template slot-scope="props">
                <div>
                  <el-input v-model="props.row.type"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="货物尺寸" width="150" align="center">
              <template slot-scope="props">
                <div>
                  <el-input v-model="props.row.size"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="货物件数" width="100" align="center">
              <template slot-scope="props">
                <div>
                  <el-input v-model="props.row.quality"></el-input>
                </div>
              </template>
            </el-table-column>
            <el-table-column label="货物总重量" width="100" align="center">
              <template slot-scope="props">
                <div>
                  <el-input v-model="props.row.weight"></el-input>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="特殊要求">
          <el-col :span="4">
            <el-checkbox v-model="matter.cargoInfo.specialneeds.stackable"
              >不可堆叠</el-checkbox
            ></el-col
          ><el-col :span="4">
            <el-checkbox v-model="matter.cargoInfo.specialneeds.perishable"
              >需温控或易变质</el-checkbox
            ></el-col
          ><el-col :span="4">
            <el-checkbox v-model="matter.cargoInfo.specialneeds.dangerous"
              >含有危险品</el-checkbox
            ></el-col
          ><el-col :span="4">
            <el-checkbox v-model="matter.cargoInfo.specialneeds.clearance"
              >需要代理清关</el-checkbox
            ></el-col
          >
        </el-form-item>
      </el-row>
      <el-row>
        <el-form-item label="INCOTERMS">
          <el-col :span="10">
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
    <el-card class="box-card" style="margin-top: 20px;background: #35415e; border: 1px solid #35415e">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item label="出货时间">
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
          <el-form-item label="期望运输时长">
            <el-input-number v-model="matter.cargoInfo.duration">
            </el-input-number>
          </el-form-item>
        </el-col>
      </el-row>
    </el-card>
    <br />
    <el-button type="primary" @click="next()">确认货主请求，开始询价</el-button>
  </el-form>
</template>

<script>
export default {
  props: ["page"],
  data() {
    return {
      matter: this.$route.params.info,
      cargoList: [
        {
          name: "",
          duration: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
      ],
    };
  },
  methods: {
    next() {
      this.$emit("changeForm", 2);
    },
  },
};
</script>

<style scoped>
</style>