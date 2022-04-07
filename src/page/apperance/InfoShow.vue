<!--单击仪表时，显示的默认页面-->
<template>
    <div>
        <el-container>
            <el-main>
                <div style="margin-bottom: 15px">
                    <el-card
                        shadow="always"
                        :body-style="{
                            width: 600 + 'px',
                        }"
                    >
                        <el-descriptions title="账户信息" :column="2" border>
                            <el-descriptions-item label="姓名"
                                >张三</el-descriptions-item
                            >
                            <el-descriptions-item label="联系方式"
                                >0411-3533537</el-descriptions-item
                            >
                            <el-descriptions-item label="所在地"
                                >大连市</el-descriptions-item
                            >
                            <el-descriptions-item label="身份">
                                <el-tag>货代</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="详细地址" :span="2"
                                >辽宁省大连市甘井子区凌海路1号</el-descriptions-item
                            >
                        </el-descriptions>
                    </el-card>
                </div>
                <div style="margin-bottom: 15px">
                    <el-card
                        shadow="always"
                        :body-style="{
                            width: 600 + 'px',
                        }"
                    >
                        <el-descriptions title="消息一览" :column="2" border>
                        </el-descriptions>
                        <el-button>航务通知</el-button>
                        <el-button>安全通知</el-button>
                        <el-button>系统通知</el-button>
                        <el-button>其它通知</el-button>
                    </el-card>
                </div>
            </el-main>
        </el-container>
    </div>
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
