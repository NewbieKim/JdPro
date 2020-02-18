import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//vuex 状态管理库 数据集中地
export default new Vuex.Store({
    //token的初始状态
    state: {
        token: ''
    },
    //设置vuex的token
    mutations: {
        settoken(state, token) {
            state.token = token
        }
    },
    actions: {},
    modules: {}
})