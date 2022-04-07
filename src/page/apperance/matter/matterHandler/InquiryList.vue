<template>
  <el-form ref="ruleForm" label-position="left" style="margin: 0 10%">
    <svg
      t="1644488049354"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="2804"
      width="76"
      height="76"
    >
      <path
        d="M670.51 225.49c-12.445-12.445-32.81-12.445-45.255 0L512 338.745 398.745 225.49c-12.445-12.445-32.81-12.445-45.255 0s-12.445 32.81 0 45.255L434.745 352H384c-17.6 0-32 14.4-32 32s14.4 32 32 32h96v32h-96c-17.6 0-32 14.4-32 32s14.4 32 32 32h96v96c0 17.6 14.4 32 32 32s32-14.4 32-32v-96h96c17.6 0 32-14.4 32-32s-14.4-32-32-32h-96v-32h96c17.6 0 32-14.4 32-32s-14.4-32-32-32h-50.745l81.255-81.255c12.445-12.445 12.445-32.81 0-45.255z"
        p-id="2805"
        fill="#000000"
      ></path>
      <path
        d="M832 64H192c-70.4 0-128 57.6-128 128v448c0 70.4 57.6 128 128 128h64v160.005c0 0.532 0.015 1.064 0.041 1.595 0.006 0.13 0.02 0.258 0.028 0.387 0.025 0.409 0.053 0.818 0.094 1.226 0.009 0.092 0.023 0.184 0.033 0.276 0.049 0.456 0.106 0.912 0.175 1.366l0.002 0.011c0.99 6.523 3.977 12.794 8.973 17.79 4.996 4.996 11.266 7.983 17.789 8.973l0.012 0.002c0.454 0.069 0.909 0.125 1.365 0.175 0.093 0.01 0.184 0.024 0.277 0.033 0.408 0.041 0.816 0.069 1.225 0.094 0.13 0.008 0.258 0.021 0.388 0.028 0.531 0.026 1.063 0.041 1.594 0.041h0.006c0.534 0 1.068-0.015 1.601-0.041 0.126-0.006 0.25-0.019 0.376-0.027a32.01 32.01 0 0 0 1.237-0.095c0.089-0.009 0.176-0.022 0.265-0.032 7.017-0.757 13.827-3.802 19.176-9.151L493.31 768H832c70.4 0 128-57.6 128-128V192c0-70.4-57.6-128-128-128z m64 576c0 35.2-28.8 64-64 64H480.002c-8.213-0.001-16.427 3.114-22.658 9.345L320 850.69V736c0-17.6-14.4-32-32-32h-96c-35.2 0-64-28.8-64-64V192c0-35.2 28.8-64 64-64h640c35.2 0 64 28.8 64 64v448z"
        p-id="2806"
        fill="#000000"
      ></path>
    </svg>
    <el-card
      style="background: #35415e; border: 1px solid #00f9b0"
      type="flex"
      justify="start"
    >
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
                ><strong>收货地址：</strong
                >{{ matter.cargoInfo.receiving.country
                }}{{ matter.cargoInfo.receiving.city }}
                {{ matter.cargoInfo.receiving.address }}</span
              >
            </el-col>
          </el-form-item>
        </el-row>
      </div>
    </el-card>

    <el-card
      style="margin-top: 20px; background: #35415e; border: 1px solid #00f9b0"
    >
      <el-table
        :data="schedule"
        :style="{ width: '100%', color: '#fff' }"
        stripe
        header-cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0;
                        color:#fff
          "
        cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0
                        color:#fff
                        "
      >
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
        <el-table-column width="200" label="操作" align="center">
          <template slot-scope="prop">
            <el-row v-if="Number(prop.row.price) == 0">
              <el-button
                size="small"
                type="info"
                @click="changePrice(prop.row)"
                round
                >询价</el-button
              >
            </el-row>
            <el-row v-else>
              <div v-if="Number(prop.row.price) > 0">
                <svg
                  t="1644300392550"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2074"
                  width="27"
                  height="27"
                >
                  <path
                    d="M511.488 946.176c-236.544 0-429.568-192.512-429.568-429.568S274.944 87.04 511.488 87.04s429.568 192.512 429.568 429.568-192.512 429.568-429.568 429.568z m0-807.936C303.104 138.24 133.12 308.224 133.12 516.608s169.472 378.368 378.368 378.368c208.384 0 378.368-169.472 378.368-378.368 0-208.384-169.472-378.368-378.368-378.368z"
                    fill="#000000"
                    p-id="2075"
                  ></path>
                  <path
                    d="M419.328 689.152c-10.24-10.24-10.24-26.112 0-36.352l308.736-308.736c10.24-10.24 26.112-10.24 36.352 0s10.24 26.112 0 36.352L455.68 689.152c-10.24 9.728-26.624 9.728-36.352 0z"
                    fill="#000000"
                    p-id="2076"
                  ></path>
                  <path
                    d="M445.44 689.152c-10.24 10.24-26.112 10.24-36.352 0l-150.016-150.016c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0L445.44 652.8c10.24 9.728 10.24 26.112 0 36.352z"
                    fill="#000000"
                    p-id="2077"
                  ></path>
                </svg>
              </div>
              <div v-else>
                <svg
                  t="1644297660673"
                  class="trans"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2095"
                  width="25"
                  height="25"
                >
                  <path
                    d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"
                    p-id="2096"
                  ></path>
                </svg>
              </div>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column :prop="item" width="100" label="运费" align="center">
          <template slot-scope="prop">
            <el-row>
              <span v-if="Number(prop.row.price) > 0">{{
                prop.row.price
              }}</span>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <el-card
      style="margin-top: 20px; background: #35415e; border: 1px solid #00f9b0"
    >
      <el-table
        :data="landdata"
        :style="{ width: '100%', color: '#fff' }"
        stripe
        @selection-change="(event) => con(event)"
        header-cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0;
                        color:#fff
          "
        cell-style="
                        background:#35415E;
                        border:1px solid #00f9b0;
                        color:#fff
                        "
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
          <template slot-scope="prop">
            <el-row v-if="Number(prop.row.price) == 0">
              <el-button
                size="small"
                type="info"
                @click="prop.row.price = String(-1)"
                round
                >询价</el-button
              >
            </el-row>
            <el-row v-else>
              <div v-if="Number(prop.row.price) > 0">
                <svg
                  t="1644300392550"
                  class="icon"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2074"
                  width="27"
                  height="27"
                >
                  <path
                    d="M511.488 946.176c-236.544 0-429.568-192.512-429.568-429.568S274.944 87.04 511.488 87.04s429.568 192.512 429.568 429.568-192.512 429.568-429.568 429.568z m0-807.936C303.104 138.24 133.12 308.224 133.12 516.608s169.472 378.368 378.368 378.368c208.384 0 378.368-169.472 378.368-378.368 0-208.384-169.472-378.368-378.368-378.368z"
                    fill="#000000"
                    p-id="2075"
                  ></path>
                  <path
                    d="M419.328 689.152c-10.24-10.24-10.24-26.112 0-36.352l308.736-308.736c10.24-10.24 26.112-10.24 36.352 0s10.24 26.112 0 36.352L455.68 689.152c-10.24 9.728-26.624 9.728-36.352 0z"
                    fill="#000000"
                    p-id="2076"
                  ></path>
                  <path
                    d="M445.44 689.152c-10.24 10.24-26.112 10.24-36.352 0l-150.016-150.016c-10.24-10.24-10.24-26.112 0-36.352s26.112-10.24 36.352 0L445.44 652.8c10.24 9.728 10.24 26.112 0 36.352z"
                    fill="#000000"
                    p-id="2077"
                  ></path>
                </svg>
              </div>
              <div v-else>
                <svg
                  t="1644297660673"
                  class="trans"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  p-id="2095"
                  width="25"
                  height="25"
                >
                  <path
                    d="M515.698303 969.127499c-97.187972 0-191.279691-31.134554-270.406182-90.479422-96.67193-72.245926-159.45708-178.206619-176.658492-297.928439s13.245087-238.9276 85.663027-335.59953C304.120947 45.239711 588.288258 4.644381 787.99664 154.124643c83.770872 62.78515 143.459768 153.092558 168.2298 254.580884 4.300353 17.373425-6.364522 34.918864-23.737947 39.047203-17.373425 4.128339-34.918864-6.364522-39.047203-23.737947-21.157736-86.867126-72.417941-164.44549-144.147825-218.285906C578.139425 77.750378 334.395431 112.669242 206.244919 283.823282c-62.097094 82.910801-88.243239 185.087183-73.450025 287.607593s68.461616 193.34386 151.372417 255.440954c171.326054 128.322526 414.898035 93.403662 543.220561-77.922392 33.542752-44.895683 56.592642-95.123803 68.289602-149.308248 3.78431-17.373425 21.157736-28.554342 38.359147-24.770032 17.373425 3.78431 28.554342 20.985721 24.770032 38.359147-13.761129 63.473207-40.59533 122.130018-79.814547 174.422308-72.417941 96.67193-178.378633 159.45708-298.100454 176.658492C559.217873 967.579372 537.372081 969.127499 515.698303 969.127499z"
                    p-id="2096"
                  ></path>
                </svg>
              </div>
            </el-row>
          </template>
        </el-table-column>
        <el-table-column :prop="item" width="100" label="运费" align="center">
          <template slot-scope="prop">
            <el-row>
              <span v-if="Number(prop.row.price) > 0">{{
                prop.row.price
              }}</span>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <br />
    <el-button type="primary" @click="next()">确认订舱</el-button>
  </el-form>
