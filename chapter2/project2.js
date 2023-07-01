//Project chapter 2

let myDistanceMiles = 130; //kilometers. 

let myDistanceKM = myDistanceMiles * 1.60934;  // 1 mile equals in kilometers.

console.log("The distance of " + myDistanceMiles + " miles is equal to " + myDistanceKM + " kilometers");


//1 inch = 2.54 centimetres.
//2.2046 pounds in a kilo

let inches = 80;
let pounds = 100;
let weight = pounds / 2.2046; // in kilos
let height = inches * 2.54; // height in centimetres

console.log(weight, height);

let bmi = weight/(height/100*height/100);
console.log(bmi);
