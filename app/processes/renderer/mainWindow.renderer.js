window.addEventListener("DOMContentLoaded", () => {
	let addTask = document.getElementById("add-task");

	addTask.addEventListener("click", () => {
		window["open_create_task_window"].openCreateTaskWindow();
	});
});
