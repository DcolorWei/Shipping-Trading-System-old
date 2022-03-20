<template>
  <div>
    <b style="color:#fff;font-size:18px">船舶区块链连接图</b>
    <canvas id="container" width="600px" height="400px"></canvas>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "EchartsTable",
  data() {
    return {
      achart: null,
    };
  },

  mounted() {
    var chartDom = document.getElementById("container");
    var myChart = echarts.init(chartDom);
    var option;

    const data = [
      {
        fixed: true,
        x: myChart.getWidth() / 2,
        y: myChart.getHeight() / 2,
        symbolSize: 20,
        id: "-1",
      },
    ];
    const edges = [];
    option = {
      series: [
        {
          type: "graph",
          layout: "force",
          animation: false,
          data: data,
          force: {
            // initLayout: 'circular'
            // gravity: 0
            repulsion: 100,
            edgeLength: 5,
          },
          edges: edges,
          roam: false,
        },
      ],
      scaleLimit: {
        //所属组件的z分层，z值小的图形会被z值大的图形覆盖
        min: 1, //最小的缩放值
        max: 3, //最大的缩放值
      },
    };
    setInterval(function () {
      data.push({
        id: data.length + "",
      });
      var source = Math.round((data.length - 1) * Math.random());
      var target = Math.round((data.length - 1) * Math.random());
      if (source !== target) {
        edges.push({
          source: source,
          target: target,
        });
      }
      myChart.setOption({
        series: [
          {
            roam: true,
            data: data,
            edges: edges,
          },
        ],
      });
      // console.log('nodes: ' + data.length);
      // console.log('links: ' + data.length);
    }, 2000);
    option && myChart.setOption(option);
  },
};
</script>

<style scoped>

</style>
