const API_URL = "/api/todos";

export async function getTodos() {
  return fetch(API_URL) // goes to localhost:8081/api/todos because of proxy setting in package.json
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json().then((data) => {
            let err = { errorMessage: data.message };
            throw err;
          });
        } else {
          let err = {
            errorMessage: "Please try again later, server is not responding",
          };
          throw err;
        }
      }
      return res.json();
    });
}

export async function createTodo(val) {
  console.log(`adding ${val}`);
  return fetch(API_URL, {
    method: "post",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ name: val }),
  }) // goes to localhost:8081/api/todos because of proxy setting in package.json
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json().then((data) => {
            let err = { errorMessage: data.message };
            throw err;
          });
        } else {
          let err = {
            errorMessage: "Please try again later, server is not responding",
          };
          throw err;
        }
      }
      return res.json();
    });
}

export async function removeTodo(id) {
  const deleteURL = API_URL + "/" + id;
  console.log(`deleting ${id}`);
  return fetch(deleteURL, {
    method: "delete",
  }) // goes to localhost:8081/api/todos because of proxy setting in package.json
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json().then((data) => {
            let err = { errorMessage: data.message };
            throw err;
          });
        } else {
          let err = {
            errorMessage: "Please try again later, server is not responding",
          };
          throw err;
        }
      }
      return res.json();
    });
}

export async function updateTodo(todo) {
  console.log(todo._id, todo.completed);
  const updateURL = API_URL + "/" + todo._id;
  return fetch(updateURL, {
    method: "put",
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({ completed: !todo.completed }),
  }) // goes to localhost:8081/api/todos because of proxy setting in package.json
    .then((res) => {
      if (!res.ok) {
        if (res.status >= 400 && res.status < 500) {
          return res.json().then((data) => {
            let err = { errorMessage: data.message };
            throw err;
          });
        } else {
          let err = {
            errorMessage: "Please try again later, server is not responding",
          };
          throw err;
        }
      }
      return res.json();
    });
}
