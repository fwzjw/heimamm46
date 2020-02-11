<template>
  <el-dialog title="注册" center width='603px' class="motaikuangbox" :visible.sync="dialogFormVisible">

      
   <el-form status-icon  ref="refmtk" :rules='rules' :model="form">
 <el-form-item prop='avatar'  label="头像" :label-width="formLabelWidth" >
  <el-upload class="avatar-uploader" :action="uploadUrl" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" name='image'>
            <!-- imageUrl有值，显示图片 -->
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <!-- imageUrl没有值 显示的是i标签 -->
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
  </el-form-item>
    <el-form-item prop='names' label="昵称" :label-width="formLabelWidth">
      <el-input v-model="form.names" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" prop='emits' :label-width="formLabelWidth">
      <el-input v-model="form.emits" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" prop='phones' :label-width="formLabelWidth">
      <el-input v-model="form.phones" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item prop='passwords' label="密码" :label-width="formLabelWidth">
      <el-input show-password v-model="form.passwords" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="图形码" :label-width="formLabelWidth">
        <el-row>
            <el-col :span='16'><el-input v-model="form.iconCode" autocomplete="off"></el-input></el-col>
       
            <el-col :offset='1' :span='6'><img @click="changeCode" style="width:100%; height:100%;" :src="codeURL" alt=""></el-col>
        </el-row>
      
      
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-col :span='16'><el-input v-model="form.code" autocomplete="off"></el-input></el-col>
        
        <el-col :offset='1' :span='7'> <el-button :disabled='delay != 0' @click="getSms">
          {{delay == 0 ? '点击获取验证密码': `还有${delay}秒继续获取`}}
          </el-button></el-col>
      
    </el-form-item>
  
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="submitForm('refmtk')" >确 定</el-button>
  </div>
</el-dialog>  

</template>

<script>
import {checkPhone,checkEmit} from '@/uitils/validator.js'
     

const URLs = process.env.VUE_APP_URL
//  import axios from 'axios'
 import {sendsms,register} from '../../../api/register'
 export default {
  
    data() {
      return {
        imageUrl:'',
        codeURL:URLs+"/captcha?type=sendsms",
        delay:0,
        uploadUrl:URLs+'/uploads',
       
        dialogFormVisible: false,
        form: {
          names: '',
          iconCode:'',
          code:'',
          phones:'',
          passwords:'',
          emits:'',
          avatar:'',
         
        },
        formLabelWidth: '67px',
        rules:{
          avatar:[
            {required: true, message: '头像不能为空',trigger:'blur'},
            
          ],
          names:[
            {required: true, message: '用户名不能为空',trigger:'blur'},
            { min: 2, max: 12, message: '长度在 2 到 12 个字符', trigger: 'change' }
          ],
           passwords: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 8, max: 16, message: '长度在8-16个字符', trigger: 'change' }
          ],
          phones:[
            { required: true,message:"手机号不能为空", trigger: 'blur' },
             { validator: checkPhone, trigger: "blur" },
            
          ],
          emits:[
            { required: true,message:"邮箱不能为空", trigger: 'blur' },
             { validator: checkEmit, trigger: "blur" },
            
          ],
        },
        
      };
    },
       methods: {
  submitForm(formName) {
    // this.dialogFormVisible = false;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            register({
                username:this.form.names,
                password:this.form.passwords,
                phone:this.form.phones,
                email:this.form.emits,
                
                avatar:this.form.avatar,
                rcode:this.form.code,


                
            }).then(res=>{
              window.console.log(res);
              if (res.data.code == 200) {
                this.$message.success('恭喜你,注册成功啦');
                this.dialogFormVisible = false;
                this.$refs[formName].resetFields();
                this. imageUrl='';
              }else if(res.data.code ==201){
                this.$message.error(res.data.message)
              } 
            })
         this.$message.success('验证成功');

          } else {
             this.$message.error('验证失败');
            return false;
          }
        });
      },
          handleAvatarSuccess(res, file) {
                   
                    // URL.createObjectURL 生成的是本地的临时路径，刷新就没用了
                    this.imageUrl = URL.createObjectURL(file.raw);
                    this.form.avatar = res.data.file_path;
                    this.$refs.refmtk.validateField('avatar');
                },
                // 上传之前
                // file 是文件 对象
                beforeAvatarUpload(file) {
                   
                    const isJPG = file.type === 'image/jpeg' || 'image/png' ||"image/gif";
                    const isLt2M = file.size / 1024 / 1024 < 2;
                    if (!isJPG) {
                        this.$message.error('上传头像图片只能是 JPG 格式!');
                    }
                    if (!isLt2M) {
                        this.$message.error('上传头像图片大小不能超过 2MB!');
                    }
                    return isJPG && isLt2M;
                },

        changeCode(){
          this.codeURL = URLs+'/captcha?type=sendsms&a='+Date.now();
        },
        
        getSms(){
           if (this.delay == 0) {
                    this.delay = 60;
                    const interId = setInterval(() => {
                      this.delay--;
                      if (this.delay == 0) {
                          clearInterval(interId);
                      }
                    },100);
           }
                    // axios({
                    //   url:URLs+'/sendsms',
                    //   method:'post',
                    //   data: { 
                    //     code:this.form.iconCode,
                    //     phone:this.form.phones, 
                    //   },
                    //   // 跨域是否带cokin
                    //   withCredentials:true,
                      
                    // })
                    sendsms({
                       code:this.form.iconCode,
                       phone:this.form.phones,
                    }).then(res=>{
                      window.console.log(res);
                      //成功回调
                      if (res.data.code == 200) {
                         this.$message.success('验证码获取成功:'+res.data.data.captcha);
                        
                      }else{
                            this.$message.error(res.data.message);
                      }
                    });
        }
    }
  };
</script>

<style lang='less'>
 .motaikuangbox{
     .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
  .el-dialog__header{
      background:linear-gradient(to right ,#0dbfef,#1782f8);
      .el-dialog__title{
      color: #FFF;
  }
  }
  .avatar-uploader{
      display: flex;
      align-items: center;
      justify-content: center;
      .el-icon-plus{
          display: flex;
      align-items: center;
      justify-content: center;
      }
  }
  .el-form-item__label{
      text-align: center
  }
  .avatar-uploader .el-upload {
            border: 1px dashed #d9d9d9;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;
        }

        .avatar-uploader .el-upload:hover {
            border-color: #409EFF;
        }

        .avatar-uploader-icon {
            font-size: 28px;
            color: #8c939d;
            width: 178px;
            height: 178px;
            line-height: 178px;
            text-align: center;
        }

        .avatar {
            width: 178px;
            height: 178px;
            display: block;
        }
 }
</style>