//project 3

const theList = ['Laurence',, true, 35, null, undefined, 
{test: 'one', score: 55}, ['one', 'two']];

//The pop() method removes the last element from an array and returns that element. This method changes the length of the array.
theList.pop();

//The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
theList.shift( "Svekis");


//The unshift() method adds the specified elements to the beginning of an array and returns the new length of the array
theList.unshift("FIRST");

theList[3] = "hello World"; 
theList[2] = "MIDDLE";

//The push() method adds the specified elements to the end of an array and returns the new length of the array.
theList.push("LAST");

console.log(theList);



const inventory = [];
const item3 = {
    name: "TV",
    model: "ECCO",
    cost: 1300,
    qty: 5
}
const item2 = {
    name: "Washing machine",
    model: "LG ULTRA WASH",
    cost: 20000,
    qty: 12
}
const item1 = {
    name: "Labtop",
    model: "HP Z BOOK",
    cost: 8000,
    qty: 3
}
inventory.push(item1, item2, item3);
console.log(inventory);
console.log(inventory[2].qty);
