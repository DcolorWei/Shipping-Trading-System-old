<template>
    <div id="a"></div>
</template>
<script>
<script src="https://cdn.staticfile.org/echarts/2.1.10/chart/bar.js"></script>
<script src="./world.js"></script>

console.log("why")
var divchart = document.createElement("div");
divchart.setAttribute("style", "width:700px;height:400px");
var myChart = echarts.init(divchart);
var option;
var mapData = [
    { code: "DL", name: "Dalian", value: 30000, color: "#eea638" },
    { code: "GX", name: "Dalian", value: 30000, color: "#eea638" },
];

var max = -Infinity;
var min = Infinity;
window.onload = function () {
    option = {
        backgroundColor: "#c5c5c5",
        title: {
            text: "World Block Chart (2021)",
            subtext: "From Gapminder",
            left: "center",
            top: "top",
            textStyle: {
                color: "#fff",
            },
        },
        tooltip: {
            trigger: "item",
            formatter: function (params) {
                var value = (params.value + "").split(".");
                value =
                    value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") +
                    "." +
                    value[1];
                return params.seriesName + "<br/>" + params.name + " : " + value;
            },
        },
        visualMap: {
            show: false,
            min: 0,
            max: max,
            inRange: {
                symbolSize: [3, 10],
            },
        },
        geo: {
            name: "World Population (2021)",
            type: "map",
            map: "world",
            roam: true,
            label: {
                emphasis: {
                    show: false,
                },
            },
            itemStyle: {
                normal: {
                    areaColor: "#a1a1a1", //陆地地区颜色
                    borderColor: "#fff", //边界颜色
                },
                emphasis: {
                    areaColor: "#fff", //鼠标焦点地区颜色
                },
            },
        },
        series: [
            {
                type: "scatter",
                coordinateSystem: "geo",
                data: mapData.map(function (itemOpt) {
                    return {
                        name: itemOpt.name,
                        value: [
                            latlong[itemOpt.code].longitude,
                            latlong[itemOpt.code].latitude,
                            itemOpt.value,
                        ],
                        label: {
                            emphasis: {
                                position: "right",
                                show: true,
                            },
                        },
                        itemStyle: {
                            normal: {
                                color: itemOpt.color,
                            },
                        },
                    };
                }),
            },
        ],
    };
    option && myChart.setOption(option);
    document.getElementById("a").append(divchart);
};
</script>
<script>
export default {
    name: "EchartsTable",
};
</script>
