function TodoService() {
	var myTodos = []

	function logError(err) {
		console.error('Error', err)
	}

	this.getTodos = function getTodos(draw) {
		$.get('/api/todos').then((todos) => {
			myTodos = todos
			draw(myTodos)
		})
	}

	this.addTodo = function (newTodo, cb) {
		$.post('/api/todos', newTodo).then(function () {
			cb()
		})
	}

	this.deleteTodo = function (todoId, getTodos) {
		$.ajax({
			contentType: 'application/json',
			method: 'DELETE',
			url: '/api/todos/' + todoId
		})
			.then(getTodos)
			.fail(logError)
	}

	this.editTodo = function (todoId, getTodos) {
		var todo = myTodos.find(todo => todo._id == todoId)
		if (todo.currentStatus == `<i class="material-icons">done</i>`) {
			todo.currentStatus = `<i class="material-icons">assignment_late</i>`
		} else {
			todo.currentStatus = `<i class="material-icons">done</i>`
		}
		if (!todo) { return logError('Request not understood') }

		$.ajax({
			contentType: 'application/json',
			method: 'PUT',
			url: '/api/todos/' + todoId,
			data: JSON.stringify(todo)
		})
			.then(getTodos)
			.fail(logError)
	}

}