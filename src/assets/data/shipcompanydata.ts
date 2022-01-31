const company = {
    options: [//船期表
        {
            value:0,
            companyID: "G10k23",
            companyName: "中远海运",
            shipagent:"船代A"
        },
        {
            value:1,
            companyID: "S42p21",
            companyName: "马士基",
            shipagent:"船代B"
        },
    ],
    land: [//运输公司
        {
            value:0,
            companyID: "L12K6",
            companyName: "大陆运输",
            price:123.3
        },
        {
            value:1,
            companyID: "P12K21",
            companyName: "青云运业",
            price:123.3
        },
        {
            value:2,
            companyID: "J4612S",
            companyName: "联合卡车集团",
            price:123.3
        },
    ],
    value: "",
};
const shiplist = [
    [
        {
            shipID: "10C51",
            shipName: "远航号",
            shipInfo: []
        },
        {
            shipID: "10C58",
            shipName: "东礼号",
            shipInfo: []
        },
        {
            shipID: "10C66",
            shipName: "海华号",
            shipInfo: []
        },
    ],
    [
        {
            shipID: "18C51",
            shipName: "四海号",
            shipInfo: []
        },
        {
            shipID: "18C58",
            shipName: "百川号",
            shipInfo: []
        },
        {
            shipID: "18C66",
            shipName: "尚德号",
            shipInfo: []
        },
    ]
]

export default { company, shiplist }