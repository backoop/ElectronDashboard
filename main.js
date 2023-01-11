const { app, BrowserWindow } = require("electron");
const path = require("path");


const createWindow = () => {
  app.commandLine.appendSwitch('disable-web-security', 'true');
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1500,
    height: 1500,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      webviewTag: true,

    },
  });

  // and load the index.html of the app.
  mainWindow.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
