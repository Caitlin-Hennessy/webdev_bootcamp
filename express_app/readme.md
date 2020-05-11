###TODO list app

To run:
mongod --dbpath ~/data.db
nodemon index.js

express_app/index.js: main entrypoint/server

models/index.js: makes db connection, exports schema defined in todo.js
models/todo.js: defines schema

routes/todo.js: creates router, maps paths to helper functions
helpers/todo.js: implements helper functions

API
GET /api/todos -> list all todos
POST /api/todos {"name": "thing to do"} -> create new todo
(use body/x-www-form-urlencoded w/key & value)
GET /api/todos/todoId -> get one todo
PUT /api/todos/todoId {"fieldToUpdate": "updatedValue"} -> update one todo
DELETE /api/todos/todoId -> delete todo
