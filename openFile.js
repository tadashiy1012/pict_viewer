const electron = require('electron');
const dialog = electron.dialog;
const browserWindow = electron.BrowserWindow;
const fs = require('fs');

module.exports = function openFile(tgtFilePath) {
  const timerName = 'openFile' + Math.floor(Math.random() * 1000);
  console.time(timerName);
  return new Promise((resolve, reject) => {
    fs.readFile(tgtFilePath, (err, buf) => {
      const ext = tgtFilePath.substring(tgtFilePath.lastIndexOf('.') + 1);
      const head = 'data:image/' + ext + ';base64,';
      const b64 = head + buf.toString('base64');
      console.timeEnd(timerName);
      resolve(b64);
    });
  });
};