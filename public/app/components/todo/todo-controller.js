function TodoController() {
	var todoService = new TodoService()

	function getTodos() {
		todoService.getTodos(draw)
	}

	function draw(todoArr) {
		var todoElem = document.getElementById("todo")
		var template = '<ul>'
		for (var i = 0; i < todoArr.length; i++) {
			var todo = todoArr[i];
			template += `
      <li id="todo">${todo.title}  ${todo.currentStatus}</li>
      <button class="btn" style="background: transparent" type="button" onclick="app.controllers.todoController.deleteTodo('${todo._id}')"><i class="material-icons">delete_forever</i></button>
      <button class="btn" style="background: transparent" type="button" onclick="app.controllers.todoController.editTodo('${todo._id}')"><i class="material-icons">playlist_add_check</i></button>
      `
		}
		template += '</ul>'
		todoElem.innerHTML = template
	}

	this.addTodo = function (e) {
		e.preventDefault()
		var newTitle = e.target.title.value
		var newTodo = {
			title: newTitle
		}
		todoService.addTodo(newTodo, getTodos)
	}

	this.editTodo = function (todoId) {
		todoService.editTodo(todoId, getTodos)
	}

	this.deleteTodo = function (todoId) {
		todoService.deleteTodo(todoId, getTodos)
	}
	getTodos()
}