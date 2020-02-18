<template>
    <panel title="新手特权" :class="$style.panel">
        <section :class="$style.content">
            <!-- 左部分 -->
            <div :class="$style.item">
                <h4>下载APP<span :class="$style.red">送888红包</span></h4>
                <p :class="$style.gray">新手专享</p>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png" alt="">
            </div>
            <!-- 右部分 -->
            <div :class="$style.item">
                <ul>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png" alt="">
                        <h4 :class="$style.red">领取128元红包</h4>
                        <p :class="$style.gray">立即开通</p>
                    </li>
                    <li>
                        <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png" alt="">
                        <h4>打白条<span :class="$style.red">享免息</span></h4>
                        <p :class="$style.gray">立即开通享豪礼</p>
                    </li>
                </ul>
            </div>
        </section>
    </panel>
</template>

<script>
import panel from "../core/Panel.vue"
export default {
    components:{
        panel
    }
}
</script>

<style lang="scss" module>
@import "../css/element.scss";
.panel{
    @include panel;
    >h4{
        border-bottom: 1px solid #ddd;
    }
    .content{
        @include list(row);
        .item{
            width: 50%;
            box-sizing: border-box;
            /* item下的第一个子元素 */
            &:first-child{
                padding: 0px 20px;
                text-align: center;border-right: 1px solid #ddd;
                img{
                    width: 132px;
                    height: 132px;
                    margin: 20px auto 0;
                }
            }
            h4{
                margin: 8px;
                font-size: 26px;
                //line-height: 40px;
            }
            .red{
                color: #f00;
            }
            .gray{
                color: #999;
                font-size: 24px;
            }
            p{
                margin: 6px;
                font-size: 24px;
            }
            ul{
                width: 100%;
                margin: 0;
                padding: 0;
                li{
                    list-style: none;
                    height: 144px;
                    width:100%;
                    padding:1px 28px;
                    box-sizing: border-box;
                    &:first-child{
                        border-bottom: 1px solid #ddd;
                    }
                    h4{
                        margin: 0%;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                        text-align: left;
                    }
                    img{
                        width: 80px;
                        height: 80px;
                        float: right;
                    }
                }
            }
        }
    }
}
</style>