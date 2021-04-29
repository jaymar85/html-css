// function isLandscape(width, height) {
//     return (width > height);
// }

// let picture = isLandscape(3, 2);
// console.log(picture);

function fizzBuzz(input) {
    if (typeof input !== 'number') {
        return NaN;
    }

    if (input % 3 === 0 && input % 5 === 0) {
        return 'FizzBuzz';
    } 

    if (input % 3 === 0) {
        return 'Fizz';
    } 

    if (input % 5 === 0 ) {
        return 'Buzz';
    }

    return input;
}

const output = fizzBuzz(true);
console.log(output);