<template>
    <section>
        <slider :items="items" :cname="$style.slider"/>
        <section :class="$style.list">
            <div :class="$style.item" v-for="item in enters" :key="item.img">
                <router-link :to="{name:item.href}">
                    <img :src="item.img" :alt="item.title">
                    <h4>{{ item.title }}</h4>
                </router-link>              
            </div>        
        </section>
    </section>      
</template>

<script>
import slider from '../core/Slide.vue'
export default {
    components:{
        slider,
    },
    data(){
        return {
            items:[
                {
                    href:'Home',
                    src:'//img20.360buyimg.com/mcpageview/jfs/t1/96334/26/10177/185003/5e16fb24Edf796774/4b4660cac79d5852.jpg'
                },
                {
                    href:'Home',
                    src:'//img20.360buyimg.com/mcpageview/jfs/t1/93607/27/9768/38387/5e11d688E04270824/2d9495f7de2365ca.jpg'
                },
                {
                    href:'Home',
                    src:'//img20.360buyimg.com/mcpageview/jfs/t1/95208/39/9858/41488/5e11d67eE007e4d4b/c7fe2048ac932c6f.jpg'
                }
            ],
            enters:[
                {
                href:"Home",
                img:"//img20.360buyimg.com/mcpageview/jfs/t1/101844/12/9760/11216/5e11d703Ec915a9b9/014b4c8a90f4f970.png",
                title:"优惠券",
            },
            {
                href:"Home",
                img:"//img20.360buyimg.com/mcpageview/jfs/t1/90523/1/9767/16031/5e11d735E29291893/7ea1474e22f075a3.png",
                title:"领钢镚",
            },{
                href:"Home",
                img:"//img20.360buyimg.com/mcpageview/jfs/t1/94998/29/9746/11665/5e11d753E53811340/b555a3fb637dad6d.png",
                title:"白条提额",
            },{
                href:"Home",
                img:"//img20.360buyimg.com/mcpageview/jfs/t1/105209/4/9857/12579/5e11d770E4e458bc7/fbbbec1918b041e3.png",
                title:"领金豆",
            },{
                href:"Home",
                img:"//img20.360buyimg.com/mcpageview/jfs/t1/95010/16/9777/10019/5e11d791E1d2871b3/66a53d1849c687e7.png",
                title:"工资理财",
            }
            ]
        }
    }
}
</script>

<style lang="scss" module>
  @import "../css/element.scss";
  .temp{
      margin-top: 120px;
      width: 100%
  }
  .slider{
      margin-top: 120px;
      img{
          width: 100%;
      }
  }
  .list{
      @include list(row);
      background: #fff;
      padding-bottom:0;
      padding-top: 20px;
      justify-content: space-around;  //两端对齐
      a{
          text-decoration: none;
      }
      .item{
          text-align: center;
          img{
              display: inline-block;
              width: 90px;
              height: 90px;
          }
          h4{
              font-size: 26px;
              margin-top: 12px;
              margin-bottom: 0;
              color: #666;
          }
      }
  }
</style>