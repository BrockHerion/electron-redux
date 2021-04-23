const { app, BrowserWindow } = require('electron')
const path = require('path')

app.on('ready', () => {
  const window = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  })

  const index = path.join(__dirname, 'src/pages/index.html')

  window.loadFile(index)
    .then(() => {
      console.log('Window loaded successfully!')
    })
    .catch((e) => {
      console.error(`An error occurred! ${e}`)
    })
})