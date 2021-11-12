const mongoose = require("mongoose");

function makeNewConnection(uri) {
  const db = mongoose.createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("db connected..!");
  return db;
}

const userConnection = makeNewConnection("mongodb://localhost/user");
const todoConnection = makeNewConnection("mongodb://localhost/todo");

module.exports = {
  userConnection,
  todoConnection,
};
