<template>
    <div>
        <el-container>
            <el-main>
                <el-table :data="tableData" style="width: 100%" stripe>
                    <el-table-column type="expand">
                        <template #default="props">
                            <div style="padding-left: 100px">
                                <p>区块链:{{ props.row.blockchain }}</p>
                                <p>上链时间:{{ props.row.orderTime }}</p>
                            </div>
                            <div class="ul_box">
                                <ul
                                    class="my_timeline"
                                    ref="mytimeline"
                                    style="padding-left: 100px"
                                >
                                    <li
                                        class="my_timeline_item"
                                        v-for="(item, index) in timeLineList"
                                        :key="index"
                                    >
                                        <!--线-->
                                        <div class="my_timeline_item_line"></div>
                                        <!--圈圈节点-->
                                        <div
                                            class="my_timeline_node"
                                            :style="{
                                                backgroundColor: citycolor(item.type),
                                                border: '3px black solid',
                                                width: 18 + 'px',
                                                height: 18 + 'px',
                                            }"
                                        ></div>

                                        <!--标注-->
                                        <div
                                            class="my_timeline_item_content"
                                            :style="{
                                                color: '#111',
                                                fontSize: 14 + 'px',
                                            }"
                                        >
                                            {{ item.site }}
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </template>
                    </el-table-column>
                    <el-table-column
                        align="center"
                        v-for="(item, index) in tableItem"
                        :key="item.index"
                        :prop="item.prop"
                        :label="item.label"
                        :width="item.width"
                    ></el-table-column>
                </el-table>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "OrderManage",
    data() {
        return {
            tableItem: [
                {
                    prop: "orderID",
                    label: "订单ID",
                    width: 165,
                },
                {
                    prop: "cargoName",
                    label: "货物名称",
                    width: 165,
                },
                {
                    prop: "cargoType",
                    label: "货物类别",
                    width: 100,
                },

                {
                    prop: "shipLine",
                    label: "航线",
                    width: 170,
                },
                {
                    prop: "deliveryTime",
                    label: "发货时间",
                    width: 170,
                },
                {
                    prop: "daLeadTime",
                    label: "预定到达时间",
                    width: 170,
                },
                {
                    prop: "reLeadTime",
                    label: "实际交付时间",
                    width: 170,
                },
                {
                    prop: "status",
                    label: "当前状态",
                },
            ],
            tableData: [
                {
                    orderID: "TD-07-K271827391",
                    cargoName: "石油",
                    cargoType: "液化货物",
                    shipLine: "大连-西雅图",
                    shipRoute: "大连 - 青岛 - 釜山 - 西雅图",
                    orderTime: "2021/11/10 21:12",
                    blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
                    deliveryTime: "--",
                    daLeadTime: "2021/12/28 19:30",
                    reLeadTime: "--",
                    status: "装载中",
                },
                {
                    orderID: "TK-52-L271827391",
                    cargoName: "钢铁",
                    cargoType: "干散货",
                    shipLine: "天津-雅加达",
                    shipRoute: "大连 - 青岛 - 釜山 - 西雅图",
                    orderTime: "2021/11/10 21:12",
                    blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
                    deliveryTime: "2021/11/20 11:40",
                    daLeadTime: "2021/11/22 19:26",
                    reLeadTime: "--",
                    status: "运输中",
                },
                {
                    orderID: "TK-52-L271827391",
                    cargoName: "纺织纱布",
                    cargoType: "干散货",
                    shipLine: "天津-连云港",
                    shipRoute: "大连 - 青岛 - 釜山 - 西雅图",
                    orderTime: "2021/11/11 6:12",
                    blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
                    deliveryTime: "2021/11/11 11:40",
                    daLeadTime: "2021/11/11 19:00",
                    reLeadTime: "2021/11/11 18:26",
                    status: "运输中",
                },
                {
                    orderID: "TA-01-L271827391",
                    cargoName: "K45型零件",
                    cargoType: "干散货",
                    shipLine: "大连-高雄",
                    shipRoute: "大连 - 青岛 - 釜山 - 西雅图",
                    orderTime: "2021/10/31 10:13",
                    blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
                    deliveryTime: "2021/10/31 21:40",
                    daLeadTime: "2021/11/01 06:30",
                    reLeadTime: "2021/11/01 06:13",
                    status: "已送达",
                }
            ],
            timeIndex: 2,
            timeLineList: [
                {
                    site: "大连",
                    type: "start",
                },
                {
                    site: "天津",
                    type: "passed",
                },
                {
                    site: "青岛",
                    type: "passing",
                },
                {
                    site: "釜山",
                    type: "nopass",
                },
                {
                    site: "横滨",
                    type: "nopass",
                },
                {
                    site: "西雅图",
                    type: "end",
                },
            ],
        };
    },
    methods: {
        citycolor(type) {
            switch (type) {
                case "start":
                    return "green";
                    break;
                case "passed":
                    return "green";
                    break;
                case "passing":
                    return "#00ccff";
                    break;
                case "nopass":
                    return "white";
                    break;
                case "end":
                    return "red";
                    break;
                default:
                    break;
            }
        },
    },
};
</script>
<style scoped>
.my_timeline_prev,
.my_timeline_next {
    float: left;
    display: inline-block;
    background-color: #fff;
    cursor: pointer;
}
.my_timeline_prev {
    width: 200px;
    float: left;
}
.my_timeline_next {
    width: 34px;
    margin-left: -22px;
}
.ul_box {
    width: 900px;
    height: 60px;
    display: inline-block;
    float: left;
    margin-top: 2px;
    white-space: nowrap;
}
.my_timeline_item {
    display: inline-block;
    width: 150px;
}
.my_timeline_node {
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
    margin: -18px 0 0 0px;
}
.my_timeline_item_line {
    width: 100%;
    height: 10px;
    border-top: 3px solid #e4e7ed;
    border-left: none;
}
.my_timeline_item:last-child .my_timeline_item_line:nth-child(1) {
    display: none;
}

.my_timeline_item_content::before {
    content: "🛳️";
}
</style>
