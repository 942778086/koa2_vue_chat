import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        userInfo: {}
    },
    mutations: {
        reset(state) {
            if (localStorage.getItem('vuex')) {
                state.userInfo = JSON.parse(localStorage.getItem('vuex'))
            }
        },
        getUserInfo(state, payload) {
            axios.post('http://localhost:3001/user/getUserByFileds', payload)
                .then(res => {
                    state.userInfo = res.data[0]
                })
        }
    }
})

export default store
