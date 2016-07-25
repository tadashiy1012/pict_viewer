const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;
const fs = require('fs');
const path = require('path');

module.exports = function openDir(callback) {
  let focusedWindow = browserWindow.getFocusedWindow();
  dialog.showOpenDialog(focusedWindow, {
    properties: ['openDirectory']
  }, (args) => {
    fs.readdir(args[0], (err, data) => {
      const paths = data.map((name) => {
        return path.join(args[0], name);
      })
      callback(paths);
    })
  });
};