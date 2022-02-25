<template>
    <div>
        <el-menu default-active="2" class="el-menu-vertical-demo">
            <el-submenu index="1">
                <template slot="title">
                    <span><strong>资料</strong></span>
                </template>

                <el-menu-item index="1-1" @click="sendOrderPage('AccountInfo')"
                    ><span class="subtitle">账号信息</span></el-menu-item
                >
                <el-menu-item index="1-2" @click="sendOrderPage('ChangeInfo')"
                    ><span class="subtitle">资料修改</span></el-menu-item
                >
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <span><strong>订单</strong></span>
                </template>

                <el-menu-item index="2-2" @click="sendOrderPage('OrderManage')"
                    ><span class="subtitle">全部订单</span></el-menu-item
                >
                <el-menu-item
                    index="2-3"
                    @click="sendOrderPage('OrderAdd/setCargoInfo')"
                    ><span class="subtitle">新建订单</span></el-menu-item
                >
                <el-menu-item
                    index="2-4"
                    @click="sendOrderPage('OrderMap')"
                    ><span class="subtitle">订单地图</span></el-menu-item
                >
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <span><strong>人员</strong></span>
                </template>

                <el-menu-item index="3-1" @click="sendOrderPage('StaffShow')"
                    ><span class="subtitle">员工一览</span></el-menu-item
                >
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <span><strong>合作</strong></span>
                </template>

                <el-menu-item
                    index="4-1"
                    @click="sendOrderPage('shipcompanyShow')"
                    ><span class="subtitle">承运企业</span></el-menu-item
                >
            </el-submenu>
            <el-submenu index="5">
                <template slot="title">
                    <span><strong>安全</strong></span>
                </template>

                <el-menu-item index="5-1" @click="sendOrderPage('ChangePasswd')"
                    ><span class="subtitle">修改密码</span></el-menu-item
                >
                <el-menu-item index="5-2"
                    ><span class="subtitle">退出登录</span></el-menu-item
                >
            </el-submenu><el-submenu index="6">
                <template slot="title">
                    <span><strong>任务</strong></span>
                </template>

                <el-menu-item index="6-1" @click="sendOrderPage('MatterManage')"
                    ><span class="subtitle">任务列表</span></el-menu-item
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