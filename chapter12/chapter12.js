// let text = "I love JavaScript!";
// console.log(text.match(/javascript/));

// console.log(text.match(/javascript/i));

// let text = "I love JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));

// let text = "I love React and JavaScript!";
// console.log(text.match(/javascript|nodejs|react/i));

// let text = "I love React and JavaScript!";

// console.log(text.match(/javascript|nodejs|react/gi));

// let text = "d";
// console.log(text.match(/[abc]/));

// console.log(text.match(/[abcd]/));

// let text = "äé!";
// console.log(text.match(/[a-zA-Z0-9]/));

// let text = "Just some text.";
// console.log(text.match(/./g));


// let text = "Just some text.";
// console.log(text.match(/\./g));

// let text = "I'm 29 years old.";
// console.log(text.match(/\d/g));

// let text = "Coding is a lot of fun!";
// console.log(text.match(/\s/g));

// let text = "In the end or at the beginning?";
// console.log(text.match(/\bin/gi));

// let nr = 357;
// console.log(nr.match(/3/g));

// let text = "I love JavaScript!";
// console.log(text.match(/(love|dislike)\s(javascript|spiders)/gi));

// let text = "I love JavaScript!";
// console.log(text.match(/[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-
// 9]/g));

// let text = "You are doing great!";
// console.log(text.match(/n?g/gi));

// let text = "123123123";
// console.log(text.match(/(123)+/));

// let text = "I love JavaScript!";
// console.log(text.match(/(?<language>javascript)/i));

// let text = "That's not the case.";
// console.log(text.search(/Case/i));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace("Coding", "JavaScript"));

// let text = "Coding is fun. Coding opens up a lot of opportunities.";
// console.log(text.replace(/Coding/g, "JavaScript"));


// let emailPattern = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-
// ]+) /g;

// let validEmail = "maaike_1234@email.com";
// let invalidEmail = "maaike@mail@.com";

// console.log(validEmail.match(emailPattern));

// console.log(invalidEmail.match(emailPattern));

// function test(a, b, c) {
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");

// function test(a, b, c) {
//     a = "nice";
//     arguments[1] = "JavaScript";
//     console.log("first:", a, arguments[0]);
//     console.log("second:", b, arguments[1]);
//     console.log("third:", c, arguments[2]);
//    }
//    test("fun", "js", "secrets");

// var x;
// x = 5;
// console.log(x);

// x = 5;
// console.log(x);
// var x;

// "use strict";

// function sayHi() {
//     greeting = "Hello!";
//     console.log(greeting);
//    }
//    sayHi();

//    "use strict";

// function sayHi() {

// greeting = "Hello!";
// console.log(greeting);
// }
// sayHi();

// let val = 5;
// val += adder();
// val += adder();
// val += adder();
// console.log(val);
// function adder(){
//  let counter = val;
//  for(let i=0;i<val;i++){
//  counter++;
//  }
// return counter ;
// }

// try {
//     somethingVeryDangerous();
//    } catch (e) {
//     if (e instanceof TypeError) {
//     // deal with TypeError exceptions
//     } else if (e instanceof RangeError) {
//     // deal with RangeError exceptions
//     } else if (e instanceof EvalError) {
//     // deal with EvalError exceptions
//     } else {
//     //deal with all other exceptions
//     throw e; //rethrow
//     }
//    }

// function somethingVeryDangerous() {
//     throw RangeError();
//    }

// let cookie = decodeURIComponent(document.cookie);
// let cookieList = cookie.split(";");
// for (let i = 0; i < cookieList.length; i++) {
//  let c = cookieList[i];
//  if (c.charAt(0) == " ") {
//  c = c.trim();
//  }
//  if (c.startsWith("name")) {
//  alert(c.substring(5, c.length)); 
//  }
// }

// let str = "{\"name\": \"Maaike\", \"age\": 30}";
// let obj = JSON.parse(str);

// console.log(obj.name, "is", obj.age);
// let dog = {
//     "name": "wiesje",
//     "breed": "dachshund"
// };

// let strdog = JSON.stringify(dog);
// console.log(typeof strdog);
// console.log(strdog);







// exercise 12.3


// function showNames() {
//  let lastOne = "";
//  for (let i = 0; i < arguments.length; i++) {
//  lastOne = arguments[i];
//  }
//  return lastOne;
// }
// console.log(showNames("JavaScript", "Laurence", "Mike", "Larry","nuvalin" ));



// <!-- exercise 12.5


// function test(val) {
//     try {
//         if (isNaN(val)) {
//             throw "Not a number";
//         } else {
//             console.log("Got number");
//         }
//     } catch (e) {
//         console.error(e);
//     } finally {
//         console.log("Done " + val);
//     }
// }
// test("a");
// test(100);

// <!--
//    exercise 12.8


// let myList = [{
//  "name": "Learn JavaScript",
//  "status": true
//  },
//  {
//  "name": "Try JSON",
//  "status": false
//  }
// ];
// reloader();
// function reloader() {
//  myList.forEach((el) => {
//  console.log(`${el.name} = ${el.status}`);
//  });
// } -->



//  Exercise 12.9

// let myList = [{
//     "name": "Learn JavaScript",
//     "status": true
// },
// {
//     "name": "Try JSON",
//     "status": false
// }
// ];
// const newStr = JSON.stringify(myList);
// const newObj = JSON.parse(newStr);
// newObj.forEach((el) => {
//     console.log(el);
// });

