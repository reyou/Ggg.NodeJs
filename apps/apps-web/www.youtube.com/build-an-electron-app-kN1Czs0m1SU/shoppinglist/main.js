const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu, ipcMain } = electron;

// SET ENV
process.env.NODE_ENV = 'production';

let mainWindow;
let addWindow;

// Listen for app to be ready
app.on('ready', function () {
  // Create new window
  mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Quit app when closed
  mainWindow.on('closed', function () {
    app.quit();
  });

  // Load html into window
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'mainWindow.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
  let mainMenuTemplate = buildMainMenuTemplate();
  addDeveloperToolsToMenu(mainMenuTemplate);
  setupMainMenu(mainMenuTemplate);
});

// Catch item:add
ipcMain.on('item:add', function (e, item) {
  mainWindow.webContents.send('item:add', item);
  addWindow.close();
});

function addDeveloperToolsToMenu(mainMenuTemplate) {
  let developerToolsMenu = {
    label: 'Developer Tools',
    submenu: [
      {
        label: 'Toggle DevTools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools();
        },
      },
      {
        role: 'reload',
      },
    ],
  };
  mainMenuTemplate.push(developerToolsMenu);
}

function buildMainMenuTemplate() {
  // Create menu template
  const mainMenuTemplate = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Add Item',
          click() {
            createAddWindow();
          },
        },
        {
          label: 'Clear Items',
          click() {
            mainWindow.webContents.send('item:clear');
          },
        },
        {
          label: 'Quit',
          accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
          click() {
            app.quit();
          },
        },
      ],
    },
  ];

  return mainMenuTemplate;
}

function setupMainMenu(mainMenuTemplate) {
  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);

  // Insert menu
  Menu.setApplicationMenu(mainMenu);
}

// Handle create add window
function createAddWindow() {
  // Create new window
  addWindow = new BrowserWindow({
    width: 200,
    height: 300,
    title: 'Add Shopping List Item',
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // Garbage collection handle
  addWindow.on('close', function () {
    addWindow = null;
  });

  // Load html into window
  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'addWindow.html'),
      protocol: 'file:',
      slashes: true,
    })
  );
}
