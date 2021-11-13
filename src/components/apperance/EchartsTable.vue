<template>
    <div id="a"></div>
</template>

<script>
import * as echarts from "echarts";
var divchart = document.createElement("div");
divchart.setAttribute("style", "width:700px;height:400px");
var myChart = echarts.init(divchart);
var option;

window.onload = function () {
    option = {
        //echarts
        xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
            type: "value",
        },
        series: [
            {
                data: [150, 230, 224, 218, 135, 147, 260],
                type: "line",
            },
        ],
    };
    option && myChart.setOption(option);
    document.getElementById("a").append(divchart);
};

export default {
    name: "EchartsTable",
};
</script>
