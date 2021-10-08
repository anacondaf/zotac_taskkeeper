const { contextBridge, ipcRenderer } = require("electron");

ipcRenderer.on("theme:dark-mode", () => {
	document.body.setAttribute("data-theme", "dark");
});

ipcRenderer.on("theme:light-mode", () => {
	document.body.setAttribute("data-theme", "light");
});

window.addEventListener("DOMContentLoaded", () => {
	contextBridge.exposeInMainWorld("createTask", {
		invokeCreateTask: (taskInfo) => {
			ipcRenderer.invoke("createNewTask", { taskInfo });
		},
	});
});
