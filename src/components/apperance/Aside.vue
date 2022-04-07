<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#35415E"
      style="border: 1px #35415e"
    >
      <el-submenu index="1">
        <template slot="title">
          <span style="color: white"><strong>资料</strong></span>
        </template>

        <el-menu-item index="1-1" @click="sendOrderPage('AccountInfo')"
          ><span style="color: white" class="subtitle"
            >账号信息</span
          ></el-menu-item
        >
        <el-menu-item index="1-2" @click="sendOrderPage('ChangeInfo')"
          ><span style="color: white" class="subtitle"
            >资料修改</span
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="6">
        <template slot="title">
          <span style="color: white"><strong>任务</strong></span>
        </template>

        <el-menu-item index="6-1" @click="sendOrderPage('MatterManage')"
          ><span style="color: white" class="subtitle"
            >任务列表</span
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <span style="color: white"><strong>订单</strong></span>
        </template>

        <el-menu-item index="2-2" @click="sendOrderPage('OrderManage')"
          ><span style="color: white" class="subtitle"
            >全部订单</span
          ></el-menu-item
        >
        
        <el-menu-item index="2-4" @click="sendOrderPage('OrderMap')"
          ><span style="color: white" class="subtitle"
            >订单地图</span
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">
          <span style="color: white"><strong>人员</strong></span>
        </template>

        <el-menu-item index="3-1" @click="sendOrderPage('StaffShow')"
          ><span style="color: white" class="subtitle"
            >员工一览</span
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="4">
        <template slot="title">
          <span style="color: white"><strong>合作</strong></span>
        </template>

        <el-menu-item index="4-1" @click="sendOrderPage('shipcompanyShow')"
          ><span style="color: white" class="subtitle"
            >承运企业</span
          ></el-menu-item
        >
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <span style="color: white"><strong>安全</strong></span>
        </template>

        <el-menu-item index="5-1" @click="sendOrderPage('ChangePasswd')"
          ><span style="color: white" class="subtitle"
            >修改密码</span
          ></el-menu-item
        >
        <el-menu-item index="5-2"
          ><span style="color: white" class="subtitle"
            >退出登录</span
          ></el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  methods: {
    sendOrderPage(page) {
      this.$emit("orderPagePush", page);
    },
  },
};
</script>

<style scoped>
.subtitle {
  margin-left: 20px;
}
</style>