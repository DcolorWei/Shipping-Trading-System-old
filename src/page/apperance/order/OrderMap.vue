<template>
  <el-card>
    <el-card class="hoverFlame" v-if="shipRoute.length > 0">
      <CrossWiseTimeline :shiproute="shipRoute"></CrossWiseTimeline>
    </el-card>
    <button class="start-btn">a</button>
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
        zoom: 13,
        center: [102.620455, 30.973672],
        pitch: 45,
        rotation: -90,
        showLabel: true,
        mapStyle: "amap://styles/509934ebf66e54cbfe10ccae0056c462",
        showBuildingBlock: false,
        dragEnable: false,
      });

      var loca = new Loca.Container({
        map,
      });
      var path = [
        [102.620455, 30.973672],
        [102.620983, 30.973509],

        [102.630044, 30.968308],
        [102.630641, 30.968114],
        [102.631158, 30.968034],

        [102.634166, 30.964221],
        [102.634372, 30.964006],
        [102.635035, 30.963904],
        [102.636576, 30.963516],
        [102.637393, 30.96333],
        [102.638094, 30.963074],
        [102.638532, 30.962883],
        [102.638924, 30.962616],
        [102.639141, 30.962542],
        [102.639412, 30.962503],
        [102.63967, 30.962478],
        [102.639925, 30.962482],
        [102.640288, 30.96258],
        [102.640659, 30.962719],

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
        strokeWeight: 16,
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
        .querySelector(".start-btn")
        .addEventListener("click", function () {
          finished = false;
          polyline.setPath([
            [102.620456, 30.973672],
            [102.620456, 30.973672],
          ]);
          loca.viewControl.addTrackAnimate(
            {
              path: path, // 镜头轨迹，二维数组，支持海拔
              duration: 12000, // 时长
              timing: [
                [0, 0.3],
                [1, 0.7],
              ], // 速率控制器
              rotationSpeed: 0, // 每秒旋转多少度
            },
            function () {
              finished = true;
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
</style>