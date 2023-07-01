// function Dog(dogName, weight, color, breed) { 
//     this.dogName = dogName; 
//     this.weight = weight; 
//     this.color = color; 
//     this.breed = breed; 
//    } 
//    let dog1 = new Dog("Jacky", 30, "brown", "labrador");
//    let dog2 = new Dog("Jacky", 30, "black", "pekingese");

//    console.log(dog2);
//    console.log(dog1);

//    class Dog {
//     constructor(dogName, weight, color, breed) {
//     this.dogName = dogName;
//     this.weight = weight;
//     this.color = color;
//     this.breed = breed;
//     }
//    }
//    let dog1 = new Dog("JavaScript", 2.4, "brown", "chihuahua");
//    let dog2 = new Dog("python", 2.4, "brown", "chihuahua");

//    class Person {
//     constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//     }
//    }

//    let p = new Person("Maaike", "van Putten");
//  console.log(p);
//  console.log("Hi", p.firstname);


// class Person {
// #firstname;
//  #lastname; 
//  constructor(firstname, lastname = "Doe") {
//         this.#firstname = firstname;
//         this.#lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there! I'm", this.firstname);
//     }
//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name;
//     }
//     get firstname() {
//         return this.#firstname;
//         }
//         set firstname(firstname) {
//         if (firstname.length > 1){
//         this.#firstname = firstname;
//         }
//     }
//         get lastname() {

//         return this.#lastname;
//         }
//         set lastname(lastname) {
//         this.#lastname = lastname;
//         }
// }
// let p = new Person("Maaike");

// console.log("Hi", p.firstname, p.lastname);

// let p2 = new Person("Mel", "lee");
// console.log("hi", p2.firstname, p2.lastname);
// p.greet()
// p2.greet()
// console.log(p.compliment("Sarah", "hairstyle"));

// console.log(p.firstname);
// p.firstname = "po";
// console.log(p,firstname);

// class Vehicle {
//     color;
//     currentSpeed;
//     maxspeed;
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;

//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("moving at", this.currentSpeed);
//     }
//     accelerate(amount) {
//         this.currentSpeed += amount;
//     }
// }
// class Motorcycle extends Vehicle {
//     fuel;
//     constructor(color, currentSpeed, maxSpeed, fuel) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuel = fuel;
//     }
//     doWheelie() {
//         console.log("Driving on one wheel!");
//     }
// }
// let motor = new Motorcycle("Black", 0, 250, "gasoline");
// console.log(motor.color);
// motor.accelerate(50);
// console.log(motor.currentSpeed);
// motor.move();
// motor.doWheelie();

// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     greet() {
//         console.log("Hi there!");
//     }
// }
// Person.prototype.introduce = function () {
//     console.log("Hi, I'm", this.firstname);
// };
// Person.prototype.favoriteColor = "green";
// let p = new Person("Maria", "Saga");
// console.log(p.favoriteColor);
// p.introduce();



// exercise 7.1


// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
// }
// let person1 = new Person("Nuvalin", "Moodley");

// let person2 = new Person("Frank", "Dayton");

// console.log("hello " + person1.firstname);

// console.log("hello " + person2.firstname);


//exercise 7.2


// class Person {
//     constructor(firstname, lastname) {
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname() {
//         return this.firstname + " " + this.lastname;
//     }
// }
// let person1 = new Person("Nuvalin", "Moodley");
// let person2 = new Person("Mike", "James");

// console.log(person1.fullname());

// console.log(person2.fullname())


//exercise 7.3


// class Animal {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return this.species + " is eating";
// }
// let cat = new Animal("cat", "meow");
// let dog = new Animal("dog", "bark");
// let lion = new Animal("lion","Raw");
// let owl = new Animal("owl","who");

// cat.speak();

// console.log(lion.eat());

// console.log(owl);


