<template>
  <el-dialog title="注册" center width='603px' class="motaikuangbox" :visible.sync="dialogFormVisible">

      
   <el-form status-icon  ref="refmtk" :rules='rules' :model="form">

 
  
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
       
            <el-col :offset='1' :span='6'><img style="width:100%; height:100%;" src="../../../assets/yanzhengma.png" alt=""></el-col>
        </el-row>
      
      
      </el-form-item>
      <el-form-item label="验证码" :label-width="formLabelWidth">
        <el-col :span='16'><el-input v-model="form.name" autocomplete="off"></el-input></el-col>
        
        <el-col :offset='1' :span='7'> <el-button>获取用户验证码</el-button></el-col>
      
    </el-form-item>
  
  </el-form>
  <div slot="footer" class="dialog-footer">
    <el-button @click="dialogFormVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
  </div>
</el-dialog>

</template>

<script>
   const checkPhone = (rule,value,callback)=>{
            // 接收参数 value
            // 定义正则表达式
            const reg = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
            // 使用正则校验格式是否满足
            if(reg.test(value)==true){
                // 对
                callback()
            }else{
                // 错
                callback(new Error('手机号格式不对哦，请检查'))

            }
        };
    
       const checkEmit = (rule,value,callback)=>{
            // 接收参数 value
            // 定义正则表达式
            const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            // 使用正则校验格式是否满足
            if(reg.test(value)==true){
                // 对
                callback()
            }else{
                // 错
                callback(new Error('邮箱格式不对哦，请检查'))

            }
        };


 export default {
    data() {
      return {
         imageUrl: '',
       
        dialogFormVisible: false,
        form: {
          names: '',
          iconCode:'',
          phones:'',
          passwords:'',
          emits:'',
         
        },
        formLabelWidth: '67px',
        rules:{
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