<template>
  <div>
    <el-container style="min-height: 1000px">
      <el-header style="background: #35415e">
        <el-menu
          id="indexMenu"
          :default-active="showPage"
          mode="horizontal"
          background-color="#35415E"
          style="border-bottom: 1px solid"
        >
          <el-menu-item
            v-for="(item, key) in menuItems"
            :index="item.menuIndex"
            :key="key"
            @click="changePage(item.menuIndex)"
            ><b style="color: #fff">{{ item.menuName }}</b></el-menu-item
          >

          <div style="float: right; margin-right: 50px">
            <span
              style="
                font-size: 16px;
                color: white;
                background: #00bbff;
                vertical-align: middle;
                padding: 5px;
                margin-right: 20px;
                border: 4px solid #00bbff;
                border-radius: 4px;
                cursor: pointer;
              "
              onclick="location.assign('/login')"
              ><strong>admin</strong></span
            >
            
            <el-avatar 
              style="border: none; vertical-align: middle"
              :size="54"
              icon="el-icon-user-solid"
            ></el-avatar>
          </div>
          <div style="float: right; margin: 15px 30px">
            <el-popconfirm
              @confirm="toMatterView()"
              confirm-button-text="前往"
              cancel-button-text=" "
              icon="el-icon-info"
              icon-color="red"
              title="有新的任务更新"
            >
              <i
                class="el-icon-message"
                slot="reference"
                style="font-size: 26px"
              ></i>
            </el-popconfirm>
          </div>
        </el-menu>
      </el-header>
      <!--路由展示区(未居中)-->
      <router-view :sideStatus="sideStatus"></router-view>
    </el-container>
  </div>
</template>

<script>
import Apperance from "../page/Apperance.vue";
import About from "../page/About.vue";

export default {
  name: "Subject",
  data() {
    return {
      showPage: "Apperance",
      sideStatus: true,
      menuItems: [
        {
          menuIndex: "Apperance",
          menuName: "仪表",
        },
        {
          menuIndex: "About",
          menuName: "关于",
        },
      ],
    };
  },
  components: {
    Apperance,
    About,
  },
  computed: {},
  mounted() {
    this.$router.push("/Subject/Apperance/InfoShow");
  },
  methods: {
    changePage(page) {
      if (this.showPage == page) {//路由不跳转，则收起侧边栏
        this.sideStatus = !this.sideStatus;
      } else {
        this.showPage = page;
        if (page == "Apperance") page += "/InfoShow"; //修复刷新路由不跳转的问题
        this.$router.push("/Subject/" + page);
      }
    },
    toMatterView() {
      this.$router.push("/Subject/Apperance/MatterManage");
    },
  },
};
</script>
