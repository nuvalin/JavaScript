//function addTwoNumbers(x = 2, y = 3) {
//    console.log(x + y);
// }

// addTwoNumbers();
//  addTwoNumbers(6, 6);
//  addTwoNumbers(10);


//let resultsArr = [];
//for (let i = 0; i < 10; i++) {
//    let result = addTwoNumbers(i, 2 * i);
//   resultsArr.push(result);
//}
//console.log(resultsArr);

//let addTwoNumbers = (x, y) => x + y;


// let addTwoNumbers = (x, y) => {
//     console.log("Adding...");
//     return x + y;
//    }


// let result = addTwoNumbers(12, 15);
// console.log(result);

// function testAvailability(x) {
//  console.log("Available here:", x);
//}
//testAvailability("Hi!");

// console.log("Not available here:", x);

// function testAvailability() {
//     let y = "Local variable!";
//     console.log("Available here:", y);
//    }

//    testAvailability();
// console.log("Not available here:", y);

//testAvailability();
//console.log("Not available here:", y);


// function testAvailability() {
//     let y = "I'll return";
//     console.log("Available here:", y);
//     return y;
// }
// let z = testAvailability();
// console.log("Outside the function:", z);
// console.log("Not available here:", y);

// function doingStuff() {
//     if (true) {
//     var x = "local";
//     }
//     console.log(x);
//    }

//    doingStuff();

//    function doingStuff() {
//     if (true) {
//     let x = "local";
//     }
//     console.log(x);
//    }


//    doingStuff()

// function doingStuff() {
//     if (true) {
//         let x = "local";
//     }
//     console.log(x);
// }


// doingStuff()

// function doingStuff() { 
//     if (true) { 
//     console.log(x);
//     let x = "local"; 
//     } 
//    }
//    doingStuff();

// // function doingStuff() {
// if (true) {
//     console.log(x);
//     var x = "local";
// }
// // }
// // doingStuff();

// // function doingStuff() {
// //     if (true) {

// //         const X = "local";
//     }
//     console.log(X);
//    }
//    doingStuff()      

// let globalVar = "Accessible everywhere!";
// console.log("Outside function:", globalVar);
// function creatingNewScope(x) {
//     console.log("Access to global vars inside function.", globalVar);
// }
// creatingNewScope("some parameter");
// console.log("Still available:", globalVar);

// let x = "global";
// function doingStuff() {
//     let x = "local";
//     console.log(x);
// }
// doingStuff();
// console.log(x);

// let x = "global";
// function doingStuff(x) {
//     console.log(x);
// }
// doingStuff("param");

// function confuseReader() {
//     x = "Guess my scope...";
//     console.log("Inside the function:", x);
// }
// confuseReader();
// console.log("Outside of function:", x);

// (function () {
//     console.log("IIFE!");
//    })()

//    (()=>{
//     console.log("run right away");
//    })()
// let x = "1000";

// function() {
//     let x = '2000";
// console.log(x);
// }) ();


// let result (() => {
//     let x = "3000";
//     return x;
// })();

// let reult2 =

// console.log("x is " + x);
// console.log("result is" + result);
// console.log("result2 is" + result2)

// function getRecursive(nr) {
//     console.log(nr);
//     getRecursive(--nr);
// }
// getRecursive(3);

// function getRecursive(nr) {
//     console.log(nr);
//     if (nr > 0) {
//         getRecursive(--nr);
//     }
// }
// getRecursive(3);

// function logRecursive(nr) {
//     alert("Started function:", nr);
//     if (nr > 0) {
//         logRecursive(nr - 1);
//     } else {
//         alert("done with recursion");
//     }
//     alert("Ended function:", nr);
// }

// logRecursive(3);

// function doOuterFunctionStuff(nr) {
//     console.log("Outer function");
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         console.log(x + 7);
//         console.log("I can access outer variables:", nr);
//     }
// }
// doOuterFunctionStuff(2);

// function doOuterFunctionStuff(nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }
//     console.log("Not accessible:", z);
// }
// doOuterFunctionStuff(2);

