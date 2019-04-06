import {Event, ipcMain} from 'electron'
import store from '../store'


ipcMain.on('commit', (event: Event, mutation: string, ...args: any[]) => {
  store.commit(mutation, ...args)
})
