<template>
    <div>
        <el-form :model="form" ref="ruleForm">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-form-item label="货物ID" prop="name">
                        <el-input v-model="form.id"></el-input>
                    </el-form-item>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <el-form-item label="货物名称" prop="name">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="类型" prop="name">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="数量" prop="name">
                        <el-input-number :min="1" :max="9999"></el-input-number>
                    </el-form-item>
                </el-col>
                <el-col :span="6">
                    <el-form-item label="预定航线" prop="name">
                        <el-input></el-input>
                    </el-form-item>
                </el-col>
            </el-row>

            <el-row :gutter="10">
                <el-col :span="15">
                    <el-form-item label="运输周期" prop="a">
                        <el-date-picker
                            v-model="allTime"
                            type="datetimerange"
                            range-separator="-"
                            start-placeholder="预定发货时间"
                            end-placeholder="预定抵达时间"
                            format="yyyy-MM-DD HH:mm"
                        >
                        </el-date-picker>
                    </el-form-item>
                </el-col>
            </el-row>
        </el-form>
        <el-button type="primary">下一步</el-button>
    </div>
</template>
<script>
export default {
    
}
</script>
