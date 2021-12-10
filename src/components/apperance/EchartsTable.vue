<template>
    <div>
        <canvas id="a" width="500px" height="400px"></canvas>
    </div>
</template>
<script>
import * as echarts from "Echarts";

window.onload = function () {
    var myChart = echarts.init(document.getElementById("a"));
    // 指定图表的配置项和数据
    var option = {
        legend: {},
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
            axisLabel: {
                formatter: "{value} °C",
            },
        },
        series: [
            {
                name: "Highest",
                type: "line",
                data: [10, 11, 13, 11, 12, 12, 9],
                markPoint: {
                    data: [
                        { type: "max", name: "Max" },
                        { type: "min", name: "Min" },
                    ],
                },
                markLine: {
                    data: [{ type: "average", name: "Avg" }],
                },
            },
            {
                name: "Lowest",
                type: "line",
                data: [1, -2, 2, 5, 3, 2, 0],
                markPoint: {
                    data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }],
                },
                markLine: {
                    data: [
                        { type: "average", name: "Avg" },
                        [
                            {
                                symbol: "none",
                                x: "90%",
                                yAxis: "max",
                            },
                            {
                                symbol: "circle",
                                label: {
                                    position: "start",
                                    formatter: "Max",
                                },
                                type: "max",
                                name: "最高点",
                            },
                        ],
                    ],
                },
            },
        ],
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
};
export default {
    name: "EchartsTable",
};
</script>
