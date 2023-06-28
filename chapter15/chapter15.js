// let xhttp = new XMLHttpRequest();
// let Url = "some valid url";
// xhttp.load = function () {
//     if (this.status == 200 && this.readyState == 4) {
//         document.getElementById("content").innerHTML = this.responseText;
//     }
// };
// xhttp.open("GET", url, true);
// xhttp.send();


// let Url = "some valid url";
// fetch(url)
//  .then(response => response.json())
//  .then(data => console.log(data));

// const http = require("http");
// http.createServer(function (req, res) {
//     res.writeHead(200, { "Content-Type": "text/html" }); //header status
//     let name = "Rob";
//     res.write(`Finally, hello ${name}`); //body
//     res.end();
// }).listen(8080); //listen to port 8080
// console.log("Listening on port 8080... ");

// const express = require('express');
// const app = express();
// app.get('/', (request, response) => {
//     response.send('Hello Express!');
// });
// app.listen(3000, () => {
//     console.log('Express app at http://localhost:3000');
// });


//exercise 15.1

// let url = "list.json";
// fetch(url).then(response => response.json())
//     .then((data) => {
//         data.forEach((el) => {
//             console.log(`${el.name} = ${el.status}`);
//     });
// });  


//project 15

let url = "people.json";
fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(person => {
            console.log(`${person.first} ${person.last} - ${person.topic}`);
        });
    });