1.MVVM
  --
2.model与viewmodel之间的双向绑定
  --含义：model中的数据发生改变是会触发view视图的更新 
    view中用户交互操作而改变的数据也会在model中同步
  --vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的
    vue是通过Object.defineProperty()来实现数据劫持的。
  https://www.jianshu.com/p/e1ef29c0d826
3.vuex
  --
4.组件通信
5.vue中实现数据的监听
  --computer 
    结果会被缓存，除非依赖的响应式属性变化才会重新计算。主要当作属性来使用
  --methods
    表示一个具体的操作，主要用于写业务逻辑
  --watch
    主要用来监听某些特定数据的变化，从而进行某些具体的业务逻辑操作 二者结合
    watch:{
      'name':funcation(newVal,oldVal){
        //具体操作
      }
    }
6.白屏时间过长
  --在配置路由的时候进行路由的懒加载：在调用到对应路由的时候在加载路由相对应的js文件
    使用了路由懒加载 系统会将对应路由分割成一个个的js文件
  --不要在index.html下引入js文件，要将他在外部引入 减少打包出来的js文件大小
  --loading图或骨架屏
  --字体图标库等轻量文件
  --图片懒加载
    https://www.jianshu.com/p/48ecd9ba8d74
    https://blog.csdn.net/Tom__cy/article/details/90299757

7.登录 注册
  --首先在配置文件中编写mock接口 模拟后台数据实现
  --在组建中获取接口数据 判断返回的数据
  --登录数据正确 则判断路由是否带参，带参就去到重定向参数地址，否则就去首页
  --登录数据错误 则提示错误信息

8.路由守卫
  --全局配置mian.js中去编写路由守卫
  --判断路由中的登录权限
  --是否在本地从存储中存在token token存在说明已登录 调到请求的路由
  --否则 跳到登录页面 同时设置路由参数  query: { redirect: to.fullPath }
     meta: {
        requireAuth: true //需要登录权限
     }
9.路由跳转的动画效果
  三种vue动画的实现方式



10.小球动画实现思路在总结
1.在添加购物车的图表上面添加点击事件
  --在vuex状态管理库的mutations对象属性中 添加tocart方法 这个方法下会去判断该商品是否已经在
    购物车中
2.用transition属性将小球元素包裹起来 在里面定义动画事件
  --beforeEnter(el) 
    //获取点击小球的初始位置
    //getBoundingClientRect()来获取dom元素的位置 是一个包含上下左右位置的对象
    //获取小球移动的横纵方向 在对应的方向添加动画效果
  --enter(el,done)
    //触发重绘 不然会没有效果
    //小球移动回到原点，就是购物车的位置
    //过渡完成后执行的事件 
  --afterEnter(el)
    //动画完成后隐藏小球