import {globalShortcut} from 'electron'
import {logger} from './logger'
import store from '../store'
import {OperateAnswer} from '../enum'



export const registerShortcut = (operate: OperateAnswer, newKey: string, oldKey = '') => {
  if (oldKey) {
    globalShortcut.unregister(oldKey)
  }

  globalShortcut.register(newKey, () => {
    logger.debug(newKey)
    store.commit(operate, 0)
  })
}

// globalShortcut.register(store.state.shortcutDown, () => {
//   logger.debug(store.state.shortcutDown)
//   store.commit('subAnswer')
// })
//
// globalShortcut.register(store.state.shortcutReset, () => {
//   logger.debug(store.state.shortcutReset)
//   store.commit('setAnswer', 0)
// })
