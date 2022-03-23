<!--单击仪表时，显示的默认页面-->
<template>
  <el-container id="frame">
    <el-main id="sub-frame">
      <div style="border-bottom:2px solid;margin-bottom:30px">

      <HomeTitle />
      </div>
      <!--标题-->
      <!--四个数据展示区块-->
      <div
        style="height: 300px; display: flex; justify-content: space-around"
      >
        <el-row :gutter="20">
          <el-col :span="6" v-for="(item, key) in datablock" :key="key">
            <el-col @load="getallblock()">
              <el-card class="infocard" shadow="hover" >
                <DataInfo :item="item"></DataInfo>
              </el-card>
            </el-col>
          </el-col>
        </el-row>
      </div>

      <!--Echarts与Timeout-->
      <div style="display: flex; justify-content: space-around">
        <el-row :gutter="60">
          <el-col :span="10">
            <el-card
              shadow="hover"
              style="
                border: 1px #35415e;
                border-radius: 5px;
                height: 400px;
                background: #35415e;
                margin-bottom: 35px;
              "
            >
              <EchartsTable />
            </el-card>
            <div class="dot"></div>
            <el-card
              shadow="hover"
              style="
                border: 1px #35415e;
                border-radius: 5px;
                height: 400px;
                background: #35415e;
              "
            >
              <Echarts1 />
            </el-card>
          </el-col>

          <el-col :span="14">
            <el-card
              shadow="hover"
              id="timelineFrame"
              style="
                border: 1px #35415e;
                border-radius: 10px;
                height: 840px;
                background: #35415e;
              "
            >
              <Timeline :timeLineTable="timeLineTable"></Timeline>
            </el-card>
          </el-col>
        </el-row>
      </div>
      <div style="display:flex;justify-content:center;">
         <el-row>
          <el-col :span="24">
            <el-card
              shadow="hover"
              style="
                border: 1px #35415e;
                border-radius: 5px;
                height: 400px;
                background: #35415e;
              "
            >
              <Echarts2 />
            </el-card>
          </el-col>
        </el-row>
      </div>
     
    </el-main>
  </el-container>
</template>
<script>
import DataInfo from "../components/apperance/DataInfo.vue";
import EchartsTable from "../components/apperance/EchartsTable.vue";
import Timeline from "../components/apperance/Timeline.vue";
import datastore from "@/assets/data/datablock.ts";

//假的echarts数据
import Echarts1 from "../components/echarts/echarts1.vue";
import Echarts2 from "../components/echarts/echarts2.vue";

import HomeTitle from "../components/home_cop/title.vue";
export default {
  name: "Infoshow",
  components: {
    DataInfo,
    Timeline,
    EchartsTable,
    datastore,
    Echarts1,
    Echarts2,
    HomeTitle,
  },
  data() {
    return {
      datablock: datastore.datablock, //获得所有区块（或者加载完成瞬间时的最新几个区块）
      timeLineTable: datastore.timeLineTable, //时间线数据，要求实时更新，使用WebSocket
    };
  },

  mounted() {
    datastore.getBlockInfo();
    datastore.getAllBlock(); //通过store加载所有数据
    datastore.getNewBlock(); //更新数据
  },
};
</script>

<style scoped>
#frame {
  background: #2a3550;
  padding: 20px;
  border: 2px solid #2a3550;
}

#sub-frame {
  background: #2a3550;
  border: 3px solid #40e8cd;
  animation: borderchange 4s infinite;
}
.title {
  border-bottom: 3px solid;
  font-size: 30px;
  margin-bottom: 60px;
  color: #fff;
  animation: borderchange 4s infinite;
}
.el-container {
  height: auto;
}
.el-footer {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 10px;
}

.el-aside {
  background-color: white;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 10px;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 10px;
}

.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}

.infinite-list {
  height: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}

#timelineFrame {
  border-radius: 10px;
  height: 300px;
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

