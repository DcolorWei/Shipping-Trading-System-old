<template>
    <div>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
        >
            <el-submenu index="1">
                <template slot="title">
                    <span>资料</span>
                </template>

                <el-menu-item index="1-1">账号信息</el-menu-item>
                <el-menu-item index="1-2">资料修改</el-menu-item>
            </el-submenu>

            <el-submenu index="2">
                <template slot="title">
                    <span>订单</span>
                </template>

                <el-menu-item index="2-1">订单查询</el-menu-item>
                <el-menu-item index="2-2" @click="sendOrderPage('OrderManage')"
                    >订单管理</el-menu-item
                >
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">
                    <span>安全</span>
                </template>

                <el-menu-item index="3-1">修改密码</el-menu-item>
                <el-menu-item index="3-2">退出登录</el-menu-item>
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
