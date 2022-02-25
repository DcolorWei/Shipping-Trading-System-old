<template>
  <el-card>
     <el-card class="hoverFlame">
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
      shipRoute: [
        {
          site: "大连",
          type: "porting",
        },
        {
          site: "青岛",
          type: "end",
        },
        {
          site: "连云港",
          type: "end",
        },
        {
          site: "马尼拉",
          type: "end",
        },
      ],
    };
  },
  mounted() {
    AMapLoader.load({
      key: "66097d2ef459ca854fe65e014f1cd655", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    }).then((AMap) => {
      let map = new AMap.Map("container", {
        zoom: 6, //设置地图显示的缩放级别
        center: [130.091213, 36.861378], //设置地图中心点坐标
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

      mattersList.forEach((element) => {
        let path = new Array();
        element.siteList.forEach((element) => {
          path.push(element.site);
          if (element.type) {
            //带有名称，为特殊位置
            map.add(methods.drawpoint(element.site));
          }
        });
        map.add(methods.drawline(path));
      });

      var circleMarker = {
        amapobj: methods.drawpoint([121.603077, 38.912069]),
      };

      circleMarker.amapobj.on("click", () => {
        console.log(circleMarker.pointdata);
      });

      map.add(circleMarker.amapobj);
      // circleMarker.setMap(map);

      // 将折线添加至地图实例
      map.add(
        methods.drawline([
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
          [121.658089, 38.932242],
          [121.653584, 38.933538],
          [121.656176, 38.938625],
          [125.159926, 38.7259],
        ])
      );
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
.hoverFlame{
  position:fixed;
  margin-left:3%;
  margin-top:30%;
  z-index: 6;
}
</style>