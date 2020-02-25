<template>
    <div>
        <panel class="panel">
            <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/49601/16/12206/115887/5d91b4d5E34709952/aba2bcb4855e6e52.png!q70.jpg.dpg" alt="">
            <img src="//m.360buyimg.com/mobilecms/s376x240_jfs/t1/32449/33/15631/174497/5cc2d86bE0289110c/9c53e25651659d43.png!q70.jpg.dpg" alt="">
            <section class="content">
                <div class="goods" v-for="(item,index) in carts" :key="index">
                {{item.title}}
                    <div class="goodsright">
                        <i class="cubeic-remove" @click="removeCart(index)"></i>
                        <span>{{item.cartCount}}</span>
                        <i class="cubeic-add" @click="addCart(index)"></i>
                    </div>
                </div>
            </section>
            <cube-button style="margin:10px 0;">下单</cube-button>
            <cube-button @click="clearcart">清空购物车</cube-button>
        </panel>
    </div>
</template>
<script>
//从vuex里面来获取数据
import {mapState} from 'vuex'
import panel from "../core/Panel.vue"
export default {
    components:{
        panel
    },
    data(){
        return{
        }
    },
    //使用computer属性进行数据的监听
    computed: {
        ...mapState({
            carts:state=>state.carts
        })
    },
    methods:{
        removeCart(index){
            this.$store.commit('cartremove',index)
        },
        addCart(index){
            this.$store.commit('cartadd',index)
        },
        clearcart(){
            this.$store.commit('clearcart')
        }
    }
}
</script>
<style lang="scss" scoped>
    @import "../css/element.scss";
    .panel{
        @include panel;
        height: 500px;
        >h4{
            display: none;
        }
        .content{
            padding-bottom: 40px;
            position: relative;
            display: flex;
        }
        /* height: 500px; */
        /* display: flex; */
        .goods{
        padding: 10px;
        text-align: left;
        .goodsright{
                i{
                    font-size: 28x;
                }
            }
       }
    }
</style>