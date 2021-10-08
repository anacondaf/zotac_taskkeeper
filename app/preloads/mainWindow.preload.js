const { contextBridge, ipcRenderer, contentTracing } = require("electron");
const { todoList } = require("../components/todoList");

ipcRenderer.on("add_task_to_window", (event, data) => {
	const todoListComponent = todoList.createTodoList(data);

	document
		.querySelector(".list-scroll-box")
		.insertAdjacentHTML("beforeend", todoListComponent);
});

window.addEventListener("DOMContentLoaded", () => {
	//Open create task window invoke IPC
	contextBridge.exposeInMainWorld("open_create_task_window", {
		openCreateTaskWindow: () => {
			ipcRenderer.invoke("openCreateTaskWindow");
		},
	});
});
