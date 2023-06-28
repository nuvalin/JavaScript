// arr1 = new Array("purple", "green", "yellow");

// arr2 = ["black", "orange", "pink"];

// arr3 = new Array(10);
// arr4 = [10];

// console.log(arr1);
// console.log(arr2);
// console.log(arr3);
// console.log(arr4);


// let arr = ["hi there", 5, true];

// console.log(typeof arr[0]);

// console.log(typeof arr[1]);

// console.log(typeof arr[2]);

//exercise 3.1

//   arr1 = ["milk","bread","Apples"];

//   console.log(arr1.length);

//   arr1[1] = "bananas";

//   console.log(arr1);

//exercise 3.2

//  const myList = [];
//  myList.push("Milk", "Bread", "Apples");
//  myList.splice(1, 1, "Bananas", "Eggs");

//  const removeLast = myList.pop();

//  console.log(removeLast);

//  myList.sort();

//  console.log(myList.indexOf("Milk"));

//  myList.splice(1, 0, "Carrots", "Lettuce");
//  const myList2 = ["Juice", "Pop"];
//  const finalList = myList.concat(myList2, myList2);

//  console.log(finalList.lastIndexOf("Pop"));
//  console.log(finalList);

//exercise 3.3

//  const myArr = [1, 2, 3];
//  const bigArr = [myArr, myArr, myArr];

//  console.log(bigArr[1][1]);

//  console.log(bigArr[0][1]); 

//  console.log(bigArr[2][1]);

// exercise 3.4

//  const myCar = {
//     make: "BMW",
//      model: "325is",
//      tires: 4,
//      doors: 4,
//      color: "blue",
//      forSale: false
//  };
//  let propColor = "color";

//  myCar[propColor] = "black";

//  propColor = "forSale";

//  myCar[propColor] = true;

//  console.log(myCar.make + " " + myCar.model);
//  console.log(myCar.forSale);

// //exercise 3.5

// const people = {friends:[]};

// const friend1 = {first: "Laurence", last: "Svekis", id: 1};

// const friend2 = {first: "Jane", last: "Doe", id: 2};

// const friend3 = {first: "John", last: "Doe", id: 3};

// people.friends.push(friend1, friend2, friend3);
// console.log(people);


//project 3

// const theList = ['Laurence',, true, 35, null, undefined, 
// {test: 'one', score: 55}, ['one', 'two']];

// //The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
// theList.pop();

// //The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
// theList.shift( "Svekis");


// //The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array
// theList.unshift("FIRST");

// theList[3] = "hello World"; 
// theList[2] = "MIDDLE";

// //The push() method adds the specified elements to the end of an array and returns the new length of the array.
// theList.push("LAST");

// console.log(theList);



// const inventory = [];
// const item3 = {
//     name: "TV",
//     model: "ECCO",
//     cost: 1300,
//     qty: 5
// }
// const item2 = {
//     name: "Washing machine",
//     model: "LG ULTRA WASH",
//     cost: 20000,
//     qty: 12
// }
// const item1 = {
//     name: "Labtop",
//     model: "HP Z BOOK",
//     cost: 8000,
//     qty: 3
// }
// inventory.push(item1, item2, item3);
// console.log(inventory);
// console.log(inventory[2].qty);


