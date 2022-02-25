<template>
  <el-form>
    <div style="display: table">
      <div
        style="
          border: solid 4px #000000;
          border-radius: 50%;
          height: 75px;
          width: 75px;
          float: left;
          display: table-cell;
          vertical-align: middle;
          margin-bottom: 20px;
        "
      >
        <svg
          t="1644582053610"
          class="icon"
          viewBox="0 0 1024 1024"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          p-id="1494"
          width="76"
          height="76"
        >
          <path
            d="M957.6 572.8l-120.8-181.6c-3.2-4.8-8-7.2-13.6-7.2H704V224c0-17.6-14.4-32-32-32H96c-17.6 0-32 14.4-32 32v448c0 17.6 14.4 32 32 32h32c0 70.4 57.6 128 128 128s128-57.6 128-128h256c0 70.4 57.6 128 128 128s128-57.6 128-128h32c17.6 0 32-14.4 32-32V581.6c0-3.2-0.8-6.4-2.4-8.8zM256 768c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m384-128H366.4c-22.4-38.4-63.2-64-110.4-64s-88.8 25.6-110.4 64H128V256h512v384z m128 128c-35.2 0-64-28.8-64-64s28.8-64 64-64 64 28.8 64 64-28.8 64-64 64z m128-128h-17.6c-22.4-38.4-63.2-64-110.4-64-23.2 0-44.8 6.4-64 17.6V448h95.2c5.6 0 10.4 2.4 12.8 7.2l80.8 116.8c1.6 2.4 3.2 5.6 3.2 8.8V640z"
            p-id="1495"
            fill="#000000"
          ></path>
        </svg>
      </div>
      <div style="float: left">
        <span style="font-size: 24px; line-height: 76px; padding-left: 14px"
          ><b>等待运输方处理</b></span
        >
      </div>
    </div>
    <el-row :gutter="40">
      <el-col :span="16">
        <el-card>
          <div id="container" style="width: 750px; height: 400px"></div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover" id="timelineFrame">
          <div style="height: 400px; text-align: left">
            <el-timeline :reverse="false">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :color="index == 0 ? '#0bbd87' : '#6495ED'"
                :timestamp="activity.timestamp"
              >
                <span> {{ activity.content }}</span>
              </el-timeline-item>
            </el-timeline>
            <el-card shadow="nerve">aaa</el-card>
            <el-timeline :reverse="false">
              <el-timeline-item
                v-for="(activity, index) in activities"
                :key="index"
                :color="index == 0 ? '#0bbd87' : '#6495ED'"
                :timestamp="activity.timestamp"
              >
                <span> {{ activity.content }}</span>
              </el-timeline-item>
            </el-timeline>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
import AMapLoader from "@amap/amap-jsapi-loader";

export default {
  name: "map",
  data() {
    return {
      activities: [],
    };
  },
  mounted() {
    AMapLoader.load({
      key: "66097d2ef459ca854fe65e014f1cd655", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        let map = new AMap.Map("container", {
          zoom: 13, //设置地图显示的缩放级别
          center: [121.624845, 38.928633], //设置地图中心点坐标
          layers: [], //设置图层,可设置成包含一个或多个图层的数组
          mapStyle: "amap://styles/whitesmoke", //设置地图的显示样式
          viewMode: "2D", //设置地图模式
          lang: "zh_cn", //设置地图语言类型;
        });

        var clickHandler = function (e) {
          alert(
            "您在[ " +
              e.lnglat.getLng() +
              "," +
              e.lnglat.getLat() +
              " ]的位置点击了地图！"
          );
        };
        var circleMarker = new AMap.CircleMarker({
          center: [121.603077, 38.912069],
          radius: 6 + Math.random() * 3, //3D视图下，CircleMarker半径不要超过64px
          strokeColor: "white",
          strokeWeight: 1,
          strokeOpacity: 0.5,
          fillColor: "rgba(0,0,255,1)",
          fillOpacity: 0.5,
          zIndex: 10,
          bubble: true,
          cursor: "pointer",
          clickable: true,
        });
        circleMarker.setMap(map);
        var path = [
          new AMap.LngLat(121.603077, 38.912069),
          new AMap.LngLat(121.601567, 38.926337),
          new AMap.LngLat(121.616993, 38.926481),
          new AMap.LngLat(121.636986, 38.933106),

          new AMap.LngLat(121.639516, 38.933442),
          new AMap.LngLat(121.647229, 38.931042),
          new AMap.LngLat(121.648525, 38.931042),
          new AMap.LngLat(121.649635, 38.930514),

          new AMap.LngLat(121.653276, 38.932434),
          new AMap.LngLat(121.657349, 38.93109),
          new AMap.LngLat(121.658089, 38.932242),
          new AMap.LngLat(121.653584, 38.933538),
          new AMap.LngLat(121.656176, 38.938625),
        ];

        // 创建折线实例
        var polyline = new AMap.Polyline({
          path: path,
          borderWeight: 2, // 线条宽度，默认为 1
          strokeColor: "red", // 线条颜色
          lineJoin: "round", // 折线拐点连接处样式
        });

        // 将折线添加至地图实例
        map.add(polyline);
        // 绑定事件
        map.on("click", clickHandler);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
#timelineFrame {
  border-radius: 10px;
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