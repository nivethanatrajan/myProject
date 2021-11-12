// int function(int n){
//     if(n==1)
//     return 1;
//     return n+ function(n-1);
// }
// int ans=func(5)

/*function getUserContacts() {
  console.log("return function");
}
*/
/*
try {
  console.log("step1");
} catch (e) {
  console.log("step2");
} finally {
  console.log("step3");
}
getUserContacts();
*/
/*
var user = new Promise((resolver, reject) => {
  console.log("getting info");
  resolver("return resolver");
})
  .then((data) => {
    getUserContacts();
  })
  .catch((e) => {
    console.log(e);
  });
*/

function sumRange(num) {
  console.log(num);
  if (num === 1) {
    return 1;
  }

  //return num + sumRange(num - 1);
  sumRange(num - 1);
}
sumRange(4);
//console.log(sumRange(4));
