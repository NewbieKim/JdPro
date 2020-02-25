<template>
    <panel class="panel">
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                  <img class="baner" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
     <!-- 滚动分类 -->
     <div class="list">
         <cube-slide ref="slidelists" :data="lists" :auto-play="false" @change="changePage">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
                <ul>
                    <li v-for="(item, index1) in list" :key="index1">
                        <a :href="item.url">
                          <img :src="item.image">
                          <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
       </cube-slide>
     </div></panel>     
</template>

<script>
import panel from "../core/Panel.vue"
export default {
    components:{
        panel
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
        ],
        lists:[
            [
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp',
                    label:'京东超市'
                },
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/39401/17/2391/5859/5cc06fcfE2ad40668/28cda0a571b4a576.png.webp',
                    label:'数码电器'
                },
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png.webp',
                    label:'京东服饰'
                },
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png.webp',
                    label:'京东生鲜'
                },
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png.webp',
                    label:'京东到家'
                },
                {
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png.webp',
                    label:'充值缴费'
                },{
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png.webp',
                    label:'9.9元拼'
                },{
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/7068/29/8987/5605/5c120da2Ecae1cc3a/016033c7ef3e0c6c.png.webp',
                    label:'领券'
                },{
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png.webp',
                    label:'赚钱'
                },{
                    url:'',
                    image:'//m.360buyimg.com/mobilecms/s120x120_jfs/t1/22262/9/1470/4527/5c120cd0E5d3c6c66/4792ec307a853e9f.png.webp',
                    label:'PLUS会员'
                }
            ],
            []
        ]
    }
  },
  methods:{
    changePage(current){
      /* console.log('轮播序号：' + current) */
    },
    clickHandler(item,index){
      console.log(item,index)
    },
  }
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
    @import "../css/element.scss";
    .panel{
        .baner{
        width: 100%;
        height: 240px;
        }
        .list{
            margin: 20px 0;
            background-color: #fff;
            ul{
                display: flex;
                flex-wrap: wrap;
            }
            li{
                width: 20%;
                justify-content: center;
                float: left;
                img{
                    border-radius: 50%;
                    width: 60px;
                    height: 60px;
                    padding: 10px 0
                }
                p{
                    padding: 10px 0;
                }

            }
        }
    }

</style>