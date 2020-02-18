<template lang="html">
    <div :class="[btnClass,cname]">
        <slot/>
    </div>
</template>
<script>
export default{
    //允许从外部传一个自定义的名字
    props:{
        cname:{
            type:String,
            default:'',
        }
    },
    data(){
        return {
            btnClass:'btn'
        }
    }
}
</script>

<style lang="scss">
@import "../css/element.scss";
.btn{
    //这里这节把定义好的样式拿过来
    @include btn;
}

</style>