<template>
  <el-container style="background: #2a3550">
      <transition mode="move">
    <el-aside width="168px" class="side" v-show="sideStatus">
      <Aside
        :allAblePage="allAblePage"
        @orderPagePush="changeOrderPage"
      ></Aside>
    </el-aside>
    </transition>
    <!--路由展示区(居中)-->
    <div style="margin: 0 auto; background-color: #2a3550">
      <transition mode="out-in">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
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
  props: ["sideStatus"],
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

<style scoped>
.side {
  overflow: hidden;
  background: #35415e;
}

.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 0.25s;
}
.v-enter-to {
  opacity: 1;
}
.v-leave {
  opacity: 1;
}
.v-leave-to {
  opacity: 0;
}
.v-leave-active {
  transition: 0.25s;
}
</style>
