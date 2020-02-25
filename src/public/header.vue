<template>
    <div>
        <div :class="$style.head">
            <span :class="$style.left">
                <em>注册</em>&nbsp;|&nbsp;<em>登录</em>
            </span>
            <btn :class="$style.btnDownload">APP下载</btn>
        </div>
    </div>
</template>

<script>
//引入模板
import btn from '../core/Btn.vue'
export default {
    components:{
        btn
    }
}
</script>

<style lang="scss" module>
/* module是将单页中的css变成局部属性 */
    .head{
        margin-bottom: 20px;
        color: #666;
        height: 80px;
        line-height: 100px;
        position: fixed;
        top:0;
        left: 0;
        right: 0;
        font-size: 36px;
        background:#fff url(//misc.360buyimg.com/jdf/1.0.0/unit/global-header/5.0.0/i/jdlogo-201708-@1x.png) center no-repeat;
        background-size:auto 50%;
        z-index: 100;  //这样让他有吸顶效果
    }
    .left{
        font-size: 28px;
        height: 30px;
        line-height: 30px;
        margin: 36px 0 0 18px;
        float: left;

    }
    .btnDownload{
        float: right;
        font-size: 24px;
        border-width: 0;
        height: 48px;
        line-height: 48px;
        min-width: 100px;
        padding: 0;
        border-radius: 4px;
        margin: 28px 24px 0 0;
    }
</style>