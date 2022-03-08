<template>
  <el-container>
    <el-main>
      <el-form>
        <el-card>
          <el-row :gutter="20">
            <el-col :span="6">
              <el-form-item label="您的姓名" prop="name">
                <el-input v-model="info.name"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="电话" prop="name">
                <el-input v-model="info.phone"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="6">
              <el-form-item label="邮箱" prop="name">
                <el-input v-model="info.email"></el-input>
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
        <el-card class="box-card" style="margin-top: 20px">
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
        </el-card>
      </el-form>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "offer",
  data() {
    return {
      info: {
        name: "",
        phone: "",
        email: "",
      },
      matter: {
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
        },
      },
    };
  },
};
</script>

<style>
</style>