<template>
  <div>
      <img class="headimg" src="//img11.360buyimg.com/da/jfs/t16363/164/2298198848/33213/870500f1/5aa68632Nd7790d0c.png" alt="">
      <cube-form
         :model="model"
         :schema="schema"
         @submit="submitHandler" class="login">
     </cube-form>
  </div>
</template>

<script>

export default {
    data(){
        return{
            //数据
            model:{
                username:'',
                password:''
            },
            schema:{
                fields:[
                    //登录名
                    {
                        type:'input',
                        modelKey:'username',
                        label:'登录名',
                        props:{
                            placeholder: '请输入登录名'
                        },
                        //输入的规则
                        rules:{
                            required:true,
                            type:'string',
                            min:3,
                            max:15
                        },
                        trigger: 'blur',
                        messages:{
                            required:'用户名不能为空',
                            min:'用户名不能小于3个字符',
                            max:'用户名不能大于15个字符'
                        }
                    },
                    //密码
                    {
                        type:'input',
                        modelKey:'password',
                        label:'密码',
                        props:{
                            placeholder: '请输入密码',
                            type:'password',
                            eye:{
                                open:false,
                            }
                        },
                        //输入的规则
                        rules:{
                            required:true,
                        },
                        trigger: 'blur',
                    },
                    //提交
                    {
                        type:'submit',
                        label:'登录'
                    }
                ]
            }
        }
    },
    methods:{
        //异步调用
        async submitHandler(e){
            e.preventDefault();
            try{
                //返回会来的结果
                const result = await this.$http.get('/api/login',{params:this.model})
                
                if(result.data.code == '0'){
                    // commit方法会调用vuex下的mutations对象
                    this.$store.commit('settoken',result.data.token)
                    window.localStorage.setItem('token',result.data.token)
                    //登录成功后跳转到首页
                    /* this.$router.replace({path:'/index'}) */
                    //判断路由是否带参，带参就去到重定向参数地址，否则就去首页
                    if(this.$route.query.redirect){
                         this.$router.replace({path:this.$route.query.redirect})
                    }else{
                         this.$router.replace({path:'/botnav/index'})
                    }
                }else{
                    alert(result.data.message)
                }
            }
            catch(err){
                console.log(err)
            }
        }
    }
}
</script>
<style lang="scss" scoped>
    .headimg{
        height: 240px;
        width: 100%;
    }
    .login{
        padding: 20px 20px;
        font-size: 20px;
    }
</style>