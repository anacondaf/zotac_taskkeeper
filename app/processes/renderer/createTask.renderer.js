const calendarAction = () => {
	const $calendar = $("#standard_calendar");

	$calendar.calendar({
		ampm: false,
		today: true,
	});

	let today = new Date(Date.now());
	$calendar.calendar("set date", today.toLocaleString());
};

function limitLines() {
	const titleField = document.getElementById("title-field");

	titleField.addEventListener("keydown", (e) => {
		let lines = e.value.split("\n").length;

		if (e.code == 13 && lines == e.rows) {
			alert("Out of limit rows");
			e.preventDefault();
		}
	});
}

const chooseFileButton = () => {
	const chooseFileButton = document.querySelector("#upload-file-btn");
	chooseFileButton.addEventListener("dragover", () => {
		chooseFileButton.classList.add("open");
	});
	chooseFileButton.addEventListener("dragleave", () => {
		chooseFileButton.classList.remove("open");
	});
};

window.addEventListener("DOMContentLoaded", () => {
	calendarAction();
	// limitLines();
	chooseFileButton();

	const addTaskButton = document.querySelector(".add-task");

	addTaskButton.addEventListener("click", (event) => {
		let title = document.querySelector("#title-field");
		let dueDateTime = $("#standard_calendar")
			.calendar("get date")
			.toLocaleString("en-Gb")
			.split(",");

		window["createTask"].invokeCreateTask({
			title: title.value,
			due_date: dueDateTime,
		});
	});
});
