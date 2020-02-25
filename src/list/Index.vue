<template>
    <div class="panelsbox">
        <heador></heador>
        <!-- 左边的标签面板 -->
        <cube-scroll class="leftpanel">
            <ul>
                <li v-for="(list,index) in lables" @click="select(index)" :class="list.active?'active':''" :key='index'>
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <!-- 右边的分类面板 -->
        <cube-scroll class="rightpanel">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" alt="">
                    <p>{{tag.label}} <!-- <i class="cubeic-add" @click="addtoCart($event,tag)"></i> --></p>
                </li>
            </ul>
        </cube-scroll>
        <div class="ball-wrap">
            <transition
                @before-enter= "beforeEnter"
                @enter = "enter"
                @afterEnter = "afterEnter"
            >
                <div class="ball" v-if="ball.show">
                    <div class="inner">
                        <i class="cubeic-add"></i>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import heador from '../public/header.vue'
export default {
    components:{
        heador
    },
    data(){
        return{
            ball:{
                show:false,
                el:''
            },
            tags:[],
            lables:[
                {
                   label:'热门推荐',
                   active:true
               },
               {
                   label:'手机数码',
                   active:false
               },
               {
                   label:'家用电器',
                   active:false
               },
               {
                   label:'家用空调',
                   active:false
               },
               {
                   label:'电脑产品',
                   active:false
               },
               {
                   label:'计生情趣',
                   active:false
               },
               {
                   label:'美妆护肤',
                   active:false
               },
               {
                   label:'口红',
                   active:false
               },
               {
                   label:'手袋',
                   active:false
               },
               {
                   label:'金银财宝',
                   active:false
               },
               {
                   label:'手机数码',
                   active:false
               },
               {
                   label:'手机数码',
                   active:false
               },
            ]
        }
    },
    methods:{
        //点击获取左侧分类
        select(index){
            this.lables.forEach((val,ind) => {
                if(index == ind){
                    val.active = true
                }else{
                    val.active = false
                }
            })
            this.getclassify(index);
        },
        //获取分类
        async getclassify(index){
            const result = await this.$http.get('/api/classify',{params:{type:index}})
            //这里暂时还没有配置全局拦截
            this.tags = result.data.data;
        },
        //将商品添加到购物车
        addtoCart(e,tag){
            //commit函数相当于调用了store中的mutation函数
            this.$store.commit('tocart',tag)
            this.ball.show=true
            this.ball.el = e.target
        },
        //添加到购物车的小球动画效果实现
        beforeEnter(el){
            //让小球移动到点击的位置
            //想要获取点击的位置
            const dom = this.ball.el
            /* console.log(dom) */
            //getBoundingClientRect()来获取dom元素的位置 是一个包含上下左右位置的对象
            const rect = dom.getBoundingClientRect()
            /* console.log(rect) */
            const x=rect.left-window.innerWidth*0.7 //要移动的横方向
            const y=-(window.innerHeight-rect.top)  //要移动的纵方向
            /* console.log(x,y) */
            el.style.display='block'
            //小球移动的轨迹 3d效果的实现
            el.style.transform=`translate3d(0,${y}px,0)`
            const inner=el.querySelector('.inner')
            inner.style.transform=`translate3d(${x}px,0,0)`
        },
        enter(el,done){
            //触发重绘
            document.body.offsetHeight
            //小球移动回到原点，就是购物车的位置
             el.style.transform=`translate3d(0,0,0)`
             const inner=el.querySelector('.inner')
            inner.style.transform=`translate3d(0,0,0)`
            //过渡完成后执行的事件
            el.addEventListener('transitionend',done)
            //done的理解：其实就是后面接着要触发的事件 目的是消除事件之间的延迟
        },
        afterEnter(el){
            //结束隐藏小球
            this.ball.show=false
            el.style.display='none'
        }
    },
    created(){
        //获取默认的分类数据
        this.getclassify(0)
    },
    mounted(){
        //设置滚动盒子的高度
        const leftpanel=document.querySelector('.leftpanel')
        const rightpanel=document.querySelector('.rightpanel')
        const bodyheight=document.documentElement.clientHeight
        leftpanel.style.height=bodyheight-57+'px'
        rightpanel.style.height=bodyheight-57+'px'
    }
}
</script>
<style lang="scss" scoped>
    .panelsbox{
        display:flex;
        .leftpanel{
            width: 30%;
            li{
                height: 50px;
                line-height:50px;
                border-bottom:1px solid #fff;
                color:#333;
                background:#f8f8f8;
                font-size :24px;
                padding: 10px 10px;
            }
            .active{
                background: #fff;
                color: #e93b3d
            }
        }
        .rightpanel{
            width: 70%;
            background-color: #fff;
            ul{
                display: flex;
                flex-wrap: wrap;
                li{
                    width: 33.3%;
                    justify-content: center;
                    align-items: center;
                    
                    img{
                        width: 100px;
                        height: 80px;
                    }
                    p{
                        padding: 10px 10px;
                        font-size: 18px;
                    }
                }
            }
        }
        .ball-wrap{
            .ball{
                position: fixed;
                left: 70%;
                bottom: 10px;
                z-index: 103;
                color: #e93b3d;
                transition: all 1s cubic-bezier(0.49,-0.29,0.75,0.41);
                .inner{
                    width: 16px;
                    height: 16px;
                    transition: all 1s linear;
                }
            }
        }
    }

</style>