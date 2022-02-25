<template>
  <el-container>
    <el-main>
      <transition mode="out-in">
        <fillTable @changeForm="change" v-if="page == 1"></fillTable>
        <inquiryList @changeForm="change" v-if="page == 2"></inquiryList>
        <transGoods v-if="page == 3"></transGoods>
      </transition>
    </el-main>
  </el-container>
</template>
<script>
import portlist from "@/assets/data/portlist.ts";
import methods from "@/store/methods.js";
import fillTable from "@/page/apperance/matter/matterHandler/FillTable.vue";
import inquiryList from "@/page/apperance/matter/matterHandler/InquiryList.vue";
import transGoods from "@/page/apperance/matter/matterHandler/map.vue";



export default {
  name: "matterhandler",
  data() {
    return {
      page: 1,
    };
  },
  methods: {
    change(page) {
      this.page = page;
      console.log(this.page);
    },
  },

  components: {
    portlist,
    fillTable,
    inquiryList,
    transGoods,
  },
};
</script>

<style scoped>
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