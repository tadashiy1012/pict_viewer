const fs = require('fs');
const path = require('path');
const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;

module.exports = function openDir(callback) {
  let focusedWindow = browserWindow.getFocusedWindow();
  dialog.showOpenDialog(focusedWindow, {
    properties: ['openDirectory']
  }, (args) => {
    const files = fs.readdirSync(args[0]).filter((arg) => {
      const filePath = path.join(args[0], arg);
      const ext = arg.substring(arg.lastIndexOf('.') + 1);
      return !fs.statSync(filePath).isDirectory() && ext === 'jpg';
    });
    const datas = files.map((file) => {
      return 'data:image/jpg;base64,' + fs.readFileSync(path.join(args[0], file)).toString('base64');
    });
    callback(datas);
  });
};