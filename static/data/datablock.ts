import axios from "axios";
const datastore = {
    //这里是四个区块需要的数据
    datablock: [
        {
            item: "区块高度",
            api: "/getallblock.json", //api获取的文件
            infoName: "Height", //文件内的数据项
            qua: 0,
            src: "./static/img/height.png",
        },
        {
            item: "交易数量",
            api: "/getallblock.json",
            infoName: "Qua",
            qua: 0,
            src: "./static/img/qua.png",
        },
        {
            item: "节点数量",
            infoName: "NodeQua",
            qua: 0,
            src: "./static/img/node.png",
        },
        {
            item: "链码",
            infoName: "ChainCode",
            qua: 0,
            src: "./static/img/chain.png",
        },
    ],
    timeLineTable: [],
    getBlockInfo: function () {
        axios.get("/static/api/blockinfo.json").then((res) => {
            let data = res.data;
            data["Qua"] = data["Height"];
            data["NodeQua"] = 7;
            data["ChainCode"] = 1;
            for (let i = 0; i < this.datablock.length; i++) {
                this.datablock[i].qua = data[this.datablock[i].infoName];
            }
        });
    },

    //这里是时间线需要的数据

    //获得所有区块
    getAllBlock: function () {
        axios.get("/static/api/getallblock.json").then((res) => {
            let data = res.data;
            for (let i in data) {
                this.timeLineTable.unshift(data[i]);
            }
        });
    },


    //获得最新数据
    getNewBlock: function () {
        const socket = new WebSocket("ws://82.157.123.54:9010/ajaxchattest");
        socket.addEventListener("open", () => {
            setInterval(() => {
                //此处循环用于模拟最新区块更新
                socket.send("test");
            }, 10000);
            socket.addEventListener("message", (e) => {
                let queryData = e.data;
                this.timeLineTable.unshift({
                    Number: this.timeLineTable.length,
                    PreviousHash: queryData.substring(0, 4),
                    Time: new Date().toLocaleString(),
                });
                this.datablock[0].qua=Number(this.datablock[0].qua)+1;
                this.datablock[1].qua=Number(this.datablock[1].qua)+1;
            });
        });
    }
}
export default datastore;