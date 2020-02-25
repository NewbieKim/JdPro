import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex 状态管理库 数据集中处理
let store = new Vuex.Store({
        //数据的初始状态
        state: {
            token: '',
            carts: JSON.parse(localStorage.getItem('carts')) || []
        },
        mutations: {
            //设置vuex的token
            settoken(state, token) {
                state.token = token
            },
            //添加商品到购物车
            tocart(state, tag) {
                //如果购物车里的商品名称与要添加的商品名称相等 则说明购物车里有该商品
                let goods = state.carts.find(v => v.title == tag.label)
                if (goods) {
                    goods.cartCount++
                } else {
                    state.carts.push({ title: tag.label, cartCount: 1 })
                }
            },
            //购物车数量加1
            cartadd(state, index) {
                state.carts[index].cartCount++
            },
            //碱1
            cartremove(state, index) {
                if (state.carts[index].cartCount > 1) {
                    state.carts[index].cartCount--
                } else {
                    if (window.confirm('确定从购物车移除商品吗？')) {
                        state.carts.splice(index, 1)
                    }
                }
            },
            //清空购物车
            clearcart(state) {
                state.carts = []
            }
        },
        actions: {},
        //相当于我们vue的计算属性
        getters: {
            //计算购物车里的总数
            countsum: state => {
                let num = 0
                state.carts.forEach(v => {
                    num += v.cartCount
                })
                return num
            }
        },
        modules: {}
    })
    //监听每次调用mutations的时候,都会进这个方法，然后我们可以做一些自己想做的处理
    //这里让购物车里的数据持久化
store.subscribe((mutations, state) => {
    localStorage.setItem('carts', JSON.stringify(state.carts))
})
export default store