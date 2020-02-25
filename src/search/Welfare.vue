<template>
    <div>
        <panel class="panel" title="白条福利">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t1/52802/14/4027/212241/5d1b14f4Ed1748086/588363d90a40b28c.png" alt="">
            <section class="content">
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76" alt="">
                    <div>
                        <h4>开通白条</h4>
                        <p>预期年化收益率4.50%</p>
                    </div>
                    <em>立即开通 ></em>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76" alt="">
                    <div>
                        <h4>白条闪付</h4>
                        <p>历史年化回报率5.50%</p>
                    </div>
                    <em>立即开通 ></em>
                </div>
                <div class="item">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76" alt="">
                    <div>
                        <h4>一年理财</h4>
                        <p>历史年化回报率5.80%</p>
                    </div>
                    <em>立即开通 ></em>
                </div>
            </section>
        </panel>
    </div>
</template>
<script>
import panel from "../core/Panel.vue"
export default {
    components:{
        panel
    },
}
</script>
<style lang="scss" scoped>
    @import "../css/element.scss";
    .panel{
        @include panel;
        >h4{
            border-bottom: 1px solid #ddd;
        }
        .content{
            @include flex;
            .item{
                @include flex(row);
                align-items: center;
                height: 120px;
                &:after{
                    content: "";
                    box-sizing: border-box;
                    height: 0;
                    width: 100%;
                    border-bottom: 2px solid #ddd;
                    margin-left: 150px;
                }
                &:last-child:after{
                    border-bottom: 2px solid #fff;
                }
                >img{
                    width:88px;
                    height: 88px;
                    display: inline-block;
                    margin: 0 24px;
                }
                >div{
                    font-size: 32px;
                    color: #333;
                    line-height: 1.8;
                    width: 300px;
                    p{
                        color:#999;
                        font-size: 24px;
                        line-height: 1.1;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        overflow: hidden;
                    }
                }
                >em{
                    color: #FF8014;
                    font-size: 24px;
                }
            }
        }
    }
</style>