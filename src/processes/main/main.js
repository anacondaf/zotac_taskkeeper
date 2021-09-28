const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
	const window = new BrowserWindow({
		width: 800,
		height: 500,
	});

	window.loadFile(path.join(__dirname, "../../windows/index.html"));
}

app.whenReady().then(() => {
	createWindow();
});

// app.on("browser-window-created", (e, window) => {
// 	window.removeMenu();
// });

app.on("window-all-closed", () => {
	if (process.platform !== "darwin") {
		app.quit();
	}
});
