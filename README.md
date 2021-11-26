#区块链应用展示系统
#Vue+ElementUI
#Design by Dcolor

#使用说明 
1.安装环境
npm install

2.运行本地服务器(localhost:8080)
npm run dev

3.建立生产环境(/dist)
npm run build

#开发环境目录
─ build
├─config
├─src
│  ├─assets
│  │  ├─data
│  │  └─video
│  ├─components
│  │  ├─apperance
│  │  ├─login
│  │  └─map
│  ├─router
│  └─views
└─static
    ├─api
    └─img

#生产环境目录
├─static
│  ├─api
│  ├─css
│  ├─data
│  ├─fonts
│  ├─img
│  ├─js
│  └─media
└─templates
   ├─index.html

#项目特点
1.本地数据以及静态资源存放于/static下，数据通过/page文件夹中获取
2.vue挂载结构为 App >> views >> page >> subPage(配置路由以使用) >> components >> SubComponent
3.通过$emit和props分别向父组件与子组件传输数据