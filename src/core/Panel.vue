<template>
    <section :class="[panelClass,cname]">
        <h4>-{{ title }}-</h4>
        <!-- vue的插槽 -->
        <slot/>
    </section>
</template>
<script>
export default{
    //允许从外部传一个自定义的名字
    props:{
        cname:{
            type:String,
            default:'',
        },
        title:{
            type:String,
            default:''
        }
    },
    data(){
        return {
            panelClass:'panel'
        }
    }
}
</script>

<style lang="scss">
@import "../css/element.scss";
.panel{
    //这里这节把定义好的样式拿过来
    @include panel;
}

</style>