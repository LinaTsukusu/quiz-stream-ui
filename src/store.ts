import Vue from 'vue'
import Vuex from 'vuex'
import { createPersistedState, createSharedMutations } from 'vuex-electron'


Vue.use(Vuex)

const state = {
  answer: 0,
  length: 20,
}
export default new Vuex.Store({
  state,
  mutations: {
    addAnswer(self: typeof state) {
      self.answer = Math.min(self.answer + 1, 20)
    },

    subAnswer(self: typeof state) {
      self.answer = Math.max(self.answer - 1, 0)
    },

    setAnswer(self: typeof state, num: number) {
      self.answer = num
    },
  },
  plugins: [
    createPersistedState(),
    createSharedMutations(),
  ],
})
