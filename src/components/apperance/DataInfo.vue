<template>
    <div>
        <el-image style="width: 125px; height: 125px" :src="item.src"></el-image>
        <h1 style="font-size: 22px">
            {{ item.item }}
        </h1>
        <transition name="slide-fade">
            <h1 style="font-size: 22px">
                {{ item.qua }}
            </h1>
        </transition>
    </div>
</template>

<script>
export default {
    name: "DataInfo",
    props: ["item"],
    data() {
        return {};
    },
};
</script>
