# day05 - 黑马面面

## 反馈

1. 疫情啥时候过去啊~我要粗去玩~不是.我要回创维学习..

绝大多数公司 2月10号复工







## 回顾 - 注册对话框抽取

> 对话框抽离的目的是代码分开编写更利于维护，这里需要注意什么呢？

注意:

1. 页面使用的组件，一般是放在页面相邻`components`文件夹下
2. 导入并注册，注册的关键字是`components`
3. 组件名，ref设置的值，有意义
   1. register:注册
   2. dialog:对话框
4. `dialogFormVisible`定义在对话框组件的内部



## 分支使用注意点

> 分支使用时，正常应该只有一根线，如果出现了多根线是什么原因呢？

分支:

1. master:1->2->3->4->5.1->6.1
2. register:1->2->3->4->5->6

原因：

1. 创建了多个分支
2. 每个分支上都写了代码，都进行了提交



## 回顾 - Element - ui表单验证 基本使用

> 表单验证需要关联的数据较多，有哪些需要关联的东西呢?如果希望在打字的时候触发验证，要怎么设置呢？

1. `<el-form`:
   1. 验证规则:rules
   2. 起名字:ref
2. `<el-form-item`
   1. 设置校验的属性:prop
3. 校验的规则：
   1. 定义的位置: data
4. 校验的方法：
   1. `this.$refs['表单的ref'].validate`

![image-20200209092304750](day05 - 黑马面面.assets/image-20200209092304750.png)

边打字边校验 `trigger`设置为change

```javascript
password: [
    { required: true, message: '密码不能为空', trigger: 'blur' },
    // 边打字边校验 trigger 设置为change
    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'change' }
],
```



## Element-ui 列偏移

> 如何让栅格之间有一些间隙呢？

