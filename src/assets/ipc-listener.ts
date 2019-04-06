import {ipcRenderer} from 'electron'
import store from '@/store'


ipcRenderer.on('openSetting', () => {
  if (!store.state.dev) {
    window.open('app://./index.html')
  } else {
    window.open('/setting')
  }
})
