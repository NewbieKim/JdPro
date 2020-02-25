<template>
    <div>
        <heador></heador>
        <welfare></welfare>
        <service></service>
        <footor></footor>
    </div>
</template>
<script>
import heador from '../public/header.vue'
import welfare from '../search/Welfare.vue'
import service from '../search/Service.vue'
import footor from '../public/Footer.vue'
export default {
    components:{
        heador,
        welfare,
        footor,
        service
    }
}
</script>
<style lang="scss" scoped>

</style>