<template>
  <el-dialog title="注册" center width='603px' class="motaikuangbox" :visible.sync="dialogFormVisible">

      
   <el-form :model="form">

 
 <el-form-item label="头像" :label-width="formLabelWidth">
      <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
 </el-upload>
 </el-form-item>
    <el-form-item label="昵称" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="邮箱" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="手机" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="密码" :label-width="formLabelWidth">
      <el-input v-model="form.name" autocomplete="off"></el-input>
    </el-form-item>
    <el-form-item label="图形码" :label-width="formLabelWidth">
        <el-row>
            <el-col :span='17'><el-input v-model="form.name" autocomplete="off"></el-input></el-col>
             <el-col :span='.2'><div style="color:#fff;">1</div></el-col>
            <el-col :span='6'><img style="width:100%; height:100%;" src="../../../assets/yanzhengma.png" alt=""></el-col>
        </el-row>
      
      
    </el-form-item>
    <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-col :span='17'><el-input v-model="form.name" autocomplete="off"></el-input></el-col>
         <el-col :span='.2'><div style="color:#fff;">1</div></el-col>
        <el-col :span='4'> <el-button>获取用户验证码</el-button></el-col>
      
    </el-form-item>
  
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

</template>

<script>
 export default {
    data() {
      return {
         imageUrl: '',
       
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
         
        },
        formLabelWidth: '67px'
      };
    },
       methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
 }
</style>