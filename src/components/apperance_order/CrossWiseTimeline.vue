<template>
    <div class="ul_box" style="background:transparent">
        <ul class="my_timeline" ref="mytimeline" style="background:transparent">
            <li class="my_timeline_item" v-for="(item, index) in shiproute" :key="index">
                <!--线-->
                <div
                    class="my_timeline_item_line"
                    :style="{
                        width: getLineWidth(item.type, shiproute.length),
                        borderColor: linecolor(item.type),
                    }"
                ></div>
                <!--圈-->
                <div
                    class="my_timeline_node"
                    :style="{
                        backgroundColor: citycolor(item.type),
                        border: '3px black solid',
                        width: 18 + 'px',
                        height: 18 + 'px',
                    }"
                ></div>

                <!--标注-->
                <div
                    v-bind:class="item.type"
                    style="text-align: left"
                    :style="{
                        color: '#fff',
                        fontSize: 14 + 'px',
                    }"
                >
                    {{ item.site }}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "CrossWiseTimeline",
    props: ["shiproute"],
    data() {
        return {};
    },

    methods: {
        citycolor(type) {
            switch (type) {
                case "start":
                    return "green";
                    break;
                case "passed":
                    return "green";
                    break;
                case "passed":
                    return "green";
                    break;
                case "justpassed":
                    return "green";
                    break;
                case "porting":
                    return "yellow";
                    break;
                case "sailing":
                    return "#00ccff";
                    break;
                case "nopass":
                    return "white";
                    break;
                case "end":
                    return "red";
                    break;
                default:
                    return "white";
                    break;
            }
        },

        linecolor(type) {
            switch (type) {
                case "start":
                    return "green";
                    break;
                case "passed":
                    return "green";
                    break;
                case "justpassed":
                    return "green";
                    break;
                default:
                    break;
            }
        },

        getLineWidth(type, length) {
            //控制线的长度
            let sailing = 0;
            let juststart = 1;
            for (let i in this.shiproute) {
                if (this.shiproute[i].type == "sailing") sailing = 1;
                if (
                    this.shiproute[i].type == "justpassed" ||
                    this.shiproute[i].type == "porting"
                )
                    juststart = 0;
            }
            switch (type) {
                case "start":
                    return 800 / (length - 1 - sailing) / (juststart + 1) + "px";
                    break;
                case "justpassed":
                    return 400 / (length - 1 - sailing) + "px";
                    break;
                case "sailing":
                    return 400 / (length - 1 - sailing) + "px";
                    break;
                default:
                    return 800 / (length - 1 - sailing) + "px";
                    break;
            }
        },
    },
};
</script>
<style scoped>
.my_timeline_prev,
.my_timeline_next {
    display: inline-block;
    background-color: #fff;
    cursor: pointer;
}
.my_timeline_prev {
    width: 200px;
    float: left;
}
.my_timeline_next {
    width: 34px;
    margin-left: -22px;
}
.ul_box {
    width: 900px;
    height: 60px;
    padding-left: 60px;
    padding-right: 90px;
    display: inline-block;
    margin-top: 2px;
    white-space: nowrap;
}
.my_timeline_item {
    display: inline-block;
}
.my_timeline_node {
    box-sizing: border-box;
    border-radius: 50%;
    cursor: pointer;
    margin: -18px 0 0 0px;
}
.my_timeline_item_line {
    width: 100%;
    height: 10px;
    border-top: 3px solid #e4e7ed;
    border-left: none;
}
.my_timeline_item:last-child .my_timeline_item_line:nth-child(1) {
    display: none;
}
.start::before {
    content: "✔️";
}
.passed::before {
    content: "✔️";
}
.justpassed::before {
    content: "✔️";
}
.sailing::before {
    content: "🚢";
}
.porting::before {
    content: "🚢";
}
.nopass::before {
    content: "⏳";
}
.end::before {
    content: "󠁭󠁵󠁰󠁬⚓";
}
</style>
