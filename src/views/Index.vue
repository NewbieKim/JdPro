<template>
    <section>
      <heador></heador> 
      <slide></slide>
      <goods></goods>
      <novice></novice>
      <money></money>
      <borrow></borrow>
      <footor></footor>
      <botnav></botnav>
    </section>
</template>
<script>
import heador from '../public/header.vue'
import slide from '../Home/Hslide.vue'
import novice from '../Home/Novice.vue'
import borrow from '../Home/Borrow.vue'
import money from '../Home/Money.vue'
import footor from '../public/Footer.vue'
/* import navbar from '../public/Navbar' */
import goods from '../cart/Goods.vue'
import botnav from '../public/Botnav.vue'
export default {
  components:{
    heador,
    slide,
    goods,
    novice,
    money,
    borrow,
    footor,
    botnav
  },
}
</script>
<style lang="scss" scoped>

</style>