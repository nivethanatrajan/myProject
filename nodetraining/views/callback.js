function myDisplayer(some) {
  console.log("test", some);
  myCalculator(6, 5, myDisplayer);

  //document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  console.log("test2");
  if (num1 == 5) {
    let sum = num1 + num2;
    myCallback(sum);
  }
}

myCalculator(5, 5, myDisplayer);
