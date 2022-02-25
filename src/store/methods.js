import AMapLoader from "@amap/amap-jsapi-loader";
AMapLoader.load({
    key: "66097d2ef459ca854fe65e014f1cd655", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
    .then((AMap) => {

    })
    .catch((e) => {
        console.log(e);
    });
const methods = {
    deepClone: function (obj) {
        let tmp = JSON.stringify(obj);
        let result = JSON.parse(tmp);
        return result;
    },

    drawline: function (pathArray) {
        let path = [];
        pathArray.forEach(element => {
            path.push(new AMap.LngLat(element[0], element[1]));
        });


        // 创建折线实例
        var polyline = new AMap.Polyline({
            path: path,
            borderWeight: 2, // 线条宽度，默认为 1
            strokeColor: "red", // 线条颜色
            lineJoin: "round", // 折线拐点连接处样式
        });

        // 将折线添加至地图实例
        return polyline;
    },

    drawpoint: function (siteArray, type = 'start') {
        switch (type) {
            case "start":
                type = "green";
                break;
            case "passed":
                type = "green";
                break;
            case "passed":
                type = "green";
                break;
            case "justpassed":
                type = "green";
                break;
            case "porting":
                type = "yellow";
                break;
            case "sailing":
                type = "#00ccff";
                break;
            case "nopass":
                type = "white";
                break;
            case "end":
                type = "red";
                break;
            default:
                type = "red";
                break;
        }
        let point = new AMap.CircleMarker({
            center: [siteArray[0], siteArray[1]],
            radius: 6 + Math.random() * 3, //3D视图下，CircleMarker半径不要超过64px
            strokeColor: "white",
            strokeWeight: 1,
            strokeOpacity: 0.5,
            fillColor: type,
            fillOpacity: 0.5,
            zIndex: 10,
            bubble: true,
            cursor: "pointer",
            clickable: true,
        })
        return point;
    }
}

export default methods;