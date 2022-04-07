<template>
  <el-card
    style="margin-top: 20px; border: 1px solid #35415e; background: #35415e"
  >
    <el-card class="hoverFlame" v-if="shipRoute.length > 0">
      <CrossWiseTimeline :shiproute="shipRoute"></CrossWiseTimeline>
    </el-card>
    <div id="container" style="width: 1200px; height: 600px"></div>
    <el-card
      :style="{
        position: 'fixed',
        top: 130 + 'px',
        bottom: 0,
        right: 100 + 'px',
        width: 300 + 'px',
        height: 350 + 'px',
        'border-radius': 10 + 'px',
        'box-shadow': '3px 3px 6px 3px rgba(0, 0, 0, 0.3)',
        opacity:0.8
        
      }"
    >
      <el-collapse
        id="collapse"
        v-model="activeName"
        accordion
        style="opacity:0.8"
        @change="startAni()"
      >
        <el-collapse-item title="🚢大连-西雅图" name="2">
          <el-timeline :reverse="false" style="background: transparent">
            <el-timeline-item
              v-for="(activity, index) in activities"
              :key="index"
              :color="index == 0 ? '#0bbd87' : '#6495ED'"
              :timestamp="activity.timestamp"
              style="background: transparent"
            >
              <span> {{ activity.content }}</span>
            </el-timeline-item>
          </el-timeline>
          <el-button id="a" style="background: #35415e">地图演示</el-button>
        </el-collapse-item>
      </el-collapse>
    </el-card>
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
      activities: [
        {
          content: "订舱成功",
          timestamp: "2018-04-15",
        },
        {
          content: "装货中",
          timestamp: "2018-04-13",
        },
        {
          content: "货物已到达码头",
          timestamp: "2018-04-11",
        },
      ],
      activeName: "1",
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
    //修改collapse的背景
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
        zoom: 1,
        center: [121.603077, 38.912069],
        pitch: 45,
        showLabel: true,
        showBuildingBlock: false,
        dragEnable: false,
        mapStyle: "amap://styles/dark",
        zIndex: [1, 20],
      });

      var loca = (window.loca = new Loca.Container({
        map,
      }));
      var path = [
        [121.603077, 38.912069],
        [121.601567, 38.926337],
        [121.616993, 38.926481],
        [121.636986, 38.933106],
        [121.639516, 38.933442],
        [121.647229, 38.931042],
        [121.648525, 38.931042],
        [121.649635, 38.930514],
        [121.653276, 38.932434],
        [121.657349, 38.93109],
        [121.653584, 38.933538],
        [121.656176, 38.938625],
        [123.936247, 34.091177],
        [127.852083, 29.879837],
        [143.944981, 30.277214],
        [149.944981, 31.277214],
        [152.944981, 30.277214],
        [153.944981, 30.277214],
        [159.944981, 30.277214],
        [165.944981, 32.277214],
        [179.944981, 30.077214],
      ];

      // 轨迹

      var marker = new AMap.Marker({
        //跟随图标参数
        content: '<div class="amap-ani"></div>',
        anchor: "bottom-center",
        map: map,
      });
      var polyline = new AMap.Polyline({
        //绘制路径的参数
        path: [
          //路径默认绘制
          [121.603077, 38.912069],
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
      document.querySelector("#a").addEventListener("click", () => {
        finished = false;
        polyline.setPath([[121.603077, 38.912069]]);
        loca.viewControl.addAnimates(
          [
            {
              // 缩放等级动画
              zoom: {
                value: 3, // 动画终点的地图缩放等级
                control: [
                  [0.1, 10],
                  [0.4, 3],
                  [0.8, 3],
                  [1.0, 3],
                ], // 控制器，x是0～1的起始区间，y是zoom值
                timing: [0.22, 0, 0.4, 1],
                duration: 10000,
              },
            },
          ],
          () => {
            // 动画执行结束
          }
        );
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
            loca.remove(polyline);
          }
        );
      });

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
  height: 24px;
  background: url("./box.png");
  background-size: 24px 24px;
}
</style>