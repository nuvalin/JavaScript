// let s = "Hello";
// console.log(
//     s.concat(" there!")
//         .toUpperCase()
//         .replace("THERE", "you")
//         .concat(" You're amazing!")
// )

// let x = 7;
// console.log(Number.isNaN(x));

// console.log(isNaN(x));

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURI(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURI(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let uri = "https://www.example.com/submit?name=maaike van putten";
// let encoded_uri = encodeURIComponent(uri);
// console.log("Encoded:", encoded_uri);
// let decoded_uri = decodeURIComponent(encoded_uri);
// console.log("Decoded:", decoded_uri);

// let str_float = "7.6";
// let int_float = parseInt(str_float);
// console.log("Type of", int_float, "is", typeof int_float);

// let str_binary = "0b101";
// let float_binary = parseFloat(str_binary);
// console.log("Type of", float_binary, "is", typeof float_binary);

// let str_nan = "hello!";
// let float_nan = parseFloat(str_nan);
// console.log("Type of", float_nan, "is", typeof float_nan);

// let arr = ["grapefruit", 4, "hello", 5.6, true];
// function printStuff(element, index) {
//  console.log("Printing stuff:", element, "on array position:", index);
// }
// arr.forEach(printStuff);


// let arr = ["squirrel", 5, "Tjed", new Date(), true];
// function checkString(element, index) {
//     return typeof element === "string";
// }
// let filterArr = arr.filter(checkString);
// console.log(filterArr);

// console.log(arr.every(checkString));
// console.log(filterArr.every(checkString));

// arr = ["grapefruit", 4, "hello", 5.6, true];
// arr.copyWithin(0, 3, 5);

// console.log(arr);

// let arr = [1, 2, 3, 4];
// let mapped_arr = arr.map(x => x + 1);
// console.log(mapped_arr)


// let s1 = "Hello ";
// let s2 = "JavaScript";
// let result = s1.concat(s2);
// console.log(result);

// let result = "Hello, JavaScript,Phyhon";
// let arr_result = result.split(" ");
// console.log(arr_result);

// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos);


// let notFound = searchStr.search("JavaScript");
// console.log(notFound);

// let s3 = "hello hello";
// let new_s3 = s3.replace("hello", "oh");
// console.log(new_s3)

// let s3 = "hello hello";
// let new_s3 = s3.replaceAll("hello", "oh");
// console.log(new_s3)

// let caps = "HI HOW ARE YOU?";

// let x = 34;
// console.log(isNaN(x));
// console.log(!isNaN(x));
// let str = "hi";
// console.log(isNaN(str));

// let str1 = "5";
// console.log(isNaN(str1));

// let x = 3;
// let str = "finite";
// console.log(isFinite(x));
// console.log(isFinite(str));
// console.log(isFinite(Infinity));
// console.log(isFinite(10 / 0));

// let x = 1.23456;
// let newX = x.toFixed(2);

// let x = 1.23456;
// let newX = x.toFixed(3); 
// console.log(x, newX);

// let x = 1.23456;
// let newX = x.toPrecision(2);

// let x = 1.23456;
// let newX = x.toPrecision(4);
// console.log(newX);

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let highest = Math.max(2, 56, 12, 1, 233, 4);
// console.log(highest);

// let highestOfWords = Math.max("hi", 3, "bye");
// console.log(highestOfWords);

// let result = Math.sqrt(64);
// console.log(result);

// let result2 = Math.pow(5, 3);
// console.log(result2);


// let x = 6.78;

// let y = 5.34;

// console.log("X:", x, "becomes", Math.round(x));
// console.log("Y:", y, "becomes", Math.round(y));

// console.log("X:", x, "becomes", Math.ceil(x));
// console.log("Y:", y, "becomes", Math.ceil(y));

// let negativeX = -x;

// let negativeY = -y;

// console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
// console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// console.log("X:", x, "becomes", Math.floor(x));

// console.log("Y:", y, "becomes", Math.floor(y));

// console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));

// console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// console.log("X:", x, "becomes", Math.trunc(x));

// console.log("Y:", y, "becomes", Math.trunc(y));




//exercise 8.1


// const secretMes1 = "How's%20it%20going%3F";

// const secretMes2 = "How's it going?";

// const decodedComp = decodeURIComponent(secretMes1);
// console.log(decodedComp);

// const encodedComp = encodeURIComponent(secretMes2);
// console.log(encodedComp);

// const uri = "http://www.basescripts.com?=Hello World";

// const encoded = encodeURI(uri);
// console.log(encoded);


//exercise 8.2

// const arr = ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence",

//     "Mike", "Laurence", "Mike", "Laurence", "Mike"];

// const arr2 = arr.filter((value, index, array) => {

//     console.log(value, index, array.indexOf(value));
//     return array.indexOf(value) === index;

// });
// console.log(arr2);


// exercise 8.3

// const myArr = [1, 4, 5, 6];

// const myArr1 = myArr.map(function (ele) {
//     return ele * 2;
// });
// console.log(myArr1);

// const myArr2 = myArr.map((ele) => ele * 2);

// console.log(myArr2);


// exercise 8.4


// const val = "thIs will be capiTalized for each word";

// function wordsCaps(str) {
//     str = str.toLowerCase();

//     const tempArr = [];
//     let words = str.split(" ");
//     words.forEach(word => {

//         let temp = word.slice(0, 1).toUpperCase() + word.slice(1);
//         tempArr.push(temp);
//     });
//     return tempArr.join(" ");
// }
// console.log(wordsCaps(val));


//exercise 8.5

// let val = "I love JavaScript";
// val = val.toLowerCase();

// let vowels = ["a", "e", "i", "o", "u"];
// vowels.forEach((letter, index) => {

//     console.log(letter);

//     val = val.replaceAll(letter, index);
// });
// console.log(val);


//exercise 8.6

// console.log(Math.ceil(5.7));
// console.log(Math.floor(5.7));
// console.log(Math.round(5.7));
// console.log(Math.random());

// console.log(Math.floor(Math.random() * 11)); // 0-10
// console.log(Math.floor(Math.random() * 10) + 1); // 1-10;
// console.log(Math.floor(Math.random() * 100) + 1); // 1-100;
// function ranNum(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// for (let x = 0; x < 100; x++) {
//     console.log(ranNum(1, 100));
// }


// exercise 8.7


// let future = new Date(2025, 5, 15);

// console.log(future);

// const months = ["January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"];

// let day = future.getDate();
// let month = future.getMonth();
// let year = future.getFullYear();
// let myDate = `${months[month - 1]} ${day} ${year}`;
// console.log(myDate);




//exercise 9.2

console.log(window.location.protocol);
console.log(window.location.href);



