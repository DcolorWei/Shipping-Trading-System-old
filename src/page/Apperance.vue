<template>
    <el-container>
        <el-aside width="168px" style="overflow: hidden">
            <Aside :allAblePage="allAblePage" @orderPagePush="changeOrderPage"></Aside>
        </el-aside>
        <!--路由展示区(居中)-->
        <div style="margin: 0 auto">
            <router-view></router-view>
        </div>
    </el-container>
</template>
<script>
import Aside from "../components/apperance/Aside.vue";
import InfoShow from "./apperance/InfoShow.vue";
import OrderManage from "./apperance/order/OrderManage.vue";
import OrderSearch from "./apperance/order/OrderSearch.vue";
import OrderAdd from "./apperance/order/OrderAdd.vue";
export default {
    name: "Apperance",
    data() {
        return {
            allAblePage: ["OrderMange", "OrderSearch"],
        };
    },
    components: {
        Aside,
        InfoShow,
        OrderManage,
        OrderSearch,
        OrderAdd,
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
