/*
wocao！ 
slide 轮播效果使用第三方库 vue-awesome-swiper
 */

<template lanh="html">
    <section :class="[cname]">
        <!-- 下面这里放轮播的元素 -->
        <swiper :options="options" :not-next-tick="options.notNextTick">
            <!-- 通过循环的方式将一个萝卜对象在此轮播展示 -->
            <swiper-slide v-for='item in items' :key="item.href">
                <router-link :to="{name: item.href}">
                    <!-- 这里必须加冒号 v-bind -->
                    <img :src="item.src" alt="">
                </router-link>
            </swiper-slide>
            <!-- 指示器引入 -->
            <div class="swiper-pagination" v-if="options.pagination" slot="pagination">
            </div>
        </swiper>
    </section>
</template>

<script >
/* import Swiper from 'swiper'; */
/* import '~swiper/dist/css/swiper.css' */
/* import { swiper, swiperSlide } from 'vue-awesome-swiper' */

export default{
    components:{
        //这里定义了他的组件 
        swiper,
        swiperSlide
    },
    props:{
        cname:{
            type:String,
            default:''
        },
        options:{
            type:Object,
            default(){
                return{
                    //轮播效果的一些样式
                    autoplay:true,  //自动播放
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination'  //指示器
                    },
                    notNextTick:false,  //圆点效果
                }

            }
        },
        items:{
        type:Array,
        default(){
            return []
            /* return [{href:'', src:''}] */
        }
    }
    }
}
</script>

<style lang="css">
   /* 这里可以通过引用库里的默认样式即可 注：~ */
   /* @import "~vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css"; */
</style> 