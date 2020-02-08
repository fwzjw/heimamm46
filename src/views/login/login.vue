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
            <el-form ref="form" :model="loginForm" label-width="43px">
              <el-form-item >
                <el-input v-model="loginForm.shouji"  prefix-icon='el-icon-moon' placeholder='请输入手机号码'></el-input>
              </el-form-item>
              <el-form-item >
                <el-input v-model="loginForm.mima"  prefix-icon='el-icon-moon' placeholder='请输入密码'></el-input>
              </el-form-item>
              <el-form-item >
                  <el-row>
                    <el-col :span="17">
                     <el-input v-model="loginForm.yanzhengma"  prefix-icon='el-icon-moon' placeholder='请输入验证码'></el-input>
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
    <el-button class="my-btn" type="primary">登陆</el-button>
     
  </el-form-item>
   <el-form-item>
    <el-button   class="my-btn" type="primary">注册</el-button>
     
  </el-form-item>
  
   </el-form>
  </div>
  <img src="../../assets/login_banner_ele.png" alt="">
</div> 
</template>

<script>
export default {
name:'login',
data() {
    return {
     
      loginForm: {
          shouji: '',
          mima: '',
          yanzhengma: '',
          type:false,
         
        },
    
    }
},
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
 }
}


</style>