// function (nr) {
//     doInnerFunctionStuff(nr);
//     function doInnerFunctionStuff(x) {
//         let z = 10;
//     }) (nr)
//     console.log(z);
// }) (2);


// function doingStuffAnonymously() {
//     console.log("Not so secret though.");
//    }

//    doFlexibleStuff(doingStuffAnonymously);


//    function doFlexibleStuff(executeStuff) {
//     executeStuff();
//     console.log("Inside doFlexibleStuffFunction.");
//    }

//    let anotherFunctionVariable = function() {
//     console.log("Another anonymous function implementation.");
//    }


//    let youGotThis = function () {
//     console.log("You're doing really well, keep coding!");
//    };
//    setTimeout(youGotThis, 1000);

//    setInterval(youGotThis, 1000);


// let val = 10;
// function tester(val) {
//     val += 10;
//     if (val < 100) {
//         return tester(val);
//     }
//     return val;
// }
// tester(val);
//
//  let testFunction = function () {
//      console.log("Hello");
//  }();
// (function () {
// console.log("Welcome");
//  }) ();
// (function () {
//     let firstName = "Laurence";
// })();
// let result = (function () {
//     let firstName = "Laurence";
//     return firstName;
// })();
// console.log(result);
// (function (firstName) {
//     console.log("My Name is " + firstName);
// })("Laurence");

//  let test2 = (num) => num + 5;
//  console.log(test2(14));

//  var addFive1 = function addFive1(num) {
//     return num + 2;
//     };
//     let addFive2 = (num) => num + 2;
//     console.log(addFive1(14));

//exercise 6.1

// function adder(a, b) {
//     return a + b;
// }
// const val1 = 50;
// const val2 = 20;
// console.log(adder(val1, val2));
// console.log(adder(40, 30));


// exercise 6.2


// const adj = ["super", "wonderful", "bad", "angry", "careful"];

// function myFun() {
//     const question = prompt("What is your name?");
//     const nameAdj = Math.floor(Math.random() * adj.length);
//     console.log(adj[nameAdj] + " " + question);
// }
// myFun();


//exercise 6.3

// const val1 = -20;
// const val2 = -8;
// let operat = "+";
// function cal(a, b, op) {
//     if (op == "-") {
//         console.log(a - b);
//     } else {
//         console.log(a + b);
//     }
// }
// cal(val1, val2, operat);

//exercise 6.4

// const myArr = [];
// for (let x = 0; x < 10; x++) {
//     let val1 = 5 * x;
//     let val2 = x * x;
//     let res = cal(val1, val2, "+");
//     myArr.push(res);
// }
// console.log(myArr);
// function cal(a, b, op) {
//     if (op == "-") {
//         return a - b;
//     } else {
//         return a + b;
//     }
// }

//exercise 6.5


// let val = "1000";
// (function () {
//     let val = "100"; 
//     console.log(val);
// })();
// let result = (function () {
//     let val = "Nuvalin";
//     return val;
// })();
// console.log(result);
// console.log(val);
// (function (val) {
//     console.log(`My name is ${val}`);
// })("Nuvalin");


// // exercise 6.6
// function calcFactorial(nr) { 
//  console.log(nr);
//  if (nr === 0) { 
//  return 1; 
//  } 
//  else { 
//  return nr * calcFactorial(--nr); 
//  } 
// } 
// console.log(calcFactorial(4));



// //exercise 6.7


// let start = 10;

// function loop1(val) {

//     console.log(val);
//     if (val < 1) {
//         return;
//     }
//     return loop1(val - 1);
// }
// loop1(start);

// function loop2(val) {

//     console.log(val);
//     if (val > 0) {
//         val--;
//         return loop2(val);
//     }
//     return;
// }
// loop2(start);



// exercise 6.8

// const test = function (val) {
//     console.log(val);
// }
// test('Nuvalin');
// function test1(val) {
//     console.log(val);
// }
// test1("Nuvalin");


