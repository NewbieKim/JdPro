<template>
  <div>
      <img class="headimg" src="//img11.360buyimg.com/da/jfs/t16363/164/2298198848/33213/870500f1/5aa68632Nd7790d0c.png" alt="">
      <cube-form
         :model="model"
         :schema="schema"
         @submit="submitHandler" class="register">
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
                        label:'注册'
                    }
                ]
            }
        }
    },
    methods:{
        submitHandler(e){
            e.preventDefault();
            this.$http.get('/api/register',{params:this.model}).then(res=>{
                console.log(res.data.success)
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}
</script>
<style lang="scss" scoped>
    .headimg{
        height: 240px;
        width: 100%;
    }
    .register{
        padding: 20px 20px;
        font-size: 20px;
    }
</style>