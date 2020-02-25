<template>
    <div>
        <transition :name="transitionName">
            <router-view class="Router"></router-view>
        </transition>
        <!-- 导航栏 -->
        <cube-tab-bar
            v-model="selectedLabelDefault"
            :data="tabs"
            @click="clickHandler"
            @change="changeHandler"
            class="botnav">
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
    data(){  
        return{
            /* countsum:10, */
            transitionName:'slide-right',
            selectedLabelDefault:'',
            tabs:[
            {
                label:'首页',
                icon:'cubeic-home'
            },
            {
                label:'分类',
                icon:'cubeic-tag'
            },
            {
                label:'搜索',
                icon:'cubeic-search'
            },
            {
                label:'购物车',
                icon:'cubeic-mall'
            },
            {
                label:'我的',
                icon:'cubeic-person'
            },           
            ]
        }
    },
    computed: {
        ...mapGetters({
            countsum:'countsum'
        })
    },
    methods:{
        clickHandler(){

        },
        changeHandler(label){
            //点击切换至相应的路由
            switch(label){
                case '首页':
                this.$router.push('/botnav/index');
                break;
                case '分类':
                this.$router.push({path:'/botnav/list'});
                break;
                case '搜索':
                this.$router.push({path:'/botnav/search'});
                break;
                case '购物车':
                this.$router.push({path:'/botnav/cart'});
                break;
                case '我的':
                this.$router.push({path:'/botnav/mine'});
                break;
           }
        },
        created(){
           switch(this.$route.path){
                case '/botnav/index':
                this.selectedLabelDefault='首页';
                break;
                case '/botnav/list':
                this.selectedLabelDefault='分类';
                break;
                case '/botnav/search':
                this.selectedLabelDefault='搜索';
                break;
                case '/botnav/cart':
                this.selectedLabelDefault='购物车';
                break;
                case '/botnav/mine':
                this.selectedLabelDefault='我的';
                break;
           }
        }
    }
}
</script>
<style lang="scss" scoped>
    .botnav{
        position: fixed;
            bottom: 0;
            left: 0;
            z-index: 100;
            width: 100%;
            height: 80px;
            background:#fff;
            i{
                font-size: 40px;
        }
    }
    .Router{
        position: absolute;
        width: 100%;
        transition: all 0.8s ease;
    }
    
    .slide-right-leave-active{
        opacity: 0;
        //带有浏览器内核前缀的属性
        -webkit-transform: translate(100%,0);
        transform: translate(100%,0);
    }
    
    .slide-right-enter{
        opacity: 0;
        -webkit-transform: translate(-100%,0);
        transform: translate(-100%,0);
    }
    .countsum{
        position:fixed;
        bottom :33px;
        right :23%;
        z-index :101;
        width: 18px;
        height: 18px;
        line-height: 18px;
        border-radius: 50%;
        font-size: 14px;
        background: red;
        color: #fff;
    }
</style>