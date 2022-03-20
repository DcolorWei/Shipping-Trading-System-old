<template>
  <el-card>
    <el-card class="hoverFlame" v-if="shipRoute.length > 0">
      <CrossWiseTimeline :shiproute="shipRoute"></CrossWiseTimeline>
    </el-card>
    <div id="container" style="width: 1200px; height: 600px"></div>
  </el-card>
</template>

<script>
import methods from "@/store/methods.js";
import AMapLoader from "@amap/amap-jsapi-loader";
import mattersList from "@/assets/data/mattersList.ts";
import CrossWiseTimeline from "@/components/apperance_order/CrossWiseTimeline.vue";

export default {
  name: "OrderMap",
  data() {
    return {
      shipRoute: [],
    };
  },
  methods: {
    clickHandler: function (e) {
      alert(
        "您在[ " +
          e.lnglat.getLng() +
          "," +
          e.lnglat.getLat() +
          " ]的位置点击了地图！"
      );
    },
    change1: function (shipRoute) {
      this.$data.shipRoute = shipRoute;
    },
  },
  mounted() {
    AMapLoader.load({
      key: "66097d2ef459ca854fe65e014f1cd655", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      Loca: {
        // 是否加载 Loca， 缺省不加载
        version: "2.0", // Loca 版本，缺省 1.3.2
      },
    }).then((AMap) => {
      var map = new AMap.Map("container", {
        terrain: true,
        viewMode: "2D",
        zoom: 9,
        center: [102.620455, 30.973672],
        pitch: 45,
        rotation: -90,
        showLabel: true,
        showBuildingBlock: false,
        dragEnable: false,
        zoomEnable: false,
      });

      var loca = (window.loca = new Loca.Container({
        map,
      }));
      var path = [
        [102.634142, 30.966406],
        [102.63411, 30.966188],
        [102.633993, 30.965986],
        [102.642626, 30.96264],
        [102.642985, 30.962378],
        [102.643326, 30.962075],
        [102.643653, 30.961789],
        [102.644024, 30.961593],
        [102.644532, 30.961468],
        [102.645027, 30.96138],
        [102.645491, 30.961254],
        [102.645931, 30.961111],
        [102.646739, 30.960731],
        [102.647004, 30.960562],
        [102.829334, 30.992772],
        [102.829429, 30.992917],
        [102.829611, 30.993071],
        [102.829925, 30.993177],
        [102.831209, 30.993469],
        [102.832315, 30.99383],
        [102.834562, 30.994623],
      ];

      // 轨迹
      var marker = new AMap.Marker({
        position: [102.834562, 30.994623],
        content: '<div class="amap-ani"></div>',
        anchor: "bottom-center",
        map: map,
      });
      var polyline = new AMap.Polyline({
        path: [
          [102.620456, 30.973672],
          [102.620456, 30.973672],
        ],
        isOutline: false,
        strokeColor: "#00E98F",
        strokeOpacity: 1,
        strokeWeight: 3,
        strokeStyle: "solid",
        lineJoin: "round",
        lineCap: "round",
        zIndex: 500,
        map: map,
      });
      var finished = false;
      function run() {
        if (!finished) {
          var center = map.getCenter().toArray();
          var lastPath = polyline.getPath();
          lastPath.push(center);
          if (lastPath.length === 1) {
            lastPath.push(center);
          }
          polyline.setPath(lastPath);
          marker.setPosition(center);
        }
        requestAnimationFrame(run);
      }
      run();

      loca.animate.start();
      document
        .querySelector("#container")
        .addEventListener("click", function () {
          finished = false;
          polyline.setPath([
            [102.620456, 30.973672],
            [102.620456, 30.973672],
          ]);
          loca.viewControl.addTrackAnimate(
            {
              path: path, // 镜头轨迹，二维数组，支持海拔
              duration: 10000, // 时长
              timing: [
                [0, 0.3],
                [1, 0.7],
              ], // 速率控制器
              rotationSpeed: 0, // 每秒旋转多少度
            },
            function () {
              finished = true;
              console.log("完成");
            }
          );
        });

      loca.animate.start();
      mattersList.forEach((element) => {});

      // 绑定事件
      // map.on("click", clickHandler);

      //删除版权信息，注意版权问题
      let logo = document.getElementsByClassName("amap-logo")[0];
      logo.parentNode.removeChild(logo);
      let copyright = document.getElementsByClassName("amap-copyright")[0];
      copyright.parentNode.removeChild(copyright);
    });
  },

  components: {
    CrossWiseTimeline,
  },
};
</script>
<style>
.hoverFlame {
  position: fixed;
  margin-left: 3%;
  margin-top: 30%;
  z-index: 6;
}
.amap-ani {
  width: 24px;
  height: 32px;
  background: url("https://a.amap.com/Loca/static/loca-v2/demos/images/track_marker.png");
  background-size: 24px 32px;
}
</style>