const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const path = require("path");

let mainWindow;
let newTaskWindow;

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: 800,
		height: 500,
		webPreferences: {
			preload: path.join(__dirname, "../../preloads/mainWindow.preload.js"),
		},
	});

	mainWindow.loadFile(path.join(__dirname, "../../windows/index.html"));

	mainWindow.on("closed", () => {
		app.quit();
	});
}

function createTaskWindow() {
	newTaskWindow = new BrowserWindow({
		width: 400,
		height: 600,
		resizable: false,
		webPreferences: {
			preload: path.join(__dirname, "../../preloads/createTask.preload.js"),
		},
	});

	newTaskWindow.loadFile(path.join(__dirname, "../../windows/createTask.html"));

	//close newTaskWindow
	newTaskWindow.on("close", () => {
		newTaskWindow = null;
	});
}

function createMenu() {
	const menuTemplate = [
		{
			label: "Settings",
			submenu: [
				{
					label: "Themes",
					submenu: [
						{
							label: "Dark",
							click: (item, focusedWindow) => {
								focusedWindow.webContents.send("theme:dark-mode");
							},
						},
						{
							label: "Light",
							click: (item, focusedWindow) => {
								focusedWindow.webContents.send("theme:light-mode");
							},
						},
					],
				},
			],
		},
	];

	if (process.env.NODE_ENV !== "production") {
		menuTemplate[0].submenu.push({
			label: "Toggle DevTools",
			accelerator: process.platform === "darwin" ? "Command+I" : "Ctrl+I",
			click: (item, BrowserWindow) => {
				BrowserWindow.openDevTools();
			},
		});
	}

	let menu = Menu.buildFromTemplate(menuTemplate);
	Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
	createMainWindow();
	createMenu();
});

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});

//IPC Controllers
ipcMain.handle("createNewTask", async (event, { taskInfo }) => {
	mainWindow.webContents.send("add_task_to_window", { taskInfo });
	newTaskWindow.close();
});

ipcMain.handle("openCreateTaskWindow", async (event) => {
	createTaskWindow();
});
