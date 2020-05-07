var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from the root route");
});

// direct URLs ending in /api/todos to todoRoutes
app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("app is running on 3000");
});
