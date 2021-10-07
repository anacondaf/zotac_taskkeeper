const { ipcRenderer } = require("electron");

ipcRenderer.on("send-to-main-window", (event, item) => {
	const todoListComponent = `<div class="todolist-wrap ph-1 pv-1">
	<div class="todolist">
		<div class="checkbox-box">
			<input class="checkbox" type="checkbox" name="example">
		</div>

		<div class="list-content">
			<div class="tagbox">
				<div class="ui red label">Danger</div>
			</div>
			<div class="title">
				<h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
			</div>
			<p><i>By Bob</i></p>
		</div>

		<div class="tools">
			<button class="ui icon button">
				<i class="trash alternate icon"></i>
			</button>
			<button class="ui icon button">
				<i class="tag icon"></i>
			</button>
		</div>
	</div>
</div>`;
	document
		.querySelector(".list-scroll-box")
		.insertAdjacentHTML("beforeend", todoListComponent);
});
