<template>
    <div>
        <div>
            <Bg />
        </div>
        <div
            id="login-panel"
            :style="{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                padding: 50 + 'px',
                width: 400 + 'px',
                height: 250 + 'px',
                margin: loginPanelHeight + 'px auto',
                'border-radius': 50 + 'px',
                'box-shadow': '3px 3px 6px 3px rgba(0, 0, 0, .3)',
            }"
        >
            <div class="grid-content bg-purple-light">
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <div id="title">
                            <h1 :style="{ color: 'white' }">船舶区块链应用系统</h1>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model.lazy="form.name" placeholder="账号"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input
                            type="password"
                            v-model.lazy="form.password"
                            placeholder="密码"
                        ></el-input>
                    </el-form-item>
                    <el-form-item> </el-form-item>

                    <el-form-item>
                         <span 
                            style="
                                font-size: 17px;
                                color:white;
                                background:#00BBFF;
                                vertical-align: middle;
                                padding:8px 10px;
                                border: 4px solid #00BBFF;
                                border-radius: 4px;
                                cursor:pointer
                            "
                            onclick="location.assign('/apperance')"
                            ><strong>登录</strong></span
                        >
                    </el-form-item>
                </el-form>
            </div>
        </div>
        
    </div>
</template>

<script>
import Bg from "../components/login/Bg";
import axios from "axios";
export default {
    name: "Login",
    data() {
        return {
            loginPanelHeight:
                ((document.documentElement.clientWidth / 1286) *
                    document.documentElement.clientHeight) /
                    2 -
                250,
            form: {
                name: "",
                password: "",
            },
        };
    },
    components: {
        Bg,
        axios,
    },

    created() {
        addEventListener("resize", () => {
            let height =
                ((document.documentElement.clientWidth / 1286) *
                    document.documentElement.clientHeight) /
                    2 -
                250;
            this.loginPanelHeight = height >= 0 ? height : 0;
        });
    },

    methods: {
        loginMethod(name, psw) {
            axios({
                headers: {
                    "Content-Type": "application/json",
                },
                mode:"cors",
                method: "POST",
                url: "https://49.232.128.228/",
                data: {

                },
            }).then((response) => {
                response.data;
            }).then((error)=>{
                alert("账号或密码错误！");//后面肯定是要改的
            });
             location.assign("/subject");
        },
    },
};
</script>

<style scoped></style>
