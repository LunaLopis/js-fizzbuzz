"use strict";

// for (var i = 1; i <= 100; i++) {
//     var message = '';
//     if (i%3 === 0) message += 'Fizz';
//     if (i%5 === 0) message += 'Buzz';
//     console.log(message || i);
//   }
    
for (let i = 1; i <= 100; i++) {
  
  if (i % 3 === 0 && i % 5 === 0) {
    output.innerHTML += ('FizzBuzz');
  }
  else if (i % 3 === 0) {
    output.innerHTML += ('Fizz');
  }
  else if (i % 5 === 0) {
    output.innerHTML += ('Buzz');
  }
  else {
    console.log += (i);
  }

}