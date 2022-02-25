<template>
  <div>
    <canvas id="container" width="500px" height="400px"></canvas>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "EchartsTable",
  props: ["blockdata"],
  data() {
    return {
      achart: null,
      option: {
        series: [
          {
            type: "graph",
            layout: "force",
            animation: false,
            data: [
              {
                fixed: true,
                x: 100,
                y: 250,
                symbolSize: 20,
                id: "-1",
              },
            ],
            edges: [],
            force: {
              repulsion: 100,
              edgeLength: 5,
            },
          },
        ],
      },
    };
  },

  mounted() {
    var dom = document.getElementById("container");
    this.achart = echarts.init(dom);
    this.achart.setOption(this.option);
  },
  watch: {
    blockdata: (val) => {
      console.log(this)
      // this.option.series[0].data.push(val[0].Number);
      // this.achart.setOption(this.option);
    },
  },
};
</script>
