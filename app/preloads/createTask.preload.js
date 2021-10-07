const { ipcRenderer } = require("electron");

ipcRenderer.on("theme:dark-mode", () => {
	document.body.setAttribute("data-theme", "dark");
});

ipcRenderer.on("theme:light-mode", () => {
	document.body.setAttribute("data-theme", "light");
});

window.addEventListener("DOMContentLoaded", () => {
	const addTaskButton = document.querySelector(".add-task");
	addTaskButton.addEventListener("click", (event) => {
		ipcRenderer.invoke("test", "A", "B");
	});
});
