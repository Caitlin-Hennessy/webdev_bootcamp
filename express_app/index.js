var express = require("express"),
  app = express(),
  bodyParser = require("body-parser");
var todoRoutes = require("./routes/todos");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));

app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// direct URLs ending in /api/todos to todoRoutes
app.use("/api/todos", todoRoutes);

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("app is running on " + port);
});
