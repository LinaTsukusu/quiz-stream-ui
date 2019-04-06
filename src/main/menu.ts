import {Menu, BrowserWindow} from 'electron'
import store from '../store'


export default (win: BrowserWindow) => {
  const templateMenu = [
    {
      label: 'Setting',
      submenu: [
        {
          label: '設定ウィンドウ',
          click() {
            if (!store.state.dev) {
              store.commit('setPath', '/setting')
            }
            win.webContents.send('openSetting')
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)
}
