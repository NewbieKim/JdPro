<template>
    <div>
        <panel class="panel" title="精选好物">
            <section class="content">
                <ul>
                    <li class="list" v-for="(item,index) in items" :key="index">
                        <div class="cover">
                            <a :href="item.url">
                                 <img class="baner" :src="item.image">
                            </a>
                        </div>
                        <div class="info">
                            <div class="re_name">
                                <p>{{item.description}}</p>
                            </div>
                            <div class="flex-wrap">
                                <div class="price-info">
                                    ￥<em>{{item.price}}</em>
                                    <i class="cubeic-add" @click="addtoCart($event,item)"></i>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                
            </section>
        </panel>
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
import panel from "../core/Panel.vue"
export default {
    components:{
        panel
    },
    data(){
        return{
            ball:{
                show:false,
                el:''
            },
            items:[
                {
                    url:'',
                    price:'199',
                    label:'保暖内衣',
                    description:'Carey Kay保暖内衣男士冬季德绒保暖套装蚕丝贴片无痕磨毛V领舒适青年打底秋衣秋裤 紫色（女款） XXL',
                    image:'//img14.360buyimg.com/n7/jfs/t1/92143/14/3057/149900/5ddb605aE44acf248/36bef332327c1a09.jpg!q70.dpg.webp'
                },
                {
                    url:'',
                    price:'293',
                    label:'仿水外套女短款',
                    description:'仿水外套女短款2019冬季新款小个子加厚毛呢黄金呢子大衣 豆沙色 S',
                    image:'//img14.360buyimg.com/n7/jfs/t1/74874/29/10254/158418/5d7e2f4aE08fdcaf3/b13ace7a2fb5f7f7.jpg!q70.dpg.webp'
                },
                {
                    url:'',
                    price:'188',
                    label:'南极人睡衣',
                    description:'南极人睡衣女长袖春秋季仿真丝绸可外穿夏款韩版青年学生女士家居服套装NAS5X20062JD-2 豆沙玫瑰 L',
                    image:'//img14.360buyimg.com/n7/jfs/t1/21131/10/5522/297667/5c3daf49E99e9d640/b2ed090846abef97.jpg!q70.dpg.webp'
                },
                {
                    url:'',
                    price:'123',
                    label:'毛呢外套女短款',
                    description:'毛呢外套女短款秋冬新款韩版气质小个子呢子大衣 黄色 M 建议80-100斤',
                    image:'//img14.360buyimg.com/n7/jfs/t1/63719/40/9385/70819/5d70d46aE34e62c97/04bf3d49a25e039a.jpg!q70.dpg.webp'
                },
                {
                    url:'',
                    price:'99',
                    label:'男士中高领纯棉毛',
                    description:' 秋衣秋裤中老年人男士中高领纯棉毛衫爸爸棉打底保暖内衣套装秋 酒红中领 男薄纯色秋衣套装F31 89 2XL/180/105',
                    image:'//img14.360buyimg.com/n7/jfs/t1/106834/16/882/141063/5db66117E4ff1fc3a/3f369b1f667ece7a.jpg!q70.dpg.webp'
                },
                {
                    url:'',
                    price:'99',
                    label:'羊羔绒短外套女',
                    description:'羊羔绒短外套女2019冬新款韩版宽松加厚皮毛一体上衣羊剪绒棉服 蓝色 L',
                    image:'//img14.360buyimg.com/n7/jfs/t1/83135/24/13082/142077/5da61da9E9b58b87c/e31b01b0f29f86e4.jpg!q70.dpg.webp'
                },
            ]
        }
    },
    methods:{
        //将商品添加到购物车 经过vuex状态库
        addtoCart(e,item){
            //commit函数相当于调用了store中的mutation函数
            this.$store.commit('tocart',item)
            this.ball.show = true
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
            const x = rect.left - window.innerWidth*0.7
            const y =-(window.innerHeight - rect.top)
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
    }
}
</script>
<style lang="scss" scoped>
    @import "../css/element.scss";
    .panel{
        @include panel;
        img{
            padding: 10px 0;
        }
        >h4{
            margin: 0;
            border-bottom: 1px solid #ddd;
        }
        .content{
              padding-bottom: 40px;
              position: relative;
              display: flex;
              .list{
                    position: relative;
                    float: left;
                    width: 50%;
                    padding: 20px 20px 0;
                    background: #fff;
                    box-sizing: border-box;
                    border-radius: 10px;
                    .cover{
                        width: 100%;
                    }
                    img{
                        width: 100%;
                }
            }
            .re_name{
                margin: 12px 0 4px;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                font-size: 18px;
                color:
                #333;
                line-height: 18px;
                height: 36px;
            }
            .price-info{
                line-height: 20px;
                float: left;
                color: red;
                font-size: 24px;
                .cubeic-add{
                    float:right;
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

</style>