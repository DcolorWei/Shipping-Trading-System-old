const company = {
    shippingSchedule: [
        {
            ssid: "68",
            passPorts: [
                "qui Duis tempor culpa id",
                "ut",
                "do quis",
                "reprehenderit adipisicing"
            ],
            sailingdate: "1980-10-07 20:50:38",
            voyage: 49,
            shipCompany: "sunt",
            shipName: "广回要型",
            price: 72
        },
        {
            ssid: "30",
            passPorts: [
                "dolore sint qui tempor",
                "sint deserunt velit labore dolore"
            ],
            sailingdate: "1998-02-06 23:52:19",
            voyage: 27,//与实际情况不太一致，简化处理
            shipCompany: "eiusmod proident Duis Ut",
            shipName: "圆称况化",
            price: 51
        },
        {
            ssid: "77",
            passPorts: [
                "culpa"
            ],
            sailingdate: "2010-09-12 04:08:12",
            voyage: 7,
            shipCompany: "non occaecat sed Lorem est",
            shipName: "证系例置如",
            price: 56
        },
        {
            ssid: "8",
            passPorts: [
                "labore qui ullamco",
                "dolor occaecat"
            ],
            sailingdate: "2020-06-07 00:43:28",
            voyage: 97,
            shipCompany: "et culpa",
            shipName: "离此合什得",
            price: 98
        }
    ],
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
            price:0
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