<template>
    <div>
        <el-timeline>
            <transition-group>
                <el-timeline-item
                    placement="top"
                    v-for="(item, index) in timeLineTable"
                    :key="item.Number"
                    :timestamp="item.Time"
                >
                    <el-card class="card">
                        <p>
                            <strong>Number: {{ item.Number }}</strong>
                        </p>
                        <p>{{ item.PreviousHash }}</p>
                    </el-card>
                </el-timeline-item>
            </transition-group>
        </el-timeline>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "Timeline",
    props: ["timeLineTable"],
    data() {
        return {};
    },
    mounted() {
        function randomString(len) {
            //生成伪区块链
            len = len || 32;
            var $chars =
                "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678"; /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
            var maxPos = $chars.length;
            var pwd = "";
            for (let i = 0; i < len; i++) {
                pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
            }
            return pwd;
        }
    },
};
</script>

<style scoped>
.card {
    text-align: left;
    font-size: 16px;
    line-height: 26px;
    white-space: nowrap;
}

.v-enter,
.v-leave-to {
    opacity: 0;
    transform: translateY(-50px);
}
.v-enter-active,
.v-leave-active {
    transition: all 0.7s ease;
}
/*v-move 和 v-leave-active 配合使用，能够实现列表后续的元素，渐渐地漂上来的效果 */

.v-move {
    transition: all 0.7s ease;
}
.v-leave-active {
    position: absolute;
}
</style>
