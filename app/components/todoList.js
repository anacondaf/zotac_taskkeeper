module.exports.todoList = {
	/**
	 * Return todoList component
	 * @param data
	 * @returns todoList component
	 */
	createTodoList: ({ taskInfo }) => {
		return `<div class="todolist-wrap ph-1 pv-1">
        <div class="todolist">
            <div class="checkbox-box">
                <input class="checkbox" type="checkbox" name="example">
            </div>

            <div class="list-content">
                <div class="tagbox">
                    <div class="ui red label">Danger</div>
                </div>
                <div class="title">
                    <h4>${taskInfo["title"]}</h4>
                </div>
                <div class="due-date">
                    <span>Due date: </span>
                    <span>${taskInfo["due_date"][0]}
                        <span>at ${taskInfo["due_date"][1]}</span>
                    </span>
                </div>
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
	},
};