.infocard {
  border: 4px solid #00f9b0;
  border-radius: 1px;
  width: 300px;
  height: 250px;
  background: #35415e;
  animation: borderchange 4s infinite;
}
@keyframes borderchange {
  0% {
    border-image: -webkit-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: -moz-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: -o-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: linear-gradient(#cdf18a, #2ed) 20 20;
  }
  25% {
    border-image: -webkit-linear-gradient(#c0ad77, #2ed) 20 20;
    border-image: -moz-linear-gradient(#c0ad77, #2ed) 20 20;
    border-image: -o-linear-gradient(#c0ad77, #2ed) 20 20;
    border-image: linear-gradient(#c0ad77, #2ed) 20 20;
  }
  75% {
    border-image: -webkit-linear-gradient(#c0ad77, rgb(245, 112, 71)) 20 20;
    border-image: -moz-linear-gradient(#c0ad77, rgb(245, 112, 71)) 20 20;
    border-image: -o-linear-gradient(#c0ad77, rgb(245, 112, 71)) 20 20;
    border-image: linear-gradient(#c0ad77, rgb(245, 112, 71)) 20 20;
  }
  99% {
    border-image: -webkit-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: -moz-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: -o-linear-gradient(#cdf18a, #2ed) 20 20;
    border-image: linear-gradient(#cdf18a, #2ed) 20 20;
  }
}

:root {
  --bg: #3c465c;
  --primary: #78ffcd;
  --solid: #fff;
  --btn-w: 10em;
  --dot-w: calc(var(--btn-w) * 0.2);
  --tr-X: calc(var(--btn-w) - var(--dot-w));
}
* {
  box-sizing: border-box;
}
*:before,
*:after {
  box-sizing: border-box;
}

.btn {
  position: relative;
  margin: 0 auto;
  width: var(--btn-w);
  color: var(--primary);
  border: 0.15em solid var(--primary);
  border-radius: 5em;
  text-transform: uppercase;
  text-align: center;
  font-size: 1.3em;
  line-height: 2em;
  cursor: pointer;
}
.dot {
  content: "";
  position: absolute;
  top: 0;
  width: var(--dot-w);
  height: 100%;
  border-radius: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  display: none;
}
.dot:after {
  content: "";
  position: absolute;
  left: calc(50% - 0.4em);
  top: -0.4em;
  height: 0.8em;
  width: 0.8em;
  background: var(--primary);
  border-radius: 1em;
  border: 0.25em solid var(--solid);
  box-shadow: 0 0 0.7em var(--solid), 0 0 2em var(--primary);
}
.btn:hover .dot,
.btn:focus .dot {
  -webkit-animation: atom 2s infinite linear;
  animation: atom 2s infinite linear;
  display: block;
}
@-webkit-keyframes atom {
  0% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateX(var(--tr-X)) rotate(0);
    transform: translateX(var(--tr-X)) rotate(0);
  }
  50% {
    -webkit-transform: translateX(var(--tr-X)) rotate(180deg);
    transform: translateX(var(--tr-X)) rotate(180deg);
  }
  80% {
    -webkit-transform: translateX(0) rotate(180deg);
    transform: translateX(0) rotate(180deg);
  }
  100% {
    -webkit-transform: translateX(0) rotate(360deg);
    transform: translateX(0) rotate(360deg);
  }
}
@keyframes atom {
  0% {
    -webkit-transform: translateX(0) rotate(0);
    transform: translateX(0) rotate(0);
  }
  30% {
    -webkit-transform: translateX(var(--tr-X)) rotate(0);
    transform: translateX(var(--tr-X)) rotate(0);
  }
  50% {
    -webkit-transform: translateX(var(--tr-X)) rotate(180deg);
    transform: translateX(var(--tr-X)) rotate(180deg);
  }
  80% {
    -webkit-transform: translateX(0) rotate(180deg);
    transform: translateX(0) rotate(180deg);
  }
  100% {
    -webkit-transform: translateX(0) rotate(360deg);
    transform: translateX(0) rotate(360deg);
  }
}
</style>