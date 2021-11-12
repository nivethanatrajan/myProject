const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// db
const mongoose = require("mongoose");
const url = "mongodb://localhost/Departments";
mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection;
con.on("open", () => {
  console.log("connected db..");
});

app.use(express.json());

//app.use("/users", require("./controllers/users"));
// db

// -------------
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  console.log();
  if (req.headers.authorization === "123") {
    console.log("hi", req.headers);
    setTimeout(() => {
      res.json({
        firstName: req.query.firstName,
        lastName: req.query.lastName,
      });
    }, 10000);
  } else {
    res.send("Token is invalid");
  }
});

app.post("/about", function (req, res) {
  if (req.headers.authorization == "123") {
    res.json("Success");
  } else {
    res.json("Failed");
  }
});

app.listen(port, () => console.log("Index "));

require("./controllers/users")(app);
require("./controllers/departments")(app);
