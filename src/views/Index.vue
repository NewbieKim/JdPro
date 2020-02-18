<template>
    <section>
      <heador></heador>
      <cube-slide ref="slide" :data="items" @change="changePage">
         <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
           <a :href="item.url">
              <img class="baner" :src="item.image">
           </a>
         </cube-slide-item>
     </cube-slide>
     <novice></novice>
     <money></money>
     <borrow></borrow>
     <footor></footor>
     <navbar></navbar>
    </section>
</template>
<script>
import heador from '../public/header.vue'
import novice from '../Home/Novice.vue'
import borrow from '../Home/Borrow.vue'
import money from '../Home/Money.vue'
import footor from '../public/Footer.vue'
import navbar from '../public/Navbar'
export default {
  components:{
    heador,
    novice,
    money,
    borrow,
    footor,
    navbar
  },
  data(){
    return{
      items:[
        {
          url: '',
          image: '//img20.360buyimg.com/mcpageview/jfs/t1/96334/26/10177/185003/5e16fb24Edf796774/4b4660cac79d5852.jpg'
        },
        {
          url: '',
          image: '//img20.360buyimg.com/mcpageview/jfs/t1/95208/39/9858/41488/5e11d67eE007e4d4b/c7fe2048ac932c6f.jpg'
        },{
          url:'',
          image:'//img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg'
        }
      ]
    }
  },
  methods:{
    changePage(current){
      /* console.log('轮播序号：' + current) */
    },
    clickHandler(item,index){
      console.log(item,index)
    }
  },
  //页面初始化
  /* async created(){
    try{
      //获取轮播图片的数据
      const items = await this.$http.get('/api/baner')
      this.items = items.data
    }catch(err){
      console.log(err)
    }
  } */ 
}
</script>
<style lang="scss" scoped>
.baner{
  width: 100%;

}
</style>