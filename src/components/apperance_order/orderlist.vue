<template>
    <div>
        <el-table :data="tableData" border style="width: 100%">
            <el-table-column prop="orderID" label="订单ID" width="180" />
            <el-table-column prop="cargoName" label="货物名称" width="180" />
            <el-table-column prop="cargoType" label="货物类别" width="180" />
            <el-table-column prop="orderTime" label="上链时间" width="180" />
            <el-table-column prop="deliveryTime" label="发货时间" width="180" />
            <el-table-column prop="leadTime" label="交付时间" width="180" />

        </el-table>
    </div>
</template>
