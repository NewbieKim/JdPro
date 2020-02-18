<template>
    <!-- 这里引入panel这个组件 然后将组件里的内容早插槽里展示出来 -->
        <panel title="极速借贷" :class="$style.panel">
            <section :class="$style.content">
                <router-link to="{name:Home}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png" alt="">
                </router-link>
            </section>
        </panel>
</template>
<script>
import panel from "../core/Panel.vue"
export default{
    components:{
        panel
    }
}
</script>

<style lang="scss" module>
    @import "../css/element.scss";
    .panel{
        @include panel;
        .content{
            img{
            width: 100%;
            display: block;
        }
        }
    }
</style>