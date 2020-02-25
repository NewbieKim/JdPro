<template>
    <div>
        <heador></heador>
        <bottom></bottom>
        <goods class="goods"></goods>
        <footor></footor>
    </div>
</template>
<script>
//从vuex里面来获取数据
import {mapState} from 'vuex'
import goods from '../cart/Goods.vue'
import bottom from '../cart/Bottom.vue'
import heador from '../public/header.vue'
import footor from '../public/Footer.vue'
export default {
    components:{
        heador,
        goods,
        bottom,
        footor
    },
}
</script>
<style lang="scss" scoped>
.goods{
    >h4{
        display: none;
    }
}
</style>