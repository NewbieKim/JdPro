<template>
    <div>
        <transition :name="transitionName">
            <router-view :class="$style.router"></router-view>  
        </transition>
        <panel :class="$style.panel">
        <ul :class="$style.content">
            <li @click="select">
                <router-link to="/index">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/931/18/14488/935/5bda58fdE542c2cc7/f29a349a4ed750ca.png" alt="">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/navbar/list">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/1890/15/14183/1269/5bda5c97E34734b01/241a0f5b17fd3e51.png" alt="">
                    <p>理财</p>
                </router-link>
            </li>
            <li>
                <router-link to="/navbar/search">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/5291/40/14133/594/5bda5ca3E92d0e800/09ac81fa5a5c96ef.png" alt="">
                    <p>白条</p>
                </router-link>
            </li>
            <li>
                <router-link to="/navbar/cart">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/3358/38/14064/816/5bda5cabEcb7eca8b/9bb064f1cda7ceba.png" alt="">
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link to="/navbar/mine">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/7491/15/4277/926/5bda5cb9E421a0e60/89ee14ce9daf4aab.png" alt="">
                    <p>我的</p>
                </router-link>
            </li>
        </ul>
    </panel>
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
            transitionName:'slide-right'
        }
    },
    methods:{
        select(){
            
        }
    }
}
</script>
<style lang="scss" module>
    @import "../css/element.scss";
    .panel{
        @include panel;
        position: fixed;
        left: 0;
        right: 0;
        height: 100px;
        bottom: 0;
        margin: 0;
        background-color: rgb(255, 255, 255);
        z-index: 100;
        h4{
            display: none;
        }
        .content{
            @include flex(row);
            justify-content:space-around;
            padding: 0%;
            margin: 0 0;
            li{
                text-align: center;
                list-style-type: none;
                a{
                    text-decoration-line: none; 
                }
                img{
                    width: 100%;
                    /* height: 100%; */
                    display: inline-block;
                    margin: 0;
                }
                p{
                    font-size: 22px;
                    color: #656565;
                    margin: 0;
                    font-weight: 1000;
                }
            }
        }
    }
    /* .router{
        position: absolute;
        width: 100%;;
        transition: all 0.2s ease;
    } */
    /* .slide-left-enter,
    .slide-right-leave-active{
        opacity: 0;
        //优雅降级 提高体验
        -webkit-transform: translate(100%,0);
        transform: translate(100%,0);
    }
    .slide-left-leave-active,
    .slide-right-enter{
        opacity: 0;
        -webkit-transform: translate(-100%,0);
        transform: translate(-100%,0);
    } */
</style>