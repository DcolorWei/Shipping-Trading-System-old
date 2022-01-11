<!--单击仪表时，显示的默认页面-->
<template>
    <el-container>
        <el-main>
            <!--四个数据展示区块-->
            <div
                class="blocklist"
                :style="{
                    height: 300 + 'px',
                }"
            >
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(item, key) in datablock" :key="key">
                        <el-col @load="getallblock()">
                            <el-card
                                shadow="hover"
                                style="border-radius: 40px; width: 300px; height: 250px"
                            >
                                <DataInfo :item="item"></DataInfo>
                            </el-card>
                        </el-col>
                    </el-col>
                </el-row>
            </div>

            <!--Echarts与Timeout-->
            <div class="mapdata" style="height: 400px">
                <el-row :gutter="10">
                    <el-col :span="13">
                        <el-card
                            shadow="hover"
                            style="border-radius: 10px; height: 400px"
                        >
                            <EchartsTable />
                        </el-card>
                    </el-col>
                    <el-col :span="11">
                        <el-card
                            shadow="hover"
                            id="timelineFrame"
                            style="border-radius: 10px; height: 400px"
                        >
                            <Timeline :timeLineTable="timeLineTable"></Timeline>
                        </el-card>
                    </el-col>
                </el-row>
            </div>
        </el-main>
    </el-container>
</template>
<script>
import DataInfo from "../../components/apperance/DataInfo.vue";
import EchartsTable from "../../components/apperance/EchartsTable.vue";
import Timeline from "../../components/apperance/Timeline.vue";
import datastore from "@/assets/data/datablock.ts";
export default {
    name: "Infoshow",
    components: {
        DataInfo,
        Timeline,
        EchartsTable,
        datastore,
    },
    data() {
        return {
            datablock: datastore.datablock,//获得所有区块（或者加载完成瞬间时的最新几个区块）
            timeLineTable: datastore.timeLineTable,//时间线数据，要求实时更新，使用WebSocket
        };
    },

    mounted() {
        datastore.getBlockInfo();
        datastore.getAllBlock(); //通过store加载所有数据
        datastore.getNewBlock(); //更新数据
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

.el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 10px;
}

.el-row {
    margin-bottom: 20px;
}
.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}
.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.infinite-list {
    height: 300px;
    padding: 0;
    margin: 0;
    list-style: none;
}
.infinite-list-item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    background: var(--el-color-primary-light-9);
    color: var(--el-color-primary);
}

#timelineFrame {
    border-radius: 10px;
    height: 300px;
    overflow: auto;
}
#timelineFrame::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 5px; /*高宽分别对应横竖滚动条的尺寸*/
    height: 1px;
}
#timelineFrame::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    background: rgba(220, 220, 220);
}
#timelineFrame::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: rgba(255, 255, 255);
}
</style>
