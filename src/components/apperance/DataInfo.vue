<template>
  <div>
    <el-image class="icon" :src="item.src"></el-image>
    <h1 style="font-size: 22px; color: white">
      {{ item.item }}
    </h1>
    <transition name="slide-fade">
      <h1 class="blocknumber" style="font-size: 22px; color: white">
        {{ item.qua }}
      </h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "DataInfo",
  props: ["item"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.icon {
  width: 125px;
  height: 125px;
}
.icon:hover{
  transform: scale(1.15);
  animation:amaplify 0.4s;
}

@keyframes amaplify{
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.15);
  }
}
</style>
