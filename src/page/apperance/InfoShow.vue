<!--单击仪表时，显示的默认页面-->
<template>
  <el-container>
    <el-main style="background: #2a3550">
      <el-empty description="通过仪表进行管理"></el-empty>
    </el-main>
  </el-container>
</template>
<script>

export default {
  name: "Infoshow",
  components: {

  },
  data() {
    return {
     
    };
  },

};
</script>

<style scoped>
.el-container {
  height: auto;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 10px;
}

.el-aside {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 10px;
}
</style>