[传送门](https://element.eleme.io/#/zh-CN/component/layout#fen-lan-pian-yi)

```html
<el-row>
  <el-col class="item" :span="6"></el-col>
  <el-col class="item" :offset="6" :span="6"></el-col>
  <!-- 用掉了 6+6+6 = 18 -->
  <!-- 24-18=6 -->
  <el-col class="item2" :span="7"></el-col>
</el-row>
```

注意:

1. 列偏移+栅格的比例只要超过了24就会换行
2. 栅格默认只是一个容器，没有任何的外观样式，要看得到必须增加对应样式

## 注册模块 - 列偏移整合

> 通过列偏移来实现注册区域的小间隙

步骤：

1. 找到 注册对话框的 验证码 和 获取验证码按钮区域
2. 使用`:offset`设置1即可
3. 保证整体的和为24

![image-20200209093517373](day05 - 黑马面面.assets/image-20200209093517373.png)



注意:

1. 属性设置 不加:会解析为 `字符串`，加了会解析为 `js`
2. ![image-20200209094425553](day05 - 黑马面面.assets/image-20200209094425553.png)

## 注册模块 - 表单验证整合01

> 我们先把基础部分的表单验证给整合到项目中



步骤:

1. 整合 昵称 和 密码的表单验证
   1. el-form
      1. :rules
      2. ref
   2. el-form-item
      1. prop
   3. data:
      1. rules

![image-20200209101547797](day05 - 黑马面面.assets/image-20200209101547797.png)

![image-20200209101636816](day05 - 黑马面面.assets/image-20200209101636816.png)

## Element - ui 自定义校验规则

> 如果只是简单的非空验证，长度验证，使用默认的设置即可，如果要验证格式，就需要用到自定义校验规则了

[传送门](https://element.eleme.cn/#/zh-CN/component/form#zi-ding-yi-xiao-yan-gui-ze)

1. 自己写逻辑检验数据
2. 数据的格式，通过的是`正则表达式`1

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <!-- 引入样式 -->
    <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>

<body>
    <!-- 挂载的元素 -->
    <div id="app">
        <el-form status-icon  :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="用户名" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="手机号" prop="phone">
                <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" prop="email">
                <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
    <!-- 开发环境版本，包含了有帮助的命令行警告 -->
    <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
    <!-- 引入组件库 -->
    <script src="https://unpkg.com/element-ui/lib/index.js"></script>
    <script>
        const checkName = (rule, value, callback) => {
            // value 校验的数据
            // console.log(value)
            if (value.length < 2) {
                callback(new Error("你的名字长度不够哦，检查一下"))
            } else {
                // 正确的回调
                callback()
            }
            // callback 回调函数 成功失败都需要调用
        }

        // 验证手机号的 函数
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
        }
       
        // 验证 邮箱的 函数
        // rule 校验规则，一般不用
        // value 校验的数据  表单元素中的数据
        // callback 回调函数 ，通过执行这个函数 告诉 element-ui 成功或者失败
        const checkEmail = (rule,value,callback)=>{
            // 获取数据 value
            // 定义正则表达式 定义了一个正则对象
            const reg = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/
            // 校验方法 test 方法 是正则对象
            // 对 返回的是 true
            // 错 返回的是 false
            // console.log(reg.test(value))
            if(reg.test(value)==true){
                callback()
            }else{
                callback(new Error("邮箱的格式不对哦"))
            }
        }
        const app = new Vue({
            el: "#app",
            data: {
                ruleForm: {
                    name: '',
                    // 手机号
                    phone: "",
                    // 邮箱
                    email:""
                },
                rules: {
                    name: [
                        { required: true, trigger: 'blur' },
                        // trigger 触发是执行 validator设置的函数
                        { validator: checkName, trigger: "blur" }
                    ],
                    phone: [
                        { required: true,message:"手机号不能为空", trigger: 'blur' },
                        // trigger 触发是执行 validator设置的函数
                        { validator: checkPhone, trigger: "blur" }
                    ],
                    email: [
                        { required: true,message:"邮箱不能为空", trigger: 'blur' },
                        { validator: checkEmail, trigger: "blur" }
                    ]
                }
            }
            , methods: {
                submitForm(formName) {
                    this.$refs[formName].validate((valid) => {
                        if (valid) {
                            alert('对啦!');
                            // 验证正确
                        } else {
                            alert("错啦")
                            // 验证错误
                            return false;
                        }
                    });
                },
                // 重置表单
                resetForm(formName) {
                    this.$refs[formName].resetFields();
                }
            }
        })
    </script>

</body>

</html>
```



## 注册模块 - 自定义校验规则整合

> 手机号，邮箱这两个地方的校验规则需要结合正则，我们使用自定义规则来实现,这里要注意哦，无论成功与否，都需要调用`callback`哦

步骤:

1. 定义校验函数

   1. checkPhone:手机
   2. checkEmail:邮箱

2. 定义校验规则

3. 定义非空的规则

4. 绑定校验规则

   

   ![image-20200209112607392](day05 - 黑马面面.assets/image-20200209112607392.png)

   ![image-20200209112636635](day05 - 黑马面面.assets/image-20200209112636635.png)

   ![image-20200209112719507](day05 - 黑马面面.assets/image-20200209112719507.png)

   ![image-20200209112757559](day05 - 黑马面面.assets/image-20200209112757559.png)

   

## 后台接口部署

> 接下来用户的注册，注册验证码的获取等等，都需要和服务器交互，我们一起把后台接口部署到本地，方便调试

[后台接口git仓库地址](https://gitee.com/phper_leo/heimamm)

[后台接口文档地址](https://www.showdoc.cc/538567623707717?page_id=3183007410635536)



步骤：

1. 确认电脑上安装了`php`环境以及`mysql`环境，并且可以正常打开

![image-20200209113652044](day05 - 黑马面面.assets/image-20200209113652044.png)

2. phpstudy 选择版本 为下图
   1. 能选就选
   2. 不能选，问题不大，但是如果出了问题，应该就是版本的问题了

![image-20200209114420659](day05 - 黑马面面.assets/image-20200209114420659.png)

2. 把后台接口克隆到本地  https://gitee.com/phper_leo/heimamm.git

   1. 其他选项菜单--->网站根目录
   2. `www`文件夹
   3. 打开终端输入如下命令

   ```bash
   git clone https://gitee.com/phper_leo/heimamm.git
   ```

3. 初始化数据

   1. 打开浏览器输入地址:http://127.0.0.1/heimamm/public

   2. 一路下一步

   3. 数据库密码，如果没改是`root`，如果改了输入你改了的

       ![image-20200209114043443](day05 - 黑马面面.assets/image-20200209114043443.png)

   4. 看到 下图说明搞定了  

   ![image-20200209114127250](day05 - 黑马面面.assets/image-20200209114127250.png)

   5. 输入 如下地址，测试看到验证码说明配置成功  http://127.0.0.1/heimamm/public/captcha?type=sendsms

## Vue-cli 环境变量

> 为了方便我们设置数据，脚手架提供了`环境变量功能`，可以用来保存任何数据，开发中保存基地址居多，鉴于此我们可以把`环境变量`理解为一个变量就可以了

[传送门](https://cli.vuejs.org/zh/guide/mode-and-env.html)

2个环境



**使用步骤:**



**注意:**



## 注册模块 - 环境变量整合

> 我们把本地接口的基地址通过环境变量整合到项目中

步骤:



## 注册模块 - 图片验证码

> 和登录类似的验证码，获取图片，点击刷新,但是这里的图片验证码管理的是短信验证码哦





## 注册模块 - 短信验证码获取

> 手机获取短信，这里需要和服务器进行交互了，本地接口会直接返回验证码，在线接口可以正常获取短信

注意:

`http://123.57.150.216:8567`

`http://183.237.67.218:3002  `（能够收短信的，少用，管勾 10块）



## 注册模块 - 短信获取倒计时

> 为了防止正常用户的误操作，短信的获取加上时间间隔，两次获取的需要有时间间隔





## Element - ui 文件上传

> 文件是一个比较常见的功能,Element-ui也帮我们封装好了哦，底层用的其实还是`formData`，上传成功的回调函数中可以获取到服务器的响应值哦





## 注册模块 - 文件上传组件整合

> 上传组件整合到注册模块的页面中，上传的地址替换为本地的接口地址



## 注册模块 - 提交数据验证

> 在我们输入完数据之后，点击底部的提交需要进行表单的校验，把验证的方法整合进来



## 注册模块 - 数据提交

> 当所有的数据都准备好了之后，并且验证通过之后，我们就可以调用接口把数据提交到服务器啦



## 注册模块 - api抽取(抽取API层)

> 为了方便后期代码的维护，接口的调用一般都会抽取为方法，如何做呢?



##注册模块 - api方法替换

> 之前axios是直接使用的，接下来我们使用抽取的api方法来替换那些写在页面内部的接口调用逻辑





## 总结





















