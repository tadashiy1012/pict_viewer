const reader = require('b64image_reader');
const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;

module.exports = function openDir(callback) {
  let focusedWindow = browserWindow.getFocusedWindow();
  dialog.showOpenDialog(focusedWindow, {
    properties: ['openDirectory']
  }, (args) => {
    const datas = reader(args[0], 'jpg');
    const datas2 = reader(args[0], 'png');
    callback([].concat(datas, datas2));
  });
};