/*
    Divisible by 3 or 5 or 3 & 5
*/

function fizzBuzzFunction(number) {
    for (i = 1; i <= number; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log(`${i} is FizzBuzz`);
        }
        else if (i % 3 === 0) {
            console.log(`${i} is Fizz`);
        }
        else if (i % 5 === 0) {
            console.log(`${i} is Buzz`);;
        }
        else {
            console.log(`${i} is not FizzBuzz`);;
        }
    }
}

fizzBuzzFunction(100);
