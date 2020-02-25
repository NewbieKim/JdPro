<template>
    <div>
        <img class="headimg" src="//img11.360buyimg.com/da/jfs/t16363/164/2298198848/33213/870500f1/5aa68632Nd7790d0c.png" alt="">
        <ul>
            <li v-for="item in minearry" class="mineitem" @click="itemclick(item)" :key="item.label">
                <span class="minetitle">{{item.label}}</span>
                <i class="cubeic-arrow"></i>
            </li>
        </ul>
    </div>
    
</template>
<script>
export default {
    data(){
        return{
            minearry:[
                {label:'商品收藏'},
                {label:'我的足迹'},
                {label:'店铺收藏'},
                {label:'我的订单'},
                {label:'退出',type:'exit'},
            ]
        }
    },
    methods:{
        itemclick(item){
            if(item.type=='exit'){
                //退出清空token 返回到登录页
                this.$store.commit('settoken','')
                localStorage.removeItem('token')
                this.$router.push({path:'/login'})
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
    .mineitem{
        font-size:20px;
        text-align:left;
        height:50px;
        line-height:50px;
        padding-left:5%;
        border-bottom:2px solid rgb(226, 224, 224);
        .minetitle{
            display: inline-block;
            width: 90%;
            padding: 10px;
        }

    }
</style>