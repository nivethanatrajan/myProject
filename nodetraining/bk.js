  // type: Schema.Types.ObjectId,
        // ref: "departments",
        // required: true,
        --

// const route = express.Router();
// route.post("/", async (req, res) => {
//   const user = new User({
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     department: req.body.department,
//     email: req.body.email,
//   });
//   try {
//     const add = await user.save();
//     res.json(add);
//   } catch (err) {
//     res.send("Error" + err);
//   }
// });

// ----

// working
// const connectDB = require("./mongoDB/departments/DB/mongodb");
// connectDB();
// app.use(express.json({ extended: false }));
// app.use(express.json());
// app.use("/api/userModel", require("./mongoDB/departments/controller"));

// const connectUserDB = require("./User/DB/mongodb");
// connectUserDB();
// app.use(express.json({ extended: false }));
// app.use(express.json());
// app.use("/api/users", require("./User/controller"));

// const mongoose = require("mongoose");
// const url = " mongodb://localhost/test";
// mongoose.connect(url, { useNewUrlParser: true });
// const con = mongoose.connection;
// con.on("open", () => {
//   console.log("connected..");
// });
// app.use(express.json());
// const alienRouter = require("./routers/aliens");
// app.use("/aliens", alienRouter);

// promise compleee
const axios = require("axios");

async function asyncFunc(num) {
  if (num === 1) {
    return 1;
  }

  await getPromise();
  //await getFunction();
  console.log(num);

  //num + asyncFunc(num -1)
  asyncFunc(num - 1);
}
asyncFunc(4);

function getPromise() {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        Authorization: 123,
        "Content-Type": "application/json",
      },
    };
    axios
      .get(
        "http://localhost:3000/about?&firstName=bobby&lastName=Lashley12",
        options
      )
      .then((data) => {
        console.log(data.data);
        resolve(data);
      })
      .catch((error) => {
        console.log("err");
        resolve(error);
      });
  });
}

// async
async function getFunction() {
  const options = {
    headers: {
      Authorization: 123,
      "Content-Type": "application/json",
    },
  };
  console.log("nivetha");
  const response = await axios.get(
    "http://localhost:3000/about?&firstName=bobby&lastName=Lashley12",
    options
  );
  console.log(response.data);
  return response;
}
///Compllet

// promise
const myPromise = new Promise((resolve, reject) => {
  const options = {
    headers: {
      Authorization: 123,
      "Content-Type": "application/json",
    },
  };

  axios
    .get(
      "http://localhost:3000/about?&firstName=bobby&lastName=Lashley12",
      options
    )
    .then((data) => {
      resolve(data);
    })
    .catch((error) => {
      resolve(error);
    });
});

myPromise
  .then((message) => {
    console.log(message.data.firstName);
  })
  .catch((message) => {
    console.log(message);
  });

console.log(myPromise);

// ----------

const fetch = require("node-fetch");

let todo = {
  token: 123,
  first_name: "John",
  last_name: "Wick",
};

fetch("https://jsonplaceholder.typicode.com/todos", {
  method: "POST",
  body: JSON.stringify(todo),
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((json) => console.log(json));

// -----------
const express = require("express");

const reqData = require("./views/test");

const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// body parse
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// display text
app.use(PrintData);
function PrintData(req, res, next) {
  res.send("testttt");
}

// post
app.post("/about", function (req, res) {
  respond = {
    FirstName1: req.query.first_name,
    LASTNAME2: req.query.last_name,
  };
  // reqData(respond);
  console.log(req.query.first_name);
  res.json({ respond });
});

// get
app.get("/about", (req, res) => {
  console.log(req.body);
  if (req.query.token === "123") {
    res.json({
      FirstName: req.query.first_name,
      LASTNAME: req.query.last_name,
    });
  } else {
    res.send("Token is invalid");
  }
});

app.listen(port, () => console.log("Example app listening 1"));

// ---- 27-10-21
// const name = require("./1-names");
// const sayHi = require("./2-util");

// sayHi("sussss");
// sayHi(name.john);

// ----
var http = require("http");
const express = require("express");
const app = express();
//console.log(name);
const port = 3000;

app.get("/about", (req, res) => {
  if (req.query.token === "123") {
    res.json({
      FirstName: req.query.first_name,
      LASTNAME: req.query.last_name,
    });
  } else {
    res.send("Token is invalid");
  }
});

app.post("/about", (req, res) => {
  response = {
    first_name: req.query.first_name,
    last_name: req.query.last_name,
  };
  console.log(response);
  res.end(JSON.stringify(response));
});

// condition
// var currentUrl = "about";
// if (currentUrl === "about") {
//   app.get("/about", (req, res) => res.send("Avout us page"));
//   console.log("in");
// } else {
//   app.get("/", (req, res) => res.send("Hello World"));
//   console.log("out");
// }

// rout
// app.get("/", (req, res) => res.send("Hello World"));
// app.get("/about", (req, res) => res.send("Hello World"));
// app.get("*", function (req, res) {
//   res.send("Page Not Found");
// });

app.listen(port, () => console.log("Example app listening "));

// http req
// http
//   .createServer((req, res) => {
//     var url = req.url;

//     if (url === "/about") {
//       res.write(" Welcome to about us page");
//       res.end();
//     } else if (url === "/contact") {
//       res.write(" Welcome to contact us page");
//       res.end();
//     } else {
//       res.write("Hello World!");
//       res.end();
//     }
//   })

//   .listen(port, function () {
//     console.log("server start at port 3000");
//   });
// ---
