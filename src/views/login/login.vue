<template>
<div class="loginbox1">
  <div class="loginbox2">
       <div class="title-box">
           <img class="logoimg" src="../../assets/矢量智能对象 拷贝 9.png" alt="">
            <span class="title">黑马面面</span>
            <span class="link"></span>
            <span class="sub-title">用户登陆</span>
   
 
       </div>

                <!-- form表单 -->
            <el-form   ref='loginFor'  :rules="rules" :model="loginForm" label-width="43px">
              <el-form-item>
                <el-input v-model="loginForm.shouji"  prefix-icon='el-icon-moon' placeholder='请输入手机号码'></el-input>
              </el-form-item>
              <el-form-item  prop="password">
                <el-input v-model="loginForm.password"  prefix-icon='el-icon-moon' placeholder='请输入密码'></el-input>
              </el-form-item>
              <el-form-item prop='loginCode' >
                  <el-row>
                    <el-col :span="17">
                     <el-input v-model="loginForm.loginCode"  prefix-icon='el-icon-moon' placeholder='请输入验证码'></el-input>
                    </el-col>
                     <el-col :span="7">
                         <img src="../../assets/yanzhengma.png" alt="" style="width:110px; height:42px">

                     </el-col>
                  </el-row> 
               
              </el-form-item>
 
 
  
            <el-form-item>
   
       <el-checkbox v-model='loginForm.type'>
           我以阅读并同意
           <el-link type='primary'>用户协议</el-link>
           和
           <el-link type='primary'>隐私条款</el-link>
       </el-checkbox>

        </el-form-item>

   <el-form-item>
    <el-button class="my-btn" type="primary"   @click="submitForm('loginFor')">登陆</el-button>
     
  </el-form-item>
   <el-form-item>
    <el-button   class="my-btn" @click='zhuce' type="primary">注册</el-button>
     
  </el-form-item>
  <motaikuang ref="motaikuang"></motaikuang>
  
   </el-form>
  </div>
  <img src="../../assets/login_banner_ele.png" alt="">
</div> 
</template>

<script>
import motaikuang from './components/motaikuang'
export default {
    components:{
        motaikuang
    },
name:'login',
data() {
    return {
     
      loginForm: {
          shouji: '',
          password: '',
          loginCode: '',
          type:false,
         
        },
          rules: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 12, message: '长度在 8 到 12 个字符', trigger: 'blur' }
          ],
          loginCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
            { min: 4, max: 4, message: '长度在4字符', trigger: 'blur' }
          ],
          }
    }
},
    methods: {
        zhuce(){
            this.$refs.motaikuang.dialogFormVisible = true
        },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
         this.$message.success('验证成功');
          } else {
             this.$message.error('验证失败');
            return false;
          }
        });
      },
    }
}
</script>

<style lang="less">

.loginbox1{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background:linear-gradient(225deg,rgba(20,147,250,1),rgba(1,198,250,1));
     .loginbox2{
    width: 478px;
    height:550px;
    background:rgba(245,245,245,1);
    padding-right: 41px;
    box-sizing: border-box;
    .title-box{
        display: flex;
        align-items: center;
        margin-top: 44px;
        margin-left: 48px;
        margin-bottom: 27px;
        
        .title{
            font-size: 24px;
            margin-left: 16px;
            margin-right: 14px;
        }
        .link{
            width: 1px;
            height: 28px;
            background-color: #c7c7c7;
        }
        .sub-title{
            font-size: 21px;
            margin-left: 12px
        
        }
    }
}
 .el-checkbox__label{
     display: flex;
     align-items: center;
 }
 .el-checkbox{
     display: flex;
     align-items: center;
 }
 .my-btn{
     width: 100%;
     margin-top: 10px;
 }
}


</style>