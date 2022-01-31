const tabledata = [
    {
        orderID: "TD-07-K271827391",
        cargoName: "石油",
        cargoType: "液化货物",//子类别
        shipLine: "大连-西雅图",
        shipRoute: [
            {
                "site": "大连",
                "type": "start"
            }, 
            {
                "site": "釜山",
                "type": "porting"
            },
            {
                "site": "横滨",
                "type": "nopass"
            },
            {
                "site": "西雅图",
                "type": "end"
            }
        ],
        orderTime: "2021/11/10 21:12",
        blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
        deliveryTime: "--",
        daLeadTime: "2021/12/28 19:30",
        reLeadTime: "--",
        status: "运输中",
    },
    {
        orderID: "TK-52-L271827391",
        cargoName: "钢铁",
        cargoType: "干散货",
        shipLine: "天津-雅加达",
        shipRoute: [
            {"site": "天津","type": "start"},{"site": "青岛","type": "passed"},{"site": "连云港","type": "justpassed"},
            {"site": "","type": "sailing"},{"site": "高雄","type": "nopass"},{"site": "雅加达","type": "end"}
        ],
        orderTime: "2021/11/10 21:12",
        blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
        deliveryTime: "2021/11/20 11:40",
        daLeadTime: "2021/11/22 19:26",
        reLeadTime: "--",
        status: "运输中",
    },
    {
        orderID: "TK-52-L271827391",
        cargoName: "纺织纱布",
        cargoType: "干散货",
        shipLine: "天津-连云港",
        shipRoute: "大连",
        orderTime: "2021/11/11 6:12",
        blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
        deliveryTime: "2021/11/11 11:40",
        daLeadTime: "2021/11/11 19:00",
        reLeadTime: "2021/11/11 18:26",
        status: "已送达",
    },
    {
        orderID: "TA-01-L271827391",
        cargoName: "K45型零件",
        cargoType: "干散货",
        shipLine: "大连-高雄",
        shipRoute: "大连",
        orderTime: "2021/10/31 10:13",
        blockchain: "eVbqEMkc1EoA65rn6zgcbdy3HuN5R9TWtzw2LZXL6xs=",
        deliveryTime: "2021/10/31 21:40",
        daLeadTime: "2021/11/01 06:30",
        reLeadTime: "2021/11/01 06:13",
        status: "已送达",
    },
]

export default tabledata;