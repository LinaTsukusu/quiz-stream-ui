import Vuex from 'vuex'
import {ipcMain, Event} from 'electron'


const state = {
  answer: 0,
  length: 20,
}

const mutations = {
  addAnswer(self: typeof state) {
    self.answer = Math.min(self.answer + 1, 20)
  },

  subAnswer(self: typeof state) {
    self.answer = Math.max(self.answer - 1, 0)
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions: {},
})

ipcMain.on('fetchState', (event: Event) => {
  event.returnValue = store.state
})

Object.keys(mutations).forEach((commit) => {
  ipcMain.on(commit, () => {
    store.commit(commit)
  })
})
