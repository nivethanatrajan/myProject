const axios = require("axios");

const data = {
  firstName: "nivetha",
  lastName: "Lash",
};

const options = {
  headers: {
    Authorization: 123,
    "Content-Type": "application/json",
  },
};

axios
  .post(`http://127.0.0.1:3000/about`, data, options)
  .then((res) => {
    console.log("Token Success11111");
  })
  .catch((err) => {
    console.log("ERROR: ====", err);
  });
