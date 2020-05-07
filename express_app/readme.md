###TODO list app

To run:
mongo --dbpath ~/data.db
node index.js

express_app/index.js: main entrypoint/server

models/index.js: makes db connection, exports schema defined in todo.js
models/todo.js: defines schema

routes/todo.js: creates router, maps paths to helper functions
helpers/todo.js: implements helper functions
