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
                        <el-descriptions title="客户信息" :column="2" border>
                            <el-descriptions-item label="客户名"
                                >柳江航务</el-descriptions-item
                            >
                            <el-descriptions-item label="联系方式"
                                >0772-3533537</el-descriptions-item
                            >
                            <el-descriptions-item label="所在地"
                                >柳州市</el-descriptions-item
                            >
                            <el-descriptions-item label="身份">
                                <el-tag>市政机关</el-tag>
                            </el-descriptions-item>
                            <el-descriptions-item label="详细地址" :span="2"
                                >广西壮族自治区柳州市柳江区柳堡路33号</el-descriptions-item
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
    name: "AccountInfo",
};
</script>
