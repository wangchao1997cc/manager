import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  token: null,
  menus:[],
}

const mutations = {
  SAVE_TOKEN(state,token){
    state.token = token
  },
  SAVE_MENUS(state,menus){
    state.menus = menus
  }
}

export default new Vuex.Store({
  state,
  mutations
})
