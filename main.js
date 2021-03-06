const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

require('electron-reload')(__dirname);

function createWindow(window) {
	window = new BrowserWindow({
			minWidth: 800, 
			minHeight:600, 
			width: 800, 
			height: 600, 
			frame: false,
			backgroundColor: '#333333'
		});
	window.loadURL("file://" + __dirname + "/index.html");
	window.on('closed', function(){
		window = null
	});
};

// create window at startup
app.on('ready',() => createWindow(mainWindow));

app.on('activate', () => {
	if(mainWindow == null){
		createWindow(mainWindow);
	}
});
