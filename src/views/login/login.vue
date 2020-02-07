<template>
<div class="loginbox1">
  <div class="loginbox2">
       <div class="title-box">
           <img class="logoimg" src="../../assets/矢量智能对象 拷贝 9.png" alt="">
            <span class="title">黑马面面</span>
            <span class="link"></span>
            <span class="sub-title">用户登陆</span>
       </div>
  </div>
  <img src="../../assets/login_banner_ele.png" alt="">
</div> 
</template>

<script>
export default {
name:'login',
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
    .title-box{
        display: flex;
        align-items: center;
        margin-top: 44px;
        margin-left: 48px;
        
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
}


</style>