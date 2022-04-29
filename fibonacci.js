function fibonacci(num) {
  if (num < 2) return num;

  let fibo = [0, 1];

  for (let i = 0; i < num - 1; i++){
    let sum = fibo[0] + fibo[1];
    fibo = [fibo[1], sum]
  }
  return fibo[1]
}



if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));

  console.log("Expecting: 21");
  console.log("=>", fibonacci(8));

  console.log("Expecting: 233");
  console.log("=>", fibonacci(13));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
