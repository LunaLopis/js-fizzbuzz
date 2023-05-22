"use strict";
// let output = "";
// for (var i = 1; i <= 100; i++) {
//     var message = "";
//     if (i%3 === 0) message += "Fizz'";
//     if (i%5 === 0) message += "'Buzz'";
//     console.log(message || i);
//   }

const output = document.getElementById('output');

for (let i = 1; i <= 100; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    output.innerHTML += `<div>'FizzBuzz'</div>`;
  }
  else if (i % 3 === 0) {
    output.innerHTML += `<div>'Fizz'</div>`;
  }
  else if (i % 5 === 0) {
    output.innerHTML += `<div>'Buzz'</div>`;
  }
  else {
    output.innerHTML += `<div>${i}</div>`;
  }

}
