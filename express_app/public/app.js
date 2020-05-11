$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);

  $("#todoInput").keypress((event) => {
    if (event.which == 13) {
      createTodo();
    }
  });

  // have to use li span not just span
  // can't use arrow notation
  $(".list").on("click", "li span", function (e) {
    e.stopPropagation();
    removeTodo($(this).parent());
  });

  $(".list").on("click", "li", function () {
    updateTodo($(this));
  });
});

function addTodos(todos) {
  todos.forEach(addTodo);
}

function addTodo(todo) {
  var newTodo = $("<li>" + todo.name + "<span>X</span></li>");
  newTodo.data("id", todo._id);
  newTodo.data("completed", todo.completed);
  newTodo.addClass("task");
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $(".list").append(newTodo);
}

function createTodo() {
  var userInput = $("#todoInput").val();
  $.post("api/todos", { name: userInput })
    .then((newTodo) => {
      $("#todoInput").val("");
      addTodo(newTodo);
    })
    .catch((err) => console.log);
}

function removeTodo(todo) {
  var clickedId = todo.data("id");
  var deleteUrl = "/api/todos/" + clickedId;
  $.ajax({
    method: "DELETE",
    url: deleteUrl,
  })
    .then(() => todo.remove())
    .catch(console.log);
}

function updateTodo(todo) {
  var updateUrl = "/api/todos/" + todo.data("id");
  var isDone = todo.data("completed");
  var updateData = { completed: !isDone };
  $.ajax({
    method: "PUT",
    url: updateUrl,
    data: updateData,
  }).then((updatedTodo) => {
    todo.toggleClass("done");
    todo.data("completed", !isDone);
  });
}
