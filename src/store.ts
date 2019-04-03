import Vue from 'vue'
import Vuex from 'vuex'
import {ipcRenderer} from 'electron'

Vue.use(Vuex)

export default new Vuex.Store({
  state: ipcRenderer.sendSync('fetchState'),
  mutations: {
    addAnswer() {
      ipcRenderer.send('addAnswer')
    },

    subAnswer() {
      ipcRenderer.send('subAnswer')
    },
  },
  actions: {},
})
