// Project 4


// let val = prompt("What number?");

// val = Number(val);

// let num = 100;

// let message = "nothing";

// if (val > num) {
//     message = val + " was greater than " + num;

// } else if (val === num) {
//     message = val + " was equal to " + num;

// } else {
//     message = val + " is less than " + num;
// }
// console.log(message);
// console.log(message);

// project2

// let person = prompt("Enter a name");

// let message;

// switch (person) {
//     case "John":
//     case "Larry":
//     case "Jane":
//     case "Nuvalin":
//         message = person + " is my friend";
//         break;
//     default:
//         message = "I don't know " + person;
// }
// console.log(message)

// project3

const myArr = ["Rock", "Paper", "Scissors"];

let computer = Math.floor(Math.random() * 3);

let player = Math.floor(Math.random() * 3);

let message = "player " + myArr[player] + " vs computer " +
    myArr[computer] + " ";

if (player === computer) {
    message += "it's a tie";

} else if (player > computer) {
    if (computer == 0 && player == 2) {

        message += "Computer Wins";
    } else {
        message += "Player Wins";
    }
} else {
    if (computer == 2 && player == 0) {
        message += "Player Wins";

    } else {
        message += "Computer Wins";
    }
}
console.log(message);