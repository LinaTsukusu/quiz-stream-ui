import Vue from 'vue'
import Vuex from 'vuex'
import {ipcRenderer} from 'electron'

Vue.use(Vuex)

const mutationsList = [
  'addAnswer', 'subAnswer',
].map((v) => [v, () => ipcRenderer.send(v)] as [string, () => void])

const mutations = [...new Map(mutationsList)].reduce((l, [k, v]) => Object.assign(l, {[k]: v}), {})

export default new Vuex.Store({
  state: ipcRenderer.sendSync('fetchState'),
  mutations,
})