</template>

<script>
export default {
  name: "inquiryList",
  data() {
    return {
      selectShip: -1,
      selectLand: -1,
      schedule: [
        {
          shipCompany: "马士基",
          sailingdate: "2022/03/23",
          voyage: 40,
          shipagent: "0411-34538000",
          price: 0,
        },
        {
          shipCompany: "中远海运",
          sailingdate: "2022/03/22",
          voyage: 38,
          shipagent: "0411-32310089",
          price: 14,
        },
        {
          shipCompany: "马士基",
          sailingdate: "2022/03/23",
          voyage: 0,
          shipagent: "0411-47200912",
        },
      ],
      landdata: [
        {
          companyID: "大连陆运",
          companyName: "2022/03/23",
          price: 0,
        },
      ],
      tableItem: [
        {
          prop: "shipCompany",
          label: "船公司",
          width: 100,
        },
        {
          prop: "sailingdate",
          label: "开航日",
        },
        {
          prop: "voyage",
          label: "航程",
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
    };
  },
  mounted() {
    console.log(this.matter);
  },
  methods: {
    next() {
      this.$emit("changeForm", 3);
    },
    changePrice(row) {
      row.price = -1;
      setTimeout(function () {
        row.price = 300;
      }, 3000);
    },
  },
};
</script>

<style scoped>
.trans {
  display: inline-block;
  overflow: hidden;
  animation: rotate 3s linear infinite;
}

span {
  color: white;
}
</style>