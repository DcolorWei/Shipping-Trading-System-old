<template>
    <el-container>
        <el-aside width="168px" style="overflow: hidden">
            <el-col>
                <Aside @orderPagePush="changeOrderPage"></Aside>
            </el-col>
        </el-aside>
        <router-view></router-view>
    </el-container>
</template>
<script>
import Aside from "../components/apperance/Aside.vue";
import InfoShow from "./apperanceSubPage/InfoShow.vue";
import OrderManage from "./apperanceSubPage/OrderManage.vue";
export default {
    name: "Apperance",
    components: {
        Aside,
        InfoShow,
        OrderManage,
    },
    mounted() {
        this.$router.push("/Subject/Apperance/InfoShow");
    },
    methods: {
        changeOrderPage(orderPage) {
            this.$router.push("/Subject/Apperance/" + orderPage);
        },
    },
};
</script>

<style scoped></style>
