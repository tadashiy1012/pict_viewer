const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;
const fs = require('fs');
const path = require('path');

module.exports = function openDir() {
  return new Promise((done) => {
    let focusedWindow = browserWindow.getFocusedWindow();
    dialog.showOpenDialog(focusedWindow, {
      properties: ['openDirectory']
    }, (args) => {
      fs.readdir(args[0], (err, data) => {
        const paths = data.map(name => path.join(args[0], name));
        done(paths);
      })
    });  
  });
};