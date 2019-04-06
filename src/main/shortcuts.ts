import {globalShortcut} from 'electron'
import {logger} from './logger'
import store from '../store'

globalShortcut.register('Ctrl+Shift+Up', () => {
  logger.debug('Ctrl+Shift+Up')
  store.commit('addAnswer')
})

globalShortcut.register('Ctrl+Shift+Down', () => {
  logger.debug('Ctrl+Shift+Down')
  store.commit('subAnswer')
})

globalShortcut.register('Ctrl+Shift+Right', () => {
  logger.debug('Ctrl+Shift+Right')
  store.commit('setAnswer', 0)
})
