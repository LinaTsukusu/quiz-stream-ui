import {Menu, BrowserWindow} from 'electron'


export default (win: BrowserWindow) => {
  const templateMenu = [
    {
      label: 'Setting',
      submenu: [
        {
          label: '設定ウィンドウ',
          click() {
            win.webContents.send('openSetting')
          },
        },
      ],
    },
  ]

  const menu = Menu.buildFromTemplate(templateMenu)
  Menu.setApplicationMenu(menu)
}
