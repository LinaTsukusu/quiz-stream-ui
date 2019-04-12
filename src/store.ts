import Vue from 'vue'
import Vuex from 'vuex'
import {createPersistedState, createSharedMutations} from 'vuex-electron'
import {registerShortcut} from './main/shortcuts'
import {OperateAnswer} from './enum'


Vue.use(Vuex)

const state = {
  answer: 0,
  length: 20,
  okColor: '#F44336',
  noneColor: '#616161',
  backColor: '#00ff00',
  textColor: false,
  path: '/',
  dev: false,
  shortcutUp: 'Ctrl+Y',
  shortcutDown: 'Ctrl+Z',
  shortcutReset: 'Ctrl+Alt+R',
}
export default new Vuex.Store({
  state,
  mutations: {
    addAnswer(self) {
      self.answer = Math.min(self.answer + 1, self.length)
    },

    subAnswer(self) {
      self.answer = Math.max(self.answer - 1, 0)
    },

    setAnswer(self, num: number) {
      self.answer = num
    },

    setLength(self, length: number) {
      self.length = Math.min(50, Math.max(5, length))
    },

    setOkColor(self, color: string) {
      self.okColor = color
    },
    setNoneColor(self, color: string) {
      self.noneColor = color
    },
    setBackColor(self, color: string) {
      self.backColor = color
    },
    setTextColor(self, isWhite: boolean) {
      self.textColor = isWhite
    },

    setPath(self, path: string) {
      self.path = path
    },

    setDev(self, isDev: boolean) {
      self.dev = isDev
    },

    setShortcutUp(self, newKey: string) {
      registerShortcut(OperateAnswer.addAnswer, newKey, self.shortcutUp)
      self.shortcutUp = newKey
    },
    setShortcutDown(self, newKey: string) {
      registerShortcut(OperateAnswer.subAnswer, newKey, self.shortcutDown)
      self.shortcutDown = newKey
    },
    setShortcutReset(self, newKey: string) {
      registerShortcut(OperateAnswer.setAnswer, newKey, self.shortcutReset)
      self.shortcutReset = newKey
    },
  },
  plugins: [
    createPersistedState(),
    createSharedMutations(),
  ],
})
