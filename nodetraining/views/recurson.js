const axios = require("axios");

async function asyncFunc(num) {
  if (num === 1) {
    return 1;
  }
  //await getThenFunc();
  getThenFunc((value) => {
    console.log(value);
    console.log(num);
    asyncFunc(num - 1);
  });
}

asyncFunc(4);
async function getThenFunc(cb) {
  const options = {
    headers: {
      Authorization: 123,
      "Content-Type": "application/json",
    },
  };

  await axios
    .get(
      "http://localhost:3000/about?&firstName=bobby&lastName=Lashley12",
      options
    )
    .then((configResponse) => {
      console.log(configResponse.data);
      cb(configResponse.data);
    });
}

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
