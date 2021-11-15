<template>
    <div>
        <el-container>
            <el-header>
                <el-menu id="indexMenu" :default-active="showPage" mode="horizontal">
                    <el-menu-item
                        v-for="(item, key) in menuItems"
                        :index="item.menuIndex"
                        :key="key"
                        @click="changePage(item.menuIndex)"
                        >{{ item.menuName }}</el-menu-item
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
                            ><strong>小律</strong></span
                        >
                        <el-avatar
                            style="border: none; vertical-align: middle"
                            :size="54"
                            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                        ></el-avatar>
                    </div>
                </el-menu>
            </el-header>
            <!--路由展示区-->
            <router-view></router-view>
            <!--路由展示区-->
        </el-container>
    </div>
</template>

<script>
import axios from "axios";
import Home from "../page/Home.vue";
import Apperance from "../page/Apperance.vue";
import About from "../page/About.vue";

export default {
    name: "Subject",
    data() {
        return {
            showPage: "Apperance",
            menuItems: [
                {
                    menuIndex: "Home",
                    menuName: "首页",
                },
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
        Home,
        Apperance,
        About,
    },
    computed: {},
    mounted() {
        this.$router.push("/Subject/Apperance/InfoShow");
    },
    methods: {
        changePage(page) {
            if (page == "Apperance") page += "/InfoShow"; //修复刷新路由不跳转o'l'm'k的问题
            this.$router.push("/Subject/" + page);
            this.showPage = page;
        },
    },
};
</script>
