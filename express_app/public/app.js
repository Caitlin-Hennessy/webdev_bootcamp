$(document).ready(function () {
  $.getJSON("/api/todos").then(addTodos);

  $("#todoInput").keypress((event) => {
    if (event.which == 13) {
      createTodo();
    }
  });

  // this doesn't work
  $(".list").on("click", "li span", function () {
    removeTodo($(this).parent());
  });
});

function addTodos(todos) {
  todos.forEach(addTodo);
}

function addTodo(todo) {
  var newTodo = $("<li>" + todo.name + "<span>X</span></li>");
  newTodo.data("id", todo._id);
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
